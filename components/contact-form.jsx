"use client";

import { useState } from "react";
import { Loader2, Send, Mail, Phone, User, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/toast";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

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

      addToast(data.message, "success");
      setForm(initialState);
    } catch (error) {
      addToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="rounded-xl bg-orange-500/10 border border-orange-400/20 p-2.5">
          <MessageSquare size={18} className="text-orange-300" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Send us a message</h3>
          <p className="text-sm text-white/60">We will get back to you within 24 hours.</p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Name" name="name" value={form.name} onChange={setForm} icon={User} placeholder="Your name" />
        <Input label="Email" name="email" type="email" value={form.email} onChange={setForm} icon={Mail} placeholder="your@email.com" />
      </div>
      <Input label="Phone" name="phone" value={form.phone} onChange={setForm} icon={Phone} placeholder="+1 (555) 000-0000" />
      <label className="block">
        <span className="mb-2 flex items-center gap-2 text-sm text-white/70">
          <MessageSquare size={14} />
          Message
        </span>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400/40 resize-none"
          placeholder="Tell us about your goals..."
          required
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_32px_rgba(249,115,22,0.3)] disabled:opacity-60 disabled:hover:shadow-none flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Input({ label, name, onChange, value, type = "text", icon: Icon, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm text-white/70">
        {Icon && <Icon size={14} />}
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange((current) => ({ ...current, [name]: event.target.value }))}
        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400/40"
        required
      />
    </label>
  );
}
