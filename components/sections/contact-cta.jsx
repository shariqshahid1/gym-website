import Link from "next/link";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ContactCta() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-white/[0.08] bg-[#111] p-8 sm:p-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                Get Started
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Ready to stop scrolling and start training?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/40 sm:text-base">
                Book a free tour, ask about memberships, or just come say hi. We&apos;re here when you&apos;re ready.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">
                  Contact Us
                  <ArrowRight size={15} />
                </Button>
                <Button href="/auth" variant="secondary">
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
