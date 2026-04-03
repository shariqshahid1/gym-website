import "./globals.css";
import { Manrope, Syne } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { siteConfig } from "@/lib/data";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne"
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} Gym`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["gym website", "fitness", "personal training", "next.js gym"],
  openGraph: {
    title: `${siteConfig.name} Gym`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Gym`,
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${syne.variable} bg-[#050505] text-white antialiased`}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(132,204,22,0.12),transparent_22%),linear-gradient(180deg,#050505_0%,#0a0a0a_45%,#050505_100%)]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
