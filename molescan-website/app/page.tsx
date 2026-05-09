import type { Metadata } from "next";
import HomepageHero from "@/components/sections/HomepageHero";
import StepProcess from "@/components/sections/StepProcess";
import AudienceCard from "@/components/sections/AudienceCard";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTABand from "@/components/sections/CTABand";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Card from "@/components/ui/Card";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "MoleScan™ — Dermatologist-Led Skin Lesion Assessment",
  description:
    "Dermatologist-led skin lesion assessment reviewed by UK GPwSI dermatologists and consultant dermatologists. Dermoscopic imaging with expert reports within 24 hours. For aesthetic clinics, beauty therapists, podiatrists, and NHS primary care.",
  openGraph: {
    title: "MoleScan™ — Dermatologist-Led Skin Lesion Assessment",
    description:
      "Expert mole and skin lesion assessment for clinics and NHS. Dermatologist-reviewed reports in 24 hours.",
  },
};


const howItWorksSteps = [
  {
    number: 1,
    title: "Capture",
    description:
      "The practitioner photographs the skin lesion using a smartphone dermoscope — capturing high-quality dermoscopic images required for clinical assessment.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Clinical Review",
    description:
      "Every case is reviewed by a UK GPwSI clinician with specialist dermatology expertise.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Report in 24 Hours",
    description:
      "A structured, RAG-rated clinical report is delivered within 24 hours. Clear outcomes — reassure, monitor, or refer — so practitioners can act with confidence.",
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
    title: "Doctor-Led Clinical Review — Every Case",
    description:
      "No assessment leaves MoleScan without review by a UK GPwSI clinician with specialist expertise in dermatology. Every case includes qualified clinical judgement.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Answers in 24 Hours — Not Weeks",
    description:
      "Avoid delays in care and unnecessary referrals. MoleScan delivers structured, actionable reports within one working day.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "RAG-Rated Outcomes You Can Act On",
    description:
      "Every report delivers a clear outcome: GREEN (reassure / monitor), AMBER (review / consider referral), RED (urgent referral). No ambiguity — clear next steps for the practitioner.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Clinically Governed & Compliant",
    description:
      "Aligned with DCB0129 clinical safety standards. Fully GDPR compliant with UK data residency. Comprehensive audit trail for every assessment. Designed for safe integration into clinical workflows.",
  },
];

const complianceBadges = [
  {
    label: "DCB0129 Aligned",
    desc: "Clinical safety framework for digital health systems.",
    icon: (
      <svg className="w-5 h-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: "GDPR Compliant",
    desc: "UK data residency with encryption in transit and at rest.",
    icon: (
      <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    label: "CQC Registered",
    desc: "Regulated healthcare service under the Care Quality Commission.",
    icon: (
      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "GMC-Registered Doctors",
    desc: "All our doctors hold current UK GMC registration.",
    icon: (
      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
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

      <HomepageHero />


      {/* ── Problem Statement ── */}
      <SectionWrapper background="white" id="the-challenge">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Moles and Skin Lesions Need Clinical Expertise</h2>
            <p className="text-brand-text/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you&rsquo;re a GP deciding if a lesion warrants a 2-week-wait referral, or a
              clinic identifying a lesion in a treatment area — the question is the
              same: <strong className="text-brand-deep-navy">is it safe to proceed?</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 md:p-8 border-l-4 border-l-brand-teal">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-deep-navy mb-2">For NHS Primary Care</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    A significant proportion of urgent skin cancer referrals are for benign lesions,
                    placing pressure on secondary care dermatology services. Primary care needs a
                    structured, clinically governed triage pathway — with timely review by GPwSI
                    clinicians experienced in dermatology — before referral.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 border-l-4 border-l-indigo-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-deep-navy mb-2">For Private Clinics</h3>
                  <p className="text-brand-text/70 leading-relaxed">
                    You run a clinic — aesthetic, beauty, podiatry, physiotherapy, or general
                    practice. You encounter skin lesions regularly, but dermatology is not your
                    core specialty. Referring every case externally leads to delays, disrupted
                    workflows, and frustrated patients. You need a fast, clinically reliable answer
                    to guide safe decision-making.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-10">
            <p className="text-brand-deep-blue text-lg font-semibold">
              MoleScan gives both audiences the same outcome:{" "}
              <span className="text-brand-teal">a structured, GPwSI dermatology doctor-led clinical assessment within 24 hours.</span>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── How MoleScan Works ── */}
      <SectionWrapper background="soft-blue">
        <StepProcess
          title="How MoleScan Works"
          subtitle="A simple, structured process — from image capture to clinician-reviewed report. No specialist dermatology training required from the practitioner."
          steps={howItWorksSteps}
        />
      </SectionWrapper>

      {/* ── Two Audiences ── */}
      <SectionWrapper background="white" id="who-is-molescan-for">
        <div className="text-center mb-12">
          <h2 className="mb-4">Built for Two Settings. One Clinical Standard.</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            MoleScan supports both private clinics and NHS organisations with the same
            doctor-led, clinically governed triage platform — adapted to each workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AudienceCard
            title="For Private Clinics"
            description="Whether you run an aesthetic, beauty, podiatry, physiotherapy, or general practice — you will encounter skin lesions, but dermatology is not your core specialty. MoleScan provides a rapid, GPwSI dermatology doctor-led clinical assessment within 24 hours, so you can make safe, informed decisions without disrupting your workflow."
            bulletPoints={[
              "Keep treatments and appointments on track",
              "You don't diagnose — clinical decisions are supported by GPwSI review",
              "Full audit trail protects you and your client",
              "RAG-rated outcomes: reassure, monitor, or refer",
              "Designed for all non-dermatology clinical settings",
            ]}
            ctaLabel="Learn More"
            ctaHref="/for-clinics"
          />
          <AudienceCard
            title="For NHS & ICBs"
            description="Reduce pressure on 2-week-wait dermatology pathways. MoleScan enables structured triage at primary care level, with timely review by GPwSI clinicians experienced in dermatology — ensuring only appropriate cases are escalated to secondary care."
            bulletPoints={[
              "Reduce unnecessary 2WW referrals at source",
              "Every case reviewed by a UK GPwSI clinician",
              "Structured RAG-rated reports within 24 hours",
              "Aligned with DCB0129, GDPR, and DTAC requirements",
              "Scalable across multiple GP practices and ICBs",
            ]}
            ctaLabel="Learn More"
            ctaHref="/for-nhs"
          />
        </div>
      </SectionWrapper>

      {/* ── Platform Differentiators ── */}
      <SectionWrapper background="soft-blue" id="why-molescan">
        <FeatureGrid
          title="Why MoleScan?"
          subtitle="A doctor-led clinical triage platform built for safety, consistency, and speed."
          features={differentiators}
          columns={2}
        />
      </SectionWrapper>

      {/* ── Compliance & Trust ── */}
      <SectionWrapper background="white" id="compliance">
        <div className="text-center mb-12">
          <h2 className="mb-4">Trusted. Governed. Compliant.</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            MoleScan is designed to meet the clinical safety, governance, and data protection
            standards expected by both private clinics and NHS organisations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {complianceBadges.map((badge) => (
            <Card key={badge.label} className="p-5 text-center">
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mx-auto mb-4">
                {badge.icon}
              </div>
              <h3 className="text-base font-bold text-brand-deep-navy mb-1">{badge.label}</h3>
              <p className="text-brand-text/60 text-sm leading-relaxed">{badge.desc}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <CTABand
        title="See MoleScan in Action"
        subtitle="Request a no-obligation demo and see how MoleScan supports safe, structured skin lesion triage — whether you're a clinic or an NHS organisation."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
        secondaryButtonLabel="Speak to our team"
        secondaryButtonHref="/contact"
        trustItems={["Reports within 24 hours", "GMC-registered clinicians", "CQC-registered service"]}
      />
    </>
  );
}
