import Image from "next/image";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/ui/reveal";
import { trainers } from "@/lib/data";

export const metadata = {
  title: "Trainers"
};

export default function TrainersPage() {
  return (
    <section className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Coaches"
          title="Meet the team behind the member experience."
          description="Each coach combines technical expertise with a supportive, high-accountability approach tailored to your goals."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trainers.map((trainer, index) => (
            <Reveal
              key={trainer.name}
              delay={index * 0.08}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
            >
              <div className="overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={700}
                  height={900}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{trainer.name}</h3>
                  <p className="mt-2 text-sm text-lime-300">{trainer.role}</p>
                </div>
                <div className="flex gap-3">
                  {trainer.socials.map((social) => (
                    <span
                      key={social}
                      className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60"
                    >
                      {social}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
