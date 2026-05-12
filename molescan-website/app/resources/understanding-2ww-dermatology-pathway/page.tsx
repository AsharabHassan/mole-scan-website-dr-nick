import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://molescan.uk";
const ARTICLE_PATH = "/resources/understanding-2ww-dermatology-pathway";
const TITLE = "Understanding the 2-Week-Wait Dermatology Pathway";
const META_TITLE =
  "2 Week Wait Dermatology Pathway: NHS Skin Cancer Referral Explained";
const DESCRIPTION =
  "2WW dermatology pathway explained: how NHS skin cancer referral works, why the 2WW skin cancer conversion rate in the UK has fallen, regional variation, and the role of structured lesion triage before referral.";

const KEY_TAKEAWAYS = [
  "Urgent suspected skin cancer referrals in England rose from 371 per 100,000 in 2009/10 to 1,345 per 100,000 in 2022/23.",
  "The 2WW skin cancer conversion rate in the UK has fallen from approximately 8.3% (2009/10) to 6.2% (2022/23).",
  "Regional variation in 2WW skin cancer referrals is wide — conversion rates ranged from 2.4% to 11.9% across sub-ICB regions in 2022/23.",
  "How to reduce inappropriate 2WW dermatology referrals is a question of structured triage and clarity before referral, not of raising thresholds unsafely.",
];

const FAQS = [
  {
    question: "What is the 2-week-wait dermatology pathway?",
    answer:
      "The 2-week-wait (2WW) pathway is an NHS process that requires patients with suspected cancer to be seen by a specialist within two weeks of referral. In dermatology, the 2 week wait skin cancer referral pathway is used to triage suspected melanoma and other skin cancers urgently.",
  },
  {
    question: "Who can refer to the 2WW dermatology pathway?",
    answer:
      "Any NHS-registered clinician can make a 2WW skin cancer referral — most commonly GPs in primary care, but also other practitioners working within NHS pathways.",
  },
  {
    question: "What is the current 2WW skin cancer conversion rate in the UK?",
    answer:
      "NHS England data shows the conversion rate fell from approximately 8.3% in 2009/10 to 6.2% in 2022/23. Conversion rates vary widely between regions, from 2.4% to 11.9% in 2022/23.",
  },
  {
    question: "Why are 2WW dermatology referrals rising?",
    answer:
      "Skin cancer referrals are rising due to a combination of public awareness, increased detection effort, and clinician caution in primary care. NHS England data shows the urgent suspected skin cancer referral rate rose from 371 per 100,000 in 2009/10 to 1,345 per 100,000 in 2022/23.",
  },
  {
    question: "How can inappropriate 2WW dermatology referrals be reduced?",
    answer:
      "Reducing inappropriate referrals is best achieved by improving clinical clarity before referral — through structured lesion assessment, dermoscopy, documentation, and timely review by a GP with specialist interest in dermatology.",
  },
];

export const metadata: Metadata = {
  title: `${META_TITLE} | MoleScan`,
  description: DESCRIPTION,
  alternates: {
    canonical: ARTICLE_PATH,
  },
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
    datePublished: "2026-05-12",
    dateModified: "2026-05-13",
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
    articleSection: "NHS & Pathways",
  };

  const faqSchema = generateFAQSchema(FAQS);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              NHS &amp; Pathways
            </span>
            <span className="text-xs text-brand-text/50">5 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-deep-navy leading-[1.1] mb-6">
            {TITLE}
          </h1>

          <p className="text-brand-text/70 text-lg md:text-xl leading-relaxed">
            Why skin cancer referrals continue to rise — and why structured
            triage matters more than ever.
          </p>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-brand-text/85 text-[17px] leading-[1.75]">
          <aside
            aria-label="Key takeaways"
            className="not-prose mb-10 rounded-2xl border border-brand-teal/15 bg-brand-soft-blue/40 px-6 py-5"
          >
            <p className="text-xs uppercase tracking-wider font-semibold text-brand-teal mb-3">
              Key takeaways
            </p>
            <ul className="space-y-2 list-disc pl-5 marker:text-brand-teal text-[15.5px] leading-[1.7] text-brand-text/85">
              {KEY_TAKEAWAYS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </aside>

          <SectionHeading>Introduction</SectionHeading>

          <p className="mb-5">
            The NHS 2-week-wait (2WW) pathway was designed to ensure that
            patients with suspected cancer are assessed urgently by specialist
            services. In dermatology, this pathway — widely referred to as the
            2 week wait dermatology referral pathway — plays a critical role in
            identifying melanoma and other skin cancers early, when treatment
            outcomes are significantly better. But over the last decade, the
            system has come under increasing pressure, not because clinicians
            are doing the wrong thing, but because skin cancer referrals have
            risen dramatically while the number of confirmed cancers has not
            increased at the same pace.
          </p>

          <SectionHeading>A decade of rising referrals</SectionHeading>

          <p className="mb-5">
            According to NHS England data, urgent suspected skin cancer
            referrals in England have increased substantially over recent
            years. The crude urgent suspected skin cancer referral rate rose
            from{" "}
            <span className="font-semibold text-brand-deep-navy">
              371 per 100,000 population in 2009/10
            </span>{" "}
            to{" "}
            <span className="font-semibold text-brand-deep-navy">
              1,345 per 100,000 population in 2022/23
            </span>
            . That represents a major increase in demand placed on dermatology
            services across England.
          </p>

          <p className="mb-5">
            At the same time, the 2WW skin cancer conversion rate in the UK —
            the percentage of urgent referrals that ultimately result in a
            cancer diagnosis — has gradually fallen. NHS England data shows conversion rates
            decreasing from approximately{" "}
            <span className="font-semibold text-brand-deep-navy">
              8.3% in 2009/10
            </span>{" "}
            to{" "}
            <span className="font-semibold text-brand-deep-navy">
              6.2% in 2022/23
            </span>
            . In simple terms: more patients are being referred urgently, but
            proportionally fewer referrals are resulting in a confirmed cancer
            diagnosis.
          </p>

          <Figure
            src="/images/resources/2ww-figure-1-referral-growth.jpg"
            alt="NHS England dashboard showing urgent suspected skin cancer referrals rising from 2009/10 to 2022/23, with a callout highlighting 18,624 USC referrals."
            number={1}
            caption="NHS England data demonstrating substantial growth in urgent suspected skin cancer referrals between 2009/10 and 2022/23."
            source="NHS England Cancer Referral Conversion and Detection Dashboard / NDRS Cancer Waiting Times Data."
          />

          <SectionHeading>What this means in practice</SectionHeading>

          <p className="mb-5">
            This does not mean referrals are inappropriate. In fact, most
            clinicians are doing exactly what they should be doing — referring
            cautiously when uncertainty exists. Early melanoma can be subtle,
            and many malignant lesions can look benign to the naked eye,
            particularly in early stages.
          </p>

          <p className="mb-5">
            The problem is not over-caution. The problem is that{" "}
            <span className="font-semibold text-brand-deep-navy">
              referral decisions are often made without structured lesion
              assessment support beforehand.
            </span>
          </p>

          <SectionHeading>The pressure on dermatology services</SectionHeading>

          <p className="mb-5">
            As referral numbers rise, dermatology services inevitably become
            stretched. Clinic capacity becomes limited, waiting lists increase,
            and specialist time must be distributed across an increasingly
            large volume of lesions that are ultimately benign.
          </p>

          <p className="mb-5">
            NHS England&rsquo;s pathway optimisation guidance acknowledges the
            importance of improving triage and pathway efficiency in order to
            reduce avoidable pressure on specialist services. The challenge is
            maintaining safety while improving selectivity, because no
            clinician wants to miss a melanoma.
          </p>

          <Figure
            src="/images/resources/2ww-figure-2-conversion-rate-trend.jpg"
            alt="NHS England dashboard showing the conversion rate of urgent suspected skin cancer referrals trending downwards over time alongside rising referral volumes."
            number={2}
            caption="Despite increasing referral volumes, conversion rates have gradually fallen over time, reflecting increasing pathway pressure and diagnostic demand."
            source="NHS England Cancer Referral Conversion and Detection Dashboard / NDRS Cancer Waiting Times Data."
          />

          <SectionHeading>
            Regional variation highlights the scale of the issue
          </SectionHeading>

          <p className="mb-5">
            Regional variation in 2WW skin cancer referrals across England is
            also significant. For the financial year ending March 2023, NHS
            data demonstrated wide variation between sub-ICB regions:
          </p>

          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-100 shadow-card">
            <table className="w-full text-[15.5px] leading-relaxed text-brand-text/85">
              <caption className="sr-only">
                Sub-ICB variation in urgent suspected skin cancer referrals,
                conversion rates, and detection rates, England 2022/23.
              </caption>
              <thead className="bg-brand-soft-blue/40 text-brand-deep-navy text-left">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Metric
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Range across sub-ICB regions (2022/23)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <th scope="row" className="px-5 py-3 font-semibold text-brand-deep-navy">
                    Referral rate
                  </th>
                  <td className="px-5 py-3">434 to 2,506 per 100,000 population</td>
                </tr>
                <tr>
                  <th scope="row" className="px-5 py-3 font-semibold text-brand-deep-navy">
                    Conversion rate
                  </th>
                  <td className="px-5 py-3">2.4% to 11.9%</td>
                </tr>
                <tr>
                  <th scope="row" className="px-5 py-3 font-semibold text-brand-deep-navy">
                    Detection rate
                  </th>
                  <td className="px-5 py-3">40% to 84%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-5">
            This variability reflects differences in referral behaviour, local
            access to dermatology, triage pathways, and population
            demographics. But it also highlights a broader issue:{" "}
            <span className="font-semibold text-brand-deep-navy">
              there is currently no universally structured approach to skin
              lesion triage before referral.
            </span>
          </p>

          <SectionHeading>
            A closer look: Hertfordshire &amp; West Essex ICB
          </SectionHeading>

          <p className="mb-5">
            Data from Herts &amp; West Essex ICB illustrates the scale of
            demand clearly. For the year 2022/23:
          </p>

          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-100 shadow-card">
            <table className="w-full text-[15.5px] leading-relaxed text-brand-text/85">
              <caption className="sr-only">
                Hertfordshire &amp; West Essex ICB: urgent suspected skin cancer
                referrals, cancers detected, and overall conversion rate,
                2022/23.
              </caption>
              <thead className="bg-brand-soft-blue/40 text-brand-deep-navy text-left">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Herts &amp; West Essex ICB (2022/23)
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Figure
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <th scope="row" className="px-5 py-3 font-semibold text-brand-deep-navy">
                    Urgent suspected skin cancer referrals
                  </th>
                  <td className="px-5 py-3">18,624</td>
                </tr>
                <tr>
                  <th scope="row" className="px-5 py-3 font-semibold text-brand-deep-navy">
                    Cancers detected
                  </th>
                  <td className="px-5 py-3">852</td>
                </tr>
                <tr>
                  <th scope="row" className="px-5 py-3 font-semibold text-brand-deep-navy">
                    Overall conversion rate
                  </th>
                  <td className="px-5 py-3">4.6%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-5">
            That means the vast majority of lesions referred urgently were
            ultimately non-cancerous. Again, this does not mean referrals were
            wrong. It demonstrates how difficult lesion assessment can be in
            frontline practice.
          </p>

          <Figure
            src="/images/resources/2ww-figure-3-herts-west-essex.jpg"
            alt="NHS England dashboard highlighting Hertfordshire and West Essex ICB conversion rate of 4.6% for urgent suspected skin cancer referrals in 2022/23."
            number={3}
            caption="Example regional variation data demonstrating referral activity and conversion rates within Herts & West Essex ICB."
            source="NHS England Cancer Referral Conversion and Detection Dashboard / NDRS Cancer Waiting Times Data."
          />

          <SectionHeading>Why decision-making before referral matters</SectionHeading>

          <p className="mb-5">
            The safest option in uncertainty is often referral. From an
            individual clinician&rsquo;s perspective, that makes complete
            sense. But when multiplied across the healthcare system, this
            creates substantial pressure. How to reduce inappropriate 2WW
            dermatology referrals is therefore not a question of reducing
            referrals overall, nor of raising thresholds unsafely. It is a
            question of{" "}
            <span className="font-semibold text-brand-deep-navy">
              improving clarity before referral decisions are made.
            </span>
          </p>

          <SectionHeading>The role of structured lesion triage</SectionHeading>

          <p className="mb-5">
            In many settings, skin lesion assessment remains informal: a quick
            look, a gut feeling, a judgement call. Sometimes this happens
            without dermoscopy, without documentation, or without recognising
            the lesion at all. Structured lesion triage introduces consistency
            into that process, not to replace clinician judgement, but to
            support it.
          </p>

          <p className="mb-5">
            A structured workflow can help standardise image capture, improve
            documentation, support earlier recognition of concerning features,
            and guide appropriate onward management. That may include
            reassurance, monitoring, routine review, or urgent referral where
            appropriate.
          </p>

          <SectionHeading>
            Maintaining safety while improving efficiency
          </SectionHeading>

          <p className="mb-5">
            The NHS timed diagnostic pathway for skin cancer exists for an
            important reason. Melanoma remains one of the most serious skin
            cancers, and early diagnosis saves lives. But improving pathway
            efficiency is also important, because every avoidable urgent
            referral consumes specialist capacity that could otherwise be
            directed towards higher-risk patients.
          </p>

          <p className="mb-5">
            The future of dermatology pathways is unlikely to involve fewer
            referrals. It is more likely to involve{" "}
            <span className="font-semibold text-brand-deep-navy">
              better triage, better imaging, better documentation, and more
              structured decision-making before referral occurs.
            </span>
          </p>

          <SectionHeading>Final thoughts</SectionHeading>

          <p className="mb-5">
            Skin cancer referrals are rising rapidly across England.
            Dermatology services continue to face growing demand. Clinicians
            remain under pressure to make difficult decisions in situations
            where uncertainty is common. Structured lesion assessment cannot
            eliminate uncertainty entirely, but it can reduce variation — and
            reducing variation is one of the most important ways to improve
            both patient safety and pathway efficiency.
          </p>

          <blockquote className="mt-8 mb-2 border-l-4 border-brand-teal bg-brand-soft-blue/40 rounded-r-xl px-6 py-5">
            <p className="text-lg md:text-xl font-semibold text-brand-deep-navy leading-snug">
              Reducing variation is one of the most important ways to improve
              both patient safety and pathway efficiency.
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
              National Institute for Health and Care Excellence. (2022).{" "}
              <em>Suspected cancer: Recognition and referral (NG12).</em> NICE.{" "}
              <ReferenceLink href="https://www.nice.org.uk/guidance/ng12">
                nice.org.uk/guidance/ng12
              </ReferenceLink>
            </li>
            <li>
              NHS England. (2022).{" "}
              <em>
                Suspected skin cancer two week wait pathway optimisation
                guidance.
              </em>{" "}
              NHS England.{" "}
              <ReferenceLink href="https://www.england.nhs.uk/publication/suspected-skin-cancer-two-week-wait-pathway-optimisation-guidance/">
                england.nhs.uk/publication/suspected-skin-cancer-two-week-wait-pathway-optimisation-guidance
              </ReferenceLink>
            </li>
            <li>
              NHS England. (2023).{" "}
              <em>Skin cancer timed diagnostic pathway.</em> NHS England.{" "}
              <ReferenceLink href="https://www.england.nhs.uk/publication/skin-cancer-timed-diagnostic-pathway/">
                england.nhs.uk/publication/skin-cancer-timed-diagnostic-pathway
              </ReferenceLink>
            </li>
            <li>
              NHS England. (2023). <em>Faster diagnosis standard.</em> NHS
              England.{" "}
              <ReferenceLink href="https://www.england.nhs.uk/cancer/faster-diagnosis/">
                england.nhs.uk/cancer/faster-diagnosis
              </ReferenceLink>
            </li>
            <li>
              NHS England. (2023).{" "}
              <em>Cancer referral conversion and detection dashboard.</em> NHS
              England.
            </li>
            <li>
              NHS England. (2023).{" "}
              <em>
                National Disease Registration Service (NDRS) Cancer Waiting
                Times Data.
              </em>{" "}
              NHS England.
            </li>
            <li>
              NHS UK. (2024). <em>Melanoma skin cancer.</em> NHS.{" "}
              <ReferenceLink href="https://www.nhs.uk/conditions/melanoma-skin-cancer/">
                nhs.uk/conditions/melanoma-skin-cancer
              </ReferenceLink>
            </li>
            <li>
              World Health Organization. (2023). <em>Skin cancers.</em> World
              Health Organization.{" "}
              <ReferenceLink href="https://www.who.int/news-room/fact-sheets/detail/skin-cancers">
                who.int/news-room/fact-sheets/detail/skin-cancers
              </ReferenceLink>
            </li>
          </ol>

          <Divider />

          {/* ── FAQ ── */}
          <h2
            id="faq"
            className="text-xl md:text-2xl font-bold font-display text-brand-deep-navy mt-2 mb-5"
          >
            Frequently asked questions
          </h2>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-100 bg-white px-5 py-4 open:bg-brand-soft-blue/20"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-semibold text-brand-deep-navy">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-brand-teal text-xl leading-none transition-transform group-open:rotate-45 select-none"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-brand-text/80">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
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

function ReferenceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-teal hover:underline break-all"
    >
      {children}
    </a>
  );
}

function Figure({
  src,
  alt,
  number,
  caption,
  source,
}: {
  src: string;
  alt: string;
  number: number;
  caption: string;
  source: string;
}) {
  return (
    <figure className="my-8">
      <div className="rounded-2xl border border-gray-100 shadow-card overflow-hidden bg-white">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="w-full h-auto"
          sizes="(min-width: 768px) 768px, 100vw"
        />
      </div>
      <figcaption className="mt-3 text-sm text-brand-text/60 leading-relaxed">
        <span className="font-semibold text-brand-deep-navy">
          Figure {number}.
        </span>{" "}
        {caption}
        <br />
        <span className="text-xs text-brand-text/50">Source: {source}</span>
      </figcaption>
    </figure>
  );
}
