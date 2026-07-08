"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import Button from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { addToast } = useToast();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed.");
      }

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
      <div className="flex items-center gap-3 rounded-2xl border border-lime-400/20 bg-lime-500/10 px-5 py-4">
        <CheckCircle size={18} className="text-lime-300 shrink-0" />
        <p className="text-sm text-lime-200">You are subscribed! Stay tuned for updates.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-white outline-none transition focus:border-orange-400/40"
          required
        />
        <Button type="submit" loading={loading} className="sm:px-5">
          {loading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
    </form>
  );
}
