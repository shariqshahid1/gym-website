import ContactForm from "@/components/contact-form";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Contact"
            title="Start your next chapter with a stronger routine."
            description="Reach out for memberships, coaching, personal training, or a guided tour of the facility."
          />
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-sm leading-8 text-white/65">
            <p>Studio Hours: 5:00 AM - 11:00 PM</p>
            <p>Recovery Lounge: 24/7 for active members</p>
            <p>Phone: +1 (555) 014-2026</p>
            <p>Email: hello@pulseforgegym.com</p>
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
