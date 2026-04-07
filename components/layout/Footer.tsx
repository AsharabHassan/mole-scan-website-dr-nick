import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "For Clinics", href: "/for-clinics" },
  { label: "For NHS & ICBs", href: "/for-nhs" },
  { label: "About", href: "/about/how-molescan-works" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "GDPR & Data Protection", href: "/gdpr-data-protection" },
  { label: "Clinical Safety Statement", href: "/clinical-safety-statement" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-deep-navy text-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              MOLESCAN<sup className="text-xs">TM</sup>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Clinician-led, AI-assisted skin lesion assessment and triage
              platform for healthcare professionals.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Supporting structured, safe, and responsible skin lesion
              assessment pathways.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-soft-teal transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Legal & Compliance
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-soft-teal transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a
                  href="mailto:hello@molescan.co.uk"
                  className="hover:text-brand-soft-teal transition-colors"
                >
                  hello@molescan.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Small print */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-gray-400 text-xs text-center leading-relaxed">
            MoleScan<sup>TM</sup> is operated by Dermme Health Ltd. Company
            registered in England & Wales. &copy; {new Date().getFullYear()}{" "}
            MoleScan<sup>TM</sup>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
