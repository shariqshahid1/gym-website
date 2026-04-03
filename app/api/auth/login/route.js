import { NextResponse } from "next/server";
import { comparePassword, setAuthCookie, signToken } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { loginSchema } from "@/lib/validators";
import User from "@/models/User";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.parse(body);

    await connectToDatabase();
    const user = await User.findOne({ email: parsed.email });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
    }

    const isValid = await comparePassword(parsed.password, user.password);
    if (!isValid) {
      return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
    }

    const token = signToken({ userId: user._id.toString(), email: user.email, role: user.role });
    await setAuthCookie(token);

    return NextResponse.json({
      message: "Login successful.",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    if (error?.issues) {
      return NextResponse.json({ message: error.issues[0].message }, { status: 400 });
    }

    return NextResponse.json({ message: "Unable to login." }, { status: 500 });
  }
}
