"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import { heroStats } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const statVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 + i * 0.1, ease: "easeOut" }
  })
};

export default function Hero() {
  return (
    <section className="section-fade relative overflow-hidden py-24 sm:py-32">
      <div className="mesh-overlay absolute inset-x-0 top-10 mx-auto h-[34rem] max-w-7xl rounded-[3rem] opacity-25" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/12 blur-3xl animate-pulse-glow" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute left-1/3 bottom-0 h-48 w-48 rounded-full bg-orange-500/8 blur-3xl animate-float" />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-[linear-gradient(90deg,rgba(249,115,22,0.16),rgba(239,68,68,0.08))] px-4 py-2 text-xs uppercase tracking-[0.3em] text-orange-300">
            <Sparkles size={14} />
            Push Beyond Limits
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl leading-[1.1]">
              Train harder. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Recover smarter.</span> Look stronger every week.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              PulseForge is a modern fitness destination with elite coaching, premium equipment, and an atmosphere
              built for serious results.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
            <Button href="/pricing">
              Join Now
              <ArrowRight size={16} />
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
              <PlayCircle size={16} />
            </Button>
          </motion.div>
          <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={statVariants}
              >
                <Card className="relative overflow-hidden p-5 group hover:border-orange-400/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),transparent_48%)] group-hover:opacity-80 transition-opacity" />
                  <div className="relative">
                    <div className="text-2xl font-semibold text-white group-hover:text-orange-200 transition-colors">{stat.value}</div>
                    <div className="mt-1 text-sm text-white/55">{stat.label}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -left-4 top-20 hidden h-32 w-32 rounded-full border border-white/10 bg-white/[0.03] lg:block animate-float" style={{ animationDelay: "2s" }} />
          <Card className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.3),transparent_28%),linear-gradient(160deg,rgba(255,255,255,0.08),rgba(0,0,0,0.42))]" />
            <div className="relative space-y-6">
              <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.8rem] border border-white/10 bg-black/45 p-6 hover:border-orange-400/15 transition-colors duration-300">
                  <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Premium Zones</p>
                  <div className="mt-6 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                    {["Strength Arena", "Cardio Deck", "Yoga Studio", "Recovery Lounge"].map((zone) => (
                      <div
                        key={zone}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-orange-500/10 hover:border-orange-400/20 transition-all duration-200"
                      >
                        {zone}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.8rem] border border-orange-400/20 bg-[linear-gradient(180deg,rgba(249,115,22,0.18),rgba(255,255,255,0.03))] p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/50">Weekly Energy</p>
                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="mb-2 flex justify-between text-sm text-white/60">
                        <span>Strength Focus</span>
                        <span>92%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full bg-[linear-gradient(90deg,#f97316,#ef4444)]"
                          initial={{ width: 0 }}
                          animate={{ width: "92%" }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-sm text-white/60">
                        <span>Cardio Output</span>
                        <span>76%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full bg-[linear-gradient(90deg,#fb923c,#f97316)]"
                          initial={{ width: 0 }}
                          animate={{ width: "76%" }}
                          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-black/45 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/40">Membership Highlight</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">Built for progress.</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  From expert-led programming to premium recovery support, every detail is designed to help you stay
                  consistent and see results.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
