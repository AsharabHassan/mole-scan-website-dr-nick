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
        heading: "DCB0129 & DCB0160",
        description:
          "MoleScan's clinical safety framework is aligned with DCB0129 (manufacturer responsibility) and DCB0160 (deploying organisation responsibility). A formal Clinical Safety Case is maintained and regularly reviewed.",
      },
      {
        heading: "Clinical Safety Officer",
        description:
          "MoleScan maintains a designated Clinical Safety Officer (CSO) responsible for the Clinical Safety Case, hazard management, and incident reporting in line with NHS digital safety standards.",
      },
      {
        heading: "GPwSI Dermatology Doctor Review",
        description:
          "Every assessment is reviewed by a UK GP with specialist expertise in dermatology (GPwSI). No clinical output is delivered without qualified clinician oversight. This human review is central to MoleScan's safety model.",
      },
    ],
  },
  {
    title: "Data Protection & Privacy",
    items: [
      {
        heading: "GDPR Compliance",
        description:
          "MoleScan complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Dermme Health Ltd is registered with the Information Commissioner's Office (ICO).",
      },
      {
        heading: "UK Data Residency",
        description:
          "All patient data is stored within the United Kingdom, with no routine transfer outside the UK.",
      },
      {
        heading: "Encryption",
        description:
          "All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Access to patient data is strictly controlled through role-based access controls, ensuring only authorised users can access sensitive information.",
      },
      {
        heading: "Data Minimisation",
        description:
          "MoleScan collects only the minimum data required for clinical assessment. Data retention policies are clearly defined, documented, and auditable.",
      },
    ],
  },
  {
    title: "Quality Assurance",
    items: [
      {
        heading: "Structured Reporting",
        description:
          "Every MoleScan report follows a standardised clinical format, ensuring consistency, clarity, and completeness across all assessments.",
      },
      {
        heading: "Audit Trail",
        description:
          "A complete audit trail is maintained for every assessment, including image capture, clinical review, and report delivery timestamps.",
      },
      {
        heading: "Continuous Improvement",
        description:
          "MoleScan monitors clinical outcomes and assessment quality through regular audit cycles, with findings feeding directly into ongoing platform and process improvements.",
      },
    ],
  },
  {
    title: "Accessibility & Standards",
    items: [
      {
        heading: "WCAG 2.2 AA Compliance",
        description:
          "The MoleScan platform and website are built in line with WCAG 2.2 Level AA accessibility standards.",
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
      "MoleScan is a clinical workflow and triage platform that supports practitioner decision-making. It is not currently classified or registered as a standalone medical device. The platform provides structured clinical triage with review by UK GPs with specialist expertise in dermatology (GPwSI). The final clinical decision always rests with the treating practitioner.",
  },
  {
    question: "How does MoleScan handle clinical incidents?",
    answer:
      "MoleScan maintains a clinical incident reporting and management process aligned with DCB0129. All incidents are reviewed by the Clinical Safety Officer, with findings incorporated into the Clinical Safety Case and hazard log. Serious incidents are managed and escalated in line with regulatory requirements.",
  },
  {
    question: "Can I see MoleScan's Clinical Safety Case?",
    answer:
      "A summary of MoleScan's Clinical Safety Case is available on request. Please contact us or request a demo to discuss clinical governance documentation.",
  },
  {
    question: "How are doctors vetted?",
    answer:
      "All MoleScan doctors are registered with the General Medical Council (GMC). All doctors hold appropriate training and experience in dermatology and skin lesion assessments (GPwSI or equivalent), and all clinicians undergo credential verification before joining the platform. Ongoing professional registration and compliance are regularly reviewed.",
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
        subtitle="MoleScan is built on a foundation of clinical safety, data protection, and quality assurance. Every assessment is reviewed by UK GMC-registered clinicians with specialist expertise in dermatology (GPwSI), supported by structured processes and robust clinical governance."
        ctas={[
          { label: "Request Demo", href: "/request-demo", variant: "primary" },
        ]}
        background="blue"
        backgroundImage="/images/hero-bg-governance.png"
        featureBar={[
          { icon: "shield", label: "DCB0129 Aligned", desc: "Clinical safety framework for digital health systems" },
          { icon: "lock", label: "GDPR Compliant", desc: "ICO registered with UK data residency and encryption at rest and in transit" },
          { icon: "check", label: "CQC Registered", desc: "Care Quality Commission regulated service" },
          { icon: "users", label: "GMC-Registered Doctors", desc: "All doctors hold current GMC registration and relevant clinical experience" },
        ]}
        badges={{
          text: "",
          items: ["DCB0129 Aligned", "GDPR Compliant", "CQC Registered", "GMC-Registered Doctors"],
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
        subtitle="Request a demo to explore MoleScan's clinical safety framework, data governance model, and compliance standards — including our Clinical Safety Case and structured assessment pathway."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
        secondaryButtonLabel="Speak to our team"
        secondaryButtonHref="/contact"
        background="navy"
      />
    </>
  );
}
