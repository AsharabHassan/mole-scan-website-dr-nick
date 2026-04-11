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
    "How MoleScan ensures clinical safety, data protection, and quality assurance. DCB0129 alignment, GDPR compliance, GP and dermatologist oversight.",
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
        heading: "Dermatologist Review",
        description:
          "Every assessment is reviewed by a UK GP or dermatologist before a report is issued. No clinical output is delivered without clinician review. This human oversight is the cornerstone of MoleScan's safety model.",
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
          "A complete audit trail is maintained for every assessment, including image capture, clinical review, and report delivery timestamps.",
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
      "MoleScan is a clinical workflow and triage platform that supports clinician decision-making. It is not currently classified or registered as a standalone medical device. The platform provides structured clinical triage with UK GP and dermatologist review, with the final clinical decision always resting with the treating clinician.",
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
    question: "How are the dermatologists vetted?",
    answer:
      "All MoleScan GPs and dermatologists are registered with the General Medical Council (GMC), and dermatologists hold current specialist registration in dermatology. All clinicians undergo credential verification before joining the platform.",
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
        eyebrow="Safety & Compliance"
        title="Clinical Governance"
        titleHighlight="Governance"
        subtitle="MoleScan is built on a foundation of clinical safety, data protection, and quality assurance. Every assessment is clinician-led, consultant-reviewed, and fully governed."
        ctas={[
          { label: "Request Demo", href: "/request-demo", variant: "primary" },
        ]}
        background="blue"
        badges={{
          text: "",
          items: ["DCB0129 Aligned", "GDPR Compliant", "GMC-Registered Clinicians"],
        }}
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
