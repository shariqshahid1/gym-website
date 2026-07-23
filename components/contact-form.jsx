"use client";

import { useState } from "react";
import { Loader2, Send, User, MessageSquare, Phone, Mail } from "lucide-react";
import { useToast } from "@/components/ui/toast";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong.");
      addToast(data.message, "success");
      setForm(initialState);
    } catch (error) {
      addToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/[0.08] bg-[#111] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="rounded-lg bg-red-600/10 border border-red-500/15 p-2.5">
          <MessageSquare size={16} className="text-red-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Send a message</h3>
          <p className="text-xs text-white/40">We reply within 24 hours.</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Input label="Name" name="name" value={form.name} onChange={setForm} placeholder="Your name" />
        <Input label="Email" name="email" type="email" value={form.email} onChange={setForm} placeholder="you@email.com" />
      </div>
      <Input label="Phone" name="phone" value={form.phone} onChange={setForm} placeholder="+1 (555) 000-0000" />
      <label className="block">
        <span className="mb-1.5 block text-xs text-white/50">Message</span>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={(e) => setForm((c) => ({ ...c, message: e.target.value }))}
          className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-red-500/30 resize-none"
          placeholder="Tell us about your goals..."
          required
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Input({ label, name, onChange, value, type = "text", placeholder }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-white/50">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange((c) => ({ ...c, [name]: e.target.value }))}
        className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-red-500/30"
        required
      />
    </label>
  );
}
