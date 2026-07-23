import { NextResponse } from "next/server";
import { getUserFromCookie } from "@/lib/auth";
import { membershipSchema } from "@/lib/validators";
import { findUserById, updateUserById } from "@/lib/store";

export async function POST(request) {
  try {
    const sessionUser = await getUserFromCookie();
    if (!sessionUser?.userId) {
      return NextResponse.json({ message: "Please login to subscribe." }, { status: 401 });
    }

    const body = await request.json();
    const parsed = membershipSchema.parse(body);

    const user = findUserById(sessionUser.userId);
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    updateUserById(sessionUser.userId, {
      membership: {
        plan: parsed.plan,
        billingCycle: parsed.billingCycle,
        status: "active",
        subscribedAt: new Date().toISOString()
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
