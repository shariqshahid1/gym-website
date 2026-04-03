"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  date: "",
  service: "Strength Session",
  notes: ""
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

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
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <h3 className="text-xl font-semibold text-white">Book a Training Session</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} setForm={setForm} />
        <Field label="Email" name="email" type="email" value={form.email} setForm={setForm} />
        <Field label="Date" name="date" type="date" value={form.date} setForm={setForm} />
        <label className="block">
          <span className="mb-2 block text-sm text-white/70">Session</span>
          <select
            name="service"
            value={form.service}
            onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40"
          >
            <option>Strength Session</option>
            <option>Personal Training</option>
            <option>Mobility Recovery</option>
            <option>Diet Consultation</option>
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
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40"
          required
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300 disabled:opacity-60"
      >
        {loading ? "Booking..." : "Confirm Session"}
      </button>
      {message && <p className="mt-4 text-sm text-white/70">{message}</p>}
    </form>
  );
}

function Field({ label, name, type = "text", value, setForm }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/70">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => setForm((current) => ({ ...current, [name]: event.target.value }))}
        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40"
        required
      />
    </label>
  );
}
