"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useInView } from "@/components/hooks/useInView";

export default function NHSHero() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="nhs-hero"
      aria-label="MoleScan for NHS and Integrated Care Boards — clinician-led dermatology triage solution"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-navy via-[#152057] to-brand-deep-blue animate-gradient" />
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
                Ensure No Urgent Case Is Missed.
              </span>
            </h1>

            <p
              className={`text-gray-300/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              MoleScan helps NHS primary care triage skin lesions effectively
              with expert clinical assessment and UK GP and dermatologist
              review — reducing 2-week-wait pressure while maintaining
              patient safety.
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
              {["DCB0129 Aligned", "GDPR Compliant", "DTAC Ready", "UK Data Residency"].map((badge, i) => (
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
                  alt="Illustrated infographic showing MoleScan integrated into the NHS dermatology referral pathway — clinician-led skin lesion triage reducing unnecessary 2-week-wait referrals while ensuring urgent melanoma cases are fast-tracked to secondary care"
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

      {/* Bottom stats ribbon — SEO-rich structured content */}
      <div className="relative z-10 mt-8">
        <div className="border-t border-white/[0.06]">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 transition-all duration-700 delay-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { icon: "shield", label: "Clinician-Led Assessment", desc: "Every case reviewed by UK GPs and dermatologists" },
                { icon: "clock", label: "24-Hour Reports", desc: "Structured results delivered within one working day" },
                { icon: "chart", label: "Reduce 2WW Pressure", desc: "Filter benign referrals at the primary care level" },
                { icon: "lock", label: "NHS Compliant", desc: "DCB0129, GDPR, DTAC aligned platform" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 py-5 px-3 md:py-6 md:px-4 ${
                    i < 3 ? "md:border-r md:border-white/[0.06]" : ""
                  } border-b border-white/[0.06] md:border-b-0`}
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon === "shield" && (
                      <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    )}
                    {item.icon === "clock" && (
                      <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {item.icon === "chart" && (
                      <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                      </svg>
                    )}
                    {item.icon === "lock" && (
                      <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-0.5">{item.label}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
