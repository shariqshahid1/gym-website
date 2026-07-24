import Hero from "@/components/sections/hero";
import StatsSection from "@/components/sections/stats-section";
import ServicesGrid from "@/components/sections/services-grid";
import FeaturesSection from "@/components/sections/features-section";
import TrainersPreview from "@/components/sections/trainers-preview";
import PricingSection from "@/components/sections/pricing-section";
import GallerySection from "@/components/sections/gallery-section";
import TestimonialsSlider from "@/components/sections/testimonials-slider";
import ContactCta from "@/components/sections/contact-cta";

export const metadata = {
  title: "PulseForge Gym",
  description: "PulseForge Gym — Real coaching, real equipment, real results. Join the gym that's built for people who are serious about fitness."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesGrid limit={3} />
      <FeaturesSection />
      <TrainersPreview />
      <PricingSection />
      <GallerySection />
      <TestimonialsSlider />
      <ContactCta />
    </>
  );
}
