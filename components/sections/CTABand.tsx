"use client";

import Link from "next/link";
import { useInView } from "@/components/hooks/useInView";

interface CTABandProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
  background?: "teal" | "navy";
}

export default function CTABand({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  background = "teal",
}: CTABandProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="cta-band"
      className="relative py-24 md:py-32 overflow-hidden bg-brand-deep-navy"
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Mesh gradient */}
        <div
          className={`absolute inset-0 ${
            background === "teal"
              ? "bg-gradient-to-br from-brand-teal/15 via-brand-deep-navy to-indigo-900/20"
              : "bg-gradient-to-br from-brand-deep-blue/30 via-brand-deep-navy to-brand-teal/10"
          }`}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 -left-20 w-[360px] h-[360px] bg-brand-teal/12 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] animate-float delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Geometric accents */}
        <div className="absolute top-12 right-[15%] w-20 h-20 border border-white/[0.04] rounded-2xl rotate-12" />
        <div className="absolute bottom-16 left-[10%] w-12 h-12 border border-brand-teal/[0.08] rounded-xl -rotate-6" />
        <div className="absolute top-1/3 right-[8%] w-6 h-6 bg-brand-teal/10 rounded-full" />
        <div className="absolute bottom-1/3 left-[20%] w-4 h-4 bg-white/[0.03] rounded-full" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] mb-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
            </span>
            <span className="text-sm text-gray-300 font-medium">
              Start in under 48 hours
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`text-white text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-display leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {title}
          </h2>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {subtitle}
            </p>
          )}

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href={buttonHref}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-teal text-white font-semibold text-base transition-all duration-300 hover:bg-brand-deep-teal hover:shadow-2xl hover:shadow-brand-teal/25 hover:-translate-y-1"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">{buttonLabel}</span>
              <svg
                className="w-5 h-5 relative transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/[0.12] text-gray-300 font-semibold text-base transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:text-white"
            >
              Talk to our team
            </Link>
          </div>

          {/* Mini social proof */}
          <div
            className={`mt-10 flex items-center justify-center gap-6 transition-all duration-700 delay-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <svg className="w-4 h-4 text-brand-teal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              No setup fees
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <svg className="w-4 h-4 text-brand-teal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              24h report turnaround
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <svg className="w-4 h-4 text-brand-teal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              GMC consultants
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
