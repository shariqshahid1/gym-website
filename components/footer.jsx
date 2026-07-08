import Link from "next/link";
import Container from "@/components/ui/container";
import NewsletterForm from "@/components/newsletter-form";
import { Dumbbell, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-lime-500/5 blur-3xl" />
      <Container className="relative">
        <div className="grid gap-10 py-12 lg:grid-cols-[0.9fr_0.6fr_1.1fr]">
          <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-2 text-lg font-semibold tracking-[0.2em] text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_16px_rgba(249,115,22,0.6)]" />
              PULSEFORGE
            </div>
            <p className="max-w-md text-sm leading-7 text-white/55">
              Modern fitness spaces, expert coaching, and premium training experiences for members who want more.
            </p>
            <div className="flex flex-wrap gap-5 text-sm text-white/65">
              {[
                { label: "About", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
                { label: "Services", href: "/services" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-orange-300 transition flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight size={10} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300/60">Quick Links</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              {[
                { label: "Trainers", href: "/trainers" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Dashboard", href: "/dashboard" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-orange-300 transition flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Newsletter</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Get fitness tips and member updates.</h3>
            <p className="mt-3 text-sm leading-7 text-white/60">
              Subscribe for program launches, transformation stories, and performance advice from our coaches.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">
            Copyright 2026 PulseForge Gym. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/45">
            <Link href="/" className="hover:text-white/70 transition">Privacy Policy</Link>
            <Link href="/" className="hover:text-white/70 transition">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
