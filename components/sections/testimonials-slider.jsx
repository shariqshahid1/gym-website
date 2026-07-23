"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import { testimonials } from "@/lib/data";

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="Testimonials"
          title="Real members, real results."
          description="We don't need to sell you. Our members do the talking."
          align="center"
        />

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-xl bg-red-600/10 border border-red-500/15 p-2.5 mb-6">
            <Quote size={20} className="text-red-400" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].author}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-xl font-medium leading-relaxed text-white/80 sm:text-2xl italic">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-9 w-9 rounded-full bg-red-600/15 border border-red-500/20 flex items-center justify-center text-xs font-semibold text-red-400">
                  {testimonials[index].author.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white/70">{testimonials[index].author}</div>
                  <div className="text-xs text-white/35">{testimonials[index].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.author}
                type="button"
                aria-label={`View testimonial ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`rounded-full transition-all duration-300 ${
                  dotIndex === index
                    ? "h-2 w-8 bg-red-500"
                    : "h-2 w-2 bg-white/10 hover:bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
