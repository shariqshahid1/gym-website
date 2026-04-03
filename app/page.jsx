import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import PricingSection from "@/components/sections/pricing-section";
import TestimonialsSlider from "@/components/sections/testimonials-slider";
import GallerySection from "@/components/sections/gallery-section";
import ContactCta from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <GallerySection />
      <PricingSection compact />
      <TestimonialsSlider />
      <ContactCta />
    </>
  );
}
