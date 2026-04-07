import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { generateOrganizationSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MoleScan™ — Clinician-Led, AI-Assisted Skin Lesion Assessment",
    template: "%s | MoleScan™",
  },
  description:
    "AI-powered skin lesion assessment reviewed by UK consultant dermatologists. Results within 24 hours. For private clinics and NHS. Request a demo.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://molescan.co.uk"
  ),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "MoleScan",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
