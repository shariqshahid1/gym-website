"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import Card from "@/components/ui/card";
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
    <section id="testimonials" className="py-20">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="Testimonials"
          title="Real members. Real momentum."
          description="Our community stays because the atmosphere, coaching, and results all work together."
          align="center"
        />
        <Card className="mx-auto max-w-4xl overflow-hidden p-8 text-center sm:p-12 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="rounded-2xl bg-orange-500/10 border border-orange-400/20 p-3">
              <Quote size={24} className="text-orange-300" />
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="mt-4 space-y-6"
            >
              <p className="text-2xl font-medium leading-10 text-white sm:text-3xl italic">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <div>
                <div className="inline-flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-sm font-semibold text-white">
                    {testimonials[index].author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="text-left">
                    <div className="text-sm uppercase tracking-[0.28em] text-orange-300">{testimonials[index].author}</div>
                    <div className="mt-0.5 text-sm text-white/55">{testimonials[index].role}</div>
                  </div>
                </div>
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
                className={`rounded-full transition-all duration-300 ${
                  dotIndex === index
                    ? "h-2.5 w-10 bg-orange-400"
                    : "h-2.5 w-2.5 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
