import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Award, Clock } from "lucide-react";
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

export const metadata = {
  title: "Trainers",
  description: "Meet the PulseForge trainers and explore their fitness specializations."
};

export default function TrainersPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="Our Team"
          title="Coaches who actually care about your progress."
          description="Every trainer here has real certifications, real experience, and a genuine investment in helping you get stronger."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.name} delay={index * 0.06}>
              <Card className="group overflow-hidden transition hover:bg-[#151515]">
                <div className="relative overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    width={900}
                    height={1100}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 flex gap-1.5">
                    {trainer.socials.slice(0, 3).map((social) => {
                      const Icon = socialIcons[social];
                      return (
                        <span
                          key={social}
                          className="inline-flex rounded-lg border border-white/[0.1] bg-black/50 p-2 text-white/40 transition hover:text-white/80"
                        >
                          <Icon size={13} />
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{trainer.name}</h3>
                  <p className="mt-1 text-sm text-red-400">{trainer.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">{trainer.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/30">
                    {trainer.experience && (
                      <span className="flex items-center gap-1">
                        <Clock size={11} className="text-red-400/60" />
                        {trainer.experience}
                      </span>
                    )}
                    {trainer.certifications && (
                      <span className="flex items-center gap-1">
                        <Award size={11} className="text-red-400/60" />
                        {trainer.certifications.join(", ")}
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
