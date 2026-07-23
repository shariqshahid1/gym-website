import Link from "next/link";
import { Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/container";
import NewsletterForm from "@/components/newsletter-form";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080808]">
      <Container>
        <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-lg font-bold tracking-wider text-white">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              PULSE<span className="text-red-500">FORGE</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/40">
              A gym built for people who are serious about their health, strength, and consistency. No hype, just results.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" }
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 transition hover:text-white hover:border-white/15"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Trainers", href: "/trainers" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-white/35 hover:text-white transition"
                >
                  {link.label}
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-sm text-white/35 mb-4">
              Training tips, new classes, and member stories.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/[0.06] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} PulseForge Gym. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-white/30">
            <Link href="/" className="hover:text-white/60 transition">Privacy</Link>
            <Link href="/" className="hover:text-white/60 transition">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
