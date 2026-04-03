import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { contactSchema } from "@/lib/validators";
import ContactMessage from "@/models/ContactMessage";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.parse(body);

    await connectToDatabase();
    await ContactMessage.create(parsed);

    return NextResponse.json({ message: "Message received. Our team will reach out soon." });
  } catch (error) {
    if (error?.issues) {
      return NextResponse.json({ message: error.issues[0].message }, { status: 400 });
    }

    return NextResponse.json({ message: "Unable to send message." }, { status: 500 });
  }
}
