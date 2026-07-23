import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validators";
import { createBooking } from "@/lib/store";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.parse(body);

    createBooking(parsed);

    return NextResponse.json({ message: "Training session booked successfully." });
  } catch (error) {
    if (error?.issues) {
      return NextResponse.json({ message: error.issues[0].message }, { status: 400 });
    }

    return NextResponse.json({ message: "Unable to book your session." }, { status: 500 });
  }
}
