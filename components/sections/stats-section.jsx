"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";

const stats = [
  { number: "2,500+", label: "Active Members" },
  { number: "18", label: "Expert Coaches" },
  { number: "50+", label: "Weekly Classes" },
  { number: "4.9", label: "Avg Rating" }
];

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 border-y border-white/[0.04]">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white sm:text-4xl">{stat.number}</div>
                <div className="mt-1 text-sm text-white/35">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
