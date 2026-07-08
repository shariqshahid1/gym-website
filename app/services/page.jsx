import { Sparkles } from "lucide-react";
import ServicesGrid from "@/components/sections/services-grid";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

export const metadata = {
  title: "Services",
  description: "Explore personal training, cardio, strength training, yoga, and CrossFit programs."
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-0">
        <Container>
          <SectionTitle
            eyebrow="Programs"
            title="Every service is designed to help you move with purpose."
            description="Choose the training style that fits your goals and let our team guide the process with structure, motivation, and premium support."
          />
        </Container>
      </section>
      <ServicesGrid />
    </>
  );
}
