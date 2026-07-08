import mongoose, { Schema } from "mongoose";

const membershipSchema = new Schema(
  {
    plan: { type: String, enum: ["Basic", "Standard", "Premium"], default: "Basic" },
    billingCycle: { type: String, enum: ["monthly", "yearly"], default: "monthly" },
    status: { type: String, default: "inactive" },
    subscribedAt: Date
  },
  { _id: false }
);

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    membership: { type: membershipSchema, default: () => ({}) }
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
