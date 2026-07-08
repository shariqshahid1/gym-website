import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastProvider } from "@/components/ui/toast";
import { siteConfig } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"]
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
      <body className={`${inter.variable} ${poppins.variable} bg-[#060606] text-white antialiased`}>
        <ToastProvider>
          <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_26%),radial-gradient(circle_at_85%_10%,rgba(239,68,68,0.14),transparent_20%),linear-gradient(180deg,#060606_0%,#0c0c0c_45%,#050505_100%)]">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
