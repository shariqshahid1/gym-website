import ServicesGrid from "@/components/sections/services-grid";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import { services } from "@/lib/data";
import { Clock, DollarSign, Users } from "lucide-react";

export const metadata = {
  title: "Services",
  description: "Explore personal training, cardio, strength training, yoga, and CrossFit programs."
};

export default function ServicesPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container className="space-y-16">
        <SectionTitle
          eyebrow="Programs"
          title="Every service is designed to help you move with purpose."
          description="Choose the training style that fits your goals and let our team handle the rest."
        />

        {/* Detailed service breakdowns */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#111] p-6 sm:p-8 transition hover:bg-[#141414]">
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs text-white/20 font-mono">0{index + 1}</span>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/40 mb-5">{service.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-white/35">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-red-400/60" />
                        {service.schedule}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign size={12} className="text-red-400/60" />
                        {service.price}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-white/30 mb-3">What&apos;s included</p>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-sm text-white/50">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-500/60 shrink-0 mt-1.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
