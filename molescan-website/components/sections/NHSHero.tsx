"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroFeatureBar from "@/components/sections/HeroFeatureBar";
import { useInView } from "@/components/hooks/useInView";

export default function NHSHero() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="nhs-hero"
      aria-label="MoleScan for NHS and Integrated Care Boards — dermatologist-led dermatology triage solution"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-navy via-[#152057] to-brand-deep-blue animate-gradient" />

        {/* Background image */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url('/images/hero-bg-nhs.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-brand-teal/7 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -left-16 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] animate-float delay-500" />
      </div>

      {/* Main content */}
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 md:pt-28 pb-8 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {/* Eyebrow with NHS badge */}
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/[0.08]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
                </span>
                <span className="text-sm text-gray-300 font-medium">
                  For NHS Commissioners &amp; ICBs
                </span>
              </div>
            </div>

            <h1
              className={`text-white text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-bold font-display leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Reduce Unnecessary{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Dermatology Referrals.</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-brand-teal/25 rounded-sm -z-0"
                  aria-hidden="true"
                />
              </span>
              <br />
              <span className="text-gray-300/90 text-[0.65em] font-semibold">
                Free Up Specialist Capacity for Patients Who Need It Most.
              </span>
            </h1>

            <p
              className={`text-gray-300/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              MoleScan supports NHS primary care in triaging skin lesions
              through structured, clinician-led assessment with UK GPwSI
              dermatology doctor review — helping reduce avoidable
              2-week-wait referrals while maintaining patient safety.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button href="/request-demo" variant="primary" showArrow>
                Request Demo
              </Button>
              <Button href="/about/clinical-governance" variant="ghost-light" showArrow>
                Clinical Governance
              </Button>
            </div>

            {/* Compliance badges */}
            <div
              className={`flex flex-wrap items-center gap-2.5 transition-all duration-700 delay-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {["DCB0129 compliant", "GDPR compliant", "DTAC-ready", "UK data residency"].map((badge, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.07] text-gray-300 text-xs font-medium"
                >
                  <svg className="w-3.5 h-3.5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: NHS image with metrics */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Image container — smaller on mobile */}
            <div className="relative mx-auto max-w-[280px] lg:max-w-none">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.06] p-4 lg:p-6">
                <Image
                  src="/images/hero-nhs-integrated-care.png"
                  alt="Illustrated infographic showing MoleScan integrated into the NHS dermatology referral pathway — dermatologist-led skin lesion triage reducing unnecessary 2-week-wait referrals while ensuring urgent melanoma cases are fast-tracked to secondary care"
                  fill
                  priority
                  className="object-contain p-2 lg:p-4"
                  sizes="(max-width: 1024px) 280px, 50vw"
                />
              </div>

              {/* Desktop only: floating metric cards */}
              <div
                className={`hidden lg:block absolute -top-4 -left-4 bg-white/[0.1] backdrop-blur-xl border border-white/[0.12] rounded-2xl px-5 py-4 shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: inView ? "600ms" : "0ms" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold font-display text-brand-teal">95%</span>
                  <p className="text-gray-300 text-xs leading-tight max-w-[120px]">
                    of 2WW referrals<br />are benign
                  </p>
                </div>
              </div>

              <div
                className={`hidden lg:block absolute -bottom-4 -right-4 bg-white/[0.1] backdrop-blur-xl border border-white/[0.12] rounded-2xl px-5 py-4 shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: inView ? "750ms" : "0ms" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold font-display text-brand-teal">24h</span>
                  <p className="text-gray-300 text-xs leading-tight max-w-[120px]">
                    structured report<br />turnaround
                  </p>
                </div>
              </div>

              <div
                className={`hidden lg:block absolute -bottom-4 left-8 bg-white/[0.1] backdrop-blur-xl border border-white/[0.12] rounded-2xl px-5 py-4 shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: inView ? "900ms" : "0ms" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold font-display text-brand-teal">100%</span>
                  <p className="text-gray-300 text-xs leading-tight max-w-[120px]">
                    expert<br />reviewed
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile only: metrics as a clean row below the image */}
            <div
              className={`lg:hidden grid grid-cols-3 gap-3 mt-6 transition-all duration-700 delay-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { value: "95%", label: "2WW referrals are benign" },
                { value: "24h", label: "report turnaround" },
                { value: "100%", label: "expert reviewed" },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="bg-white/[0.07] backdrop-blur-md border border-white/[0.09] rounded-xl p-3 text-center"
                >
                  <span className="block text-2xl font-bold font-display text-brand-teal mb-1">
                    {metric.value}
                  </span>
                  <p className="text-gray-400 text-[10px] leading-tight">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <HeroFeatureBar
        inView={inView}
        items={[
          { icon: "shield", label: "Clinician-Led Assessment", desc: "Every case reviewed by a UK GPwSI (General Practitioner with a specialist interest in dermatology)" },
          { icon: "clock", label: "24-Hour Reports", desc: "Clear, structured reports delivered within one working day to support safe triage decisions" },
          { icon: "chart", label: "Supports Reduction in 2WW Pressure", desc: "Helps reduce avoidable 2-week-wait referrals and optimise specialist dermatology capacity" },
          { icon: "lock", label: "NHS-Aligned Platform", desc: "Aligned with DCB0129 clinical safety standards, GDPR, and DTAC requirements for safe NHS integration" },
        ]}
      />

    </section>
  );
}
