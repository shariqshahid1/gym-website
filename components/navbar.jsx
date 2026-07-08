"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { useToast } from "@/components/ui/toast";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { addToast } = useToast();

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => setUser(data?.user || null))
      .catch(() => setUser(null));
  }, [pathname]);

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      addToast("Logged out successfully", "info");
      router.push("/");
      router.refresh();
    } catch {
      addToast("Failed to logout", "error");
    }
  }

  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-4">
        <div className="flex h-20 items-center justify-between rounded-full border border-white/10 bg-black/65 px-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-[0.2em] text-white group">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.9)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(249,115,22,1)] group-hover:scale-110" />
            PULSEFORGE
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition relative ${
                    active ? "text-orange-300" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-orange-400" />
                  )}
                </Link>
              );
            })}
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/dashboard"
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    pathname === "/dashboard"
                      ? "bg-orange-500/20 text-orange-300"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <User size={14} />
                  {user.name?.split(" ")[0]}
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-white/60 transition hover:border-red-400/30 hover:text-red-400 hover:bg-red-500/10"
                  aria-label="Logout"
                >
                  <LogOut size={14} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/auth"
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  Login
                </Link>
                <Button href="/pricing" className="px-5 py-2.5 text-xs">
                  Join Now
                </Button>
              </div>
            )}
          </nav>

          <button
            type="button"
            className="inline-flex text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {open && (
        <Container className="md:hidden">
          <div
            className="mt-3 flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-black/95 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.32)]"
            style={{ animation: "slideDown 0.2s ease-out" }}
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition ${active ? "text-orange-300" : "text-white/75 hover:text-orange-300"}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <hr className="border-white/10" />
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-sm text-white/75 hover:text-orange-300 transition"
                  onClick={() => setOpen(false)}
                >
                  <User size={14} />
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => { handleLogout(); setOpen(false); }}
                  className="flex items-center gap-2 text-sm text-white/75 hover:text-red-400 transition"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth"
                  className="flex items-center gap-2 text-sm text-white/75 hover:text-orange-300 transition"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Button href="/pricing" className="w-full" onClick={() => setOpen(false)}>
                  Join Now
                </Button>
              </>
            )}
          </div>
        </Container>
      )}

    </header>
  );
}
