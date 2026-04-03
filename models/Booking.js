import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    service: { type: String, required: true, trim: true },
    notes: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
