import type { Metadata } from "next";
import ClinicsHero from "@/components/sections/ClinicsHero";
import ClinicIntroSection from "@/components/sections/ClinicIntroSection";
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
    title: "Treatment Blocked or Appointment Delayed",
    description:
      "Your client is booked for treatment \u2014 but there\u2019s a mole or skin lesion that needs checking first. You can\u2019t safely proceed without knowing what it is. The appointment stalls, and your client is told to see their GP \u2014 a process that can take weeks.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Not Your Speciality \u2014 And It Shouldn\u2019t Be",
    description:
      "You\u2019re trained in your field \u2014 not dermatology. Whether you\u2019re a beautician, physiotherapist, podiatrist, or private GP without dermatology expertise, you need a professional way to get a mole assessed without sending every client to the NHS queue.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Liability If You Ignore It",
    description:
      "Treating over or around an unassessed mole \u2014 or failing to flag it \u2014 puts you and your client at risk. Without documentation, you have no safety net if something is later found to be serious.",
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
      "Get a clear answer within 24 hours \u2014 safe to treat, monitor, or refer. No more cancelled appointments or lost revenue because of an unknown mole.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Your Professional Safety Net",
    description:
      "Every mole is reviewed by a UK dermatologist. You don\u2019t diagnose \u2014 you simply capture and upload. The expert opinion protects you and your client.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Full Documentation & Audit Trail",
    description:
      "Every assessment is logged with images and dermatologist review. If a question ever arises, you have a complete record showing you acted responsibly.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Clients Trust You More",
    description:
      "Offering a professional mole check shows clients you take their safety seriously. It builds loyalty and sets your practice apart from competitors.",
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
      "Absolutely. MoleScan is specifically designed for non-dermatology practitioners like aesthetic therapists, beauticians, podiatrists, and laser technicians. You capture the image \u2014 a UK dermatologist does the clinical assessment. No medical training required on your end.",
  },
  {
    question: "Do I need a dermoscope?",
    answer:
      "Yes. MoleScan works with dermoscopic images to ensure the highest quality assessment. A dermoscope attachment for your smartphone is all you need \u2014 we can advise on compatible devices.",
  },
  {
    question: "How quickly will I get an answer?",
    answer:
      "Within 24 hours. You\u2019ll receive a clear RAG-rated report: GREEN (safe to proceed with treatment), AMBER (monitor or review needed), or RED (urgent referral recommended).",
  },
  {
    question: "What happens if the mole is flagged as concerning?",
    answer:
      "You\u2019ll receive guidance in the report. For AMBER or RED results, the report recommends next steps \u2014 typically advising the client to see their GP or a specialist. You\u2019re not expected to manage the clinical pathway, just to act on the guidance.",
  },
  {
    question: "Can I charge clients for the mole check?",
    answer:
      "Yes. Many clinics offer MoleScan as an add-on service or include it as part of their duty of care. It can become a revenue stream while demonstrating professionalism and client safety.",
  },
  {
    question: "Is my client\u2019s data secure?",
    answer:
      "Yes. MoleScan is fully GDPR compliant with all data encrypted and stored securely within the UK. See our Clinical Governance page for full details.",
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

      <ClinicIntroSection />

      <SectionWrapper background="soft-blue" id="challenges">
        <FeatureGrid
          title="What Happens When You Encounter a Suspicious Mole?"
          subtitle="You're running a private clinic. You spot a mole or lesion on a client. You're not a dermatologist — so what do you do?"
          features={painPoints}
          columns={3}
        />
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
          <h2 className="mb-4">Who Uses MoleScan?</h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            If you run a private clinic and encounter moles or skin lesions that need expert assessment before you can treat or advise, MoleScan is built for you.
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
              problem: "A mole sits right where you need to inject or apply treatment. You can\u2019t treat over it without knowing it\u2019s safe.",
              outcome: "Get a dermatologist\u2019s assessment within 24 hours and proceed with confidence \u2014 or advise your client appropriately.",
            },
            {
              name: "Beauty Therapists",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              ),
              scenario: "Facials, waxing, microdermabrasion, or threading",
              problem: "During a facial or waxing appointment, you spot a mole you haven\u2019t seen before \u2014 or one that looks different. You can\u2019t just ignore it.",
              outcome: "MoleScan lets you flag it professionally without needing any clinical training. Your client sees you care about their safety.",
            },
            {
              name: "Laser & IPL Clinics",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              ),
              scenario: "Laser hair removal, skin rejuvenation, or IPL treatments",
              problem: "Lasering over an unassessed mole is a serious risk. You must avoid moles during treatment \u2014 but you need to know why it\u2019s there and whether it\u2019s safe.",
              outcome: "A MoleScan report clears the mole or flags it for referral \u2014 so you can map your treatment area safely.",
            },
            {
              name: "Podiatry Clinics",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              ),
              scenario: "Foot and nail treatments, verruca removal, or biomechanical assessments",
              problem: "A dark lesion on the foot or under a toenail can look like a bruise, verruca, or subungual melanoma. You need to rule out the worst before treating.",
              outcome: "MoleScan gives you a fast expert opinion on foot and nail lesions \u2014 particularly important as acral melanoma is often missed.",
            },
            {
              name: "Tattoo Removal Studios",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.905 1.905 0 00-3.208-2.068l-5.19 2.837a15.996 15.996 0 00-5.212 4.408m4.97 5.285a15.993 15.993 0 01-3.42-3.42" />
                </svg>
              ),
              scenario: "Laser tattoo removal across large skin areas",
              problem: "Tattoo ink can obscure moles or hide changes in pigmentation. Before lasering a tattooed area, any moles within or near the tattoo must be assessed.",
              outcome: "MoleScan helps you identify and assess moles in tattooed skin \u2014 so you can proceed with removal safely.",
            },
            {
              name: "Chiropractors & Massage Therapists",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              ),
              scenario: "Spinal manipulation, deep tissue massage, or physical therapy",
              problem: "You work on exposed skin daily. You may notice a mole on a client\u2019s back that they\u2019ve never seen themselves \u2014 raised, irregular, or changing.",
              outcome: "Flagging it through MoleScan turns a casual observation into a professional duty of care \u2014 and could make a life-changing difference for your client.",
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
        subtitle="See how MoleScan fits into your clinic's workflow. Get expert dermatologist assessments in 24 hours — so you can treat, advise, or refer with confidence."
        buttonLabel="Request a Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
