"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/components/hooks/useInView";

const productLinks = [
  { label: "For Clinics", href: "/for-clinics" },
  { label: "For NHS & ICBs", href: "/for-nhs" },
  { label: "How MoleScan Works", href: "/about/how-molescan-works" },
  { label: "Request a Demo", href: "/request-demo" },
];

const companyLinks = [
  { label: "Clinical Governance", href: "/about/clinical-governance" },
  { label: "Resources & Guidance", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy (GDPR compliant)", href: "/cookie-policy" },
  { label: "GDPR & Data Protection", href: "/gdpr-data-protection" },
  { label: "Clinical Safety Statement", href: "/clinical-safety-statement" },
  { label: "Terms of Website Use", href: "/terms-of-use" },
];

const trustBadges = [
  "DCB0129 compliant",
  "GDPR compliant",
  "UK data residency",
  "DTAC-ready architecture",
];

export default function Footer() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-brand-deep-navy text-white"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[140px]" />
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-500/4 rounded-full blur-[120px]" />
      </div>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div
            className={`col-span-2 md:col-span-6 lg:col-span-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="mb-6 flex items-center gap-5">
              <Image
                src="/images/molescan-logo-white.png"
                alt="MoleScan — dermatologist-led skin lesion assessment platform logo"
                width={140}
                height={50}
                className="rounded-lg object-contain"
              />
              <div className="w-px h-10 bg-white/20" />
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/nhs-compatible-badge.png"
                  alt="NHS compatible — MoleScan integrates with NHS dermatology referral pathways"
                  width={100}
                  height={50}
                  className="object-contain"
                />
                <span className="text-gray-400 text-xs font-medium leading-tight">NHS<br />Compatible</span>
              </div>
            </div>
            <div className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm space-y-3">
              <p>
                MoleScan is a dermatologist-led skin lesion assessment and triage
                platform, designed to support structured clinical decision-making
                in private practice.
              </p>
              <p>
                Every case follows a governed assessment pathway — helping you
                treat safely, avoid unnecessary delays, and act with confidence.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-gray-400 text-[11px] font-medium"
                >
                  <svg
                    className="w-3 h-3 text-brand-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div
            className={`col-span-1 md:col-span-2 lg:col-span-2 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-soft-teal transition-colors duration-200 text-sm inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-teal transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div
            className={`col-span-1 md:col-span-2 lg:col-span-2 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-soft-teal transition-colors duration-200 text-sm inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-teal transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div
            className={`col-span-2 md:col-span-2 lg:col-span-4 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Legal & Compliance
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-soft-teal transition-colors duration-200 text-sm inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-teal transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="pt-6 border-t border-white/[0.06]">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">
                Get in Touch
              </p>
              <p className="text-gray-400 text-sm mb-2">
                For clinic enquiries and partnerships:
              </p>
              <a
                href="mailto:hello@molescan.co.uk"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-brand-soft-teal transition-colors duration-200 text-sm group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-brand-teal/10 group-hover:border-brand-teal/20 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                hello@molescan.co.uk
              </a>
              <p className="text-gray-500 text-xs leading-relaxed mt-5">
                Supporting safe, structured, and accountable skin lesion
                assessment in private clinical practice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs leading-relaxed text-center sm:text-left">
              &copy; {new Date().getFullYear()} MoleScan<sup>TM</sup>. Operated
              by Dermme Health Ltd. Company registered in England &amp; Wales.
              All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-gray-500 text-[11px]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
