import type { Metadata } from "next";
import NHSHero from "@/components/sections/NHSHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FeatureGrid from "@/components/sections/FeatureGrid";
import PathwayDiagram from "@/components/sections/PathwayDiagram";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import Card from "@/components/ui/Card";
import AnimatedStat from "@/components/ui/AnimatedStat";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "NHS Skin Cancer Triage Solution — Reduce 2WW Referrals",
  description:
    "Help primary care triage skin lesions effectively. Reduce unnecessary 2-week-wait referrals with expert clinical assessment and dermatologist review.",
  openGraph: {
    title: "NHS Skin Cancer Triage Solution — Reduce 2WW Referrals — MoleScan™",
    description:
      "Help primary care triage skin lesions effectively. Reduce unnecessary 2-week-wait referrals with expert clinical assessment.",
  },
};

const commissionerBenefits = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Reduce Unnecessary 2WW Referrals",
    description:
      "MoleScan enables primary care clinicians to triage skin lesions before referral, reducing avoidable 2-week-wait submissions and improving pathway efficiency.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cost-Effective Pathway Management",
    description:
      "By identifying benign lesions at the primary care level, MoleScan reduces unnecessary secondary care appointments and associated diagnostic costs.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Clinically Governed & Safe",
    description:
      "Every case is reviewed by a UK GPwSI in Dermatology or Consultant Dermatologist. High-risk cases are clearly identified and directed to urgent referral pathways.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Scalable Across Primary Care Networks",
    description:
      "Deploy MoleScan across multiple GP practices and primary care networks (PCNs) within your ICB. Centralised reporting, audit, and clinical governance across all locations.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Reduce Routine Dermatology Waiting Times",
    description:
      "By reducing unnecessary 2WW referrals, MoleScan helps release capacity in secondary care — allowing routine and urgent dermatology patients to be seen sooner.",
  },
];

const complianceItems = [
  {
    title: "Clinical Safety",
    description: "Aligned with DCB0129 and DCB0160 clinical safety standards, with defined clinical risk management and oversight processes.",
    icon: (
      <div className="w-10 h-10 rounded-lg bg-brand-soft-blue flex items-center justify-center text-brand-teal shadow-sm">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Data Governance",
    description: "GDPR compliant with UK data residency. All data encrypted in transit and at rest, with role-based access control and audit logging.",
    icon: (
      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
    ),
  },
  {
    title: "DTAC Alignment",
    description: "Structured to meet NHS Digital Technology Assessment Criteria (DTAC) requirements, supporting future commissioning readiness.",
    icon: (
      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Accessibility",
    description: "Built to WCAG 2.2 AA standards, supporting accessible use across NHS and primary care environments.",
    icon: (
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div>
    ),
  },
];

const faqs = [
  {
    question: "How does MoleScan fit into existing NHS referral pathways?",
    answer:
      "MoleScan supports primary care decision-making within existing referral pathways. GPs and primary care practitioners use MoleScan to triage lesions before making a 2-week-wait referral. Benign cases can be managed in primary care, while suspicious cases are appropriately directed to urgent referral pathways with clear clinical guidance — helping reduce unnecessary 2WW referrals and free up specialist capacity.",
  },
  {
    question: "Is MoleScan a medical device?",
    answer:
      "MoleScan is a doctor-led clinical triage and workflow platform, not a standalone diagnostic medical device. It supports practitioner decision-making through structured assessment and UK GPwSI dermatologist review. Final clinical responsibility and decision-making remain with the treating clinician.",
  },
  {
    question: "What data governance standards does MoleScan meet?",
    answer:
      "MoleScan is fully GDPR compliant, with all patient data stored securely within the UK. The platform is aligned with NHS Digital Technology Assessment Criteria (DTAC), the Data Security and Protection Toolkit, and DCB0129/DCB0160 clinical safety standards, with encryption, audit logging, and role-based access controls in place.",
  },
  {
    question: "Can MoleScan be deployed across multiple practices within an ICB?",
    answer:
      "Yes. MoleScan is designed for scalable, multi-site deployment. ICBs can commission MoleScan across multiple GP practices and primary care settings, with centralised reporting, consistent clinical governance, and standardised triage processes.",
  },
  {
    question: "What evidence supports MoleScan's approach?",
    answer:
      "MoleScan's approach combines two established clinical methods: structured dermoscopic assessment for risk stratification, and specialist tele-dermatology review by UK clinicians. Both approaches are supported by strong evidence in the published literature. Contact us for a detailed clinical evidence summary.",
  },
];

export default function ForNHSPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "For NHS & ICBs", url: "/for-nhs" },
  ]);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <NHSHero />

      {/* NHS Problem Stats - Animated Counters */}
      <SectionWrapper background="white" id="stats">
        <div className="text-center mb-14">
          <h2 className="mb-4">The Dermatology Referral Challenge</h2>
          <p className="text-brand-text/70 text-lg max-w-3xl mx-auto">
            NHS dermatology services are under sustained pressure from rising
            2-week-wait referral volumes. A significant proportion of these
            referrals are for benign lesions that could be safely managed in
            primary care with appropriate specialist support — contributing to
            long waits for patients who need routine and urgent dermatology care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-10 text-center">
            <AnimatedStat
              value={95}
              suffix="%"
              label="of 2WW skin cancer referrals are for benign lesions"
            />
          </Card>
          <Card className="p-10 text-center">
            <AnimatedStat
              value={9}
              suffix="+ months"
              label="average wait for non-urgent dermatology appointments"
            />
          </Card>
          <Card className="p-10 text-center">
            <div className="text-5xl md:text-6xl font-bold font-display text-brand-teal mb-3">
              Rising
            </div>
            <p className="text-brand-text/70 text-base leading-relaxed">
              year-on-year increase in 2WW dermatology referrals
            </p>
          </Card>
        </div>
      </SectionWrapper>

      <div id="pathway">
        <PathwayDiagram />
      </div>

      <SectionWrapper background="white" id="commissioner-benefits">
        <FeatureGrid
          title="Benefits for NHS Commissioners"
          subtitle="MoleScan supports NHS service optimisation by enabling structured, clinically governed skin lesion triage at the primary care level."
          features={commissionerBenefits}
          columns={2}
        />
      </SectionWrapper>

      {/* Compliance & Clinical Governance */}
      <SectionWrapper background="soft-blue" id="compliance">
        <div className="text-center mb-14">
          <h2 className="mb-4">Compliance & Clinical Governance</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            MoleScan is designed to meet the governance, safety, and data
            standards expected of NHS-aligned digital clinical services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {complianceItems.map((item, index) => (
            <Card key={index}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-brand-text/70">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" id="nhs-faqs">
        <FAQSection faqs={faqs} schemaScript={JSON.stringify(faqSchema)} />
      </SectionWrapper>

      <CTABand
        title="Explore MoleScan for Your Organisation"
        subtitle="Speak to our team about how MoleScan can support your dermatology pathway — reducing unnecessary referrals and improving access to specialist care."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
        background="navy"
      />
    </>
  );
}
