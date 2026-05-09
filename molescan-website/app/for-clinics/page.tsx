import type { Metadata } from "next";
import ClinicsHero from "@/components/sections/ClinicsHero";
import ClinicsExpertAssessment from "@/components/sections/ClinicsExpertAssessment";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StepProcess from "@/components/sections/StepProcess";
import ClinicPathwayDiagram from "@/components/sections/ClinicPathwayDiagram";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mole Check for Private Clinics | MoleScan™",
  description:
    "Mole or skin lesion in the treatment area? MoleScan gives private clinics — aesthetic, beauty, podiatry, physiotherapy, and more — expert dermatologist assessments in 24 hours. No need to refer every case to the GP.",
  openGraph: {
    title: "Mole Check for Private Clinics | MoleScan™",
    description:
      "MoleScan helps private clinics get expert mole and skin lesion assessments in 24 hours — so treatments stay on track and clients stay safe.",
    images: [{ url: "/images/hero-clinics-ai-mole-assessment.jpg", width: 1200, height: 630, alt: "MoleScan mole assessment for private clinics" }],
  },
};

const painPoints = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "Treatment Delayed \u2014 Or Put On Hold",
    description:
      "During your consultation, you identify a mole or skin lesion in the treatment area. You can\u2019t proceed without knowing what it is. The appointment is delayed \u2014 and your client is advised to see their GP, often leading to weeks of waiting.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Not Your Area of Expertise \u2014 And That\u2019s OK",
    description:
      "You\u2019re trained in your field \u2014 not dermatology. Whether you\u2019re an aesthetic practitioner, podiatrist, physiotherapist, or GP without specialist dermatology training, you need a reliable way to assess lesions without referring every case externally.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Clinical & Medico-Legal Risk If Unassessed",
    description:
      "Treating over or around an unassessed lesion \u2014 or failing to document it appropriately \u2014 may carry clinical risk for the patient and potential medico-legal risk for your practice. Without clear documentation, decisions can be difficult to justify if concerns arise later.",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Keep Treatments on Track",
    description:
      "Get a clear answer within 24 hours \u2014 so you can safely treat, monitor, or refer. No unnecessary delays. No cancelled appointments.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Your Clinical Safety Net",
    description:
      "Every case is reviewed by a UK dermatologist. You don\u2019t need to diagnose \u2014 you capture and submit. The expert assessment supports your decision-making and protects both you and your client.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Full Documentation & Audit Trail",
    description:
      "Every assessment is recorded with images, clinical input, and a documented outcome. A clear record of your decision-making — supporting safe practice and clinical governance.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Build Trust With Your Clients",
    description:
      "Offering a structured mole assessment shows you prioritise safety and clinical responsibility. Clients feel reassured knowing their treatment decisions are based on expert input.",
  },
];

const clinicSteps = [
  {
    number: 1,
    title: "Spot a Mole in the Treatment Area",
    description:
      "During your client\u2019s appointment, you notice a mole or skin lesion in or near the treatment zone. Instead of cancelling or guessing, you pause and assess.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "I\u2019m not a doctor \u2014 can I still use MoleScan?",
    answer:
      "Yes. MoleScan is designed for non-dermatology practitioners, including aesthetic clinicians, therapists, and other healthcare professionals. You capture the images and clinical details \u2014 a UK GPwSI Dermatologist or Consultant Dermatologist provides the assessment and report. You\u2019re not expected to diagnose \u2014 you\u2019re supported to make safe, informed decisions.",
  },
  {
    question: "Do I need a dermatoscope?",
    answer:
      "Yes. MoleScan uses dermoscopic images to ensure a high-quality clinical assessment. A smartphone-compatible dermatoscope attachment is essential. We can advise on suitable devices and setup.",
  },
  {
    question: "How quickly will I get an answer?",
    answer:
      "Within 24 hours. You\u2019ll receive a clear RAG-rated clinical report: GREEN \u2014 safe to proceed; AMBER \u2014 Routine referral advised; RED \u2014 Urgent referral recommended. This allows you to act quickly and appropriately without unnecessary delays.",
  },
  {
    question: "What happens if the mole is flagged as concerning?",
    answer:
      "You\u2019ll receive clear guidance within the report. For AMBER or RED outcomes, recommended next steps are provided \u2014 typically advising referral to a GP or specialist. You\u2019re not expected to manage the condition \u2014 only to act appropriately based on the clinical guidance.",
  },
  {
    question: "Can I charge patients for the mole check?",
    answer:
      "Yes. Many clinics offer MoleScan as a standalone service or as part of their consultation process. It can generate additional revenue while reinforcing your commitment to patient safety and professional standards.",
  },
  {
    question: "Is my patient\u2019s data secure?",
    answer:
      "Yes. MoleScan is fully GDPR compliant. All data is encrypted, securely stored within the UK, and managed in line with clinical governance standards.",
  },
  {
    question: "Does this protect me medico-legally?",
    answer:
      "MoleScan provides a documented, clinician-reviewed assessment for every case. Each submission includes images, clinical information, and an expert report \u2014 creating a clear audit trail to support your decision-making. This demonstrates that you acted responsibly and followed a structured clinical process.",
  },
];

export default function ForClinicsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "For Clinics", url: "/for-clinics" },
  ]);
  const faqSchema = generateFAQSchema(faqs);
  const serviceSchema = generateServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ClinicsHero />

      {/* Operator / regulatory disclaimer */}
      <section className="bg-white border-b border-gray-100" aria-label="MoleScan operator and regulatory information">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex items-start gap-3 max-w-3xl mx-auto">
            <svg
              className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed">
              MoleScan is operated by{" "}
              <strong className="text-brand-deep-navy">Dermme Health Ltd</strong>{" "}
              — a CQC-registered provider. It is a clinician-led skin lesion
              assessment and triage service, not a standalone diagnostic device.
            </p>
          </div>
        </div>
      </section>

      <ClinicsExpertAssessment />

      <SectionWrapper background="soft-blue" id="challenges">
        <FeatureGrid
          title="You've found a mole in the treatment area. What's your next step?"
          subtitle="You are running a private clinic. As part of a structured consultation, you assess the treatment area and identify a mole or skin lesion. You don't know exactly what it is — and proceeding without assessment isn't appropriate. So what do you do?"
          features={painPoints}
          columns={3}
        />
        <p className="text-center text-brand-text/80 text-lg max-w-3xl mx-auto mt-12 leading-relaxed">
          MoleScan fits into your consultation process — allowing you to assess first,
          then proceed with confidence — without unnecessary delays or GP referrals.
        </p>
      </SectionWrapper>

      <SectionWrapper background="white" id="benefits">
        <FeatureGrid
          title="How Does MoleScan Help Your Clinic?"
          subtitle="Don't let a mole cancel appointments, delay treatments, or force unnecessary GP referrals."
          features={benefits}
          columns={2}
        />
      </SectionWrapper>

      <ClinicPathwayDiagram />

      <SectionWrapper background="white" id="who-uses">
        <div className="text-center mb-12">
          <h2 className="mb-4">Who Is MoleScan For?</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            If you assess patients for aesthetic or skin treatments and encounter a mole or skin lesion in the treatment area, MoleScan gives you a clear, clinician-led answer before you proceed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Aesthetic Clinics",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                </svg>
              ),
              scenario: "Botox, fillers, or chemical peels",
              problem: "A mole sits exactly where you plan to inject or treat. You can\u2019t proceed safely without knowing what it is \u2014 and referring to a GP delays your patient\u2019s treatment.",
              outcome: "Get a clinician-led assessment within 24 hours \u2014 so you can treat safely, advise confidently, or refer appropriately.",
            },
            {
              name: "Beauty Therapists",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              ),
              scenario: "Facials, waxing, microdermabrasion, or threading",
              problem: "During a treatment, you notice a mole you haven\u2019t seen before \u2014 or one that looks different. You can\u2019t ignore it.",
              outcome: "MoleScan allows you to escalate concerns professionally without needing dermatology expertise. Your patient sees that you take their safety seriously.",
            },
            {
              name: "Laser & IPL Clinics",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              ),
              scenario: "Laser or IPL hair removal, skin rejuvenation treatments",
              problem: "Treating over an unassessed mole is a serious risk. You must avoid it \u2014 but you also need to understand what it is and whether it\u2019s safe.",
              outcome: "MoleScan provides a clear outcome \u2014 so you can treat, monitor, or refer safely.",
            },
            {
              name: "Podiatry Clinics",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              ),
              scenario: "Foot and nail treatments, verruca removal, or biomechanical assessments",
              problem: "A dark lesion on the foot or under a toenail can resemble a bruise or verruca \u2014 but could represent something more serious.",
              outcome: "You need to rule out serious pathology before proceeding. MoleScan gives you fast expert input on foot and nail lesions \u2014 particularly important as acral melanoma is frequently missed.",
            },
            {
              name: "Tattoo Studios",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.905 1.905 0 00-3.208-2.068l-5.19 2.837a15.996 15.996 0 00-5.212 4.408m4.97 5.285a15.993 15.993 0 01-3.42-3.42" />
                </svg>
              ),
              scenario: "New tattoos, cosmetic tattooing, or body art",
              problem: "Before placing ink, you may identify a mole or skin lesion within the planned tattoo area. Tattooing over an unassessed lesion can make future monitoring more difficult and may carry avoidable risk.",
              outcome: "MoleScan gives you a structured, clinician-led assessment \u2014 helping you protect your patient and make a safer decision before proceeding.",
            },
            {
              name: "Chiropractors & Massage Therapists",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              ),
              scenario: "Spinal manipulation, deep tissue massage, or physical therapy",
              problem: "You work on exposed skin daily. You may notice a mole on a patient\u2019s back that they\u2019ve never seen \u2014 raised, irregular, or changing.",
              outcome: "MoleScan allows you to escalate concerns appropriately, turning a casual observation into a professional duty of care \u2014 and enabling earlier detection of something serious.",
            },
          ].map((clinic) => (
            <div
              key={clinic.name}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/60 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-teal/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-deep-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                  {clinic.icon}
                </div>
                <h3 className="font-bold text-brand-deep-blue text-lg">{clinic.name}</h3>
              </div>
              <p className="text-xs font-semibold text-brand-teal uppercase tracking-wide mb-2">{clinic.scenario}</p>
              <p className="text-brand-text/70 text-sm leading-relaxed mb-3">{clinic.problem}</p>
              <p className="text-brand-text/90 text-sm leading-relaxed font-medium">{clinic.outcome}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="soft-blue" id="faqs">
        <FAQSection faqs={faqs} schemaScript={JSON.stringify(faqSchema)} />
      </SectionWrapper>

      <CTABand
        title="Stop Referring Every Mole to the GP"
        subtitle="See how MoleScan fits into your consultation process. Get a clear answer within 24 hours — so you can move forward safely, without delays, cancellations, or guesswork. No more cancelled appointments. No more unnecessary delays."
        buttonLabel="Request a Demo"
        buttonHref="/request-demo"
        secondaryButtonLabel="Book a call"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
