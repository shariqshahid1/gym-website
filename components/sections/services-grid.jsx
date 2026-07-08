import { Dumbbell, Flame, HeartPulse, Sparkles, Target } from "lucide-react";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import SectionTitle from "@/components/ui/section-title";
import { services } from "@/lib/data";

const icons = { Dumbbell, Flame, HeartPulse, Sparkles, Target };

export default function ServicesGrid({ limit }) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section className="section-fade py-20">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="Services"
          title="Programs built for every kind of athlete."
          description="Whether you want personal attention, structured strength work, or high-energy conditioning, our coaching tracks are designed to meet you where you are."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <Card className="group relative h-full overflow-hidden p-6 transition hover:-translate-y-1.5 hover:border-orange-400/25">
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/15" />
                  <div className="mb-12 inline-flex rounded-[1.25rem] border border-orange-400/15 bg-orange-500/10 p-4 text-orange-300">
                    <Icon size={24} />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium text-white">{service.title}</h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/30">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/60">{service.description}</p>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-orange-500/40 to-transparent" />
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
