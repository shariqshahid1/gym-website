import { NextResponse } from "next/server";
import { hashPassword, setAuthCookie, signToken } from "@/lib/auth";
import { signupSchema } from "@/lib/validators";
import { createUser, findUserByEmail } from "@/lib/store";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = signupSchema.parse(body);

    let user = findUserByEmail(parsed.email);

    if (user) {
      const token = signToken({ userId: user._id, email: user.email, role: user.role });
      await setAuthCookie(token);
      return NextResponse.json({
        message: "Demo account already exists. Logged in successfully.",
        user: { id: user._id, name: user.name, email: user.email }
      });
    }

    const hashedPassword = await hashPassword(parsed.password);
    user = createUser({ name: parsed.name, email: parsed.email, password: hashedPassword });

    const token = signToken({ userId: user._id, email: user.email, role: user.role });
    await setAuthCookie(token);

    return NextResponse.json({
      message: "Demo account created and logged in.",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    if (error?.issues) {
      return NextResponse.json({ message: error.issues[0].message }, { status: 400 });
    }
    return NextResponse.json({ message: "Unable to create demo account." }, { status: 500 });
  }
}
