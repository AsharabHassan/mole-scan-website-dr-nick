import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schema";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://molescan.co.uk";
const ARTICLE_PATH = "/resources/before-you-treat-skin-lesion-assessment";
const TITLE = "Before You Treat: Why Skin Lesion Assessment Matters";
const DESCRIPTION =
  "Why every aesthetic treatment plan should begin with structured lesion assessment — reducing risk, avoiding diagnostic delay, and protecting both patients and practitioners.";

export const metadata: Metadata = {
  title: `${TITLE} — MoleScan Resources`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: `${SITE_URL}${ARTICLE_PATH}`,
  },
};

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: TITLE, url: ARTICLE_PATH },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${ARTICLE_PATH}` },
    author: {
      "@type": "Person",
      name: "Dr Nick Nosina",
      jobTitle:
        "NHS GP | GP with Specialist Interest in Dermatology (GPwSI) | Aesthetic Doctor",
      affiliation: { "@type": "Organization", name: "MoleScan" },
    },
    publisher: {
      "@type": "Organization",
      name: "MoleScan",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.svg` },
    },
    articleSection: "Clinical Practice",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Article Header ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft-blue/60 to-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-brand-teal/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-8 md:pb-12">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-teal hover:gap-2 transition-all duration-200 mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-semibold">
              Clinical Practice
            </span>
            <span className="text-xs text-brand-text/50">6 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-deep-navy leading-[1.1] mb-6">
            {TITLE}
          </h1>

          <p className="text-brand-text/70 text-lg md:text-xl leading-relaxed">
            As cosmetic medicine and aesthetic technology continue to evolve,
            more patients than ever are seeking treatments to refine,
            rejuvenate, and restore their skin. With that growth comes a quiet
            but critical safety question every clinic must answer — what
            happens before treatment begins.
          </p>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-brand-text/85 text-[17px] leading-[1.75]">
          <p className="mb-5">
            As cosmetic medicine and aesthetic technology continue to evolve,
            more patients than ever are seeking treatments designed to improve
            skin quality, reduce pigmentation, tighten skin, remove vascular
            lesions, or reverse visible signs of ageing.
          </p>

          <ul className="mb-5 pl-5 list-disc marker:text-brand-teal space-y-1.5">
            <li>Laser treatments</li>
            <li>IPL</li>
            <li>RF microneedling</li>
            <li>Chemical resurfacing</li>
            <li>Pigment correction</li>
            <li>Tattoo removal</li>
          </ul>

          <p className="mb-5">
            Energy-based treatments are now widely available across private
            clinics throughout the UK. For many patients, these treatments are
            safe, effective, and transformative. However, there is an important
            clinical reality that is often overlooked:{" "}
            <span className="font-semibold text-brand-deep-navy">
              not every lesion in a treatment area is benign, and not every
              suspicious lesion is recognised before treatment begins.
            </span>
          </p>

          <SectionHeading>The challenge with skin lesions in aesthetic practice</SectionHeading>

          <p className="mb-5">
            Many skin cancers — particularly early melanoma — can appear
            deceptively subtle. Some may resemble freckles, sun spots,
            seborrhoeic keratoses, post-inflammatory pigmentation, vascular
            lesions, or otherwise &ldquo;normal&rdquo; moles. In early stages,
            malignant lesions may not immediately appear alarming to the naked
            eye. This is one reason why dermoscopy has become such an
            important part of modern skin lesion assessment.
          </p>

          <p className="mb-5">
            Cancer Research UK notes that dermoscopy allows clinicians to
            examine skin lesions in far greater detail than visual inspection
            alone. NICE guidance similarly recommends urgent suspected cancer
            referral when dermoscopy findings raise suspicion for melanoma.
          </p>

          <SectionHeading>Why this matters before cosmetic treatment</SectionHeading>

          <p className="mb-5">
            The concern is not simply whether a lesion is eventually diagnosed.{" "}
            <span className="font-semibold text-brand-deep-navy">
              Timing matters.
            </span>{" "}
            If a suspicious lesion is overlooked and cosmetic treatment
            proceeds first, the clinical picture can become significantly more
            complicated.
          </p>

          <p className="mb-5">
            Energy-based treatments may alter pigmentation, vascularity,
            surface architecture, inflammation, or visible border definition.
            This can make future assessment more difficult, and in some cases
            visible warning signs may become partially obscured following
            treatment. Delayed recognition of melanoma can have serious
            consequences. The NHS highlights that melanoma is a skin cancer
            capable of spreading to other parts of the body, and that early
            diagnosis remains critically important.
          </p>

          <SectionHeading>The issue is rarely negligence</SectionHeading>

          <p className="mb-5">
            In many clinics, lesion assessment happens informally — often
            through a quick visual check, a brief conversation, or a judgement
            call. Sometimes the lesion is recognised, sometimes it is assumed
            to be benign, and sometimes it is not noticed at all.
          </p>

          <p className="mb-5">
            This is not necessarily because practitioners are careless. It is
            because aesthetic medicine increasingly intersects with dermatology
            while the volume of patients with complex skin presentations
            continues to rise. Many aesthetic practitioners are highly
            experienced in cosmetic treatments, but identifying early melanoma
            requires a very different clinical skillset. Even within
            healthcare, melanoma diagnosis can be challenging.
          </p>

          <SectionHeading>The growing role of dermoscopy</SectionHeading>

          <p className="mb-5">
            Dermoscopy has become one of the most important tools in skin
            lesion assessment. It allows clinicians to visualise structures
            beneath the skin surface that cannot usually be seen with the naked
            eye. This improves assessment of pigment networks, asymmetry,
            vascular patterns, regression structures, and other morphological
            features associated with malignancy.
          </p>

          <p className="mb-5">
            Scottish melanoma guidance recommends dermoscopic assessment of
            suspicious pigmented lesions as part of specialist evaluation
            pathways. Increasingly, dermoscopy is also being integrated into
            teledermatology and digital triage pathways throughout the NHS.
          </p>

          <SectionHeading>Why structured assessment matters</SectionHeading>

          <p className="mb-5">
            The key issue is not whether every lesion should be referred
            urgently, as that would overwhelm specialist services. The issue
            is ensuring lesions are{" "}
            <span className="font-semibold text-brand-deep-navy">
              assessed in a structured and clinically defensible way
            </span>{" "}
            before treatment decisions are made.
          </p>

          <p className="mb-5">
            Structured lesion assessment introduces consistency into clinical
            workflows. This may include standardised image capture,
            dermoscopic imaging, documented lesion history, risk-factor
            screening, structured triage, and appropriate escalation where
            necessary. Importantly, structured assessment does not replace
            clinician judgement — it supports it.
          </p>

          <SectionHeading>The medico-legal reality</SectionHeading>

          <p className="mb-5">
            As advanced treatments become more accessible, expectations around
            clinical governance are also changing. If a suspicious lesion is
            treated cosmetically before appropriate assessment, questions may
            later arise regarding recognition, documentation, consent, referral
            decisions, and overall clinical process.
          </p>

          <p className="mb-5">
            This is particularly relevant in settings where multiple
            practitioners may be involved in patient care. Aesthetic clinics
            are no longer simply treatment environments. Increasingly, they
            are becoming frontline skin-contact services, and with that comes
            additional clinical responsibility.
          </p>

          <SectionHeading>The future of aesthetic practice</SectionHeading>

          <p className="mb-5">
            Modern aesthetic practice is moving towards greater integration of
            governance, documentation, dermoscopy, and structured triage. Not
            because every lesion is dangerous, but because{" "}
            <span className="font-semibold text-brand-deep-navy">
              variation in lesion assessment creates risk.
            </span>
          </p>

          <p className="mb-5">
            The goal is not to turn aesthetic clinics into dermatology
            departments. The goal is to ensure that lesions are assessed
            appropriately before cosmetic intervention takes place. That
            protects patients, practitioners, clinics, and referral pathways
            alike.
          </p>

          <SectionHeading>Final thoughts</SectionHeading>

          <p className="mb-5">
            Most lesions encountered in aesthetic practice will ultimately
            prove benign. However, melanoma does not always announce itself
            clearly. When uncertainty exists, structure matters, because
            patient safety should begin before treatment starts — not after
            concerns are identified later.
          </p>

          <blockquote className="mt-8 mb-2 border-l-4 border-brand-teal bg-brand-soft-blue/40 rounded-r-xl px-6 py-5">
            <p className="text-lg md:text-xl font-semibold text-brand-deep-navy leading-snug">
              Patient safety should begin before treatment starts —
              <br />
              not after concerns are identified later.
            </p>
          </blockquote>

          <Divider />

          {/* ── Author ── */}
          <div className="mt-2 mb-2 rounded-2xl border border-gray-100 bg-brand-soft-blue/30 px-6 py-6">
            <p className="text-xs uppercase tracking-wider font-semibold text-brand-text/50 mb-2">
              Author
            </p>
            <p className="text-lg font-bold font-display text-brand-deep-navy mb-1">
              Dr Nick Nosina
            </p>
            <p className="text-sm text-brand-text/70 leading-relaxed">
              NHS GP | GP with Specialist Interest in Dermatology (GPwSI) |
              Aesthetic Doctor
              <br />
              Founder, MoleScan®
            </p>
          </div>

          <Divider />

          {/* ── References ── */}
          <h2 className="text-xl md:text-2xl font-bold font-display text-brand-deep-navy mt-2 mb-4">
            References
          </h2>
          <ol className="pl-5 list-decimal marker:text-brand-teal space-y-3 text-[15px] text-brand-text/75 leading-[1.7]">
            <li>
              Cancer Research UK. (2024). <em>Dermoscopy and skin cancer
              assessment.</em> Cancer Research UK.
            </li>
            <li>
              Cancer Research UK. (2024). <em>Referral to a specialist for
              melanoma skin cancer.</em> Cancer Research UK.
            </li>
            <li>
              Chuchu, N., Dinnes, J., Takwoingi, Y., Matin, R., Bayliss, S. E.,
              Davenport, C., &amp; Deeks, J. J. (2018). Teledermatology for
              diagnosing skin cancer in adults.{" "}
              <em>Cochrane Database of Systematic Reviews,</em> 2018(12),
              CD013193.
            </li>
            <li>
              Dinnes, J., Deeks, J. J., Chuchu, N., Saleh, D., Bayliss, S. E.,
              Patel, L., Davenport, C., &amp; Matin, R. (2018). Dermoscopy,
              with and without visual inspection, for diagnosing melanoma in
              adults. <em>Cochrane Database of Systematic Reviews,</em>{" "}
              2018(12), CD011902.
            </li>
            <li>
              National Institute for Health and Care Excellence. (2022).{" "}
              <em>Suspected cancer: Recognition and referral (NG12).</em> NICE.
            </li>
            <li>
              National Institute for Health and Care Excellence. (2022).{" "}
              <em>Melanoma: Assessment and management (NG14).</em> NICE.
            </li>
            <li>
              NHS England. (2022).{" "}
              <em>
                Suspected skin cancer two week wait pathway optimisation
                guidance.
              </em>{" "}
              NHS England.
            </li>
            <li>
              NHS England. (2023).{" "}
              <em>Skin cancer timed diagnostic pathway.</em> NHS England.
            </li>
            <li>
              NHS England. (2023). <em>Faster diagnosis standard.</em> NHS
              England.
            </li>
            <li>
              NHS UK. (2024). <em>Melanoma skin cancer.</em> NHS.
            </li>
            <li>
              Scottish Intercollegiate Guidelines Network. (2023).{" "}
              <em>
                Cutaneous melanoma guideline and diagnostic indicators.
              </em>{" "}
              NHS Scotland.
            </li>
            <li>
              The British Association of Dermatologists. (2021).{" "}
              <em>
                Quality standards for teledermatology and skin cancer pathways.
              </em>{" "}
              British Association of Dermatologists.
            </li>
            <li>
              World Health Organization. (2023). <em>Skin cancers.</em> World
              Health Organization.
            </li>
          </ol>
        </div>
      </article>

      {/* ── Soft CTA Band ── */}
      <section className="bg-white pb-16 md:pb-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-soft-blue/70 rounded-2xl px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex items-start md:items-center gap-5 flex-1">
              <div className="w-14 h-14 rounded-full bg-white border border-brand-teal/15 flex items-center justify-center text-brand-teal flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-display text-brand-deep-navy mb-1.5">
                  Want to explore MoleScan in practice?
                </h3>
                <p className="text-brand-text/70 text-sm md:text-base leading-relaxed">
                  Request a demo to see how MoleScan supports safe, structured
                  skin lesion assessment in real clinical workflows.
                </p>
              </div>
            </div>
            <Link
              href="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-teal text-white font-semibold text-sm transition-all duration-300 hover:bg-brand-deep-teal hover:-translate-y-0.5 shadow-md hover:shadow-lg flex-shrink-0"
            >
              Request Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Divider() {
  return <hr className="my-8 border-0 h-px bg-gray-200" aria-hidden="true" />;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-[28px] font-bold font-display text-brand-deep-navy leading-snug mt-10 mb-5">
      {children}
    </h2>
  );
}
