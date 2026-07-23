import { NextResponse } from "next/server";
import { getUserFromCookie } from "@/lib/auth";
import { findUserById } from "@/lib/store";

export async function GET() {
  try {
    const sessionUser = await getUserFromCookie();

    if (!sessionUser?.userId) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    const user = findUserById(sessionUser.userId);
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    const { password, ...safeUser } = user;
    return NextResponse.json({ user: safeUser });
  } catch {
    return NextResponse.json({ message: "Unable to fetch profile." }, { status: 500 });
  }
}
