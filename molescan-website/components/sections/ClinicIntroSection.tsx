"use client";

import { useInView } from "@/components/hooks/useInView";
import Image from "next/image";

export default function ClinicIntroSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  const highlights = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24-Hour Reports",
      desc: "Expert dermatologist opinion delivered within one working day",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Dermatologist-Led",
      desc: "Every case reviewed by a UK GPwSI or Consultant Dermatologist",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "RAG-Rated Outcomes",
      desc: "GREEN safe, AMBER monitor, RED urgent referral",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: "Full Audit Trail",
      desc: "Complete documentation for clinical governance",
    },
  ];

  const clinicTypes = [
    "Aesthetic Clinics",
    "Beauty Therapists",
    "Podiatry",
    "Laser & IPL",
    "Physiotherapy",
    "Private GPs",
    "Chiropractors",
    "Tattoo Removal",
  ];

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
      id="what-is-molescan"
      aria-label="What is MoleScan for Private Clinics"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Illustration ── */}
          <div
            className={`relative transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-deep-navy/10 border border-gray-100/60">
              {/* Gradient accent top bar */}
              <div className="h-1.5 bg-gradient-to-r from-brand-teal via-brand-deep-blue to-brand-deep-navy" />

              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#f5f7fa] to-[#eef1f6]">
                <Image
                  src="/images/clinic-pathway/step4-v2.png"
                  alt="MoleScan mole assessment process — practitioner capturing dermoscopic image"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Bottom info bar */}
              <div className="bg-white px-5 py-3.5 flex items-center justify-between border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                  <span className="text-xs font-semibold text-brand-deep-navy tracking-wide uppercase">
                    Dermatologist-Led Assessment
                  </span>
                </div>
                <span className="text-xs text-gray-400">GMC-Registered Doctors</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-deep-teal flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-brand-deep-navy leading-none">24h</p>
                <p className="text-[11px] text-gray-400">Turnaround</p>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div>
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/8 border border-brand-teal/15 mb-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
              <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">
                For Private Clinics
              </span>
            </div>

            <h2
              className={`text-3xl md:text-4xl font-bold font-display text-brand-deep-navy leading-[1.15] mb-5 transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Expert Mole Assessment.{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-deep-blue">Without the Wait.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-brand-teal/15 rounded-sm -z-0" aria-hidden="true" />
              </span>
            </h2>

            <p
              className={`text-gray-600 text-[17px] leading-relaxed mb-6 transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              MoleScan is a dermatologist-led mole and skin lesion assessment platform for private clinics.
              When you spot a mole on a client, capture a dermoscopic image and upload it.
              A UK consultant dermatologist reviews every case and delivers a RAG-rated report within 24 hours.
            </p>

            <p
              className={`text-gray-500 text-[15px] leading-relaxed mb-8 transition-all duration-700 delay-250 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              No need to refer every mole to the GP. No cancelled appointments.
              No guessing. Just a fast, expert answer so you can treat safely, advise confidently, or refer appropriately.
            </p>

            {/* ── Highlight Cards ── */}
            <div
              className={`grid grid-cols-2 gap-3 mb-8 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="group bg-gray-50/80 hover:bg-white rounded-xl p-3.5 border border-gray-100/60 hover:border-brand-teal/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-teal/8 flex items-center justify-center text-brand-teal flex-shrink-0 group-hover:bg-brand-teal/12 transition-colors">
                      {h.icon}
                    </div>
                    <h3 className="text-sm font-bold text-brand-deep-navy">{h.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-[42px]">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* ── Clinic Types ── */}
            <div
              className={`transition-all duration-700 delay-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Built for</p>
              <div className="flex flex-wrap gap-2">
                {clinicTypes.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1.5 rounded-full bg-brand-soft-blue text-xs font-medium text-brand-deep-blue border border-brand-deep-blue/8 hover:border-brand-teal/20 hover:bg-brand-teal/5 transition-colors"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Legal footer ── */}
            <div
              className={`mt-6 pt-5 border-t border-gray-100 transition-all duration-700 delay-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xs text-gray-400 leading-relaxed">
                MoleScan is operated by Dermme Health Ltd. It is not a medical device — it is a dermatologist-led triage and assessment platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
