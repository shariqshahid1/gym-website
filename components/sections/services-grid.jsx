import { Apple, Dumbbell, HeartPulse, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { services } from "@/lib/data";

const icons = { Apple, Dumbbell, HeartPulse, ShieldCheck };

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Services"
          title="Training systems built around real goals."
          description="Every service is designed to move you forward with clear coaching, measurable progress, and premium support."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal
                key={service.title}
                delay={index * 0.08}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-lime-300/25 hover:bg-white/[0.05]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-lime-400/10 p-4 text-lime-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-medium text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{service.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
