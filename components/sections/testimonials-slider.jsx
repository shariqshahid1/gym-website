"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import { testimonials } from "@/lib/data";

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="Members stay because the experience delivers."
          description="A premium environment only matters when it produces real consistency, confidence, and results."
          align="center"
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <p className="text-2xl font-medium leading-10 text-white sm:text-3xl">
                “{testimonials[index].quote}”
              </p>
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-lime-300">{testimonials[index].author}</div>
                <div className="mt-2 text-sm text-white/55">{testimonials[index].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.author}
                type="button"
                aria-label={`View testimonial ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 w-10 rounded-full transition ${
                  dotIndex === index ? "bg-lime-300" : "bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
