import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters.")
});

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters.")
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(7, "Phone number is too short."),
  message: z.string().min(10, "Message should be at least 10 characters.")
});

export const membershipSchema = z.object({
  plan: z.enum(["Basic", "Standard", "Premium"]),
  billingCycle: z.enum(["monthly", "yearly"])
});

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  date: z.string().min(1, "Please choose a date."),
  service: z.string().min(2, "Choose a session type."),
  notes: z.string().min(6, "Add a few details for the trainer.")
});
