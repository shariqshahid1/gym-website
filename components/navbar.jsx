"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/container";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-[0.2em] text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.9)]" />
          PULSEFORGE
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = !link.href.includes("#") && pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${active ? "text-lime-300" : "text-white/70 hover:text-white"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/pricing"
            className="rounded-full border border-lime-400/40 bg-lime-400 px-5 py-2 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Join Now
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
