"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "For Clinics", href: "/for-clinics" },
  { label: "For NHS & ICBs", href: "/for-nhs" },
  {
    label: "About",
    href: "#",
    children: [
      { label: "How MoleScan Works", href: "/about/how-molescan-works" },
      { label: "Clinical Governance", href: "/about/clinical-governance" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-brand-deep-blue">
              MOLESCAN<sup className="text-xs">TM</sup>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="text-brand-text hover:text-brand-deep-blue font-medium transition-colors flex items-center gap-1"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                    onClick={() => setAboutOpen(!aboutOpen)}
                  >
                    {link.label}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-brand-text hover:bg-brand-soft-blue hover:text-brand-deep-blue transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-text hover:text-brand-deep-blue font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Button href="/request-demo" variant="primary">
              Request Demo
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-brand-deep-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-100">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <span className="block px-4 py-2 text-sm font-semibold text-brand-deep-blue uppercase tracking-wide">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-8 py-2 text-brand-text hover:text-brand-deep-blue"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-brand-text hover:text-brand-deep-blue font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="px-4 pt-4">
                <Button href="/request-demo" variant="primary" className="w-full">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
