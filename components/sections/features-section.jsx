import { Shield, Clock, Users, Zap } from "lucide-react";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import SectionTitle from "@/components/ui/section-title";

const features = [
  {
    icon: Shield,
    title: "No Contracts",
    description: "Month-to-month memberships. Stay because you want to, not because you have to."
  },
  {
    icon: Clock,
    title: "Open 24/7",
    description: "Train at 5 AM or midnight. Your schedule, your rules. Keycard access for all members."
  },
  {
    icon: Users,
    title: "Small Group Classes",
    description: "12 people max per class. That means real coaching, not just someone yelling reps at you."
  },
  {
    icon: Zap,
    title: "Free Onboarding",
    description: "Every new member gets a 1-on-1 intro session. We make sure you start right."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#0c0c0c]">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="Why Us"
          title="What actually makes us different."
          description="We could say a lot of things. Here's what matters."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.06}>
                <div className="rounded-2xl border border-white/[0.06] bg-[#111] p-6 h-full transition hover:bg-[#151515]">
                  <div className="rounded-lg bg-red-600/10 border border-red-500/10 p-2.5 w-fit mb-5">
                    <Icon size={18} className="text-red-500/80" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
