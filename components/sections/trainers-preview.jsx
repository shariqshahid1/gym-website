import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Clock } from "lucide-react";
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
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Trainers"
            title="Meet the people behind your transformation."
            description="Our trainers bring years of experience and a genuine passion for helping you get stronger."
          />
          <Button href="/trainers" variant="secondary" className="shrink-0">
            View All
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.slice(0, limit).map((trainer, index) => (
            <Reveal key={trainer.name} delay={index * 0.06}>
              <Card className="group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    width={900}
                    height={1100}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{trainer.name}</h3>
                  <p className="mt-1 text-sm text-red-400">{trainer.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/40 line-clamp-2">{trainer.bio}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-1.5">
                      {trainer.socials.map((social) => {
                        const Icon = socialIcons[social];
                        return (
                          <span
                            key={social}
                            className="inline-flex rounded-lg border border-white/[0.08] p-2 text-white/30 transition hover:text-white/70 hover:border-white/15"
                          >
                            <Icon size={14} />
                          </span>
                        );
                      })}
                    </div>
                    {trainer.experience && (
                      <span className="flex items-center gap-1 text-[11px] text-white/25">
                        <Clock size={10} />
                        {trainer.experience}
                      </span>
                    )}
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
