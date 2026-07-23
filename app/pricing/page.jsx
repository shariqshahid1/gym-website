import PricingSection from "@/components/sections/pricing-section";

export const metadata = {
  title: "Pricing",
  description: "Browse Basic, Standard, and Premium gym memberships."
};

export default function PricingPage() {
  return (
    <section className="pt-28 sm:pt-32">
      <PricingSection />
    </section>
  );
}
