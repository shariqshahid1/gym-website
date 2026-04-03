import { NextResponse } from "next/server";
import { getUserFromCookie } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    const sessionUser = await getUserFromCookie();

    if (!sessionUser?.userId) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    await connectToDatabase();
    const user = await User.findById(sessionUser.userId).select("-password").lean();

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ message: "Unable to fetch profile." }, { status: 500 });
  }
}
