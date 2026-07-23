"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-600/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-red-400 mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            Now Open
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Stop making excuses.
            <br />
            <span className="text-red-500">Start making progress.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg"
          >
            Real coaching. Real equipment. No shortcuts.
            We built PulseForge for people who actually want to see results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/auth">
              Start Training
              <ArrowRight size={16} />
            </Button>
            <Button href="/services" variant="secondary">
              See Our Programs
            </Button>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-8"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-white/40 uppercase tracking-wider sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
