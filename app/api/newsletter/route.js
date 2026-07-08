import { NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address.")
});

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.parse(body);

    return NextResponse.json({
      message: "Thanks for subscribing! We will keep you updated."
    });
  } catch (error) {
    if (error?.issues) {
      return NextResponse.json({ message: error.issues[0].message }, { status: 400 });
    }

    return NextResponse.json({ message: "Unable to subscribe." }, { status: 500 });
  }
}
