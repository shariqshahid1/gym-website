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
  const [scrolled, setScrolled] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => setUser(data?.user || null))
      .catch(() => setUser(null));
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <Container>
        <div className={`flex h-16 items-center justify-between rounded-xl border border-white/[0.08] px-5 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg" : "bg-[#0a0a0a]/60 backdrop-blur-sm"
        }`}>
          <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-wider text-white">
            <span className="h-2 w-2 rounded-full bg-red-600" />
            PULSE<span className="text-red-500">FORGE</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm rounded-lg transition ${
                    active
                      ? "text-white bg-white/[0.06]"
                      : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                    pathname === "/dashboard"
                      ? "bg-red-600/10 text-red-400"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <User size={15} />
                  {user.name?.split(" ")[0]}
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-lg border border-white/[0.08] p-2 text-white/40 transition hover:text-red-400 hover:border-red-500/20"
                  aria-label="Logout"
                >
                  <LogOut size={15} />
                </button>
              </>
            ) : (
              <>
                <Link href="/auth" className="text-sm text-white/50 hover:text-white transition px-3 py-2">
                  Sign In
                </Link>
                <Button href="/auth" className="px-4 py-2 text-xs">
                  Join Now
                </Button>
              </>
            )}
          </div>

          <button
            type="button"
            className="inline-flex text-white md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <Container>
          <div className="mt-2 rounded-xl border border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur-md p-4 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 text-sm rounded-lg transition ${
                    active ? "text-white bg-white/[0.06]" : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="border-t border-white/[0.06] mt-2 pt-2 space-y-1">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/50 hover:text-white rounded-lg transition"
                    onClick={() => setOpen(false)}
                  >
                    <User size={15} />
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={() => { handleLogout(); setOpen(false); }}
                    className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-white/50 hover:text-red-400 rounded-lg transition text-left"
                  >
                    <LogOut size={15} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth"
                    className="block px-4 py-2.5 text-sm text-white/50 hover:text-white rounded-lg transition"
                    onClick={() => setOpen(false)}
                  >
                    Sign In
                  </Link>
                  <div className="px-4 pt-1">
                    <Button href="/auth" className="w-full py-2.5" onClick={() => setOpen(false)}>
                      Join Now
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
