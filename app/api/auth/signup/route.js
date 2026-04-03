import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { hashPassword, setAuthCookie, signToken } from "@/lib/auth";
import { signupSchema } from "@/lib/validators";
import User from "@/models/User";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = signupSchema.parse(body);

    await connectToDatabase();

    const existingUser = await User.findOne({ email: parsed.email });
    if (existingUser) {
      return NextResponse.json({ message: "An account with this email already exists." }, { status: 409 });
    }

    const user = await User.create({
      ...parsed,
      password: await hashPassword(parsed.password)
    });

    const token = signToken({ userId: user._id.toString(), email: user.email, role: user.role });
    await setAuthCookie(token);

    return NextResponse.json({
      message: "Account created successfully.",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    if (error?.issues) {
      return NextResponse.json({ message: error.issues[0].message }, { status: 400 });
    }

    return NextResponse.json({ message: "Unable to create account." }, { status: 500 });
  }
}
