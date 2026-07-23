"use client";

import { useState } from "react";
import { Loader2, CreditCard, Zap, CheckCircle } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { useToast } from "@/components/ui/toast";

export default function MembershipSubscribe() {
  const [plan, setPlan] = useState(pricingPlans[1].name);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const selectedPlan = pricingPlans.find((p) => p.name === plan);
  const price = billingCycle === "monthly" ? selectedPlan?.priceMonthly : selectedPlan?.priceYearly;

  async function handleSubscribe() {
    setLoading(true);
    try {
      const res = await fetch("/api/memberships/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, billingCycle })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Subscription failed.");
      addToast(data.message, "success");
    } catch (error) {
      addToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111] p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-lg bg-red-600/10 border border-red-500/15 p-2.5">
          <CreditCard size={16} className="text-red-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Activate Membership</h3>
          <p className="text-xs text-white/40">Choose and activate your plan</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs text-white/50">Plan</span>
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-red-500/30"
          >
            {pricingPlans.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs text-white/50">Billing</span>
          <select
            value={billingCycle}
            onChange={(e) => setBillingCycle(e.target.value)}
            className="w-full rounded-lg border border-white/[0.08] bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-red-500/30"
          >
            <option value="monthly">Monthly — ${selectedPlan?.priceMonthly}/mo</option>
            <option value="yearly">Yearly — ${selectedPlan?.priceYearly}/yr</option>
          </select>
        </label>
      </div>

      {selectedPlan && (
        <div className="mt-4 rounded-xl border border-white/[0.06] bg-black/30 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/50">Total</span>
            <span className="text-xl font-bold text-white">
              ${price}
              <span className="text-xs font-normal text-white/30">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
            <Zap size={11} />
            {billingCycle === "yearly" ? "Best value — 2 months free" : "Cancel anytime"}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleSubscribe}
        disabled={loading}
        className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Activating...
          </>
        ) : (
          <>
            <CheckCircle size={15} />
            Subscribe Now
          </>
        )}
      </button>
    </div>
  );
}
