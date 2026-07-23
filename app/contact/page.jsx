import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact-form";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "245 Forge Avenue, Downtown Fitness District, New York, NY" },
  { icon: Phone, label: "Phone", value: "+1 (555) 014-2026" },
  { icon: Mail, label: "Email", value: "hello@pulseforgegym.com" },
  { icon: Clock, label: "Hours", value: "Mon - Sun, 5:00 AM - 11:00 PM" }
];

export const metadata = {
  title: "Contact",
  description: "Contact PulseForge Gym, send a message, or find us on the map."
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="Contact"
          title="Let's talk about your goals."
          description="Ask about memberships, book a tour, or connect with a coach."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="flex items-center gap-4 p-4 transition hover:bg-[#151515]">
                  <div className="rounded-lg bg-red-600/10 border border-red-500/15 p-2.5 shrink-0">
                    <Icon size={16} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-white/35">{item.label}</p>
                    <p className="text-sm text-white/60">{item.value}</p>
                  </div>
                </Card>
              );
            })}

            <Card className="overflow-hidden p-1.5">
              <iframe
                title="PulseForge Gym Location"
                src="https://www.google.com/maps?q=New%20York%20fitness%20gym&output=embed"
                className="h-[240px] w-full rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
