import mongoose, { Schema } from "mongoose";

const contactMessageSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", contactMessageSchema);
