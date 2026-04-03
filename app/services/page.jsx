import ServicesGrid from "@/components/sections/services-grid";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Programs"
            title="Coaching, programming, and recovery under one premium roof."
            description="Our services combine serious expertise with a luxury feel, making it easier to commit, improve, and stay consistent."
          />
        </Container>
      </section>
      <ServicesGrid />
    </>
  );
}
