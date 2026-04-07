import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import {
  generateBreadcrumbSchema,
  generateHowToSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "How MoleScan Works — AI-Assisted Skin Lesion Assessment Process",
  description:
    "From image capture to consultant-reviewed report in 24 hours. Learn how MoleScan's 6-step clinician-led assessment pathway works.",
  openGraph: {
    title: "How MoleScan Works — AI-Assisted Skin Lesion Assessment Process",
    description:
      "From image capture to consultant-reviewed report in 24 hours. Learn how MoleScan's 6-step clinician-led assessment pathway works.",
  },
};

const processSteps = [
  {
    number: 1,
    title: "Clinician Captures Images",
    description:
      "During a patient consultation, the clinician photographs the skin lesion. MoleScan accepts both standard smartphone photographs and dermoscopic images. No specialist equipment is required to get started — a clear, well-lit smartphone photo is sufficient for assessment.",
    detail: "Dermoscopic images provide enhanced diagnostic accuracy and are recommended where available, but the platform is designed to work without them.",
  },
  {
    number: 2,
    title: "Secure Upload to MoleScan",
    description:
      "The clinician securely uploads the images to the MoleScan platform along with relevant clinical context — patient age, lesion location, clinical history, and any symptoms such as changes in size, shape, or colour.",
    detail: "All data is encrypted in transit and at rest. Patient data is stored within the United Kingdom in full compliance with GDPR.",
  },
  {
    number: 3,
    title: "AI-Powered Analysis and Risk Stratification",
    description:
      "MoleScan's AI analyses the uploaded images, providing automated risk stratification. The AI flags features of concern and categorises the lesion to support the clinical review process.",
    detail: "The AI serves as a pre-screening tool to support the consultant dermatologist, not to replace clinical judgement. It enhances consistency and helps prioritise cases that require closer attention.",
  },
  {
    number: 4,
    title: "UK Consultant Dermatologist Reviews Every Case",
    description:
      "Every submission is reviewed by a UK consultant dermatologist. The dermatologist examines the images, considers the AI analysis and clinical context, and provides a structured clinical assessment.",
    detail: "This is what makes MoleScan clinician-led: human expertise validates every assessment. No case is resolved by AI alone.",
  },
  {
    number: 5,
    title: "Structured Report Delivered Within 24 Hours",
    description:
      "The referring clinician receives a comprehensive, structured report containing the consultant dermatologist's assessment, the AI analysis summary, and a clear recommendation.",
    detail: "Reports are designed to be actionable: each one concludes with a clear outcome — reassure, monitor, or refer urgently.",
  },
  {
    number: 6,
    title: "Referring Clinician Decides Next Steps",
    description:
      "Armed with the MoleScan report, the referring clinician makes the final clinical decision. They may reassure the patient that the lesion is benign, schedule monitoring, or initiate an urgent 2-week-wait referral for suspected malignancy.",
    detail: "The final clinical decision always rests with the treating clinician. MoleScan provides the evidence to make that decision with confidence.",
  },
];

const faqs = [
  {
    question: "How is MoleScan different from a teledermatology service?",
    answer:
      "Traditional teledermatology sends images to a dermatologist for review. MoleScan adds an AI pre-screening layer that provides risk stratification before the consultant review. This combination of AI-assisted triage and consultant oversight enables faster, more consistent assessments — while maintaining the clinical rigour of human expert review.",
  },
  {
    question: "What happens if the AI and the dermatologist disagree?",
    answer:
      "The consultant dermatologist's assessment always takes precedence. The AI serves as a support tool — it flags features of concern and provides risk scores, but the final clinical opinion is the dermatologist's. If there is a discrepancy, the dermatologist applies their clinical expertise to make the definitive assessment.",
  },
  {
    question: "Can MoleScan detect melanoma?",
    answer:
      "MoleScan is not a diagnostic tool. It is a triage platform that helps clinicians assess whether a skin lesion requires urgent referral, monitoring, or reassurance. The AI assists with risk stratification, and a UK consultant dermatologist reviews every case. Final diagnosis requires histopathological confirmation following biopsy where indicated.",
  },
  {
    question: "What image quality is required?",
    answer:
      "For smartphone images: a well-lit, focused, close-up photograph of the lesion with a plain background. For dermoscopic images: standard dermoscopic capture protocols apply. MoleScan provides image quality guidance within the platform to help clinicians capture optimal images.",
  },
  {
    question: "Is patient consent required?",
    answer:
      "Yes. Clinicians must obtain patient consent before capturing and uploading images to MoleScan. The platform provides consent workflow support and documentation to help clinics maintain compliant consent processes.",
  },
];

export default function HowMoleScanWorksPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about/how-molescan-works" },
    { name: "How MoleScan Works", url: "/about/how-molescan-works" },
  ]);

  const howToSchema = generateHowToSchema(
    "How MoleScan AI-Assisted Skin Lesion Assessment Works",
    "A 6-step clinician-led process from image capture to consultant-reviewed report within 24 hours.",
    processSteps.map((step) => ({
      name: step.title,
      text: step.description,
    }))
  );

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
        title="How MoleScan Works"
        subtitle="A structured, safe, and clinically governed approach to skin lesion assessment. From image capture to consultant-reviewed report in 24 hours."
        ctas={[
          { label: "Request Demo", href: "/request-demo", variant: "primary" },
        ]}
      />

      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <h2 className="mb-4">The MoleScan Assessment Pathway</h2>
          <p className="text-brand-text/70 text-lg max-w-3xl mx-auto">
            Every MoleScan assessment follows a structured 6-step pathway
            designed to ensure clinical safety, consistency, and speed.
          </p>
        </div>

        <div className="space-y-12">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                step.number % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-2xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-brand-text/80 leading-relaxed mb-2">
                  {step.description}
                </p>
                <p className="text-brand-text/60 text-sm leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="soft-blue">
        <FAQSection faqs={faqs} />
      </SectionWrapper>

      <CTABand
        title="See the MoleScan Pathway in Action"
        subtitle="Request a demo and we'll walk you through the full assessment process."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
