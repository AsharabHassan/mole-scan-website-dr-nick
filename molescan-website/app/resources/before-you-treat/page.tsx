import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Before You Treat: Why Skin Lesion Assessment Matters",
  description:
    "Why every treatment plan should begin with lesion assessment — reducing risk, improving safety, and protecting practitioners.",
  openGraph: {
    title: "Before You Treat: Why Skin Lesion Assessment Matters",
    description:
      "Why every treatment plan should begin with lesion assessment — reducing risk, improving safety, and protecting practitioners.",
    type: "article",
  },
};

export default function BeforeYouTreatPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    {
      name: "Before You Treat: Why Skin Lesion Assessment Matters",
      url: "/resources/before-you-treat",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-gray-50">
        {/* ── Article Header ── */}
        <section className="pt-10 md:pt-14 pb-8 md:pb-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-brand-text/60 hover:text-brand-teal text-sm mb-8 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Back to resources
            </Link>

            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-xs font-semibold text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded">
                Clinical Practice
              </span>
              <span className="text-xs text-brand-text/50">6 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-deep-navy leading-[1.1] mb-4">
              Before You Treat: Why Skin Lesion Assessment Matters
            </h1>
          </div>
        </section>

        {/* ── Article Body ── */}
        <article className="pb-16 md:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-brand-text/85 text-[17px] md:text-[18px] leading-[1.75] space-y-10">
              <div className="space-y-4">
                <p>More patients than ever are seeking aesthetic treatments.</p>
                <p>Clearer skin.</p>
                <p>Even tone.</p>
                <p>Younger-looking results.</p>
                <p>
                  At the same time, advanced technologies — laser, IPL,
                  radio-frequency — are now widely available across clinics.
                </p>
                <p>
                  That combination has changed the landscape of aesthetic
                  practice.
                </p>
              </div>

              <div className="space-y-4">
                <p>But there is a gap that often gets overlooked.</p>
                <p>
                  Many clinics offering these treatments are not
                  dermatology-led.
                </p>
                <p>And that&rsquo;s where risk begins to emerge.</p>
              </div>

              <div className="space-y-4">
                <p>Skin lesions are common.</p>
                <p>Most are benign.</p>
                <p>But not all.</p>
                <p>
                  And early malignant lesions — particularly melanoma — can
                  look deceptively harmless to the naked eye.
                </p>
                <p>Flat. Symmetrical. Even in colour.</p>
                <p>
                  Easy to overlook, unless you are specifically trained to
                  recognise subtle warning signs.
                </p>
              </div>

              <div className="space-y-4">
                <p>That is the challenge.</p>
                <p>
                  Because in a busy clinic setting, lesion assessment is not
                  always the primary focus.
                </p>
                <p>The patient is there for treatment.</p>
                <p>The lesion is incidental.</p>
                <p>
                  And unless the clinician is actively looking for it — it may
                  not even be recognised.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Even when it is recognised, the assessment is often informal.
                </p>
                <p>A quick glance.</p>
                <p>A gut feeling that it&rsquo;s probably fine.</p>
                <p>A judgement call.</p>
                <p>
                  And in some cases, the decision to proceed is made without
                  any structured assessment at all.
                </p>
              </div>

              <div className="space-y-4">
                <p>Most of the time, nothing happens.</p>
                <p>But occasionally, that decision carries consequences.</p>
              </div>

              <div className="space-y-4">
                <p>
                  Because if a malignant lesion is present in the treatment
                  area, and an energy-based procedure is performed over it,
                  the situation changes.
                </p>
                <p>
                  Laser or IPL can alter the visible characteristics of the
                  lesion.
                </p>
                <p>Pigment patterns may shift.</p>
                <p>Borders may blur.</p>
                <p>Surface features may change.</p>
                <p>What was once recognisable… becomes less so.</p>
              </div>

              <div className="space-y-4">
                <p>The result is not immediate harm.</p>
                <p>The real risk is delay.</p>
                <p>Delay in recognising the lesion.</p>
                <p>Delay in referral.</p>
                <p>Delay in diagnosis.</p>
                <p>And when it comes to melanoma, delay matters.</p>
              </div>

              <div className="space-y-4">
                <p>This is why lesion assessment should not be incidental.</p>
                <p>It should be deliberate.</p>
              </div>

              <div className="space-y-4">
                <p className="text-brand-deep-navy font-semibold">
                  Not every lesion needs to be referred.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  But every lesion in a treatment area should be assessed
                  properly before proceeding.
                </p>
                <p>That does not mean over-referring.</p>
                <p>
                  It means making a decision based on something more than
                  instinct.
                </p>
              </div>

              <div className="space-y-4">
                <p>In many clinics, that structure does not exist.</p>
                <p>Assessment varies from one practitioner to another.</p>
                <p>Documentation is inconsistent.</p>
                <p>
                  And decision-making depends heavily on individual experience.
                </p>
              </div>

              <div className="space-y-4">
                <p>A structured approach changes that.</p>
                <p>
                  It introduces consistency into something that is otherwise
                  subjective.
                </p>
                <p>
                  It ensures that lesions are not just noticed — but
                  evaluated.
                </p>
                <p>And it creates a clear outcome:</p>
                <p>Reassure.</p>
                <p>Monitor.</p>
                <p>Or refer.</p>
              </div>

              <div className="space-y-4">
                <p>
                  That&rsquo;s where systems like MoleScan fit into clinical
                  practice.
                </p>
                <p>Not to replace judgement — but to support it.</p>
                <p>To bring structure into the consultation.</p>
                <p>
                  And to ensure that safety is built into the workflow, not
                  added as an afterthought.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Because in aesthetic medicine, the focus is often on results.
                </p>
                <p>
                  But safe results start with the right decision at the very
                  beginning.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-gray-200/70">
                <p className="pt-6">You do not need to refer every mole.</p>
                <p>But you do need to know why you didn&rsquo;t.</p>
                <p>And that is what separates informal judgement…</p>
                <p className="text-brand-deep-navy font-semibold">
                  from a clinically governed decision.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ── Bottom CTA ── */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-teal/10 border border-brand-teal/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-brand-deep-navy mb-1">
                  Bring structure to your lesion assessment.
                </h3>
                <p className="text-brand-text/70 text-sm leading-relaxed">
                  Request a demo to see how MoleScan supports safer, structured
                  decision-making in real clinical workflows.
                </p>
              </div>
              <Link
                href="/request-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-teal text-white font-semibold text-sm hover:bg-brand-deep-teal transition-all duration-200 flex-shrink-0 shadow-sm"
              >
                Request Demo
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
