import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import TrainersPreview from "@/components/sections/trainers-preview";
import TestimonialsSlider from "@/components/sections/testimonials-slider";
import GallerySection from "@/components/sections/gallery-section";
import ContactCta from "@/components/sections/contact-cta";

export const metadata = {
  title: "Home",
  description: "Modern gym website with elite coaching, premium equipment, and responsive fitness-focused design."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid limit={3} />
      <TrainersPreview />
      <GallerySection />
      <TestimonialsSlider />
      <ContactCta />
    </>
  );
}
