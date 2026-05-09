"use client";

import Image from "next/image";
import { useInView } from "@/components/hooks/useInView";

const FEATURES = [
  {
    title: "Doctor-led assessment within 24 hours",
    desc: "Clear clinical guidance when you need it",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Doctor-led",
    desc: "Every case reviewed by a UK GPwSI or Consultant Dermatologist",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "RAG-rated outcomes",
    desc: "GREEN: safe to proceed • AMBER: review/monitor • RED: urgent referral",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" />
      </svg>
    ),
  },
  {
    title: "Full clinical audit trail",
    desc: "Every assessment is documented and traceable — supporting clinical governance and medico-legal protection",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9h6m-6 4h4" />
      </svg>
    ),
  },
];

const BUILT_FOR = [
  "Aesthetic Clinics",
  "Beauty Therapists",
  "Podiatry Clinics",
  "Laser & IPL Clinics",
  "Physiotherapy Clinics",
  "Private GPs",
  "Chiropractors",
  "Tattoo Removal Studios",
];

export default function ClinicsExpertAssessment() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="bg-white py-16 md:py-24"
      aria-label="Expert Mole Assessment for private clinics"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ─── Left: Image card ─── */}
          <div
            className={`relative transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="bg-gradient-to-br from-brand-soft-blue/40 to-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
              {/* Top accent strip */}
              <div className="h-1.5 bg-gradient-to-r from-brand-teal via-brand-deep-blue to-brand-deep-navy" />

              {/* Illustration */}
              <div className="relative aspect-[5/4] bg-white">
                <Image
                  src="/images/clinic-pathway/step3-v2.png"
                  alt="Clinician using MoleScan to capture a dermoscopic image of a skin lesion"
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Footer strip */}
              <div className="bg-white border-t border-gray-100 px-5 py-4 flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-teal" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-deep-navy">
                    Dermatologist-Led Assessment
                  </span>
                </div>
                <div className="bg-white shadow-md border border-gray-100 rounded-xl pl-2 pr-3.5 py-1.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-brand-deep-navy">24h</p>
                    <p className="text-[11px] text-brand-text/60">Turnaround</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Right: Content ─── */}
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/[0.08] border border-brand-teal/15 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-deep-navy">
                For Private Clinics
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold font-display leading-[1.15] mb-6">
              <span className="text-brand-deep-navy">Doctor-led skin lesion assessment.</span>
              <br />
              <span className="text-brand-deep-blue">Without the </span>
              <span className="relative inline-block text-brand-deep-blue">
                wait
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-brand-deep-blue/25 rounded-sm"
                  aria-hidden="true"
                />
              </span>
              <span className="text-brand-deep-blue">.</span>
            </h2>

            {/* Description */}
            <p className="text-brand-text/85 text-base md:text-lg leading-relaxed mb-6">
              MoleScan is a doctor-led skin lesion assessment platform for
              private clinics. When you identify a skin lesion on your patient,
              capture dermoscopic images and submit the case. A UK GPwSI or
              Consultant Dermatologist reviews each case and provides a clear,
              RAG-rated report within 24 hours.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-brand-deep-navy mb-3">
              Reduce unnecessary referrals. Remove uncertainty.
            </h3>
            <p className="text-brand-text/60 text-sm md:text-base leading-relaxed mb-8">
              No need to refer every mole to the GP. No cancelled appointments
              or unnecessary delays. No guessing. Just a fast, expert answer so
              you can treat safely, advise confidently, or refer appropriately.
            </p>

            {/* Feature grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="bg-brand-soft-blue/30 rounded-xl p-4 border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-brand-teal flex-shrink-0 mt-0.5">
                      {f.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-brand-deep-navy mb-1 leading-snug">
                        {f.title}
                      </h3>
                      <p className="text-xs text-brand-text/60 leading-snug">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Designed For */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-text/50 mb-3">
                Designed for Clinics That Treat Skin
              </p>
              <div className="flex flex-wrap gap-2">
                {BUILT_FOR.map((label) => (
                  <span
                    key={label}
                    className="px-3.5 py-1.5 rounded-full bg-brand-soft-blue/50 border border-brand-deep-blue/10 text-sm text-brand-deep-navy"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer disclaimer */}
            <p className="text-xs text-brand-text/50 leading-relaxed border-t border-gray-100 pt-4">
              MoleScan is operated by Dermme Health Ltd — a CQC-registered
              provider. It is a clinician-led skin lesion assessment and triage
              service, not a standalone diagnostic device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
