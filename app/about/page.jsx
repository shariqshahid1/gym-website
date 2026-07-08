import { Target, Eye, Building2 } from "lucide-react";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import { facilities, storyPoints } from "@/lib/data";

const cards = [
  { title: "Mission", text: storyPoints[0], icon: Target, color: "from-orange-500/10 to-red-500/5" },
  { title: "Vision", text: storyPoints[1], icon: Eye, color: "from-lime-500/10 to-green-500/5" },
  { title: "Our Space", text: storyPoints[2], icon: Building2, color: "from-blue-500/10 to-purple-500/5" }
];

export const metadata = {
  title: "About",
  description: "Learn about PulseForge Gym, our mission, vision, and premium facilities."
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container className="space-y-14">
        <SectionTitle
          eyebrow="About Us"
          title="A modern gym built around energy, discipline, and transformation."
          description="PulseForge was created for members who want high-performance training in a space that feels sharp, motivating, and premium from the first visit."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card className="h-full p-7 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/[0.02] blur-2xl" />
                  <div className="relative">
                    <div className="inline-flex rounded-2xl bg-white/5 border border-white/10 p-3 mb-5">
                      <Icon size={22} className="text-white/70" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/60">{item.text}</p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <Card className="p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_60%)]" />
              <div className="relative">
                <h3 className="text-3xl font-semibold text-white">Why members love the space</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  Every zone inside PulseForge is designed to improve focus, confidence, and performance. We blend
                  serious training with premium comfort so members actually want to show up consistently.
                </p>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-3">
              {facilities.map((facility, i) => (
                <Card key={facility} className="p-5 flex items-center gap-3 border-l-2 border-l-orange-400/30 transition-all duration-300 hover:border-l-orange-400 hover:-translate-y-0.5">
                  <div className="h-2 w-2 rounded-full shrink-0 bg-orange-400" />
                  <p className="text-sm leading-7 text-white/70">{facility}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
