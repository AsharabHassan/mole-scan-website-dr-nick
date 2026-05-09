"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroFeatureBar from "@/components/sections/HeroFeatureBar";
import { useInView } from "@/components/hooks/useInView";

export default function HomepageHero() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  const highlights = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      text: "UK GPwSI & Consultant Dermatologists",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Reports Within 24 Hours",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      text: "GDPR Compliant & UK Data Residency",
    },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden min-h-[85vh] flex flex-col"
    >
      {/* Background layers */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-navy via-[#152057] to-brand-deep-blue animate-gradient" />

        {/* Background image */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url('/images/hero-bg-homepage.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Mesh gradient overlays */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-brand-teal/8 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-gradient-to-tr from-brand-teal/5 to-transparent" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative orbs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-teal/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-indigo-500/6 rounded-full blur-[100px] animate-float delay-500" />
        <div className="absolute top-1/3 right-[15%] w-48 h-48 bg-white/[0.02] rounded-full blur-3xl animate-pulse-soft" />

        {/* Geometric accents */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/[0.04] rounded-3xl rotate-12" />
        <div className="absolute bottom-32 left-[10%] w-20 h-20 border border-brand-teal/[0.06] rounded-2xl -rotate-6" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Eyebrow badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/[0.08] mb-8 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
              </span>
              <span className="text-sm text-gray-300 font-medium">
                Dermatologist-Led Clinical Triage Platform
              </span>
            </div>

            <h1
              className={`text-white text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-bold font-display leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Dermatologist-Led,{" "}
              <span className="relative">
                <span className="relative z-10">Expert-Reviewed</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-brand-teal/25 rounded-sm -z-0"
                  aria-hidden="true"
                />
              </span>
              <br />
              Skin Lesion Assessment
            </h1>

            <p
              className={`text-gray-300/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              MoleScan provides expert dermoscopic image analysis with UK GPwSI and
              dermatologist review to deliver structured skin lesion assessment
              reports within 24 hours. A safe, governed triage pathway for
              healthcare professionals.
            </p>

            {/* Highlight pills */}
            <div
              className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-sm text-gray-300"
                >
                  <span className="text-brand-teal">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button href="/for-clinics" variant="primary" showArrow>
                For Clinics
              </Button>
              <Button href="/for-nhs" variant="ghost-light" showArrow>
                For NHS &amp; ICBs
              </Button>
            </div>

            {/* Social proof micro-bar */}
            <div
              className={`flex items-center gap-3 transition-all duration-700 delay-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex -space-x-2" aria-hidden="true">
                {["Dr", "Mr", "Ms", "Dr"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal/80 to-brand-deep-teal flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-brand-deep-navy"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Trusted by <span className="text-white font-medium">practitioners across the UK</span>
              </p>
            </div>
          </div>

          {/* Right: Hero visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-8 translate-x-4"
            }`}
          >
            {/* Main image container */}
            <div className="relative">
              {/* Glow behind image */}
              <div
                className="absolute -inset-4 bg-gradient-to-br from-brand-teal/15 to-indigo-500/10 rounded-3xl blur-2xl"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 ring-1 ring-white/10">
                <Image
                  src="/images/homepage-hero-v4.png"
                  alt="Illustrated infographic showing MoleScan dermatologist-led skin lesion assessment workflow — a practitioner captures a mole image with a dermoscope, expert dermatologists assess the lesion for risk stratification, and a UK GP or dermatologist reviews and delivers a structured report within 24 hours"
                  width={680}
                  height={510}
                  priority
                  className="object-cover w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating info cards */}
              <div
                className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 animate-float"
                aria-hidden="true"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-teal to-brand-deep-teal flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-brand-deep-blue text-sm">24h Reports</p>
                  <p className="text-brand-text/60 text-xs">Expert-reviewed</p>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3.5 flex items-center gap-2.5 animate-float delay-700"
                aria-hidden="true"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-brand-deep-blue text-sm">Expert Review</p>
                  <p className="text-brand-text/60 text-xs">Dermatologist-led triage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroFeatureBar
        inView={inView}
        items={[
          { icon: "shield", label: "Dermatologist-Led", desc: "Every case reviewed by UK GPwSI dermatologists and consultant dermatologists" },
          { icon: "clock", label: "24-Hour Reports", desc: "Structured results delivered within one working day" },
          { icon: "lock", label: "GDPR Compliant", desc: "UK data residency with full encryption" },
          { icon: "check", label: "100% Expert Reviewed", desc: "No assessment without dermatologist oversight" },
        ]}
      />
    </section>
  );
}
