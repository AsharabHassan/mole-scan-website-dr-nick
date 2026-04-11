# MoleScan Website — Design Specification

**Date:** 2026-04-07
**Status:** Approved
**Stack:** Next.js 15 (App Router) + Supabase + Tailwind CSS + Vercel

---

## 1. Product Context

MoleScan is a clinician-led, AI-assisted skin lesion assessment and triage platform operated by Dermme Health Ltd. It is **not** a medical device — it is a clinical workflow/triage SaaS that supports clinician decision-making.

**Core workflow:**
1. Clinician captures lesion images (smartphone or dermoscope)
2. Secure upload to MoleScan platform
3. AI-powered analysis and risk stratification
4. UK consultant dermatologist reviews every case
5. Structured report delivered within 24 hours
6. Referring clinician decides: reassure, monitor, or urgent referral

**Two audiences:**
- **Private clinics** (aesthetics, GPs, pharmacies, podiatrists): Need a safe, structured triage pathway for suspicious lesions without referring every case
- **NHS & ICBs**: Need to reduce 2-week-wait dermatology referral pressure while ensuring urgent cases aren't missed

**Website purpose:** Informational/marketing B2B site. No application functionality. Primary conversion is "Request Demo" — captures lead details, team follows up manually. No pricing on site.

---

## 2. Site Architecture

```
/                                → Homepage
/for-clinics                     → For Clinics
/for-nhs                         → For NHS & ICBs
/about/how-molescan-works        → How MoleScan Works
/about/clinical-governance       → Clinical Governance
/resources                       → Resources hub
/contact                         → Contact
/request-demo                    → Request Demo

Legal (footer only):
/privacy-policy
/cookie-policy
/terms-of-use
/gdpr-data-protection
/clinical-safety-statement
```

**Total pages:** 13 (8 content + 5 legal)

**Navigation bar:**
- Logo (left)
- Home | For Clinics | For NHS & ICBs | About (dropdown: How MoleScan Works, Clinical Governance) | Resources | Contact
- "Request Demo" CTA button (right, teal `#2FA4A9`)

---

## 3. Brand & Visual Design System

### 3.1 Colour Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Deep Blue | `#1E2A78` | Headings, nav, primary buttons |
| Secondary | Deep Navy | `#141B4D` | Hero backgrounds, footer |
| Background accent | Soft Blue | `#E8ECFF` | Alternating section backgrounds, cards |
| Accent | Teal Accent | `#2FA4A9` | CTA buttons (Request Demo), icons, highlights |
| Soft accent | Soft Teal | `#6FC9C5` | Hover states, gradients |
| Depth | Deep Teal | `#1F7A80` | Gradient depth, data visualisation (sparingly) |
| Background | Neutral BG | `#F7F9FC` | Page backgrounds |
| Cards | White | `#FFFFFF` | Card backgrounds |
| Text | Dark | `#1C1F21` | Body text |

**Distribution:** Core Blues 70-80%, Teals 10-20%, Neutrals 10%

### 3.2 Typography

**Font:** Inter (via `next/font/google`)

| Element | Size | Line Height |
|---------|------|-------------|
| H1 | 48px | 56px |
| H2 | 36px | 44px |
| H3 | 24px | 32px |
| H4 | 20px | 28px |
| Body | 16px | 24px |
| Small | 14px | 20px |

### 3.3 Button Styles

- **Primary CTA** (Request Demo): `#2FA4A9` bg, white text, hover `#6FC9C5`
- **Secondary CTA** (Learn More): `#1E2A78` bg, white text
- **Ghost/outline**: `#1E2A78` border, transparent bg

### 3.4 Layout

- Max content width: 1280px, centered
- Section padding: 80px vertical (desktop), 48px (mobile)
- Grid: 12-column via Tailwind
- Cards: white bg, `shadow-sm`, 16px padding, 8px border-radius
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

---

## 4. Page-by-Page Content Strategy

### 4.1 Homepage `/`

**Purpose:** Establish what MoleScan is, build credibility, route visitors to audience pages.

**Sections:**
1. **Hero** — Deep navy bg. Primary keyword headline. 24hr + consultant dermatologist proof points. Two CTAs: "For Clinics" / "For NHS & ICBs"
2. **Trust bar** — Badges (NHS compatible, GDPR compliant, UK consultant dermatologists)
3. **How it works** — 3-step summary (Capture → AI Triage → Dermatologist Report). Link to full process page.
4. **Audience cards** — "For Private Clinics" and "For NHS & ICBs" with tailored value props
5. **Key differentiators** — 3-4 feature cards
6. **Social proof** — Testimonial placeholders
7. **CTA band** — Request Demo

**SEO targets:** "AI skin lesion assessment platform", "clinician-led skin lesion triage"

### 4.2 For Clinics `/for-clinics`

**Purpose:** Convert private clinic decision-makers to demo requests.

**Sections:**
1. **Hero** — Problem-led: "You see suspicious lesions. You're not a dermatologist. Now what?"
2. **Pain points** — Slow referrals, patient expectations, medicolegal risk
3. **Solution** — MoleScan structured triage pathway
4. **Benefits grid** — 24hr reports, no special equipment, reduced referrals, audit trail
5. **How it works for your clinic** — 4-step walkthrough
6. **Use cases** — Aesthetic clinics, private GPs, pharmacies, podiatrists
7. **CTA** — Request Demo

**SEO targets:** "AI mole assessment for private clinics", "skin lesion triage platform for GPs"

### 4.3 For NHS & ICBs `/for-nhs`

**Purpose:** Convert NHS commissioners and ICB leads to demo requests.

**Sections:**
1. **Hero** — Problem-led: "Dermatology 2-week-wait referrals are overwhelming secondary care"
2. **The NHS problem** — 2WW stats, unnecessary referrals, cost, patient anxiety
3. **Solution** — Primary care triage via MoleScan
4. **Pathway diagram** — SVG showing MoleScan in NHS referral pathway
5. **Commissioner benefits** — Reduced 2WW pressure, cost savings, governance
6. **Compliance & standards** — DTAC, data governance, clinical safety
7. **CTA** — Request Demo / "Speak to our NHS team"

**SEO targets:** "NHS skin cancer triage solution", "reduce 2WW dermatology referrals", "AI skin lesion assessment NHS"

### 4.4 How MoleScan Works `/about/how-molescan-works`

**Purpose:** Detailed process explainer. Primary GEO target.

**Sections:**
1. **Overview statement**
2. **6-step process** — Each with icon, heading, description
3. **FAQ section** — Q&A matching search queries (FAQPage schema)
4. **CTA** — Request Demo

**SEO targets:** "how AI skin lesion assessment works", "AI-assisted dermoscopy process"

### 4.5 Clinical Governance `/about/clinical-governance`

**Purpose:** Build trust with NHS buyers. Critical E-E-A-T page.

**Sections:**
1. Governance framework overview
2. Clinical safety — DCB0129/DCB0160 alignment
3. Data protection — GDPR, encryption, UK data residency
4. Quality assurance — Consultant review, audit trail
5. Accessibility & standards — WCAG 2.2 AA, NHS service standard
6. FAQ section

**SEO targets:** "clinical governance AI dermatology", "clinical safety skin lesion AI platform"

### 4.6 Resources `/resources`

**Purpose:** Content hub for long-term SEO authority.

**Initial seed articles (3):**
- "Understanding the 2-Week-Wait Dermatology Pathway"
- "AI in Dermatology: What Clinicians Need to Know"
- "What to Look for in a Skin Lesion Triage Platform"

**Content pillars for growth:**
- AI in Dermatology
- NHS Pathways & Commissioning
- Clinical Practice Guides
- Governance & Compliance

### 4.7 Contact `/contact`

Simple form + company details (email, address, Companies House info). Supabase `contact_submissions`.

### 4.8 Request Demo `/request-demo`

**Sections:**
1. Headline: "See MoleScan in Action"
2. Value reminder (2-3 bullets)
3. Form: Full name, email, phone, organisation, role (dropdown), message (optional)
4. Trust signal: "No obligation. We'll be in touch within 24 hours."

Supabase `demo_requests`.

### 4.9 Legal Pages (5)

Privacy Policy, Cookie Policy, Terms of Use, GDPR & Data Protection, Clinical Safety Statement. Professional legal content. Not keyword-targeted.

---

## 5. SEO Implementation

### 5.1 Per-Page Metadata

| Page | Title | Meta Description |
|------|-------|-----------------|
| `/` | MoleScan™ — Clinician-Led, AI-Assisted Skin Lesion Assessment | AI-powered skin lesion assessment reviewed by UK consultant dermatologists. Results within 24 hours. For private clinics and NHS. Request a demo. |
| `/for-clinics` | AI Skin Lesion Assessment for Private Clinics — MoleScan™ | Give your clinic a safe, structured mole assessment pathway. AI-assisted triage reviewed by consultant dermatologists. No special equipment required. |
| `/for-nhs` | NHS Skin Cancer Triage Solution — Reduce 2WW Referrals — MoleScan™ | Help primary care triage skin lesions effectively. Reduce unnecessary 2-week-wait referrals with AI-assisted assessment and consultant dermatologist review. |
| `/about/how-molescan-works` | How MoleScan Works — AI-Assisted Skin Lesion Assessment Process | From image capture to consultant-reviewed report in 24 hours. Learn how MoleScan's 6-step clinician-led assessment pathway works. |
| `/about/clinical-governance` | Clinical Governance — MoleScan™ | How MoleScan ensures clinical safety, data protection, and quality assurance. DCB0129 alignment, GDPR compliance, consultant dermatologist oversight. |
| `/resources` | Resources — Skin Lesion Assessment Guides & Insights — MoleScan™ | Clinical guides, insights, and articles on AI-assisted dermatology, skin cancer pathways, and best practices. |
| `/contact` | Contact MoleScan™ | Get in touch with the MoleScan team. General enquiries, partnership discussions, and support. |
| `/request-demo` | Request a Demo — MoleScan™ | See MoleScan in action. Book a no-obligation demo of our clinician-led, AI-assisted skin lesion assessment platform. |

### 5.2 Schema Markup (JSON-LD)

**Global (layout):**
- `Organization` — name, url, logo, parentOrganization (Dermme Health Ltd), areaServed (UK)
- `BreadcrumbList` — auto-generated per page

**Homepage:**
- `Service` — serviceType, provider, audience (MedicalAudience: Clinician), areaServed

**How MoleScan Works:**
- `FAQPage` — wrapping FAQ accordion
- `HowTo` — wrapping 6-step process

**Clinical Governance:**
- `FAQPage`

**Request Demo:**
- `ContactPage`

### 5.3 Technical SEO

- `app/sitemap.ts` — auto-generated XML sitemap
- `app/robots.ts` — allow all crawlers
- `next/image` — WebP, lazy loading, alt text
- `next/font/google` — zero CLS
- Semantic HTML throughout
- Vercel Analytics for Core Web Vitals

---

## 6. GEO (Generative Engine Optimization)

### 6.1 Content Writing Rules

1. **Lead every section with a citable fact** — "MoleScan delivers consultant dermatologist-reviewed assessments within 24 hours" not "We're proud to offer..."
2. **Q&A format on every page** — FAQ sections matching real search queries
3. **Named clinical authority** — "Reviewed by [Name], Consultant Dermatologist"
4. **Comparative statements** — "Unlike traditional teledermatology, MoleScan combines AI pre-screening with consultant review"
5. **Specificity** — "24 hours" not "fast". "UK consultant dermatologists" not "expert clinicians"

### 6.2 Technical GEO

- `robots.txt` allows GPTBot, PerplexityBot, ClaudeBot, Bingbot
- Server components deliver full HTML (no JS-dependent content)
- Semantic HTML (`<article>`, `<section>`, descriptive headings)
- `llms.txt` at root for AI crawler guidance
- No content gated behind forms or login

---

## 7. Internal Linking Strategy

```
Homepage → /for-clinics, /for-nhs, /about/how-molescan-works, /request-demo
/for-clinics → /about/how-molescan-works, /about/clinical-governance, /request-demo
/for-nhs → /about/how-molescan-works, /about/clinical-governance, /request-demo
/about/how-molescan-works → /for-clinics, /for-nhs, /about/clinical-governance
/about/clinical-governance → /about/how-molescan-works, /request-demo
Every page → /request-demo (via CTABand component)
```

---

## 8. Supabase Schema

### 8.1 `demo_requests`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, auto-generated |
| full_name | text | Required |
| email | text | Required |
| phone | text | Optional |
| organisation | text | Required |
| role | text | Enum: GP, Dermatologist, Clinic Manager, NHS Commissioner, ICB Lead, Pharmacist, Other |
| message | text | Optional |
| source_page | text | Page the form was submitted from |
| created_at | timestamptz | Auto-generated |

### 8.2 `contact_submissions`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, auto-generated |
| full_name | text | Required |
| email | text | Required |
| subject | text | Required |
| message | text | Required |
| created_at | timestamptz | Auto-generated |

### 8.3 Form Handling

- Next.js Server Actions submit to Supabase via `@supabase/supabase-js`
- Client-side validation with HTML5 attributes
- Server-side validation before insert
- Success: "Thank you. We'll be in touch within 24 hours."
- Error: "Something went wrong. Please try again or email us directly."

---

## 9. Component Library

| Component | Description |
|-----------|-------------|
| `Navbar` | Sticky, transparent → white on scroll. Logo left, links center, CTA right. Mobile hamburger. |
| `Footer` | Deep navy bg. 4 columns: Branding, Nav links, Legal links, Contact. Small print bottom. |
| `Hero` | Full-width, deep navy bg. H1 + subtitle + CTAs. Optional background pattern. |
| `SectionWrapper` | Alternating white/soft-blue backgrounds. Consistent padding. |
| `FeatureCard` | Icon + heading + description. Benefits grids. |
| `StepCard` | Numbered step + icon + heading + description. Process flows. |
| `CTABand` | Full-width accent band. Heading + CTA button. Page section breaks. |
| `TestimonialCard` | Quote + name + role + org. Placeholder-ready. |
| `DemoForm` | Full lead capture form. Submits to Supabase. |
| `ContactForm` | General enquiry form. Submits to Supabase. |
| `FAQAccordion` | Expandable Q&A. Auto-injects FAQPage schema. |
| `TrustBar` | Horizontal badge/logo row. Below heroes. |
| `PathwayDiagram` | NHS referral pathway visual. SVG-based. |
| `AudienceCard` | Large routing card. Heading + bullets + CTA. Homepage audience split. |

---

## 10. Footer Specification

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo] MoleScan™                                               │
│  Clinician-led, AI-assisted skin lesion assessment              │
│  and triage platform for healthcare professionals.              │
│                                                                 │
│  Supporting structured, safe, and responsible                   │
│  skin lesion assessment pathways.                               │
├────────────────┬─────────────────┬──────────────────────────────┤
│  Navigation    │  Legal          │  Contact                     │
│  Home          │  Privacy Policy │  [email]                     │
│  For Clinics   │  Cookie Policy  │  [phone]                     │
│  For NHS & ICBs│  Terms of Use   │  [address]                   │
│  About         │  GDPR & Data    │                              │
│  Resources     │  Clinical Safety│                              │
│  Contact       │                 │                              │
├────────────────┴─────────────────┴──────────────────────────────┤
│  MoleScan™ is operated by Dermme Health Ltd                     │
│  Company registered in England & Wales.                         │
│  © 2026 MoleScan™. All rights reserved.                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## 11. Project Structure

```
molescan-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── for-clinics/page.tsx
│   ├── for-nhs/page.tsx
│   ├── about/
│   │   ├── how-molescan-works/page.tsx
│   │   └── clinical-governance/page.tsx
│   ├── resources/page.tsx
│   ├── contact/page.tsx
│   ├── request-demo/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── cookie-policy/page.tsx
│   ├── terms-of-use/page.tsx
│   ├── gdpr-data-protection/page.tsx
│   ├── clinical-safety-statement/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/ (Navbar, Footer, SectionWrapper)
│   ├── ui/ (Button, Card, Input, Accordion, Badge)
│   ├── sections/ (Hero, TrustBar, CTABand, FeatureGrid, StepProcess, FAQ, PathwayDiagram)
│   └── forms/ (DemoForm, ContactForm)
├── lib/
│   ├── supabase.ts
│   └── schema.ts
├── public/
│   ├── images/
│   └── llms.txt
├── styles/
│   └── globals.css
└── tailwind.config.ts
```

---

## 12. Deployment

- **Platform:** Vercel
- **Domain:** TBD (recommend `molescan.co.uk`)
- **Environment variables:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Analytics:** Vercel Analytics (Core Web Vitals)
- **Cookie consent:** Lightweight GDPR banner
