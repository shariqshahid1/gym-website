import Link from "next/link";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";

export default function ContactCta() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <Reveal className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(163,230,53,0.15),rgba(255,255,255,0.04))] p-8 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-lime-300">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Ready to train in a space that matches your ambition?
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                Book a tour, ask about memberships, or speak with a coach about your next goal.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20"
              >
                Contact Us
              </Link>
              <Link
                href="/auth"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-lime-300/35"
              >
                Create Account
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
