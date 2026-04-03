import Link from "next/link";
import Container from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="flex flex-col gap-4 py-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 PulseForge Gym. Built for premium performance.</p>
        <div className="flex gap-5">
          <Link href="/pricing" className="hover:text-lime-300">
            Memberships
          </Link>
          <Link href="/contact" className="hover:text-lime-300">
            Contact
          </Link>
          <Link href="/auth" className="hover:text-lime-300">
            Account
          </Link>
        </div>
      </Container>
    </footer>
  );
}
