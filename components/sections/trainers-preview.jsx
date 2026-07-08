import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import SectionTitle from "@/components/ui/section-title";
import { trainers } from "@/lib/data";

const socialIcons = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  youtube: Youtube
};

export default function TrainersPreview({ limit = 3 }) {
  return (
    <section className="section-fade py-20">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Trainers"
            title="Meet the experts behind every transformation."
            description="Our trainers combine experience, motivation, and modern programming to help members progress with confidence."
          />
          <Button href="/trainers" variant="secondary">
            View All Trainers
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trainers.slice(0, limit).map((trainer, index) => (
            <Reveal key={trainer.name} delay={index * 0.08}>
              <Card className="group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    width={900}
                    height={1100}
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-orange-300">
                    Coach
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{trainer.name}</h3>
                    <p className="mt-2 text-sm text-orange-300">{trainer.role}</p>
                    <p className="mt-3 text-sm leading-7 text-white/60">{trainer.bio}</p>
                  </div>
                  <div className="flex gap-3">
                    {trainer.socials.map((social) => {
                      const Icon = socialIcons[social];

                      return (
                        <span
                          key={social}
                          className="inline-flex rounded-full border border-white/10 bg-black/30 p-3 text-white/60 transition hover:-translate-y-0.5 hover:border-orange-400/30 hover:text-orange-300"
                        >
                          <Icon size={16} />
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
