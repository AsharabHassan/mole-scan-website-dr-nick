import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Ticker from "@/components/layout/Ticker";
import CookieBanner from "@/components/layout/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { generateOrganizationSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "MoleScan™ — Dermatologist-Led Skin Lesion Assessment",
    template: "%s | MoleScan™",
  },
  description:
    "Dermatologist-led skin lesion assessment reviewed by UK GPs with special interest and dermatologists. Dermoscopic imaging with results within 24 hours. For private clinics and NHS. Request a demo.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://molescan.uk"
  ),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "MoleScan",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#141B4D",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col" suppressHydrationWarning>
        <Ticker />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
