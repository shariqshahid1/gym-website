"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import SectionTitle from "@/components/ui/section-title";
import { pricingPlans } from "@/lib/data";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Pricing"
            title="Plans that fit your routine."
            description="Simple pricing. No hidden fees. Upgrade or cancel anytime."
          />
          <div className="inline-flex rounded-lg border border-white/[0.08] bg-[#111] p-1">
            {["monthly", "yearly"].map((cycle) => (
              <button
                key={cycle}
                type="button"
                onClick={() => setBillingCycle(cycle)}
                className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition ${
                  billingCycle === cycle
                    ? "bg-red-600 text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {cycle}
                {cycle === "yearly" && (
                  <span className="ml-1.5 text-[10px] text-emerald-400">Save 15%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.06}>
              <Card
                className={`h-full p-6 transition hover:bg-[#161616] ${
                  plan.highlight
                    ? "border-red-500/20 bg-[#131313] relative"
                    : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                )}
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    {plan.highlight && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400 bg-red-600/10 border border-red-500/20 rounded-full px-2 py-0.5">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-white/40">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly}
                  </span>
                  <span className="ml-1 text-sm text-white/30">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                </div>

                {billingCycle === "yearly" && (
                  <p className="mb-4 text-xs text-emerald-400">
                    Save ${plan.priceMonthly * 12 - plan.priceYearly} vs monthly
                  </p>
                )}

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-white/50">
                      <Check size={14} className="text-red-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/auth"
                  className="w-full"
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
