"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useInView } from "@/components/hooks/useInView";

type Category = "Clinical Practice" | "NHS & Pathways" | "Governance" | "Clinics";

interface Article {
  slug: string;
  title: string;
  description: string;
  category: Category;
  readTime: string;
  featured?: boolean;
  icon?: "hospital" | "shield" | "scope";
}

const ARTICLES: Article[] = [
  // ── Featured (3) ──
  {
    slug: "understanding-2ww-dermatology-pathway",
    title: "Understanding the 2-Week-Wait Dermatology Pathway",
    description:
      "A practical overview of the NHS suspected skin cancer referral pathway, current pressures, and where structured triage can support safer decision-making.",
    category: "NHS & Pathways",
    readTime: "5 min read",
    featured: true,
    icon: "hospital",
  },
  {
    slug: "before-you-treat-skin-lesion-assessment",
    title: "Before You Treat: Why Skin Lesion Assessment Matters",
    description:
      "Why every treatment plan should begin with lesion assessment — reducing risk, improving safety, and protecting practitioners.",
    category: "Clinical Practice",
    readTime: "6 min read",
    featured: true,
    icon: "shield",
  },
  {
    slug: "dermoscopy-in-practice",
    title: "Dermoscopy in Practice: What Good Looks Like",
    description:
      "A practical guide to dermoscopy, what to look for, common patterns, and when to refer.",
    category: "Clinical Practice",
    readTime: "7 min read",
    featured: true,
    icon: "scope",
  },
  // ── All Resources (8) ──
  {
    slug: "why-2ww-referrals-under-pressure",
    title: "Why 2WW Referrals Are Under Pressure",
    description:
      "Exploring the key drivers behind rising demand and what it means for primary care and patients.",
    category: "NHS & Pathways",
    readTime: "4 min read",
  },
  {
    slug: "what-happens-after-2ww-referral",
    title: "What Happens After a 2WW Referral?",
    description:
      "A step-by-step look at the patient journey and where delays can occur.",
    category: "NHS & Pathways",
    readTime: "5 min read",
  },
  {
    slug: "common-mistakes-skin-lesion-assessment",
    title: "Common Mistakes in Skin Lesion Assessment",
    description:
      "Practical tips to avoid pitfalls and improve diagnostic confidence.",
    category: "Clinical Practice",
    readTime: "6 min read",
  },
  {
    slug: "what-clinically-governed-actually-means",
    title: "What ‘Clinically Governed’ Actually Means",
    description:
      "Understanding clinical governance in digital health platforms.",
    category: "Governance",
    readTime: "6 min read",
  },
  {
    slug: "dcb0129-explained-for-clinics",
    title: "DCB0129 Explained for Clinics",
    description: "A simple guide to the NHS standard for digital clinical safety.",
    category: "Governance",
    readTime: "5 min read",
  },
  {
    slug: "reduce-risk-before-laser-ipl",
    title: "How Clinics Can Reduce Risk Before Laser/IPL Treatments",
    description:
      "A structured approach to lesion assessment before energy-based procedures.",
    category: "Clinics",
    readTime: "6 min read",
  },
  {
    slug: "choosing-safe-skin-lesion-triage-platform",
    title: "Choosing a Safe Skin Lesion Triage Platform",
    description:
      "Key considerations for clinics evaluating triage solutions.",
    category: "Clinics",
    readTime: "5 min read",
  },
  {
    slug: "benign-vs-suspicious-lesions",
    title: "Benign vs Suspicious Lesions: What to Look For",
    description:
      "A quick reference guide with images and clinical examples.",
    category: "Clinical Practice",
    readTime: "4 min read",
  },
];

const FILTERS: ("All" | Category)[] = [
  "All",
  "Clinical Practice",
  "NHS & Pathways",
  "Governance",
  "Clinics",
];

function FeaturedIcon({ name }: { name: Article["icon"] }) {
  const common = "w-7 h-7";
  if (name === "hospital") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v3.818m3-3.818v3.818" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 15h1.5" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
  }
  // scope (magnifying glass over a circle)
  return (
    <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function CategoryPill({ category }: { category: Category }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-semibold">
      {category}
    </span>
  );
}

function ReadArticleLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-brand-teal text-sm font-semibold hover:gap-2 transition-all duration-200"
    >
      Read article
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </Link>
  );
}

export default function ResourcesContent() {
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");
  const [headerRef, headerInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [featuredRef, featuredInView] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [allRef, allInView] = useInView<HTMLDivElement>({ threshold: 0.05 });

  const featured = useMemo(
    () =>
      ARTICLES.filter(
        (a) => a.featured && (activeFilter === "All" || a.category === activeFilter)
      ),
    [activeFilter]
  );

  const all = useMemo(
    () =>
      ARTICLES.filter(
        (a) => !a.featured && (activeFilter === "All" || a.category === activeFilter)
      ),
    [activeFilter]
  );

  return (
    <>
      {/* ── Page Header ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft-blue/60 to-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-brand-teal/5 rounded-full blur-[120px]" />
        </div>

        <div ref={headerRef} className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-8 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className={`lg:col-span-7 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h1 className="text-5xl md:text-6xl font-bold font-display text-brand-deep-navy leading-[1.05] mb-5">
                Resources
              </h1>
              <p className="text-brand-text/70 text-lg md:text-xl leading-relaxed max-w-xl">
                Clinical guidance, pathway insights, and best practices for safe
                skin lesion assessment.
              </p>
            </div>

            {/* Right illustration — paper + magnifying glass */}
            <div className={`hidden lg:flex lg:col-span-5 justify-end transition-all duration-700 delay-200 ${headerInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="relative w-[320px] h-[260px]">
                {/* Decorative dot grid backdrop */}
                <div
                  className="absolute top-2 left-4 w-24 h-24 rounded-full opacity-50"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(20,184,166,0.35) 1.5px, transparent 1.5px)",
                    backgroundSize: "12px 12px",
                  }}
                  aria-hidden="true"
                />
                {/* Document */}
                <div className="absolute right-8 top-2 w-44 h-56 bg-white rounded-xl shadow-xl border border-gray-100 p-5">
                  <div className="space-y-2">
                    <div className="h-2 bg-brand-deep-navy/15 rounded" />
                    <div className="h-2 bg-brand-deep-navy/15 rounded w-5/6" />
                    <div className="h-2 bg-brand-deep-navy/10 rounded w-4/6" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-gray-200 rounded" />
                    <div className="h-2 bg-gray-200 rounded" />
                    <div className="h-2 bg-gray-200 rounded w-5/6" />
                    <div className="h-2 bg-gray-200 rounded w-3/6" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-gray-200 rounded" />
                    <div className="h-2 bg-gray-200 rounded w-4/6" />
                  </div>
                </div>
                {/* Magnifying glass */}
                <svg
                  className="absolute bottom-2 right-2 w-28 h-28 text-brand-deep-navy"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <circle cx="10" cy="10" r="6.5" fill="white" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── Filter tabs ── */}
          <div
            className={`mt-10 md:mt-14 transition-all duration-700 delay-300 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="inline-flex flex-wrap items-center gap-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-1.5">
              {FILTERS.map((f) => {
                const active = activeFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-brand-teal text-white shadow-sm"
                        : "text-brand-text/70 hover:text-brand-deep-navy hover:bg-gray-50"
                    }`}
                    aria-pressed={active}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Guidance ── */}
      {featured.length > 0 && (
        <section className="bg-white" ref={featuredRef}>
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-brand-deep-navy mb-8">
              Featured Guidance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((article, i) => (
                <article
                  key={article.slug}
                  className={`bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col ${
                    featuredInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: featuredInView ? `${i * 100}ms` : "0ms", transitionDuration: "500ms" }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-5">
                    <FeaturedIcon name={article.icon} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <CategoryPill category={article.category} />
                    <span className="text-xs text-brand-text/50">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-deep-navy leading-snug mb-3">
                    {article.title}
                  </h3>
                  <p className="text-brand-text/70 text-sm leading-relaxed mb-5 flex-grow">
                    {article.description}
                  </p>
                  <ReadArticleLink href={`/resources/${article.slug}`} />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── All Resources ── */}
      {all.length > 0 && (
        <section className="bg-white" ref={allRef}>
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-brand-deep-navy mb-8">
              All Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {all.map((article, i) => (
                <article
                  key={article.slug}
                  className={`bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col ${
                    allInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: allInView ? `${i * 60}ms` : "0ms", transitionDuration: "500ms" }}
                >
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <CategoryPill category={article.category} />
                    <span className="text-xs text-brand-text/50">{article.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-brand-deep-navy leading-snug mb-2.5">
                    {article.title}
                  </h3>
                  <p className="text-brand-text/70 text-sm leading-relaxed mb-4 flex-grow">
                    {article.description}
                  </p>
                  <ReadArticleLink href={`/resources/${article.slug}`} />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state if filter excludes everything */}
      {featured.length === 0 && all.length === 0 && (
        <section className="bg-white">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <p className="text-brand-text/60">No articles in this category yet.</p>
          </div>
        </section>
      )}

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
