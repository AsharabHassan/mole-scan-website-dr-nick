"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection for background shift
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/molescan-logo-v2.png"
              alt="MoleScan — dermatologist-led skin lesion assessment platform logo"
              width={130}
              height={48}
              className="rounded-lg transition-transform duration-300 group-hover:scale-105 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 font-medium transition-colors duration-200 ${
                      link.children.some((c) => isActive(c.href))
                        ? "text-brand-deep-blue"
                        : "text-brand-text/70 hover:text-brand-deep-blue"
                    }`}
                  >
                    {link.label}
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out-expo">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 text-sm transition-all duration-200 ${
                          isActive(child.href)
                            ? "text-brand-teal bg-brand-soft-blue font-medium"
                            : "text-brand-text/80 hover:bg-brand-soft-blue hover:text-brand-deep-blue"
                        }`}
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
                  className={`relative font-medium transition-colors duration-200 py-1 ${
                    isActive(link.href)
                      ? "text-brand-deep-blue"
                      : "text-brand-text/70 hover:text-brand-deep-blue"
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-brand-teal rounded-full transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
            <Button href="/request-demo" variant="primary">
              Request Demo
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <span
                className={`absolute w-5 h-0.5 bg-brand-deep-blue rounded-full transition-all duration-300 ${
                  mobileOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-brand-deep-blue rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-brand-deep-blue rounded-full transition-all duration-300 ${
                  mobileOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-out-expo ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-6 border-t border-gray-100">
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
                        className={`block px-8 py-2 transition-colors duration-200 ${
                          isActive(child.href)
                            ? "text-brand-teal font-medium"
                            : "text-brand-text/70 hover:text-brand-deep-blue"
                        }`}
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
                    className={`block px-4 py-2.5 font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-brand-teal"
                        : "text-brand-text/70 hover:text-brand-deep-blue"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="px-4 pt-4">
                <Button
                  href="/request-demo"
                  variant="primary"
                  className="w-full"
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
