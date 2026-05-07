import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import AssessmentPathway from "@/components/sections/AssessmentPathway";
import {
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "How MoleScan Works — Clinician-Led Skin Lesion Assessment Process",
  description:
    "From image capture to clinician-reviewed report within 24 hours. Learn how MoleScan's 6-step pathway is reviewed by UK GPs with specialist expertise in dermatology (GPwSI).",
  openGraph: {
    title: "How MoleScan Works — Clinician-Led Skin Lesion Assessment Process",
    description:
      "From image capture to clinician-reviewed report within 24 hours. Learn how MoleScan's 6-step pathway is reviewed by UK GPs with specialist expertise in dermatology (GPwSI).",
  },
};

const processSteps = [
  {
    number: 1,
    title: "Practitioner Captures Images",
    description:
      "During a patient consultation, the practitioner photographs the skin lesion using a dermatoscope. MoleScan requires high-quality dermoscopic images to support accurate clinical assessment.",
    detail: "Dermoscopic images provide the detail required for reliable clinical assessment and are essential for all MoleScan submissions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    phase: "capture" as const,
  },
  {
    number: 2,
    title: "Secure Upload to MoleScan",
    description:
      "The practitioner securely uploads images to the MoleScan platform along with relevant clinical context — including patient age, lesion location, clinical history, and symptoms such as changes in size, shape, or colour.",
    detail: "All data is encrypted in transit and at rest. Patient data is stored within the United Kingdom in full compliance with GDPR.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>
    ),
    phase: "capture" as const,
  },
  {
    number: 3,
    title: "Clinical Analysis and Risk Stratification",
    description:
      "Uploaded dermoscopic images are assessed to support structured clinical risk stratification. Features of concern are identified and categorised to guide clinical decision-making.",
    detail: "Structured analysis improves consistency and supports prioritisation of cases requiring closer attention.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    phase: "analysis" as const,
  },
  {
    number: 4,
    title: "GPwSI Dermatology Review",
    description:
      "Every submission is reviewed by a UK GMC-registered GP with specialist interest in dermatology (GPwSI). The reviewer assesses dermoscopic images alongside clinical context to provide a structured clinical opinion.",
    detail: "Every case is reviewed by a qualified GPwSI dermatology doctor — ensuring consistent, clinician-led assessment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    phase: "analysis" as const,
  },
  {
    number: 5,
    title: "Structured Report Delivered Within 24 Hours",
    description:
      "The referring practitioner receives a comprehensive, structured report with clear recommended next steps.",
    detail: "Reports are designed to be actionable — with outcomes including reassure, monitor, or urgent referral.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    phase: "delivery" as const,
  },
  {
    number: 6,
    title: "Referring Practitioner Determines Next Steps",
    description:
      "Using the MoleScan report, the referring practitioner makes the final clinical decision. This may include reassurance, monitoring, or initiating an urgent 2-week-wait referral where appropriate.",
    detail: "The final clinical decision always rests with the treating practitioner. MoleScan provides structured clinical input to support that decision with confidence.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    phase: "delivery" as const,
  },
];

const faqs = [
  {
    question: "How is MoleScan different from a tele-dermatology service?",
    answer:
      "Traditional tele-dermatology services typically involve sending images directly to a dermatologist for review. MoleScan is a structured, doctor-led skin lesion assessment platform designed for use in real clinical workflows. Every case is reviewed by a UK GMC-registered GP with specialist expertise in dermatology (GPwSI), providing consistent, structured assessment and clear clinical outcomes. This approach enables faster, more standardised decision-making — while maintaining the clinical rigour of experienced human review.",
  },
  {
    question: "How does the clinical assessment process work?",
    answer:
      "Each case follows a structured pathway: dermoscopic images and clinical information are captured by the practitioner; the case is securely uploaded to the MoleScan platform; a UK GPwSI reviews the images and clinical context; and a structured report is generated with a clear outcome — reassure, monitor, or refer. The process is designed to support safe, consistent decision-making — not replace clinical judgement.",
    intro: "Each case follows a structured pathway:",
    bullets: [
      "Dermoscopic images and clinical information are captured by the practitioner",
      "The case is securely uploaded to the MoleScan platform",
      "A UK GPwSI reviews the images and clinical context",
      "A structured report is generated with a clear outcome: reassure, monitor, or refer",
    ],
    outro: "The process is designed to support safe, consistent decision-making — not replace clinical judgement.",
  },
  {
    question: "Can MoleScan detect melanoma?",
    answer:
      "MoleScan is not a diagnostic tool. It is a clinical assessment and triage platform that supports practitioners in determining whether a skin lesion requires reassurance, monitoring, or urgent referral. All cases are reviewed by a UK GP with specialist expertise in dermatology (GPwSI). Definitive diagnosis of melanoma requires histopathological confirmation following biopsy where clinically indicated.",
  },
  {
    question: "What image quality is required?",
    answer:
      "MoleScan requires high-quality dermoscopic images for all submissions. A compatible dermatoscope attachment is required for image capture. The platform provides guidance to support practitioners in capturing clinically usable images.",
  },
  {
    question: "Is patient consent required?",
    answer:
      "Yes. Practitioners must obtain appropriate patient consent before capturing and uploading images to MoleScan. The platform supports documentation and audit trails to help clinics maintain compliant consent processes in line with UK data protection requirements.",
  },
];

export default function HowMoleScanWorksPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about/how-molescan-works" },
    { name: "How MoleScan Works", url: "/about/how-molescan-works" },
  ]);

  const howToSchema = generateHowToSchema(
    "How MoleScan Clinician-Led Skin Lesion Assessment Works",
    "A 6-step clinician-led process — every case reviewed by a UK GPwSI dermatology doctor — from image capture to clinician-reviewed report within 24 hours.",
    processSteps.map((step) => ({
      name: step.title,
      text: step.description,
    }))
  );

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Hero
        eyebrow="6-Step Assessment Process"
        title="How MoleScan Works"
        titleHighlight="MoleScan Works"
        subtitle="A structured, safe, and clinically governed approach to skin lesion assessment — from image capture to clinician-reviewed report within 24 hours."
        ctas={[
          { label: "Request Demo", href: "/request-demo", variant: "primary" },
        ]}
        backgroundImage="/images/hero-bg-howworks.png"
        featureBar={[
          { icon: "chart", label: "6-Step Process", desc: "Structured pathway from image capture to clinician-reviewed report" },
          { icon: "shield", label: "Clinician-Led Review", desc: "Every case reviewed by a UK GP with specialist expertise in dermatology (GPwSI)" },
          { icon: "clock", label: "24-Hour Reports", desc: "Structured reports delivered within one working day" },
          { icon: "lock", label: "Fully Governed", desc: "Aligned with DCB0129 clinical safety standards and GDPR requirements" },
        ]}
        badges={{
          text: "",
          items: ["Image Capture", "Clinical Review", "Clinician Report", "24-Hour Turnaround"],
        }}
      />

      <SectionWrapper background="white" id="assessment-pathway">
        <AssessmentPathway steps={processSteps} />
      </SectionWrapper>

      <SectionWrapper background="soft-blue" id="how-it-works-faqs">
        <FAQSection faqs={faqs} schemaScript={JSON.stringify(faqSchema)} />
      </SectionWrapper>

      <CTABand
        title="See the MoleScan Assessment Pathway in Action"
        subtitle="Request a demo and see how MoleScan supports safe, structured skin lesion assessment — from image capture to clinician-reviewed report."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
        secondaryButtonLabel="Speak to our team"
        secondaryButtonHref="/contact"
        trustItems={[
          "24-hour report turnaround",
          "Reviewed by UK GPwSI dermatology clinicians",
          "CQC-registered service",
        ]}
      />
    </>
  );
}
