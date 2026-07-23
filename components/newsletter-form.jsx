"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { addToast } = useToast();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Subscription failed.");
      setSubscribed(true);
      setEmail("");
      addToast(data.message, "success");
    } catch (error) {
      addToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  if (subscribed) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
        <CheckCircle size={15} className="text-emerald-400 shrink-0" />
        <p className="text-sm text-emerald-300">You&apos;re subscribed!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-red-500/30 placeholder:text-white/20"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 size={14} className="animate-spin" /> : "Subscribe"}
        </button>
      </div>
    </form>
  );
}
