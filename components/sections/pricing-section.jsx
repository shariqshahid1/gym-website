"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import SectionTitle from "@/components/ui/section-title";
import { pricingPlans } from "@/lib/data";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="py-20">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Pricing"
            title="Memberships that match your pace."
            description="Choose the plan that fits your routine now and upgrade when you want more coaching, classes, and recovery support."
          />
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
            {["monthly", "yearly"].map((cycle) => (
              <button
                key={cycle}
                type="button"
                onClick={() => setBillingCycle(cycle)}
                className={`rounded-full px-5 py-2 text-sm capitalize font-medium transition-all duration-300 ${
                  billingCycle === cycle
                    ? "bg-orange-500 text-white shadow-[0_4px_16px_rgba(249,115,22,0.3)]"
                    : "text-white/65 hover:text-white/90"
                }`}
              >
                {cycle}
                {cycle === "yearly" && (
                  <span className="ml-1.5 text-[10px] uppercase tracking-[0.2em] text-lime-300">Save 15%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <Card
                className={`h-full p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                  plan.highlight
                    ? "border-orange-400/30 bg-[linear-gradient(180deg,rgba(249,115,22,0.13),rgba(255,255,255,0.04))] relative"
                    : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-white shadow-[0_4px_16px_rgba(249,115,22,0.3)]">
                      <Sparkles size={10} />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className={`text-2xl font-semibold ${plan.highlight ? "text-orange-200" : "text-white"}`}>{plan.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">{plan.description}</p>
                  </div>
                </div>
                <div className="mt-8 text-white">
                  <span className="text-5xl font-semibold">
                    ${billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly}
                  </span>
                  <span className="ml-2 text-white/50">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="mt-2 text-xs text-lime-300">
                    ${plan.priceMonthly * 12 - plan.priceYearly} savings vs monthly
                  </p>
                )}
                <ul className="mt-8 space-y-3 text-sm text-white/70">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                      <Check size={14} className="text-lime-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  className="mt-8 w-full"
                  variant={plan.highlight ? "primary" : "secondary"}
                >
                  {plan.highlight ? "Get Started" : "Choose Plan"}
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
