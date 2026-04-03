"use client";

import { useState } from "react";
import { pricingPlans } from "@/lib/data";

export default function MembershipSubscribe() {
  const [plan, setPlan] = useState("Pro");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubscribe() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/memberships/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, billingCycle })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed.");
      }

      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <h3 className="text-xl font-semibold text-white">Activate Membership</h3>
      <p className="mt-2 text-sm leading-7 text-white/60">Choose your membership and activate it from your account.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-white/70">Plan</span>
          <select
            value={plan}
            onChange={(event) => setPlan(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40"
          >
            {pricingPlans.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-white/70">Billing Cycle</span>
          <select
            value={billingCycle}
            onChange={(event) => setBillingCycle(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-300/40"
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </label>
      </div>
      <button
        type="button"
        onClick={handleSubscribe}
        disabled={loading}
        className="mt-6 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300 disabled:opacity-60"
      >
        {loading ? "Activating..." : "Subscribe Now"}
      </button>
      {message && <p className="mt-4 text-sm text-white/70">{message}</p>}
    </div>
  );
}
