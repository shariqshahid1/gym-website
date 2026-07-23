import { Dumbbell, Flame, HeartPulse, Sparkles, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import SectionTitle from "@/components/ui/section-title";
import { services } from "@/lib/data";

const icons = { Dumbbell, Flame, HeartPulse, Sparkles, Target };

export default function ServicesGrid({ limit }) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="Services"
          title="Programs built for every kind of athlete."
          description="Whether you want personal attention, structured strength work, or high-energy conditioning — we have a track for you."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <Card className="group h-full p-6 transition hover:bg-[#161616]">
                  <div className="flex items-start justify-between mb-6">
                    <div className="rounded-lg bg-red-600/10 border border-red-500/15 p-3 text-red-400">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs text-white/20 font-mono">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">{service.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-white/25">
                    <span>{service.schedule}</span>
                  </div>
                  {service.details && (
                    <ul className="mt-4 space-y-1.5 border-t border-white/[0.04] pt-4">
                      {service.details.slice(0, 3).map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-xs text-white/35">
                          <span className="h-1 w-1 rounded-full bg-red-500/50 shrink-0 mt-1.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>
        {typeof limit === "number" && (
          <Reveal>
            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition"
              >
                View all services
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
