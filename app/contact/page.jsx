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
    <section className="py-20">
      <Container className="space-y-12">
        <SectionTitle
          eyebrow="Contact"
          title="Reach out and start your fitness journey."
          description="Ask about memberships, book a tour, or connect with the team for personal training and coaching support."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="p-5 flex items-center gap-4 transition hover:-translate-y-0.5 duration-300">
                  <div className="rounded-xl bg-orange-500/10 border border-orange-400/20 p-3 shrink-0">
                    <Icon size={18} className="text-orange-300" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                    <p className="text-sm text-white/80 mt-0.5">{item.value}</p>
                  </div>
                </Card>
              );
            })}

            <Card className="overflow-hidden p-2">
              <iframe
                title="PulseForge Gym Location"
                src="https://www.google.com/maps?q=New%20York%20fitness%20gym&output=embed"
                className="h-[280px] w-full rounded-[1.25rem] border-0"
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
