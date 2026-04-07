import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import StepProcess from "@/components/sections/StepProcess";
import AudienceCard from "@/components/sections/AudienceCard";
import FeatureGrid from "@/components/sections/FeatureGrid";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTABand from "@/components/sections/CTABand";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "MoleScan™ — Clinician-Led, AI-Assisted Skin Lesion Assessment",
  description:
    "AI-powered skin lesion assessment reviewed by UK consultant dermatologists. Results within 24 hours. For private clinics and NHS. Request a demo.",
  openGraph: {
    title: "MoleScan™ — Clinician-Led, AI-Assisted Skin Lesion Assessment",
    description:
      "AI-powered skin lesion assessment reviewed by UK consultant dermatologists. Results within 24 hours.",
  },
};

const trustItems = [
  {
    label: "UK Consultant Dermatologists",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Results Within 24 Hours",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "GDPR Compliant",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    label: "NHS Compatible",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const howItWorksSteps = [
  {
    number: 1,
    title: "Capture",
    description:
      "Clinician photographs the skin lesion using a smartphone or dermoscope. No specialist equipment required.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "AI-Assisted Triage",
    description:
      "MoleScan's AI analyses the image, providing risk stratification to support the clinical review process.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Dermatologist Report",
    description:
      "Every case is reviewed by a UK consultant dermatologist. You receive a structured report within 24 hours.",
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
    title: "Clinician-Led",
    description:
      "Every assessment is initiated by a healthcare professional and reviewed by a UK consultant dermatologist. Human expertise at every step.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI-Assisted Analysis",
    description:
      "Advanced AI provides risk stratification and pre-screening, enabling faster and more consistent triage across every submission.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24-Hour Turnaround",
    description:
      "From image capture to consultant-reviewed report in under 24 hours. Giving clinicians and patients timely answers.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "No Special Equipment",
    description:
      "Works with smartphone images. Dermoscopic images supported for enhanced accuracy, but not required to get started.",
  },
];

const testimonials = [
  {
    quote:
      "MoleScan has transformed how we handle suspicious lesions in our clinic. The 24-hour turnaround gives our patients peace of mind.",
    name: "Dr Sarah Mitchell",
    role: "Private GP",
    organisation: "Example Medical Centre",
  },
  {
    quote:
      "Having a consultant dermatologist review every case gives us the confidence to offer mole assessments as part of our service.",
    name: "James Clarke",
    role: "Clinic Manager",
    organisation: "Example Aesthetics",
  },
  {
    quote:
      "The structured reporting has helped us reduce unnecessary 2-week-wait referrals while ensuring no urgent cases are missed.",
    name: "Dr Priya Patel",
    role: "GP Partner",
    organisation: "Example NHS Practice",
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

      <Hero
        title="Clinician-Led, AI-Assisted Skin Lesion Assessment"
        subtitle="MoleScan combines advanced AI analysis with UK consultant dermatologist review to deliver structured skin lesion assessment reports within 24 hours. A safe, governed triage pathway for healthcare professionals."
        ctas={[
          { label: "For Clinics", href: "/for-clinics", variant: "primary" },
          { label: "For NHS & ICBs", href: "/for-nhs", variant: "ghost-light" },
        ]}
      />

      <TrustBar items={trustItems} />

      <SectionWrapper background="white">
        <StepProcess
          title="How MoleScan Works"
          subtitle="A structured, safe approach to skin lesion assessment — from image capture to consultant-reviewed report."
          steps={howItWorksSteps}
        />
      </SectionWrapper>

      <SectionWrapper background="soft-blue">
        <div className="text-center mb-12">
          <h2 className="mb-4">Who Is MoleScan For?</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            Whether you run a private clinic or commission NHS services,
            MoleScan provides a structured pathway for skin lesion assessment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AudienceCard
            title="For Private Clinics"
            description="Give your clinic a safe, structured pathway for assessing suspicious skin lesions — without referring every case."
            bulletPoints={[
              "AI-assisted triage with consultant dermatologist review",
              "Results within 24 hours",
              "No special equipment required",
              "Full audit trail for clinical governance",
            ]}
            ctaLabel="Learn More"
            ctaHref="/for-clinics"
          />
          <AudienceCard
            title="For NHS & ICBs"
            description="Reduce pressure on dermatology 2-week-wait pathways while ensuring urgent cases are identified and referred appropriately."
            bulletPoints={[
              "Reduce unnecessary 2WW referrals",
              "Structured triage at primary care level",
              "Clinical governance and data compliance",
              "Scalable across multiple sites",
            ]}
            ctaLabel="Learn More"
            ctaHref="/for-nhs"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <FeatureGrid
          title="Why MoleScan?"
          subtitle="A platform built for clinical rigour, speed, and accessibility."
          features={differentiators}
          columns={4}
        />
      </SectionWrapper>

      <SectionWrapper background="soft-blue">
        <TestimonialSection testimonials={testimonials} />
      </SectionWrapper>

      <CTABand
        title="Ready to See MoleScan in Action?"
        subtitle="Request a no-obligation demo and discover how MoleScan can support your skin lesion assessment pathway."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
