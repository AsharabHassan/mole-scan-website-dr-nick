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
    author: { "@type": "Organization", name: "MoleScan" },
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
            More patients than ever are seeking aesthetic treatments. As advanced
            technologies become widely available, lesion assessment has become a
            quiet but critical safety question that every clinic must answer.
          </p>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-brand-text/85 text-[17px] leading-[1.75]">
          <p className="mb-5">More patients than ever are seeking aesthetic treatments.</p>

          <p className="mb-5">
            Clearer skin.
            <br />
            Even tone.
            <br />
            Younger-looking results.
          </p>

          <p className="mb-5">
            At the same time, advanced technologies — laser, IPL, radio-frequency —
            are now widely available across clinics.
          </p>

          <p className="mb-5">
            That combination has changed the landscape of aesthetic practice.
          </p>

          <Divider />

          <p className="mb-5">But there is a gap that often gets overlooked.</p>

          <p className="mb-5">
            Many clinics offering these treatments are not dermatology-led.
          </p>

          <p className="mb-5">And that&rsquo;s where risk begins to emerge.</p>

          <Divider />

          <p className="mb-5">Skin lesions are common.</p>

          <p className="mb-5">Most are benign.</p>

          <p className="mb-5">But not all.</p>

          <p className="mb-5">
            And early malignant lesions — particularly melanoma — can look
            deceptively harmless to the naked eye.
          </p>

          <p className="mb-5 font-semibold text-brand-deep-navy">
            Flat. Symmetrical. Even in colour.
          </p>

          <p className="mb-5">
            Easy to overlook, unless you are specifically trained to recognise
            subtle warning signs.
          </p>

          <Divider />

          <p className="mb-5">That is the challenge.</p>

          <p className="mb-5">
            Because in a busy clinic setting, lesion assessment is not always the
            primary focus.
          </p>

          <p className="mb-5">
            The patient is there for treatment.
            <br />
            The lesion is incidental.
            <br />
            And unless the clinician is actively looking for it — it may not even
            be recognised.
          </p>

          <Divider />

          <p className="mb-5">
            Even when it is recognised, the assessment is often informal.
          </p>

          <p className="mb-5">
            A quick glance.
            <br />
            A gut feeling that it&rsquo;s probably fine.
            <br />
            A judgement call.
          </p>

          <p className="mb-5">
            And in some cases, the decision to proceed is made without any
            structured assessment at all.
          </p>

          <Divider />

          <p className="mb-5">Most of the time, nothing happens.</p>

          <p className="mb-5">But occasionally, that decision carries consequences.</p>

          <Divider />

          <p className="mb-5">
            Because if a malignant lesion is present in the treatment area, and an
            energy-based procedure is performed over it, the situation changes.
          </p>

          <p className="mb-5">
            Laser or IPL can alter the visible characteristics of the lesion.
          </p>

          <p className="mb-5">
            Pigment patterns may shift.
            <br />
            Borders may blur.
            <br />
            Surface features may change.
          </p>

          <p className="mb-5">What was once recognisable… becomes less so.</p>

          <Divider />

          <p className="mb-5">The result is not immediate harm.</p>

          <p className="mb-5 font-semibold text-brand-deep-navy">
            The real risk is delay.
          </p>

          <p className="mb-5">
            Delay in recognising the lesion.
            <br />
            Delay in referral.
            <br />
            Delay in diagnosis.
          </p>

          <p className="mb-5">And when it comes to melanoma, delay matters.</p>

          <Divider />

          <p className="mb-5">
            This is why lesion assessment should not be incidental.
          </p>

          <p className="mb-5 font-semibold text-brand-deep-navy">
            It should be deliberate.
          </p>

          <Divider />

          <p className="mb-5">Not every lesion needs to be referred.</p>

          <p className="mb-5">
            But every lesion in a treatment area should be assessed properly
            before proceeding.
          </p>

          <p className="mb-5">That does not mean over-referring.</p>

          <p className="mb-5">
            It means making a decision based on something more than instinct.
          </p>

          <Divider />

          <p className="mb-5">In many clinics, that structure does not exist.</p>

          <p className="mb-5">
            Assessment varies from one practitioner to another.
            <br />
            Documentation is inconsistent.
            <br />
            And decision-making depends heavily on individual experience.
          </p>

          <Divider />

          <p className="mb-5">A structured approach changes that.</p>

          <p className="mb-5">
            It introduces consistency into something that is otherwise subjective.
          </p>

          <p className="mb-5">
            It ensures that lesions are not just noticed — but evaluated.
          </p>

          <p className="mb-5">And it creates a clear outcome:</p>

          <ul className="mb-5 pl-5 list-disc marker:text-brand-teal space-y-1.5">
            <li>
              <span className="font-semibold text-brand-deep-navy">Reassure.</span>
            </li>
            <li>
              <span className="font-semibold text-brand-deep-navy">Monitor.</span>
            </li>
            <li>
              <span className="font-semibold text-brand-deep-navy">Or refer.</span>
            </li>
          </ul>

          <Divider />

          <p className="mb-5">
            That&rsquo;s where systems like MoleScan fit into clinical practice.
          </p>

          <p className="mb-5">Not to replace judgement — but to support it.</p>

          <p className="mb-5">To bring structure into the consultation.</p>

          <p className="mb-5">
            And to ensure that safety is built into the workflow, not added as an
            afterthought.
          </p>

          <Divider />

          <p className="mb-5">
            Because in aesthetic medicine, the focus is often on results.
          </p>

          <p className="mb-5">
            But safe results start with the right decision at the very beginning.
          </p>

          <Divider />

          <p className="mb-5">You do not need to refer every mole.</p>

          <p className="mb-5">But you do need to know why you didn&rsquo;t.</p>

          <blockquote className="mt-8 mb-2 border-l-4 border-brand-teal bg-brand-soft-blue/40 rounded-r-xl px-6 py-5">
            <p className="text-lg md:text-xl font-semibold text-brand-deep-navy leading-snug">
              And that is what separates informal judgement…
              <br />
              from a clinically governed decision.
            </p>
          </blockquote>
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
