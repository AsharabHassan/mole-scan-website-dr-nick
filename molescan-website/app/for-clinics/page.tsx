import type { Metadata } from "next";
import ClinicsHero from "@/components/sections/ClinicsHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StepProcess from "@/components/sections/StepProcess";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Skin Lesion Assessment for Private Clinics",
  description:
    "Give your clinic a safe, structured mole assessment pathway. Expert triage reviewed by GPs and dermatologists. Dermoscopic imaging for clinical accuracy.",
  openGraph: {
    title: "Skin Lesion Assessment for Private Clinics — MoleScan™",
    description:
      "Give your clinic a safe, structured mole assessment pathway. Expert triage reviewed by GPs and dermatologists.",
  },
};

const painPoints = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Clinical Uncertainty",
    description:
      "Patients present with suspicious moles, but without dermatology training, assessing risk is challenging. Referring every case is not sustainable.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Slow Referral Pathways",
    description:
      "NHS dermatology waiting times are long. Patients want answers now, and your clinic needs a way to provide them responsibly.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Medicolegal Risk",
    description:
      "Without a structured assessment pathway, the risk of missing a melanoma — or over-referring benign lesions — creates medicolegal exposure.",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Structured Reports in 24 Hours",
    description:
      "Receive a dermatologist-reviewed report for every submission within 24 hours. Clear, actionable outcomes: reassure, monitor, or refer.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Dermoscopic Imaging",
    description:
      "Built for dermoscopic images, ensuring the highest quality capture for accurate clinical assessment and reliable triage.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Full Audit Trail",
    description:
      "Every assessment is logged with images and clinician review. Complete governance documentation for your clinic.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Patient Confidence",
    description:
      "Offer your patients a professional skin lesion assessment backed by expert dermatology review. Build trust and loyalty.",
  },
];

const clinicSteps = [
  {
    number: 1,
    title: "Photograph the Lesion",
    description:
      "During the patient consultation, capture dermoscopic images of the skin lesion.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Upload to MoleScan",
    description:
      "Securely upload the images through the MoleScan platform along with relevant clinical information.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Clinical Review + Dermatologist Assessment",
    description:
      "MoleScan's clinical team reviews the dermoscopic image. A UK GP or dermatologist then reviews every case and provides a clinical assessment.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Receive Your Report",
    description:
      "Within 24 hours, receive a structured report with a clear recommendation: reassure the patient, monitor, or refer urgently.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Do I need a dermoscope to use MoleScan?",
    answer:
      "Yes. MoleScan is designed to work with dermoscopic images to ensure the highest quality assessment. A dermoscope attachment is required for image capture.",
  },
  {
    question: "Who reviews the assessments?",
    answer:
      "Every assessment submitted through MoleScan is reviewed by a UK GP or dermatologist. The clinical team provides thorough assessment and risk stratification to ensure safe, responsible triage.",
  },
  {
    question: "How quickly will I receive the report?",
    answer:
      "Reports are delivered within 24 hours of image submission. Each report includes a structured clinical assessment with a clear recommendation: reassure, monitor, or refer.",
  },
  {
    question: "What types of clinics can use MoleScan?",
    answer:
      "MoleScan is designed for any healthcare professional who encounters skin lesions in practice. This includes private GP clinics, aesthetic clinics, pharmacies, podiatrists, and other allied health professionals.",
  },
  {
    question: "Is my patient data secure?",
    answer:
      "Yes. MoleScan is fully GDPR compliant and all data is encrypted in transit and at rest. Patient data is stored securely within the UK. See our Clinical Governance page for full details.",
  },
];

export default function ForClinicsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "For Clinics", url: "/for-clinics" },
  ]);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ClinicsHero />

      <SectionWrapper background="white" id="challenges">
        <FeatureGrid
          title="The Challenge"
          subtitle="Skin lesion assessment in non-specialist settings presents real clinical and operational challenges."
          features={painPoints}
          columns={3}
        />
      </SectionWrapper>

      <SectionWrapper background="soft-blue" id="benefits">
        <FeatureGrid
          title="How MoleScan Helps Your Clinic"
          subtitle="A structured assessment pathway with expert dermatologist review."
          features={benefits}
          columns={2}
        />
      </SectionWrapper>

      <SectionWrapper background="white" id="how-it-works">
        <StepProcess
          title="How It Works for Your Clinic"
          subtitle="Four simple steps from patient consultation to consultant-reviewed report."
          steps={clinicSteps}
        />
      </SectionWrapper>

      <SectionWrapper background="soft-blue" id="who-uses">
        <div className="text-center mb-12">
          <h2 className="mb-4">Built for Healthcare Professionals</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            MoleScan is used by a range of healthcare providers who encounter skin lesions in their clinical practice.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Private GPs",
            "Aesthetic Clinics",
            "Pharmacies",
            "Podiatrists",
            "Chiropractors",
            "Walk-in Centres",
          ].map((type) => (
            <div
              key={type}
              className="bg-white rounded-xl p-5 text-center text-sm font-semibold text-brand-deep-blue shadow-card border border-gray-100/60 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-teal/20"
            >
              {type}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" id="faqs">
        <FAQSection faqs={faqs} schemaScript={JSON.stringify(faqSchema)} />
      </SectionWrapper>

      <CTABand
        title="Ready to Offer Skin Lesion Assessments?"
        subtitle="See how MoleScan can integrate into your clinic workflow. Request a no-obligation demo."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
