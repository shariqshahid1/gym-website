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
    default: `${siteConfig.name} | Elite Fitness & Training`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["gym website", "fitness", "personal training", "next.js gym"],
  openGraph: {
    title: `${siteConfig.name} | Elite Fitness & Training`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name}`,
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} bg-[#0a0a0a] text-white antialiased`}>
        <ToastProvider>
          <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
