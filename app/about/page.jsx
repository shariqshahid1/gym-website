import { Target, Eye, Building2, MapPin, Calendar, Award, Heart } from "lucide-react";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import { facilities, storyPoints } from "@/lib/data";

const cards = [
  { title: "Our Mission", text: storyPoints[0], icon: Target },
  { title: "Our Vision", text: storyPoints[1], icon: Eye },
  { title: "The Space", text: storyPoints[2], icon: Building2 }
];

const timeline = [
  { year: "2019", title: "Founded", desc: "PulseForge started as a small garage gym with 3 coaches and a big dream." },
  { year: "2021", title: "First Location", desc: "Opened our first 5,000 sq ft facility in Downtown NYC. 200 members in 3 months." },
  { year: "2023", title: "Expansion", desc: "Moved to our current 10,000 sq ft space. Added recovery zone, yoga studio, and smoothie bar." },
  { year: "2026", title: "Today", desc: "2,500+ active members, 18 coaches, and the highest-rated gym in the district." }
];

export const metadata = {
  title: "About",
  description: "Learn about PulseForge Gym, our mission, vision, and premium facilities."
};

export default function AboutPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container className="space-y-16">
        <SectionTitle
          eyebrow="About Us"
          title="A gym built around discipline, energy, and real transformation."
          description="PulseForge was created for people who want serious training in a space that actually feels good to be in."
        />

        {/* Mission/Vision/Space cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <Card className="h-full p-6">
                  <div className="rounded-lg bg-red-600/10 border border-red-500/15 p-2.5 w-fit mb-4">
                    <Icon size={18} className="text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">{item.text}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Story + Facilities */}
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Card className="p-6 sm:p-8 h-full">
              <h3 className="text-xl font-bold text-white">Why people stick around</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/40">
                We don&apos;t rely on flashy marketing or gimmicks. Members stay because the coaching
                is real, the equipment works, and the community pushes you to be consistent.
                Every detail inside PulseForge exists because it helps you get results.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: MapPin, label: "Location", value: "Downtown NYC" },
                  { icon: Calendar, label: "Founded", value: "2019" },
                  { icon: Award, label: "Members", value: "2,500+" },
                  { icon: Heart, label: "Rating", value: "4.9 / 5" }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-lg border border-white/[0.06] bg-black/30 p-3">
                      <Icon size={14} className="text-red-400/70 mb-1.5" />
                      <p className="text-[10px] uppercase tracking-wider text-white/30">{item.label}</p>
                      <p className="text-sm font-medium text-white/70">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white mb-4">Our Facilities</h3>
              {facilities.map((facility) => (
                <div key={facility} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#111] px-5 py-3.5 transition hover:bg-[#151515]">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  <p className="text-sm text-white/50">{facility}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">Our Journey</span>
            <h3 className="mt-3 text-xl font-bold text-white">From garage gym to NYC&apos;s top-rated fitness space.</h3>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>
                <div className="rounded-xl border border-white/[0.06] bg-[#111] p-5 h-full">
                  <span className="text-2xl font-bold text-red-500/60">{item.year}</span>
                  <h4 className="mt-2 text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
