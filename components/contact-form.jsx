"use client";

import { useState } from "react";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({ type: "success", message: data.message });
      setForm(initialState);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Name" name="name" value={form.name} onChange={setForm} />
        <Input label="Email" name="email" type="email" value={form.email} onChange={setForm} />
      </div>
      <Input label="Phone" name="phone" value={form.phone} onChange={setForm} />
      <label className="block">
        <span className="mb-2 block text-sm text-white/70">Message</span>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40"
          placeholder="Tell us about your goals"
          required
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {status.message && (
        <p className={`text-sm ${status.type === "success" ? "text-lime-300" : "text-red-400"}`}>{status.message}</p>
      )}
    </form>
  );
}

function Input({ label, name, onChange, value, type = "text" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/70">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => onChange((current) => ({ ...current, [name]: event.target.value }))}
        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40"
        required
      />
    </label>
  );
}
