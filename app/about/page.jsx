import Image from "next/image";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { storyPoints, trainers } from "@/lib/data";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container className="space-y-14">
        <SectionHeader
          eyebrow="About Us"
          title="A modern gym built around performance, design, and consistency."
          description="PulseForge was created for people who want more than access to equipment. We built a complete member journey around coaching, atmosphere, and long-term progression."
        />
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <div className="space-y-5">
              {storyPoints.map((point) => (
                <p key={point} className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm leading-7 text-white/70">
                  {point}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="grid gap-5 sm:grid-cols-3">
            {trainers.map((trainer) => (
              <div key={trainer.name} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]">
                <Image src={trainer.image} alt={trainer.name} width={500} height={600} className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white">{trainer.name}</h3>
                  <p className="mt-2 text-sm text-white/55">{trainer.role}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
