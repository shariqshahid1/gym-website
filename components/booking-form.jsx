"use client";

import { useState } from "react";
import { CalendarCheck, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/toast";

const initialForm = {
  name: "",
  email: "",
  date: "",
  service: "Strength Session",
  notes: ""
};

const sessionTypes = [
  { value: "Strength Session", label: "Strength Session" },
  { value: "Personal Training", label: "Personal Training" },
  { value: "Mobility Recovery", label: "Mobility Recovery" },
  { value: "Diet Consultation", label: "Diet Consultation" },
  { value: "CrossFit Class", label: "CrossFit Class" },
  { value: "Yoga Flow", label: "Yoga Flow" }
];

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed.");
      }

      setForm(initialForm);
      addToast(data.message, "success");
    } catch (error) {
      addToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="rounded-xl bg-lime-500/10 border border-lime-400/20 p-2.5">
          <CalendarCheck size={18} className="text-lime-300" />
        </div>
        <h3 className="text-xl font-semibold text-white">Book a Training Session</h3>
      </div>
      <p className="text-sm leading-7 text-white/60 mb-6">Schedule your next session with our expert coaches.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} setForm={setForm} />
        <Field label="Email" name="email" type="email" value={form.email} setForm={setForm} />
        <Field label="Date" name="date" type="date" value={form.date} setForm={setForm} min={today} />
        <label className="block">
          <span className="mb-2 block text-sm text-white/70">Session</span>
          <select
            name="service"
            value={form.service}
            onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40"
          >
            {sessionTypes.map((s) => (
              <option key={s.value}>{s.label}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm text-white/70">Goals / Notes</span>
        <textarea
          name="notes"
          rows="4"
          value={form.notes}
          onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))}
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40 resize-none"
          placeholder="Tell us about your fitness goals..."
          required
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-full bg-lime-400 px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_8px_32px_rgba(163,230,53,0.25)] disabled:opacity-60 disabled:hover:shadow-none flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Booking...
          </>
        ) : (
          <>
            <CalendarCheck size={16} />
            Confirm Session
          </>
        )}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", value, setForm, min }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/70">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        min={min}
        onChange={(event) => setForm((current) => ({ ...current, [name]: event.target.value }))}
        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40"
        required
      />
    </label>
  );
}
