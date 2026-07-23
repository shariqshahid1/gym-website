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

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Booking failed.");
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
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/[0.08] bg-[#111] p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-lg bg-red-600/10 border border-red-500/15 p-2.5">
          <CalendarCheck size={16} className="text-red-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Book a Session</h3>
          <p className="text-xs text-white/40">Schedule with our expert coaches</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} setForm={setForm} />
        <Field label="Email" name="email" type="email" value={form.email} setForm={setForm} />
        <Field label="Date" name="date" type="date" value={form.date} setForm={setForm} min={today} />
        <label className="block">
          <span className="mb-1.5 block text-xs text-white/50">Session</span>
          <select
            name="service"
            value={form.service}
            onChange={(e) => setForm((c) => ({ ...c, service: e.target.value }))}
            className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-red-500/30"
          >
            {sessionTypes.map((s) => (
              <option key={s.value}>{s.label}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-3 block">
        <span className="mb-1.5 block text-xs text-white/50">Goals / Notes</span>
        <textarea
          name="notes"
          rows="3"
          value={form.notes}
          onChange={(e) => setForm((c) => ({ ...c, notes: e.target.value }))}
          className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-red-500/30 resize-none"
          placeholder="What do you want to work on?"
          required
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Booking...
          </>
        ) : (
          <>
            <CalendarCheck size={15} />
            Confirm Booking
          </>
        )}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", value, setForm, min }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-white/50">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        min={min}
        onChange={(e) => setForm((c) => ({ ...c, [name]: e.target.value }))}
        className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-red-500/30"
        required
      />
    </label>
  );
}
