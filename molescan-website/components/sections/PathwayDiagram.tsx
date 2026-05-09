"use client";

import Image from "next/image";
import { useInView } from "@/components/hooks/useInView";

interface PathwayDiagramProps {
  title?: string;
}

const stepsRow1 = [
  {
    num: 1,
    title: "Patient concern about a mole or a skin lesion",
    desc: "A patient notices a new or changing mole and wants to get it assessed by their GP.",
    image: "/images/pathway/step1-v2.png",
  },
  {
    num: 2,
    title: "Patient contacts GP surgery",
    desc: "The patient contacts their GP surgery to request an appointment for assessment of a skin lesion.",
    image: "/images/pathway/step2-v2.png",
  },
  {
    num: 3,
    title: "Appointment scheduled for MoleScan capture",
    desc: "A dedicated appointment is arranged with a trained Nurse or Healthcare Assistant for MoleScan image capture.",
    image: "/images/pathway/step3-v2.png",
  },
  {
    num: 4,
    title: "Nurse / HCA assessment",
    desc: "The patient attends a brief, focused appointment for clinical history and lesion assessment.",
    image: "/images/pathway/step4-v2.png",
  },
  {
    num: 5,
    title: "Clinical data and dermoscopic images captured",
    desc: "Structured clinical information is recorded and high-quality dermoscopic images are captured using a dermatoscope.",
    image: "/images/pathway/step5-v2.png",
    subItems: ["Structured clinical questionnaire", "Dermoscopic image capture", "Secure upload to MoleScan"],
  },
];

const stepsRow2 = [
  {
    num: 6,
    title: "Case prepared for clinical review",
    desc: "Dermoscopic images and clinical data are processed and prepared for specialist assessment.",
    image: "/images/pathway/step6-v2.png",
  },
  {
    num: 7,
    title: "Case reviewed by UK GPwSI or Consultant Dermatologist",
    desc: "Every case is reviewed by a GMC-registered GPwSI in Dermatology or Consultant Dermatologist.",
    image: "/images/pathway/step7-v3.jpg",
  },
  {
    num: 8,
    title: "Clinical report returned to GP surgery",
    desc: "A structured clinical report with clear recommendations is returned to the referring GP surgery within 24 hours.",
    image: "/images/pathway/step8-v3.jpg",
  },
  {
    num: 9,
    title: "Clear RAG-rated outcome for clinical decision-making",
    desc: "Each case is assigned a clear RAG-rated outcome to support appropriate next steps.",
    image: "/images/pathway/step9-v2.jpg",
    ragItems: [
      { color: "bg-emerald-500", label: "GREEN", desc: "Low risk", action: "Reassure / Monitor" },
      { color: "bg-amber-500", label: "AMBER", desc: "Moderate risk", action: "Review in primary care / Routine referral" },
      { color: "bg-red-500", label: "RED", desc: "High risk", action: "Urgent referral (2WW pathway)" },
    ],
  },
];

export default function PathwayDiagram({
  title = "How MoleScan Fits Into the NHS Skin Cancer Pathway",
}: PathwayDiagramProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      aria-label="NHS Skin Cancer Pathway Workflow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-14 md:mb-20 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold font-display text-brand-deep-navy leading-[1.12] tracking-tight mb-4">
              Timely specialist assessment.
              <br />
              <span className="text-brand-deep-blue">Better outcomes for patients.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Supporting primary care with fast, specialist dermatology assessment.
            </p>
          </div>
          <div
            className={`bg-gradient-to-br from-brand-soft-blue to-[#f0f4ff] rounded-2xl p-6 md:p-8 border border-brand-deep-blue/8 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-brand-deep-navy">
                Right advice. Right time. Right outcome.
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              MoleScan gives GP surgeries access to specialist dermatology skin lesion assessment{" "}
              <strong className="text-brand-deep-navy">within 24 hours</strong> — helping you reduce unnecessary referrals,
              prioritise the right patients, and act with{" "}
              <strong className="text-brand-deep-navy">confidence</strong>.
            </p>
          </div>
        </div>

        {/* ── Row 1: Steps 1-5 ── */}
        <div className="mb-6 md:mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {stepsRow1.map((step, index) => (
              <div
                key={step.num}
                className={`relative transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: inView ? `${index * 100 + 200}ms` : "0ms" }}
              >
                {/* Connector arrow (between steps, not after last) */}
                {index < stepsRow1.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/3 -right-3 z-20 items-center" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h10M8 4l3 3-3 3" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" />
                    </svg>
                  </div>
                )}

                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Row connector (dashed line going down from row 1 to row 2) ── */}
        <div className="hidden lg:flex justify-end pr-[10%] mb-6 md:mb-10" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0v30M14 24l6 6 6-6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* ── Row 2: Steps 6-9 ── */}
        <div className="mb-14 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stepsRow2.map((step, index) => (
              <div
                key={step.num}
                className={`relative transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: inView ? `${index * 100 + 700}ms` : "0ms" }}
              >
                {/* Connector arrow */}
                {index < stepsRow2.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/3 -right-3 z-20 items-center" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h10M8 4l3 3-3 3" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" />
                    </svg>
                  </div>
                )}

                {"ragItems" in step && step.ragItems ? (
                  <RagStepCard step={step} />
                ) : (
                  <StepCard step={step} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Summary Bar ── */}
        <div
          className={`bg-gradient-to-r from-brand-deep-navy via-brand-deep-blue to-brand-deep-navy rounded-2xl overflow-hidden transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 px-6 md:px-10 py-5 md:py-6">
            {/* Left: clock + turnaround */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-brand-teal/15 border border-brand-teal/25 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg font-display">24-hour turnaround.</span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-white/10" />

            {/* Center: tagline */}
            <p className="text-gray-300 text-sm md:text-base text-center">
              Expert assessment. &nbsp;Clear guidance. &nbsp;Confident decisions.
            </p>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-white/10" />

            {/* Right: NHS badge */}
            <div className="flex items-center gap-2">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-white font-bold text-lg tracking-wide">NHS</span>
                <span className="text-gray-400 text-xs">Compatible</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


/* ─── Step Card Sub-Component ─── */

interface StepData {
  num: number;
  title: string;
  desc?: string;
  image: string;
  subItems?: string[];
}

function StepCard({ step }: { step: StepData }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-[#f5f7fa] to-[#eef1f6] overflow-hidden">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Step number badge */}
        <div className="flex items-start gap-3 mb-2">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-deep-navy text-white text-xs font-bold flex items-center justify-center">
            {step.num}
          </span>
          <h3 className="text-sm font-semibold text-brand-deep-navy leading-snug flex-1">
            {step.title}
          </h3>
        </div>

        {/* Description */}
        {step.desc && (
          <p className="text-xs text-gray-500 leading-relaxed mb-2">
            {step.desc}
          </p>
        )}

        {/* Sub-items (for step 5) */}
        {step.subItems && (
          <ul className="mt-auto pt-3 space-y-1.5 border-t border-gray-100">
            {step.subItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


/* ─── RAG Step Card (Step 9) ─── */

interface RagStep {
  num: number;
  title: string;
  desc?: string;
  image: string;
  ragItems: {
    color: string;
    label: string;
    desc: string;
    action: string;
  }[];
}

function RagStepCard({ step }: { step: RagStep }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-[#f5f7fa] to-[#eef1f6] overflow-hidden">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Step number badge */}
        <div className="flex items-start gap-3 mb-2">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-deep-navy text-white text-xs font-bold flex items-center justify-center">
            {step.num}
          </span>
          <h3 className="text-sm font-semibold text-brand-deep-navy leading-snug flex-1">
            {step.title}
          </h3>
        </div>

        {/* Description */}
        {step.desc && (
          <p className="text-xs text-gray-500 leading-relaxed mb-2">
            {step.desc}
          </p>
        )}

        {/* RAG items */}
        <div className="mt-auto space-y-2.5 pt-2 border-t border-gray-100">
          {step.ragItems.map((rag) => (
            <div key={rag.label} className="flex items-start gap-2.5">
              <span className={`w-3 h-3 rounded-full ${rag.color} flex-shrink-0 mt-0.5 shadow-sm`} />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-brand-deep-navy leading-tight">
                  {rag.label} <span className="font-normal text-gray-500">– {rag.desc}</span>
                </p>
                <p className="text-[11px] text-gray-400 leading-tight">{rag.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
