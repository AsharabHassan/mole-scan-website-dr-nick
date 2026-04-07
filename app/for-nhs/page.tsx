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
            variant: "ghost-light",
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
