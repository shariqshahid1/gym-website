"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Container from "@/components/ui/container";
import { heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,204,22,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_18%)]" />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-lime-300">
            <Sparkles size={14} />
            Elite Fitness Experience
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build strength in a gym designed like a performance sanctuary.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Train with expert coaches, personalized programming, and a premium recovery-driven environment that
              helps you look better, move better, and stay consistent.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
            >
              Join Now
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-lime-300/40"
            >
              Explore Programs
              <Play size={16} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-white/55">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto flex aspect-[4/5] w-full max-w-xl items-end overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(163,230,53,0.2),rgba(255,255,255,0.04))]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.35),transparent_25%),linear-gradient(160deg,rgba(255,255,255,0.1),rgba(0,0,0,0.4))]" />
          <div className="absolute inset-x-8 top-8 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur">
            <div className="text-sm uppercase tracking-[0.3em] text-lime-300">Performance Dashboard</div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-2xl bg-white/5 p-4">Body Composition</div>
              <div className="rounded-2xl bg-white/5 p-4">Recovery Tracking</div>
              <div className="rounded-2xl bg-white/5 p-4">Coach Feedback</div>
              <div className="rounded-2xl bg-white/5 p-4">Smart Plans</div>
            </div>
          </div>
          <div className="relative w-full p-8">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/55 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">Member Highlight</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Stronger every cycle.</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Programming, nutrition, coaching, and recovery all synced in one elevated member experience.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
