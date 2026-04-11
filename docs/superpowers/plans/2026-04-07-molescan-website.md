# MoleScan Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready, SEO/GEO-optimized B2B marketing website for MoleScan — a clinician-led, AI-assisted skin lesion assessment platform.

**Architecture:** Next.js 15 App Router with server components for SEO-optimal HTML output. Supabase for form submissions (demo requests + contact). Tailwind CSS for styling with the MoleScan brand palette. Deployed to Vercel.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Supabase JS v2, Vercel

**Spec:** `docs/superpowers/specs/2026-04-07-molescan-website-design.md`

---

## File Structure

```
molescan-website/
├── app/
│   ├── layout.tsx                              # Root layout: fonts, metadata, Navbar, Footer
│   ├── page.tsx                                # Homepage
│   ├── for-clinics/page.tsx                    # For Clinics page
│   ├── for-nhs/page.tsx                        # For NHS & ICBs page
│   ├── about/
│   │   ├── how-molescan-works/page.tsx         # How MoleScan Works page
│   │   └── clinical-governance/page.tsx        # Clinical Governance page
│   ├── resources/page.tsx                      # Resources hub page
│   ├── contact/page.tsx                        # Contact page
│   ├── request-demo/page.tsx                   # Request Demo page
│   ├── privacy-policy/page.tsx                 # Privacy Policy
│   ├── cookie-policy/page.tsx                  # Cookie Policy
│   ├── terms-of-use/page.tsx                   # Terms of Use
│   ├── gdpr-data-protection/page.tsx           # GDPR & Data Protection
│   ├── clinical-safety-statement/page.tsx      # Clinical Safety Statement
│   ├── sitemap.ts                              # XML sitemap generator
│   ├── robots.ts                               # Robots.txt config
│   └── globals.css                             # Tailwind imports + global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                          # Sticky nav with dropdown + mobile menu
│   │   ├── Footer.tsx                          # 4-column footer per spec
│   │   └── SectionWrapper.tsx                  # Alternating bg section container
│   ├── ui/
│   │   ├── Button.tsx                          # Primary/secondary/ghost button variants
│   │   ├── Card.tsx                            # White card with shadow
│   │   └── Accordion.tsx                       # Expandable FAQ item
│   ├── sections/
│   │   ├── Hero.tsx                            # Full-width hero with navy bg
│   │   ├── TrustBar.tsx                        # Horizontal badge row
│   │   ├── CTABand.tsx                         # Full-width CTA section
│   │   ├── FeatureGrid.tsx                     # Grid of FeatureCards
│   │   ├── StepProcess.tsx                     # Numbered step flow
│   │   ├── FAQSection.tsx                      # FAQ accordion + FAQPage schema
│   │   ├── AudienceCard.tsx                    # Large routing card (homepage)
│   │   ├── TestimonialSection.tsx              # Quote cards (placeholder-ready)
│   │   └── PathwayDiagram.tsx                  # NHS referral pathway SVG
│   └── forms/
│       ├── DemoForm.tsx                        # Demo request form + Supabase submit
│       └── ContactForm.tsx                     # Contact form + Supabase submit
├── lib/
│   ├── supabase.ts                             # Supabase client init
│   ├── schema.ts                               # JSON-LD schema generators
│   └── actions.ts                              # Server actions for form submissions
├── public/
│   ├── images/
│   │   └── logo.svg                            # MoleScan logo (placeholder)
│   └── llms.txt                                # AI crawler guidance file
├── tailwind.config.ts                          # Brand colours, fonts, spacing
├── next.config.ts                              # Next.js config
├── package.json
├── tsconfig.json
└── .env.local.example                          # Env var template
```

---

## Task 1: Project Scaffolding & Configuration

**Files:**
- Create: `molescan-website/package.json`
- Create: `molescan-website/tailwind.config.ts`
- Create: `molescan-website/next.config.ts`
- Create: `molescan-website/tsconfig.json`
- Create: `molescan-website/app/globals.css`
- Create: `molescan-website/.env.local.example`
- Create: `molescan-website/.gitignore`

- [ ] **Step 1: Create Next.js project**

Run from the project root directory (`New folder (5)`):

```bash
npx create-next-app@latest molescan-website --typescript --tailwind --eslint --app --src=no --import-alias "@/*" --use-npm
```

When prompted, accept defaults. This creates the project with App Router, TypeScript, Tailwind, and ESLint.

- [ ] **Step 2: Install dependencies**

```bash
cd molescan-website
npm install @supabase/supabase-js
```

- [ ] **Step 3: Configure Tailwind with brand colours**

Replace `molescan-website/tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "deep-blue": "#1E2A78",
          "deep-navy": "#141B4D",
          "soft-blue": "#E8ECFF",
          "teal": "#2FA4A9",
          "soft-teal": "#6FC9C5",
          "deep-teal": "#1F7A80",
          "bg": "#F7F9FC",
          "text": "#1C1F21",
        },
      },
      maxWidth: {
        content: "1280px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Set up global styles**

Replace `molescan-website/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-brand-bg text-brand-text antialiased;
  }

  h1, h2, h3, h4 {
    @apply text-brand-deep-blue;
  }

  h1 {
    @apply text-4xl md:text-5xl font-bold leading-tight;
  }

  h2 {
    @apply text-3xl md:text-4xl font-bold leading-tight;
  }

  h3 {
    @apply text-2xl font-semibold leading-snug;
  }

  h4 {
    @apply text-xl font-semibold leading-snug;
  }
}
```

- [ ] **Step 5: Create environment variable template**

Create `molescan-website/.env.local.example`:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_SITE_URL=https://molescan.co.uk
```

- [ ] **Step 6: Configure Next.js**

Replace `molescan-website/next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
```

- [ ] **Step 7: Verify project runs**

```bash
cd molescan-website
npm run dev
```

Expected: Dev server starts at `http://localhost:3000` with no errors.

- [ ] **Step 8: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Next.js project with Tailwind brand config"
```

---

## Task 2: Supabase Client & Server Actions

**Files:**
- Create: `molescan-website/lib/supabase.ts`
- Create: `molescan-website/lib/actions.ts`

- [ ] **Step 1: Create Supabase client**

Create `molescan-website/lib/supabase.ts`:

```ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

- [ ] **Step 2: Create form submission server actions**

Create `molescan-website/lib/actions.ts`:

```ts
"use server";

import { supabase } from "./supabase";

export type FormState = {
  success: boolean;
  message: string;
} | null;

export async function submitDemoRequest(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fullName = formData.get("full_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const organisation = formData.get("organisation") as string;
  const role = formData.get("role") as string;
  const message = formData.get("message") as string;
  const sourcePage = formData.get("source_page") as string;

  if (!fullName || !email || !organisation || !role) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  const { error } = await supabase.from("demo_requests").insert({
    full_name: fullName,
    email,
    phone: phone || null,
    organisation,
    role,
    message: message || null,
    source_page: sourcePage || null,
  });

  if (error) {
    console.error("Demo request submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }

  return {
    success: true,
    message: "Thank you. We'll be in touch within 24 hours.",
  };
}

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fullName = formData.get("full_name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!fullName || !email || !subject || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  const { error } = await supabase.from("contact_submissions").insert({
    full_name: fullName,
    email,
    subject,
    message,
  });

  if (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }

  return {
    success: true,
    message: "Thank you for your message. We'll get back to you shortly.",
  };
}
```

- [ ] **Step 3: Commit**

```bash
git add lib/
git commit -m "feat: add Supabase client and form submission server actions"
```

---

## Task 3: JSON-LD Schema Generators

**Files:**
- Create: `molescan-website/lib/schema.ts`

- [ ] **Step 1: Create schema generator utilities**

Create `molescan-website/lib/schema.ts`:

```ts
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://molescan.co.uk";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MoleScan",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.svg`,
    description:
      "Clinician-led, AI-assisted skin lesion assessment and triage platform for healthcare professionals.",
    parentOrganization: {
      "@type": "Organization",
      name: "Dermme Health Ltd",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    knowsAbout: [
      "skin lesion assessment",
      "AI dermatology",
      "dermoscopy",
      "skin cancer triage",
    ],
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MoleScan AI-Assisted Skin Lesion Assessment",
    provider: {
      "@type": "Organization",
      name: "MoleScan",
      url: SITE_URL,
    },
    serviceType: "AI-assisted clinical triage",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Clinician",
    },
    description:
      "Clinician-led skin lesion assessment combining AI analysis with UK consultant dermatologist review. Results within 24 hours.",
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/schema.ts
git commit -m "feat: add JSON-LD schema generators for SEO"
```

---

## Task 4: UI Components (Button, Card, Accordion)

**Files:**
- Create: `molescan-website/components/ui/Button.tsx`
- Create: `molescan-website/components/ui/Card.tsx`
- Create: `molescan-website/components/ui/Accordion.tsx`

- [ ] **Step 1: Create component directories**

```bash
mkdir -p components/ui components/layout components/sections components/forms
```

- [ ] **Step 2: Create Button component**

Create `molescan-website/components/ui/Button.tsx`:

```tsx
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-teal text-white hover:bg-brand-soft-teal focus:ring-brand-teal",
  secondary:
    "bg-brand-deep-blue text-white hover:bg-brand-deep-navy focus:ring-brand-deep-blue",
  ghost:
    "border-2 border-brand-deep-blue text-brand-deep-blue hover:bg-brand-deep-blue hover:text-white focus:ring-brand-deep-blue",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
```

- [ ] **Step 3: Create Card component**

Create `molescan-website/components/ui/Card.tsx`:

```tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-6 ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Create Accordion component**

Create `molescan-website/components/ui/Accordion.tsx`:

```tsx
"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-brand-deep-blue">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-brand-teal transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
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
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-brand-text leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: AccordionItemProps[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add components/ui/
git commit -m "feat: add Button, Card, and Accordion UI components"
```

---

## Task 5: Layout Components (Navbar, Footer, SectionWrapper)

**Files:**
- Create: `molescan-website/components/layout/Navbar.tsx`
- Create: `molescan-website/components/layout/Footer.tsx`
- Create: `molescan-website/components/layout/SectionWrapper.tsx`

- [ ] **Step 1: Create Navbar**

Create `molescan-website/components/layout/Navbar.tsx`:

```tsx
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
```

- [ ] **Step 2: Create Footer**

Create `molescan-website/components/layout/Footer.tsx`:

```tsx
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
```

- [ ] **Step 3: Create SectionWrapper**

Create `molescan-website/components/layout/SectionWrapper.tsx`:

```tsx
interface SectionWrapperProps {
  children: React.ReactNode;
  background?: "white" | "soft-blue" | "navy";
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  background = "white",
  className = "",
  id,
}: SectionWrapperProps) {
  const bgStyles = {
    white: "bg-white",
    "soft-blue": "bg-brand-soft-blue",
    navy: "bg-brand-deep-navy text-white",
  };

  return (
    <section id={id} className={`py-16 md:py-20 ${bgStyles[background]} ${className}`}>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/layout/
git commit -m "feat: add Navbar, Footer, and SectionWrapper layout components"
```

---

## Task 6: Section Components

**Files:**
- Create: `molescan-website/components/sections/Hero.tsx`
- Create: `molescan-website/components/sections/TrustBar.tsx`
- Create: `molescan-website/components/sections/CTABand.tsx`
- Create: `molescan-website/components/sections/FeatureGrid.tsx`
- Create: `molescan-website/components/sections/StepProcess.tsx`
- Create: `molescan-website/components/sections/FAQSection.tsx`
- Create: `molescan-website/components/sections/AudienceCard.tsx`
- Create: `molescan-website/components/sections/TestimonialSection.tsx`
- Create: `molescan-website/components/sections/PathwayDiagram.tsx`

- [ ] **Step 1: Create Hero component**

Create `molescan-website/components/sections/Hero.tsx`:

```tsx
import Button from "@/components/ui/Button";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

interface HeroProps {
  title: string;
  subtitle: string;
  ctas: HeroCTA[];
  background?: "navy" | "blue";
}

export default function Hero({
  title,
  subtitle,
  ctas,
  background = "navy",
}: HeroProps) {
  const bgStyle =
    background === "navy" ? "bg-brand-deep-navy" : "bg-brand-deep-blue";

  return (
    <section className={`${bgStyle} text-white py-20 md:py-28`}>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={cta.variant || "primary"}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create TrustBar component**

Create `molescan-website/components/sections/TrustBar.tsx`:

```tsx
interface TrustItem {
  label: string;
  icon: React.ReactNode;
}

interface TrustBarProps {
  items: TrustItem[];
}

export default function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="bg-white border-b border-gray-100 py-6">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-brand-deep-blue"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create CTABand component**

Create `molescan-website/components/sections/CTABand.tsx`:

```tsx
import Button from "@/components/ui/Button";

interface CTABandProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
  background?: "teal" | "navy";
}

export default function CTABand({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  background = "teal",
}: CTABandProps) {
  const bgStyle =
    background === "teal"
      ? "bg-gradient-to-r from-brand-teal to-brand-deep-teal"
      : "bg-brand-deep-navy";

  return (
    <section className={`${bgStyle} text-white py-16`}>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <Button
          href={buttonHref}
          variant={background === "teal" ? "secondary" : "primary"}
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create FeatureGrid component**

Create `molescan-website/components/sections/FeatureGrid.tsx`:

```tsx
import Card from "@/components/ui/Card";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
}: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div>
      {title && (
        <div className="text-center mb-12">
          <h2 className="mb-4">{title}</h2>
          {subtitle && (
            <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
        {features.map((feature, index) => (
          <Card key={index}>
            <div className="text-brand-teal mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-brand-text/70 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Create StepProcess component**

Create `molescan-website/components/sections/StepProcess.tsx`:

```tsx
interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StepProcessProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export default function StepProcess({ title, subtitle, steps }: StepProcessProps) {
  return (
    <div>
      {title && (
        <div className="text-center mb-12">
          <h2 className="mb-4">{title}</h2>
          {subtitle && (
            <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <div className="text-brand-teal">{step.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-brand-text/70 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Create FAQSection component**

Create `molescan-website/components/sections/FAQSection.tsx`:

```tsx
import Accordion from "@/components/ui/Accordion";
import { generateFAQSchema } from "@/lib/schema";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  faqs,
}: FAQSectionProps) {
  const schema = generateFAQSchema(faqs);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-center mb-12">{title}</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion items={faqs} />
      </div>
    </div>
  );
}
```

- [ ] **Step 7: Create AudienceCard component**

Create `molescan-website/components/sections/AudienceCard.tsx`:

```tsx
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface AudienceCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  ctaLabel: string;
  ctaHref: string;
}

export default function AudienceCard({
  title,
  description,
  bulletPoints,
  ctaLabel,
  ctaHref,
}: AudienceCardProps) {
  return (
    <Card className="p-8 flex flex-col h-full">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-brand-text/70 mb-4">{description}</p>
      <ul className="space-y-2 mb-6 flex-grow">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-brand-text/80">{point}</span>
          </li>
        ))}
      </ul>
      <Button href={ctaHref} variant="secondary">
        {ctaLabel}
      </Button>
    </Card>
  );
}
```

- [ ] **Step 8: Create TestimonialSection component**

Create `molescan-website/components/sections/TestimonialSection.tsx`:

```tsx
import Card from "@/components/ui/Card";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organisation: string;
}

interface TestimonialSectionProps {
  title?: string;
  testimonials: Testimonial[];
}

export default function TestimonialSection({
  title = "What Clinicians Say",
  testimonials,
}: TestimonialSectionProps) {
  return (
    <div>
      <h2 className="text-center mb-12">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col">
            <blockquote className="text-brand-text/80 italic leading-relaxed mb-4 flex-grow">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-brand-deep-blue">
                {testimonial.name}
              </p>
              <p className="text-sm text-brand-text/60">
                {testimonial.role}, {testimonial.organisation}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 9: Create PathwayDiagram component**

Create `molescan-website/components/sections/PathwayDiagram.tsx`:

```tsx
interface PathwayDiagramProps {
  title?: string;
}

export default function PathwayDiagram({
  title = "MoleScan in the NHS Referral Pathway",
}: PathwayDiagramProps) {
  const steps = [
    {
      label: "Patient presents\nwith skin lesion",
      bg: "bg-brand-soft-blue",
      text: "text-brand-deep-blue",
    },
    {
      label: "GP / Primary Care\ncaptures images",
      bg: "bg-brand-soft-blue",
      text: "text-brand-deep-blue",
    },
    {
      label: "MoleScan\nAI + Dermatologist\nTriage",
      bg: "bg-brand-teal",
      text: "text-white",
      highlight: true,
    },
    {
      label: "Structured report\nwithin 24 hours",
      bg: "bg-brand-teal",
      text: "text-white",
      highlight: true,
    },
  ];

  const outcomes = [
    { label: "Reassure & discharge", color: "bg-green-100 text-green-800" },
    { label: "Monitor & review", color: "bg-amber-100 text-amber-800" },
    { label: "Urgent 2WW referral", color: "bg-red-100 text-red-800" },
  ];

  return (
    <div>
      <h2 className="text-center mb-12">{title}</h2>
      {/* Main flow */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`${step.bg} ${step.text} rounded-lg p-6 text-center font-medium whitespace-pre-line min-w-[180px] ${
                step.highlight ? "ring-2 ring-brand-teal/30 shadow-lg" : ""
              }`}
            >
              {step.label}
            </div>
            {index < steps.length - 1 && (
              <svg
                className="w-8 h-8 text-brand-teal mx-2 hidden md:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
      {/* Outcomes */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className={`${outcome.color} rounded-lg px-6 py-3 text-center font-medium text-sm`}
          >
            {outcome.label}
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 10: Commit**

```bash
git add components/sections/
git commit -m "feat: add all section components (Hero, TrustBar, CTABand, FAQ, etc.)"
```

---

## Task 7: Form Components

**Files:**
- Create: `molescan-website/components/forms/DemoForm.tsx`
- Create: `molescan-website/components/forms/ContactForm.tsx`

- [ ] **Step 1: Create DemoForm component**

Create `molescan-website/components/forms/DemoForm.tsx`:

```tsx
"use client";

import { useActionState } from "react";
import { submitDemoRequest, type FormState } from "@/lib/actions";
import Button from "@/components/ui/Button";

interface DemoFormProps {
  sourcePage?: string;
}

const roleOptions = [
  "GP",
  "Dermatologist",
  "Clinic Manager",
  "NHS Commissioner",
  "ICB Lead",
  "Pharmacist",
  "Other",
];

export default function DemoForm({ sourcePage = "request-demo" }: DemoFormProps) {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitDemoRequest,
    null
  );

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="text-green-800 font-semibold text-lg">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="source_page" value={sourcePage} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="full_name"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="organisation"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Organisation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-brand-text mb-1"
        >
          Your Role <span className="text-red-500">*</span>
        </label>
        <select
          id="role"
          name="role"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition bg-white"
        >
          <option value="">Select your role</option>
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-text mb-1"
        >
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition resize-none"
        />
      </div>

      {state && !state.success && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{state.message}</p>
        </div>
      )}

      <Button type="submit" variant="primary" disabled={isPending}>
        {isPending ? "Submitting..." : "Request Demo"}
      </Button>

      <p className="text-sm text-brand-text/50">
        No obligation. We&apos;ll be in touch within 24 hours.
      </p>
    </form>
  );
}
```

- [ ] **Step 2: Create ContactForm component**

Create `molescan-website/components/forms/ContactForm.tsx`:

```tsx
"use client";

import { useActionState } from "react";
import { submitContactForm, type FormState } from "@/lib/actions";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitContactForm,
    null
  );

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="text-green-800 font-semibold text-lg">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact_full_name"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact_full_name"
            name="full_name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label
            htmlFor="contact_email"
            className="block text-sm font-medium text-brand-text mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contact_email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-brand-text mb-1"
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="contact_message"
          className="block text-sm font-medium text-brand-text mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact_message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition resize-none"
        />
      </div>

      {state && !state.success && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{state.message}</p>
        </div>
      )}

      <Button type="submit" variant="primary" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/forms/
git commit -m "feat: add DemoForm and ContactForm with Supabase server actions"
```

---

## Task 8: Root Layout & Logo Placeholder

**Files:**
- Modify: `molescan-website/app/layout.tsx`
- Create: `molescan-website/public/images/logo.svg`

- [ ] **Step 1: Create placeholder logo SVG**

Create `molescan-website/public/images/logo.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
  <text x="0" y="30" font-family="Inter, sans-serif" font-size="28" font-weight="700" fill="#1E2A78">MOLESCAN</text>
  <text x="170" y="18" font-family="Inter, sans-serif" font-size="10" fill="#1E2A78">TM</text>
</svg>
```

- [ ] **Step 2: Set up root layout with fonts, metadata, Navbar, Footer**

Replace `molescan-website/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify layout renders**

```bash
npm run dev
```

Visit `http://localhost:3000`. Expected: page renders with Navbar at top, Footer at bottom, default Next.js content in between.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx public/images/
git commit -m "feat: set up root layout with Inter font, Navbar, Footer, and Org schema"
```

---

## Task 9: Homepage

**Files:**
- Modify: `molescan-website/app/page.tsx`

- [ ] **Step 1: Build the homepage**

Replace `molescan-website/app/page.tsx`:

```tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import StepProcess from "@/components/sections/StepProcess";
import AudienceCard from "@/components/sections/AudienceCard";
import FeatureGrid from "@/components/sections/FeatureGrid";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTABand from "@/components/sections/CTABand";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "MoleScan™ — Clinician-Led, AI-Assisted Skin Lesion Assessment",
  description:
    "AI-powered skin lesion assessment reviewed by UK consultant dermatologists. Results within 24 hours. For private clinics and NHS. Request a demo.",
  openGraph: {
    title: "MoleScan™ — Clinician-Led, AI-Assisted Skin Lesion Assessment",
    description:
      "AI-powered skin lesion assessment reviewed by UK consultant dermatologists. Results within 24 hours.",
  },
};

const trustItems = [
  {
    label: "UK Consultant Dermatologists",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Results Within 24 Hours",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "GDPR Compliant",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    label: "NHS Compatible",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const howItWorksSteps = [
  {
    number: 1,
    title: "Capture",
    description:
      "Clinician photographs the skin lesion using a smartphone or dermoscope. No specialist equipment required.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "AI-Assisted Triage",
    description:
      "MoleScan's AI analyses the image, providing risk stratification to support the clinical review process.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Dermatologist Report",
    description:
      "Every case is reviewed by a UK consultant dermatologist. You receive a structured report within 24 hours.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const differentiators = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Clinician-Led",
    description:
      "Every assessment is initiated by a healthcare professional and reviewed by a UK consultant dermatologist. Human expertise at every step.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI-Assisted Analysis",
    description:
      "Advanced AI provides risk stratification and pre-screening, enabling faster and more consistent triage across every submission.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24-Hour Turnaround",
    description:
      "From image capture to consultant-reviewed report in under 24 hours. Giving clinicians and patients timely answers.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "No Special Equipment",
    description:
      "Works with smartphone images. Dermoscopic images supported for enhanced accuracy, but not required to get started.",
  },
];

const testimonials = [
  {
    quote:
      "MoleScan has transformed how we handle suspicious lesions in our clinic. The 24-hour turnaround gives our patients peace of mind.",
    name: "Dr Sarah Mitchell",
    role: "Private GP",
    organisation: "Example Medical Centre",
  },
  {
    quote:
      "Having a consultant dermatologist review every case gives us the confidence to offer mole assessments as part of our service.",
    name: "James Clarke",
    role: "Clinic Manager",
    organisation: "Example Aesthetics",
  },
  {
    quote:
      "The structured reporting has helped us reduce unnecessary 2-week-wait referrals while ensuring no urgent cases are missed.",
    name: "Dr Priya Patel",
    role: "GP Partner",
    organisation: "Example NHS Practice",
  },
];

export default function HomePage() {
  const serviceSchema = generateServiceSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        title="Clinician-Led, AI-Assisted Skin Lesion Assessment"
        subtitle="MoleScan combines advanced AI analysis with UK consultant dermatologist review to deliver structured skin lesion assessment reports within 24 hours. A safe, governed triage pathway for healthcare professionals."
        ctas={[
          { label: "For Clinics", href: "/for-clinics", variant: "primary" },
          { label: "For NHS & ICBs", href: "/for-nhs", variant: "ghost" },
        ]}
      />

      <TrustBar items={trustItems} />

      <SectionWrapper background="white">
        <StepProcess
          title="How MoleScan Works"
          subtitle="A structured, safe approach to skin lesion assessment — from image capture to consultant-reviewed report."
          steps={howItWorksSteps}
        />
      </SectionWrapper>

      <SectionWrapper background="soft-blue">
        <div className="text-center mb-12">
          <h2 className="mb-4">Who Is MoleScan For?</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            Whether you run a private clinic or commission NHS services,
            MoleScan provides a structured pathway for skin lesion assessment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AudienceCard
            title="For Private Clinics"
            description="Give your clinic a safe, structured pathway for assessing suspicious skin lesions — without referring every case."
            bulletPoints={[
              "AI-assisted triage with consultant dermatologist review",
              "Results within 24 hours",
              "No special equipment required",
              "Full audit trail for clinical governance",
            ]}
            ctaLabel="Learn More"
            ctaHref="/for-clinics"
          />
          <AudienceCard
            title="For NHS & ICBs"
            description="Reduce pressure on dermatology 2-week-wait pathways while ensuring urgent cases are identified and referred appropriately."
            bulletPoints={[
              "Reduce unnecessary 2WW referrals",
              "Structured triage at primary care level",
              "Clinical governance and data compliance",
              "Scalable across multiple sites",
            ]}
            ctaLabel="Learn More"
            ctaHref="/for-nhs"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <FeatureGrid
          title="Why MoleScan?"
          subtitle="A platform built for clinical rigour, speed, and accessibility."
          features={differentiators}
          columns={4}
        />
      </SectionWrapper>

      <SectionWrapper background="soft-blue">
        <TestimonialSection testimonials={testimonials} />
      </SectionWrapper>

      <CTABand
        title="Ready to See MoleScan in Action?"
        subtitle="Request a no-obligation demo and discover how MoleScan can support your skin lesion assessment pathway."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
```

- [ ] **Step 2: Verify homepage renders**

```bash
npm run dev
```

Visit `http://localhost:3000`. Expected: full homepage with Hero, TrustBar, How It Works, Audience Cards, Features, Testimonials, and CTA Band.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: build homepage with full content, SEO metadata, and schema"
```

---

## Task 10: For Clinics Page

**Files:**
- Create: `molescan-website/app/for-clinics/page.tsx`

- [ ] **Step 1: Build the For Clinics page**

Create `molescan-website/app/for-clinics/page.tsx`:

```tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StepProcess from "@/components/sections/StepProcess";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Skin Lesion Assessment for Private Clinics",
  description:
    "Give your clinic a safe, structured mole assessment pathway. AI-assisted triage reviewed by consultant dermatologists. No special equipment required.",
  openGraph: {
    title: "AI Skin Lesion Assessment for Private Clinics — MoleScan™",
    description:
      "Give your clinic a safe, structured mole assessment pathway. AI-assisted triage reviewed by consultant dermatologists.",
  },
};

const painPoints = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Clinical Uncertainty",
    description:
      "Patients present with suspicious moles, but without dermatology training, assessing risk is challenging. Referring every case is not sustainable.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Slow Referral Pathways",
    description:
      "NHS dermatology waiting times are long. Patients want answers now, and your clinic needs a way to provide them responsibly.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Medicolegal Risk",
    description:
      "Without a structured assessment pathway, the risk of missing a melanoma — or over-referring benign lesions — creates medicolegal exposure.",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Structured Reports in 24 Hours",
    description:
      "Receive a consultant dermatologist-reviewed report for every submission within 24 hours. Clear, actionable outcomes: reassure, monitor, or refer.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "No Special Equipment Required",
    description:
      "Start with smartphone images. Dermoscopic images are supported for enhanced accuracy but are not a prerequisite.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Full Audit Trail",
    description:
      "Every assessment is logged with images, AI analysis, and consultant review. Complete governance documentation for your clinic.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Patient Confidence",
    description:
      "Offer your patients a professional skin lesion assessment backed by AI and consultant dermatology expertise. Build trust and loyalty.",
  },
];

const clinicSteps = [
  {
    number: 1,
    title: "Photograph the Lesion",
    description:
      "During the patient consultation, capture images of the skin lesion using your smartphone or a dermoscope.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Upload to MoleScan",
    description:
      "Securely upload the images through the MoleScan platform along with relevant clinical information.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "AI Analysis + Consultant Review",
    description:
      "MoleScan's AI pre-screens the image. A UK consultant dermatologist then reviews every case and provides a clinical assessment.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Receive Your Report",
    description:
      "Within 24 hours, receive a structured report with a clear recommendation: reassure the patient, monitor, or refer urgently.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Do I need a dermoscope to use MoleScan?",
    answer:
      "No. MoleScan accepts standard smartphone photographs. Dermoscopic images are supported and improve diagnostic accuracy, but they are not required to use the platform.",
  },
  {
    question: "Who reviews the assessments?",
    answer:
      "Every assessment submitted through MoleScan is reviewed by a UK consultant dermatologist. The AI provides pre-screening and risk stratification to support — not replace — the clinical review.",
  },
  {
    question: "How quickly will I receive the report?",
    answer:
      "Reports are delivered within 24 hours of image submission. Each report includes a structured clinical assessment with a clear recommendation: reassure, monitor, or refer.",
  },
  {
    question: "What types of clinics can use MoleScan?",
    answer:
      "MoleScan is designed for any healthcare professional who encounters skin lesions in practice. This includes private GP clinics, aesthetic clinics, pharmacies, podiatrists, and other allied health professionals.",
  },
  {
    question: "Is my patient data secure?",
    answer:
      "Yes. MoleScan is fully GDPR compliant and all data is encrypted in transit and at rest. Patient data is stored securely within the UK. See our Clinical Governance page for full details.",
  },
];

export default function ForClinicsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "For Clinics", url: "/for-clinics" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        title="Skin Lesion Assessment for Your Clinic — Backed by AI and Consultant Dermatologists"
        subtitle="You see patients with suspicious moles. You're not a dermatologist. MoleScan gives you a safe, structured pathway to assess and triage skin lesions with confidence."
        ctas={[
          { label: "Request Demo", href: "/request-demo", variant: "primary" },
          {
            label: "How It Works",
            href: "/about/how-molescan-works",
            variant: "ghost",
          },
        ]}
      />

      <SectionWrapper background="white">
        <FeatureGrid
          title="The Challenge"
          subtitle="Skin lesion assessment in non-specialist settings presents real clinical and operational challenges."
          features={painPoints}
          columns={3}
        />
      </SectionWrapper>

      <SectionWrapper background="soft-blue">
        <FeatureGrid
          title="How MoleScan Helps Your Clinic"
          subtitle="A structured assessment pathway that combines AI efficiency with consultant dermatologist expertise."
          features={benefits}
          columns={2}
        />
      </SectionWrapper>

      <SectionWrapper background="white">
        <StepProcess
          title="How It Works for Your Clinic"
          subtitle="Four simple steps from patient consultation to consultant-reviewed report."
          steps={clinicSteps}
        />
      </SectionWrapper>

      <SectionWrapper background="soft-blue">
        <div className="text-center mb-12">
          <h2 className="mb-4">Built for Healthcare Professionals</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            MoleScan is used by a range of healthcare providers who encounter skin lesions in their clinical practice.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Private GPs",
            "Aesthetic Clinics",
            "Pharmacies",
            "Podiatrists",
            "Chiropractors",
            "Walk-in Centres",
          ].map((type) => (
            <div
              key={type}
              className="bg-white rounded-lg p-4 text-center text-sm font-medium text-brand-deep-blue shadow-sm"
            >
              {type}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <FAQSection faqs={faqs} />
      </SectionWrapper>

      <CTABand
        title="Ready to Offer Skin Lesion Assessments?"
        subtitle="See how MoleScan can integrate into your clinic workflow. Request a no-obligation demo."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
```

- [ ] **Step 2: Verify page renders**

```bash
npm run dev
```

Visit `http://localhost:3000/for-clinics`. Expected: full page with all sections rendering correctly.

- [ ] **Step 3: Commit**

```bash
git add app/for-clinics/
git commit -m "feat: build For Clinics page with SEO content and FAQ schema"
```

---

## Task 11: For NHS & ICBs Page

**Files:**
- Create: `molescan-website/app/for-nhs/page.tsx`

- [ ] **Step 1: Build the For NHS page**

Create `molescan-website/app/for-nhs/page.tsx`:

```tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FeatureGrid from "@/components/sections/FeatureGrid";
import PathwayDiagram from "@/components/sections/PathwayDiagram";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import Card from "@/components/ui/Card";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "NHS Skin Cancer Triage Solution — Reduce 2WW Referrals",
  description:
    "Help primary care triage skin lesions effectively. Reduce unnecessary 2-week-wait referrals with AI-assisted assessment and consultant dermatologist review.",
  openGraph: {
    title: "NHS Skin Cancer Triage Solution — Reduce 2WW Referrals — MoleScan™",
    description:
      "Help primary care triage skin lesions effectively. Reduce unnecessary 2-week-wait referrals with AI-assisted assessment.",
  },
};

const nhsProblemStats = [
  { stat: "54%", label: "of urgent skin cancer referrals are for benign lesions" },
  { stat: "6+ weeks", label: "average wait for non-urgent dermatology appointments" },
  { stat: "Rising", label: "year-on-year increase in 2WW skin cancer referrals" },
];

const commissionerBenefits = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Reduce 2WW Referral Pressure",
    description:
      "MoleScan enables primary care clinicians to triage skin lesions before referral, reducing the volume of unnecessary 2-week-wait submissions reaching secondary care.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cost-Effective Triage",
    description:
      "By identifying benign lesions at the primary care level, MoleScan helps avoid the cost of unnecessary secondary care appointments and diagnostic procedures.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Patient Safety First",
    description:
      "Every assessment is reviewed by a UK consultant dermatologist. Urgent cases are flagged for fast-track referral, ensuring no melanoma is missed.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Scalable Across Sites",
    description:
      "Deploy MoleScan across multiple GP practices and primary care sites within your ICB. Centralised reporting and governance across all locations.",
  },
];

const complianceItems = [
  {
    title: "Clinical Safety",
    description: "Aligned with DCB0129 and DCB0160 clinical safety standards.",
  },
  {
    title: "Data Governance",
    description: "Fully GDPR compliant. UK data residency. Encrypted in transit and at rest.",
  },
  {
    title: "DTAC Alignment",
    description: "Designed to meet Digital Technology Assessment Criteria requirements.",
  },
  {
    title: "Accessibility",
    description: "Built to WCAG 2.2 AA standards. Compatible with NHS service requirements.",
  },
];

const faqs = [
  {
    question: "How does MoleScan fit into existing NHS referral pathways?",
    answer:
      "MoleScan sits between primary care and secondary care in the skin cancer referral pathway. GPs and primary care clinicians use MoleScan to triage lesions before making a 2-week-wait referral. Cases assessed as benign can be safely managed in primary care, while suspicious cases are flagged for urgent referral with supporting clinical evidence.",
  },
  {
    question: "Is MoleScan a medical device?",
    answer:
      "MoleScan is a clinical workflow and triage platform, not a standalone diagnostic medical device. It supports clinician decision-making by combining AI-assisted pre-screening with UK consultant dermatologist review. The final clinical decision always rests with the treating clinician.",
  },
  {
    question: "What data governance standards does MoleScan meet?",
    answer:
      "MoleScan is fully GDPR compliant, with all patient data stored securely within the United Kingdom. The platform is designed to align with the Digital Technology Assessment Criteria (DTAC), NHS Data Security and Protection Toolkit, and DCB0129/DCB0160 clinical safety standards.",
  },
  {
    question: "Can MoleScan be deployed across multiple practices within an ICB?",
    answer:
      "Yes. MoleScan is designed for multi-site deployment. ICBs can commission MoleScan across multiple GP practices and primary care centres, with centralised reporting and governance oversight.",
  },
  {
    question: "What evidence supports MoleScan's approach?",
    answer:
      "MoleScan's approach combines two established clinical methodologies: AI-assisted image analysis for risk stratification, and expert dermatologist teledermatology review. Both methods have strong evidence bases in the published literature. Contact us for our full evidence summary.",
  },
];

export default function ForNHSPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "For NHS & ICBs", url: "/for-nhs" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        title="Reduce Unnecessary Dermatology Referrals. Ensure No Urgent Case Is Missed."
        subtitle="MoleScan helps NHS primary care triage skin lesions effectively with AI-assisted assessment and UK consultant dermatologist review — reducing 2-week-wait pressure while maintaining patient safety."
        ctas={[
          { label: "Request Demo", href: "/request-demo", variant: "primary" },
          {
            label: "Clinical Governance",
            href: "/about/clinical-governance",
            variant: "ghost",
          },
        ]}
      />

      {/* NHS Problem Stats */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="mb-4">The Dermatology Referral Challenge</h2>
          <p className="text-brand-text/70 text-lg max-w-3xl mx-auto">
            NHS dermatology services face sustained pressure from rising 2-week-wait
            referral volumes. A significant proportion of these referrals are for
            benign lesions that could be safely managed in primary care with the
            right clinical support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nhsProblemStats.map((item, index) => (
            <Card key={index} className="text-center p-8">
              <div className="text-4xl font-bold text-brand-teal mb-2">
                {item.stat}
              </div>
              <p className="text-brand-text/70">{item.label}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="soft-blue">
        <PathwayDiagram />
      </SectionWrapper>

      <SectionWrapper background="white">
        <FeatureGrid
          title="Benefits for Commissioners"
          subtitle="MoleScan supports NHS transformation goals by enabling structured, governed skin lesion triage at the primary care level."
          features={commissionerBenefits}
          columns={2}
        />
      </SectionWrapper>

      {/* Compliance & Standards */}
      <SectionWrapper background="soft-blue">
        <div className="text-center mb-12">
          <h2 className="mb-4">Compliance & Standards</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            MoleScan is designed to meet the governance and safety standards
            expected of NHS-facing digital health platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {complianceItems.map((item, index) => (
            <Card key={index}>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-brand-text/70">{item.description}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <FAQSection faqs={faqs} />
      </SectionWrapper>

      <CTABand
        title="Explore MoleScan for Your Organisation"
        subtitle="Speak to our NHS team about how MoleScan can support your dermatology pathway transformation."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
        background="navy"
      />
    </>
  );
}
```

- [ ] **Step 2: Verify page renders**

```bash
npm run dev
```

Visit `http://localhost:3000/for-nhs`. Expected: full page with stats, pathway diagram, benefits, compliance, and FAQ.

- [ ] **Step 3: Commit**

```bash
git add app/for-nhs/
git commit -m "feat: build For NHS & ICBs page with pathway diagram and FAQ schema"
```

---

## Task 12: How MoleScan Works Page

**Files:**
- Create: `molescan-website/app/about/how-molescan-works/page.tsx`

- [ ] **Step 1: Build the How MoleScan Works page**

Create `molescan-website/app/about/how-molescan-works/page.tsx`:

```tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import {
  generateBreadcrumbSchema,
  generateHowToSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "How MoleScan Works — AI-Assisted Skin Lesion Assessment Process",
  description:
    "From image capture to consultant-reviewed report in 24 hours. Learn how MoleScan's 6-step clinician-led assessment pathway works.",
  openGraph: {
    title: "How MoleScan Works — AI-Assisted Skin Lesion Assessment Process",
    description:
      "From image capture to consultant-reviewed report in 24 hours. Learn how MoleScan's 6-step clinician-led assessment pathway works.",
  },
};

const processSteps = [
  {
    number: 1,
    title: "Clinician Captures Images",
    description:
      "During a patient consultation, the clinician photographs the skin lesion. MoleScan accepts both standard smartphone photographs and dermoscopic images. No specialist equipment is required to get started — a clear, well-lit smartphone photo is sufficient for assessment.",
    detail: "Dermoscopic images provide enhanced diagnostic accuracy and are recommended where available, but the platform is designed to work without them.",
  },
  {
    number: 2,
    title: "Secure Upload to MoleScan",
    description:
      "The clinician securely uploads the images to the MoleScan platform along with relevant clinical context — patient age, lesion location, clinical history, and any symptoms such as changes in size, shape, or colour.",
    detail: "All data is encrypted in transit and at rest. Patient data is stored within the United Kingdom in full compliance with GDPR.",
  },
  {
    number: 3,
    title: "AI-Powered Analysis and Risk Stratification",
    description:
      "MoleScan's AI analyses the uploaded images, providing automated risk stratification. The AI flags features of concern and categorises the lesion to support the clinical review process.",
    detail: "The AI serves as a pre-screening tool to support the consultant dermatologist, not to replace clinical judgement. It enhances consistency and helps prioritise cases that require closer attention.",
  },
  {
    number: 4,
    title: "UK Consultant Dermatologist Reviews Every Case",
    description:
      "Every submission is reviewed by a UK consultant dermatologist. The dermatologist examines the images, considers the AI analysis and clinical context, and provides a structured clinical assessment.",
    detail: "This is what makes MoleScan clinician-led: human expertise validates every assessment. No case is resolved by AI alone.",
  },
  {
    number: 5,
    title: "Structured Report Delivered Within 24 Hours",
    description:
      "The referring clinician receives a comprehensive, structured report containing the consultant dermatologist's assessment, the AI analysis summary, and a clear recommendation.",
    detail: "Reports are designed to be actionable: each one concludes with a clear outcome — reassure, monitor, or refer urgently.",
  },
  {
    number: 6,
    title: "Referring Clinician Decides Next Steps",
    description:
      "Armed with the MoleScan report, the referring clinician makes the final clinical decision. They may reassure the patient that the lesion is benign, schedule monitoring, or initiate an urgent 2-week-wait referral for suspected malignancy.",
    detail: "The final clinical decision always rests with the treating clinician. MoleScan provides the evidence to make that decision with confidence.",
  },
];

const faqs = [
  {
    question: "How is MoleScan different from a teledermatology service?",
    answer:
      "Traditional teledermatology sends images to a dermatologist for review. MoleScan adds an AI pre-screening layer that provides risk stratification before the consultant review. This combination of AI-assisted triage and consultant oversight enables faster, more consistent assessments — while maintaining the clinical rigour of human expert review.",
  },
  {
    question: "What happens if the AI and the dermatologist disagree?",
    answer:
      "The consultant dermatologist's assessment always takes precedence. The AI serves as a support tool — it flags features of concern and provides risk scores, but the final clinical opinion is the dermatologist's. If there is a discrepancy, the dermatologist applies their clinical expertise to make the definitive assessment.",
  },
  {
    question: "Can MoleScan detect melanoma?",
    answer:
      "MoleScan is not a diagnostic tool. It is a triage platform that helps clinicians assess whether a skin lesion requires urgent referral, monitoring, or reassurance. The AI assists with risk stratification, and a UK consultant dermatologist reviews every case. Final diagnosis requires histopathological confirmation following biopsy where indicated.",
  },
  {
    question: "What image quality is required?",
    answer:
      "For smartphone images: a well-lit, focused, close-up photograph of the lesion with a plain background. For dermoscopic images: standard dermoscopic capture protocols apply. MoleScan provides image quality guidance within the platform to help clinicians capture optimal images.",
  },
  {
    question: "Is patient consent required?",
    answer:
      "Yes. Clinicians must obtain patient consent before capturing and uploading images to MoleScan. The platform provides consent workflow support and documentation to help clinics maintain compliant consent processes.",
  },
];

export default function HowMoleScanWorksPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about/how-molescan-works" },
    { name: "How MoleScan Works", url: "/about/how-molescan-works" },
  ]);

  const howToSchema = generateHowToSchema(
    "How MoleScan AI-Assisted Skin Lesion Assessment Works",
    "A 6-step clinician-led process from image capture to consultant-reviewed report within 24 hours.",
    processSteps.map((step) => ({
      name: step.title,
      text: step.description,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Hero
        title="How MoleScan Works"
        subtitle="A structured, safe, and clinically governed approach to skin lesion assessment. From image capture to consultant-reviewed report in 24 hours."
        ctas={[
          { label: "Request Demo", href: "/request-demo", variant: "primary" },
        ]}
      />

      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <h2 className="mb-4">The MoleScan Assessment Pathway</h2>
          <p className="text-brand-text/70 text-lg max-w-3xl mx-auto">
            Every MoleScan assessment follows a structured 6-step pathway
            designed to ensure clinical safety, consistency, and speed.
          </p>
        </div>

        <div className="space-y-12">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                step.number % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-2xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-brand-text/80 leading-relaxed mb-2">
                  {step.description}
                </p>
                <p className="text-brand-text/60 text-sm leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="soft-blue">
        <FAQSection faqs={faqs} />
      </SectionWrapper>

      <CTABand
        title="See the MoleScan Pathway in Action"
        subtitle="Request a demo and we'll walk you through the full assessment process."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/about/
git commit -m "feat: build How MoleScan Works page with HowTo schema and FAQ"
```

---

## Task 13: Clinical Governance Page

**Files:**
- Create: `molescan-website/app/about/clinical-governance/page.tsx`

- [ ] **Step 1: Build the Clinical Governance page**

Create `molescan-website/app/about/clinical-governance/page.tsx`:

```tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import Card from "@/components/ui/Card";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Clinical Governance",
  description:
    "How MoleScan ensures clinical safety, data protection, and quality assurance. DCB0129 alignment, GDPR compliance, consultant dermatologist oversight.",
  openGraph: {
    title: "Clinical Governance — MoleScan™",
    description:
      "How MoleScan ensures clinical safety, data protection, and quality assurance.",
  },
};

const governanceSections = [
  {
    title: "Clinical Safety",
    items: [
      {
        heading: "DCB0129 & DCB0160 Alignment",
        description:
          "MoleScan's clinical safety framework is aligned with DCB0129 (manufacturer clinical safety) and DCB0160 (deploying organisation clinical safety) standards. A formal Clinical Safety Case is maintained and reviewed regularly.",
      },
      {
        heading: "Clinical Safety Officer",
        description:
          "MoleScan maintains a designated Clinical Safety Officer (CSO) responsible for overseeing the clinical safety case, hazard management, and incident reporting processes.",
      },
      {
        heading: "Consultant Dermatologist Review",
        description:
          "Every assessment is reviewed by a UK consultant dermatologist before a report is issued. No clinical output is delivered based on AI analysis alone. This human oversight is the cornerstone of MoleScan's safety model.",
      },
    ],
  },
  {
    title: "Data Protection & Privacy",
    items: [
      {
        heading: "GDPR Compliance",
        description:
          "MoleScan is fully compliant with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Dermme Health Ltd is registered with the Information Commissioner's Office (ICO).",
      },
      {
        heading: "UK Data Residency",
        description:
          "All patient data is stored within the United Kingdom. No patient data is transferred outside the UK.",
      },
      {
        heading: "Encryption",
        description:
          "All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Access to patient data is strictly controlled through role-based access controls.",
      },
      {
        heading: "Data Minimisation",
        description:
          "MoleScan collects only the minimum data necessary for clinical assessment. Data retention policies are transparent and documented.",
      },
    ],
  },
  {
    title: "Quality Assurance",
    items: [
      {
        heading: "Structured Reporting",
        description:
          "Every MoleScan report follows a standardised format ensuring consistency and completeness across all assessments.",
      },
      {
        heading: "Audit Trail",
        description:
          "A complete audit trail is maintained for every assessment, including image capture, AI analysis, consultant review, and report delivery timestamps.",
      },
      {
        heading: "Continuous Improvement",
        description:
          "MoleScan monitors clinical outcomes and assessment quality through regular clinical audit cycles, feeding findings back into platform improvements.",
      },
    ],
  },
  {
    title: "Accessibility & Standards",
    items: [
      {
        heading: "WCAG 2.2 AA Compliance",
        description:
          "The MoleScan platform and website are built to Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards.",
      },
      {
        heading: "NHS Service Standard Alignment",
        description:
          "MoleScan is designed with reference to the NHS Service Standard, supporting usability, accessibility, and clinical safety requirements.",
      },
    ],
  },
];

const faqs = [
  {
    question: "Is MoleScan a registered medical device?",
    answer:
      "MoleScan is a clinical workflow and triage platform that supports clinician decision-making. It is not currently classified or registered as a standalone medical device. The platform combines AI-assisted pre-screening with UK consultant dermatologist review, with the final clinical decision always resting with the treating clinician.",
  },
  {
    question: "How does MoleScan handle clinical incidents?",
    answer:
      "MoleScan maintains a clinical incident reporting and management process aligned with DCB0129. All incidents are reviewed by the Clinical Safety Officer, and findings are fed into the clinical safety case and hazard log. Serious incidents are escalated in accordance with regulatory requirements.",
  },
  {
    question: "Can I see MoleScan's Clinical Safety Case?",
    answer:
      "A summary of MoleScan's Clinical Safety Case is available on request. Please contact us or request a demo to discuss clinical governance documentation.",
  },
  {
    question: "How are the consultant dermatologists vetted?",
    answer:
      "All MoleScan consultant dermatologists are registered with the General Medical Council (GMC), hold current specialist registration in dermatology, and undergo credential verification before joining the platform.",
  },
];

export default function ClinicalGovernancePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about/how-molescan-works" },
    { name: "Clinical Governance", url: "/about/clinical-governance" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        title="Clinical Governance"
        subtitle="MoleScan is built on a foundation of clinical safety, data protection, and quality assurance. Every assessment is clinician-led, consultant-reviewed, and fully governed."
        ctas={[
          { label: "Request Demo", href: "/request-demo", variant: "primary" },
        ]}
        background="blue"
      />

      {governanceSections.map((section, sectionIndex) => (
        <SectionWrapper
          key={section.title}
          background={sectionIndex % 2 === 0 ? "white" : "soft-blue"}
        >
          <h2 className="text-center mb-12">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((item, index) => (
              <Card key={index}>
                <h3 className="text-lg font-semibold mb-2">{item.heading}</h3>
                <p className="text-brand-text/70 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper background="white">
        <FAQSection faqs={faqs} />
      </SectionWrapper>

      <CTABand
        title="Want to Know More About Our Governance?"
        subtitle="Request a demo to discuss MoleScan's clinical safety case, data governance, and compliance documentation."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
        background="navy"
      />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/about/clinical-governance/
git commit -m "feat: build Clinical Governance page with FAQ schema"
```

---

## Task 14: Resources, Contact, and Request Demo Pages

**Files:**
- Create: `molescan-website/app/resources/page.tsx`
- Create: `molescan-website/app/contact/page.tsx`
- Create: `molescan-website/app/request-demo/page.tsx`

- [ ] **Step 1: Build Resources page**

Create `molescan-website/app/resources/page.tsx`:

```tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTABand from "@/components/sections/CTABand";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Resources — Skin Lesion Assessment Guides & Insights",
  description:
    "Clinical guides, insights, and articles on AI-assisted dermatology, skin cancer pathways, and skin lesion assessment best practices.",
};

const articles = [
  {
    title: "Understanding the 2-Week-Wait Dermatology Pathway",
    excerpt:
      "An overview of the NHS 2-week-wait referral pathway for suspected skin cancer, the pressures it faces, and how structured triage at the primary care level can help reduce unnecessary referrals.",
    category: "NHS Pathways",
    readTime: "5 min read",
  },
  {
    title: "AI in Dermatology: What Clinicians Need to Know",
    excerpt:
      "A practical guide to understanding how AI is being used in skin lesion assessment, what it can and cannot do, and how clinician-led platforms like MoleScan combine AI with human expertise.",
    category: "AI in Dermatology",
    readTime: "7 min read",
  },
  {
    title: "What to Look for in a Skin Lesion Triage Platform",
    excerpt:
      "Key considerations for healthcare professionals evaluating digital triage solutions: clinical governance, data protection, turnaround times, and integration with existing workflows.",
    category: "Clinical Practice",
    readTime: "6 min read",
  },
];

export default function ResourcesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        title="Resources"
        subtitle="Clinical guides, insights, and articles on AI-assisted dermatology, skin cancer pathways, and skin lesion assessment best practices."
        ctas={[]}
        background="blue"
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-brand-teal bg-brand-teal/10 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-brand-text/50">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-brand-text/70 leading-relaxed mb-4 flex-grow">
                {article.excerpt}
              </p>
              <span className="text-brand-text/40 text-sm italic">
                Coming soon
              </span>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <CTABand
        title="Want to Learn More?"
        subtitle="Request a demo to see MoleScan in action and discuss how it can support your clinical practice."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
```

- [ ] **Step 2: Build Contact page**

Create `molescan-website/app/contact/page.tsx`:

```tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ContactForm from "@/components/forms/ContactForm";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact MoleScan™",
  description:
    "Get in touch with the MoleScan team. General enquiries, partnership discussions, and support.",
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        title="Contact Us"
        subtitle="Have a question about MoleScan? Get in touch and our team will get back to you."
        ctas={[]}
        background="blue"
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a
                  href="mailto:hello@molescan.co.uk"
                  className="text-brand-teal hover:text-brand-deep-teal transition-colors"
                >
                  hello@molescan.co.uk
                </a>
              </div>

              <div>
                <h4 className="font-semibold mb-1">For Demo Requests</h4>
                <p className="text-brand-text/70 mb-2">
                  Want to see MoleScan in action? Visit our dedicated demo
                  request page.
                </p>
                <a
                  href="/request-demo"
                  className="text-brand-teal hover:text-brand-deep-teal font-medium transition-colors"
                >
                  Request a Demo &rarr;
                </a>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Company Details</h4>
                <p className="text-brand-text/70 text-sm leading-relaxed">
                  MoleScan™ is operated by Dermme Health Ltd
                  <br />
                  Company registered in England & Wales
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
```

- [ ] **Step 3: Build Request Demo page**

Create `molescan-website/app/request-demo/page.tsx`:

```tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import DemoForm from "@/components/forms/DemoForm";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "See MoleScan in action. Book a no-obligation demo of our clinician-led, AI-assisted skin lesion assessment platform.",
};

export default function RequestDemoPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Request Demo", url: "/request-demo" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        title="See MoleScan in Action"
        subtitle="Request a no-obligation demo and discover how MoleScan can support your skin lesion assessment pathway."
        ctas={[]}
        background="blue"
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-6">Request a Demo</h2>
            <p className="text-brand-text/70 leading-relaxed mb-8">
              Fill in the form and a member of our team will be in touch within
              24 hours to arrange your personalised demo.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-brand-text/80">
                  See the full assessment workflow from image capture to
                  consultant-reviewed report
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-brand-text/80">
                  Discuss integration with your existing clinical workflows
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-brand-text/80">
                  Ask questions about clinical governance, data protection, and
                  compliance
                </p>
              </div>
            </div>
          </div>

          <div>
            <DemoForm sourcePage="request-demo" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add app/resources/ app/contact/ app/request-demo/
git commit -m "feat: build Resources, Contact, and Request Demo pages"
```

---

## Task 15: Legal Pages

**Files:**
- Create: `molescan-website/app/privacy-policy/page.tsx`
- Create: `molescan-website/app/cookie-policy/page.tsx`
- Create: `molescan-website/app/terms-of-use/page.tsx`
- Create: `molescan-website/app/gdpr-data-protection/page.tsx`
- Create: `molescan-website/app/clinical-safety-statement/page.tsx`

- [ ] **Step 1: Create a shared legal page layout pattern**

Each legal page follows the same structure: Hero + prose content. Create all five pages.

Create `molescan-website/app/privacy-policy/page.tsx`:

```tsx
import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MoleScan privacy policy. How we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>1. Introduction</h2>
          <p>
            MoleScan™ is operated by Dermme Health Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a company
            registered in England and Wales. We are committed to protecting your
            personal data and respecting your privacy.
          </p>
          <p>
            This privacy policy explains how we collect, use, store, and protect
            personal data when you use our website and services.
          </p>

          <h2>2. Data Controller</h2>
          <p>
            Dermme Health Ltd is the data controller for personal data processed
            through the MoleScan website and platform. We are registered with the
            Information Commissioner&apos;s Office (ICO).
          </p>

          <h2>3. What Data We Collect</h2>
          <p>We may collect the following categories of personal data:</p>
          <ul>
            <li><strong>Contact information:</strong> name, email address, phone number, organisation, and job role when you submit a demo request or contact form.</li>
            <li><strong>Usage data:</strong> information about how you use our website, including pages visited and time spent.</li>
            <li><strong>Technical data:</strong> IP address, browser type, device information, and cookies.</li>
          </ul>

          <h2>4. How We Use Your Data</h2>
          <p>We use personal data for the following purposes:</p>
          <ul>
            <li>To respond to demo requests and contact form submissions</li>
            <li>To provide information about MoleScan services</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>5. Legal Basis for Processing</h2>
          <p>
            We process personal data on the following legal bases: consent (for
            marketing communications), legitimate interests (for responding to
            enquiries and improving our services), and legal obligation (for
            regulatory compliance).
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the
            purposes for which it was collected. Contact form and demo request data
            is retained for a maximum of 24 months unless you request earlier
            deletion.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under the UK GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>Object to processing</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>.
          </p>

          <h2>8. Contact</h2>
          <p>
            For any questions about this privacy policy or your personal data,
            please contact: <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
```

- [ ] **Step 2: Create Cookie Policy page**

Create `molescan-website/app/cookie-policy/page.tsx`:

```tsx
import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "MoleScan cookie policy. How we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">Cookie Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help the website function properly and provide
            information to the website owner.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>The MoleScan website uses the following types of cookies:</p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function. They enable
            basic features such as page navigation and form submissions. They
            cannot be disabled.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use Vercel Analytics to understand how visitors interact with our
            website. These cookies collect anonymous usage data to help us improve
            the site. They are only set with your consent.
          </p>

          <h2>3. Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Most browsers
            allow you to block or delete cookies. However, blocking essential
            cookies may affect website functionality.
          </p>

          <h2>4. Contact</h2>
          <p>
            For questions about our cookie policy, contact us at{" "}
            <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>.
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
```

- [ ] **Step 3: Create Terms of Use page**

Create `molescan-website/app/terms-of-use/page.tsx`:

```tsx
import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "MoleScan website terms of use.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">Terms of Use</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>1. About This Website</h2>
          <p>
            This website is operated by Dermme Health Ltd, trading as MoleScan™.
            By using this website, you agree to these terms of use.
          </p>

          <h2>2. Information Only</h2>
          <p>
            The content on this website is provided for general informational
            purposes only. It does not constitute medical advice, diagnosis, or
            treatment. Healthcare professionals should exercise their own clinical
            judgement at all times.
          </p>

          <h2>3. No Clinical Advice</h2>
          <p>
            Nothing on this website should be interpreted as clinical guidance or a
            substitute for professional medical advice. The information presented
            describes the MoleScan platform and its capabilities. It is not
            intended to guide clinical decision-making outside the platform.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            MoleScan™ is a trademark of Dermme Health Ltd. All content on this
            website, including text, graphics, logos, and images, is the property
            of Dermme Health Ltd and is protected by copyright and intellectual
            property laws.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Dermme Health Ltd makes no warranties about the completeness,
            reliability, or accuracy of the information on this website. Use of
            this website is at your own risk.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales.
          </p>

          <h2>7. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>.
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
```

- [ ] **Step 4: Create GDPR & Data Protection page**

Create `molescan-website/app/gdpr-data-protection/page.tsx`:

```tsx
import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "GDPR & Data Protection",
  description: "How MoleScan complies with UK GDPR and data protection requirements.",
};

export default function GDPRDataProtectionPage() {
  return (
    <>
      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">GDPR & Data Protection</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>Our Commitment to Data Protection</h2>
          <p>
            Dermme Health Ltd, operating as MoleScan™, is committed to protecting
            personal data in accordance with the UK General Data Protection
            Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2>Data Controller</h2>
          <p>
            Dermme Health Ltd is the data controller for personal data collected
            through the MoleScan website. For clinical platform data, the
            relationship between Dermme Health Ltd and deploying organisations is
            governed by data processing agreements.
          </p>

          <h2>UK Data Residency</h2>
          <p>
            All personal and clinical data processed by MoleScan is stored within
            the United Kingdom. We do not transfer personal data outside the UK.
          </p>

          <h2>Security Measures</h2>
          <p>We implement appropriate technical and organisational measures including:</p>
          <ul>
            <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
            <li>Role-based access controls</li>
            <li>Regular security assessments</li>
            <li>Incident response procedures</li>
          </ul>

          <h2>Data Subject Rights</h2>
          <p>
            Individuals have the right to access, rectify, erase, restrict, and
            port their personal data, as well as the right to object to
            processing. Requests can be submitted to{" "}
            <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>.
          </p>

          <h2>Data Protection Impact Assessments</h2>
          <p>
            MoleScan conducts Data Protection Impact Assessments (DPIAs) for
            processing activities that are likely to result in a high risk to
            individuals, in line with ICO guidance.
          </p>

          <h2>ICO Registration</h2>
          <p>
            Dermme Health Ltd is registered with the Information Commissioner&apos;s
            Office (ICO).
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
```

- [ ] **Step 5: Create Clinical Safety Statement page**

Create `molescan-website/app/clinical-safety-statement/page.tsx`:

```tsx
import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Clinical Safety Statement",
  description: "MoleScan clinical safety statement. Our approach to clinical safety and risk management.",
};

export default function ClinicalSafetyStatementPage() {
  return (
    <>
      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">Clinical Safety Statement</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>Clinical Safety Framework</h2>
          <p>
            MoleScan™ is committed to clinical safety. Our platform is designed
            with clinical safety as a foundational requirement, aligned with
            DCB0129 (manufacturer) and DCB0160 (deploying organisation) clinical
            risk management standards.
          </p>

          <h2>Clinician-Led Assessment</h2>
          <p>
            MoleScan is a clinician-led platform. Every assessment is initiated by
            a healthcare professional and reviewed by a UK consultant
            dermatologist. The AI component provides decision support — it does not
            make autonomous clinical decisions.
          </p>
          <p>
            The final clinical decision always rests with the referring clinician.
            MoleScan provides structured evidence to support, not replace, clinical
            judgement.
          </p>

          <h2>Clinical Safety Officer</h2>
          <p>
            MoleScan maintains a designated Clinical Safety Officer (CSO)
            responsible for the clinical safety case, hazard identification and
            management, and clinical incident reporting.
          </p>

          <h2>Hazard Management</h2>
          <p>
            A clinical hazard log is maintained and reviewed regularly. Potential
            clinical hazards are identified, assessed, and mitigated through the
            clinical risk management process.
          </p>

          <h2>Incident Reporting</h2>
          <p>
            MoleScan operates a clinical incident reporting process. All clinical
            incidents are investigated, and findings are fed back into the clinical
            safety case and hazard log to drive continuous improvement.
          </p>

          <h2>Scope of Use</h2>
          <p>
            MoleScan is a clinical workflow and triage platform. It is not a
            diagnostic device. It supports clinicians in assessing and triaging
            skin lesions by providing AI-assisted pre-screening and UK consultant
            dermatologist review. Final diagnosis requires clinical assessment and,
            where indicated, histopathological confirmation.
          </p>

          <h2>Contact</h2>
          <p>
            For clinical safety enquiries, contact us at{" "}
            <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>.
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add app/privacy-policy/ app/cookie-policy/ app/terms-of-use/ app/gdpr-data-protection/ app/clinical-safety-statement/
git commit -m "feat: add all 5 legal pages (privacy, cookies, terms, GDPR, clinical safety)"
```

---

## Task 16: SEO Infrastructure (Sitemap, Robots, llms.txt)

**Files:**
- Create: `molescan-website/app/sitemap.ts`
- Create: `molescan-website/app/robots.ts`
- Create: `molescan-website/public/llms.txt`

- [ ] **Step 1: Create sitemap generator**

Create `molescan-website/app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://molescan.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/for-clinics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/for-nhs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about/how-molescan-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/clinical-governance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/request-demo`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms-of-use`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/gdpr-data-protection`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/clinical-safety-statement`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
```

- [ ] **Step 2: Create robots.txt config**

Create `molescan-website/app/robots.ts`:

```ts
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://molescan.co.uk";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
```

- [ ] **Step 3: Create llms.txt**

Create `molescan-website/public/llms.txt`:

```
# MoleScan

> Clinician-led, AI-assisted skin lesion assessment and triage platform for healthcare professionals.

MoleScan combines AI-powered image analysis with UK consultant dermatologist review to deliver structured skin lesion assessment reports within 24 hours.

## Key Facts

- Every assessment is reviewed by a UK consultant dermatologist
- Results delivered within 24 hours
- Accepts smartphone and dermoscopic images
- Designed for private clinics and NHS primary care
- Not a medical device — a clinical workflow and triage platform
- Operated by Dermme Health Ltd, registered in England & Wales

## Pages

- [Home](https://molescan.co.uk/)
- [For Clinics](https://molescan.co.uk/for-clinics)
- [For NHS & ICBs](https://molescan.co.uk/for-nhs)
- [How MoleScan Works](https://molescan.co.uk/about/how-molescan-works)
- [Clinical Governance](https://molescan.co.uk/about/clinical-governance)
- [Resources](https://molescan.co.uk/resources)
- [Contact](https://molescan.co.uk/contact)
- [Request Demo](https://molescan.co.uk/request-demo)
```

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts app/robots.ts public/llms.txt
git commit -m "feat: add sitemap, robots.txt (allowing AI crawlers), and llms.txt"
```

---

## Task 17: Cookie Consent Banner

**Files:**
- Create: `molescan-website/components/layout/CookieBanner.tsx`
- Modify: `molescan-website/app/layout.tsx`

- [ ] **Step 1: Create CookieBanner component**

Create `molescan-website/components/layout/CookieBanner.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("molescan-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    localStorage.setItem("molescan-cookie-consent", "accepted");
    setVisible(false);
  }

  function acceptEssential() {
    localStorage.setItem("molescan-cookie-consent", "essential-only");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-brand-text/80 flex-grow">
          We use cookies to improve your experience on our website. Essential
          cookies are required for the site to function. Analytics cookies help
          us understand how you use our site.{" "}
          <a
            href="/cookie-policy"
            className="text-brand-teal hover:text-brand-deep-teal underline"
          >
            Learn more
          </a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={acceptEssential}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm bg-brand-teal text-white rounded-lg hover:bg-brand-soft-teal transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add CookieBanner to root layout**

In `molescan-website/app/layout.tsx`, add the import and component.

Add import at top with other imports:
```tsx
import CookieBanner from "@/components/layout/CookieBanner";
```

Add `<CookieBanner />` after `<Footer />` inside the `<body>`:
```tsx
<body className="font-sans min-h-screen flex flex-col">
  <Navbar />
  <main className="flex-grow">{children}</main>
  <Footer />
  <CookieBanner />
</body>
```

- [ ] **Step 3: Commit**

```bash
git add components/layout/CookieBanner.tsx app/layout.tsx
git commit -m "feat: add GDPR cookie consent banner"
```

---

## Task 18: Final Build Verification

- [ ] **Step 1: Run production build**

```bash
cd molescan-website
npm run build
```

Expected: Build succeeds with no errors. All 13 pages statically generated.

- [ ] **Step 2: Run production preview**

```bash
npm run start
```

Visit all pages and verify:
- `http://localhost:3000/` — Homepage renders fully
- `http://localhost:3000/for-clinics` — For Clinics page
- `http://localhost:3000/for-nhs` — For NHS page
- `http://localhost:3000/about/how-molescan-works` — How It Works
- `http://localhost:3000/about/clinical-governance` — Clinical Governance
- `http://localhost:3000/resources` — Resources
- `http://localhost:3000/contact` — Contact with form
- `http://localhost:3000/request-demo` — Request Demo with form
- `http://localhost:3000/privacy-policy` — Privacy Policy
- `http://localhost:3000/cookie-policy` — Cookie Policy
- `http://localhost:3000/terms-of-use` — Terms of Use
- `http://localhost:3000/gdpr-data-protection` — GDPR
- `http://localhost:3000/clinical-safety-statement` — Clinical Safety
- `http://localhost:3000/sitemap.xml` — XML sitemap
- `http://localhost:3000/robots.txt` — Robots file
- Cookie banner appears on first visit

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "feat: complete MoleScan website - all pages, components, SEO, and forms"
```
