"use client";

import { useState } from "react";
import { Loader2, CheckCircle, CreditCard, Zap } from "lucide-react";
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
      const response = await fetch("/api/memberships/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, billingCycle })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed.");
      }

      addToast(data.message, "success");
    } catch (error) {
      addToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="rounded-xl bg-orange-500/10 border border-orange-400/20 p-2.5">
          <CreditCard size={18} className="text-orange-300" />
        </div>
        <h3 className="text-xl font-semibold text-white">Activate Membership</h3>
      </div>
      <p className="text-sm leading-7 text-white/60">Choose your membership and activate it from your account.</p>

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
            <option value="monthly">Monthly — ${selectedPlan?.priceMonthly}/mo</option>
            <option value="yearly">Yearly — ${selectedPlan?.priceYearly}/yr (save {Math.round((1 - selectedPlan?.priceYearly / (selectedPlan?.priceMonthly * 12)) * 100)}%)</option>
          </select>
        </label>
      </div>

      {selectedPlan && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Total</span>
            <span className="text-2xl font-semibold text-white">${price}<span className="text-sm font-normal text-white/50">/{billingCycle === "monthly" ? "mo" : "yr"}</span></span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-lime-300">
            <Zap size={12} />
            {billingCycle === "yearly" ? "Best value — 2 months free" : "Cancel anytime"}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleSubscribe}
        disabled={loading}
        className="mt-6 w-full rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_8px_32px_rgba(163,230,53,0.25)] disabled:opacity-60 disabled:hover:shadow-none flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Activating...
          </>
        ) : (
          <>
            <CheckCircle size={16} />
            Subscribe Now
          </>
        )}
      </button>
    </div>
  );
}
