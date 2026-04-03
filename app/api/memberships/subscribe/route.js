import { NextResponse } from "next/server";
import { getUserFromCookie } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { membershipSchema } from "@/lib/validators";
import User from "@/models/User";

export async function POST(request) {
  try {
    const sessionUser = await getUserFromCookie();
    if (!sessionUser?.userId) {
      return NextResponse.json({ message: "Please login to subscribe." }, { status: 401 });
    }

    const body = await request.json();
    const parsed = membershipSchema.parse(body);

    await connectToDatabase();
    await User.findByIdAndUpdate(sessionUser.userId, {
      membership: {
        ...parsed,
        status: "active",
        subscribedAt: new Date()
      }
    });

    return NextResponse.json({ message: `${parsed.plan} membership activated successfully.` });
  } catch (error) {
    if (error?.issues) {
      return NextResponse.json({ message: error.issues[0].message }, { status: 400 });
    }

    return NextResponse.json({ message: "Unable to activate membership." }, { status: 500 });
  }
}
