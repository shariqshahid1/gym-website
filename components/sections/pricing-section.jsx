"use client";

import { useState } from "react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { pricingPlans } from "@/lib/data";

export default function PricingSection({ compact = false }) {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section id="pricing" className={`py-20 ${compact ? "" : "pt-10"}`}>
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Pricing"
            title="Flexible memberships with premium value."
            description="Choose a plan that fits your routine today, then scale into deeper coaching whenever you’re ready."
          />
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
            {["monthly", "yearly"].map((cycle) => (
              <button
                key={cycle}
                type="button"
                onClick={() => setBillingCycle(cycle)}
                className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                  billingCycle === cycle ? "bg-lime-400 text-black" : "text-white/65"
                }`}
              >
                {cycle}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 0.08}
              className={`rounded-[2rem] border p-8 transition hover:-translate-y-1 ${
                plan.highlight
                  ? "border-lime-300/35 bg-[linear-gradient(180deg,rgba(163,230,53,0.12),rgba(255,255,255,0.04))]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{plan.description}</p>
                </div>
                {plan.highlight && (
                  <span className="rounded-full border border-lime-300/25 bg-lime-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-lime-300">
                    Popular
                  </span>
                )}
              </div>
              <div className="mt-8 text-white">
                <span className="text-5xl font-semibold">
                  ${billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly}
                </span>
                <span className="ml-2 text-white/50">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
              </div>
              <ul className="mt-8 space-y-4 text-sm text-white/70">
                {plan.features.map((feature) => (
                  <li key={feature} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300">
                Choose {plan.name}
              </button>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
