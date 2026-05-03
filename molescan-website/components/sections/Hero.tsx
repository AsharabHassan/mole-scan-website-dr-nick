"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroFeatureBar from "@/components/sections/HeroFeatureBar";
import { useInView } from "@/components/hooks/useInView";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "ghost-light";
}

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroBadge {
  text: string;
  items?: string[];
}

interface HeroProps {
  title: string;
  /** Optional highlighted portion of the title — will get a teal underline accent */
  titleHighlight?: string;
  subtitle: string;
  ctas: HeroCTA[];
  background?: "navy" | "blue";
  image?: HeroImage;
  /** Eyebrow badge text above the title */
  eyebrow?: string;
  /** Trust/compliance badges shown below CTAs */
  badges?: HeroBadge;
  /** Optional background image URL for the hero section */
  backgroundImage?: string;
  /** Optional feature bar items at the bottom of the hero */
  featureBar?: { icon: "shield" | "clock" | "chart" | "lock" | "check" | "users"; label: string; desc: string }[];
}

export default function Hero({
  title,
  titleHighlight,
  subtitle,
  ctas,
  background = "navy",
  image,
  eyebrow,
  badges,
  backgroundImage,
  featureBar,
}: HeroProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  // Split title around the highlight if provided
  let titleParts: { before: string; highlight: string; after: string } | null = null;
  if (titleHighlight && title.includes(titleHighlight)) {
    const idx = title.indexOf(titleHighlight);
    titleParts = {
      before: title.slice(0, idx),
      highlight: titleHighlight,
      after: title.slice(idx + titleHighlight.length),
    };
  }

  const bgStyle =
    background === "navy"
      ? "bg-gradient-to-br from-brand-deep-navy via-[#152057] to-brand-deep-blue"
      : "bg-gradient-to-br from-brand-deep-blue via-brand-deep-navy to-brand-deep-blue";

  return (
    <section
      ref={ref}
      id="hero"
      className={`${bgStyle} animate-gradient text-white relative overflow-hidden flex flex-col ${
        image ? "min-h-[75vh]" : ""
      }`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Background image */}
        {backgroundImage && (
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        )}
        <div className="absolute -top-28 -right-28 w-[420px] h-[420px] bg-brand-teal/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-36 -left-16 w-[340px] h-[340px] bg-indigo-500/5 rounded-full blur-[100px] animate-float delay-500" />
        <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-white/[0.015] rounded-full blur-2xl animate-pulse-soft" />
        {/* Geometric accents */}
        <div className="absolute top-16 right-20 w-24 h-24 border border-white/[0.03] rounded-2xl rotate-12" />
        <div className="absolute bottom-20 left-[8%] w-14 h-14 border border-brand-teal/[0.05] rounded-xl -rotate-6" />
        {/* Right gradient wash */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-brand-teal/5 to-transparent" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28 flex-1 flex items-center">
        <div
          className={`${
            image
              ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              : "max-w-3xl"
          }`}
        >
          <div>
            {/* Eyebrow badge */}
            {eyebrow && (
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/[0.08] mb-7 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
                </span>
                <span className="text-sm text-gray-300 font-medium">{eyebrow}</span>
              </div>
            )}

            {/* Title */}
            <h1
              className={`text-white text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-display leading-[1.12] mb-6 transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {titleParts ? (
                <>
                  {titleParts.before}
                  <span className="relative inline-block">
                    <span className="relative z-10">{titleParts.highlight}</span>
                    <span
                      className="absolute bottom-1 left-0 right-0 h-3 bg-brand-teal/25 rounded-sm -z-0"
                      aria-hidden="true"
                    />
                  </span>
                  {titleParts.after}
                </>
              ) : (
                title
              )}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-gray-300/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {subtitle}
            </p>

            {/* CTAs */}
            {ctas.length > 0 && (
              <div
                className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-300 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {ctas.map((cta) => (
                  <Button
                    key={cta.href}
                    href={cta.href}
                    variant={cta.variant || "primary"}
                    showArrow
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}

            {/* Trust/compliance badges */}
            {badges && (
              <div
                className={`transition-all duration-700 delay-400 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {badges.text && !badges.items && (
                  <p className="text-gray-400 text-sm">{badges.text}</p>
                )}
                {badges.items && (
                  <div className="flex flex-wrap items-center gap-2.5">
                    {badges.text && (
                      <span className="text-gray-400 text-sm mr-1">{badges.text}</span>
                    )}
                    {badges.items.map((item, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.07] text-gray-300 text-xs font-medium"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-brand-teal"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {image && (
            <div
              className={`relative transition-all duration-1000 delay-400 ${
                inView
                  ? "opacity-100 translate-y-0 translate-x-0"
                  : "opacity-0 translate-y-8 translate-x-4"
              }`}
            >
              <div className="relative">
                <div
                  className="absolute -inset-4 bg-gradient-to-br from-brand-teal/12 to-indigo-500/8 rounded-3xl blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 ring-1 ring-white/10">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={680}
                    height={510}
                    priority
                    className="object-cover w-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <HeroFeatureBar
        inView={inView}
        items={featureBar || [
          { icon: "shield", label: "Dermatologist-Led", desc: "Every case reviewed by UK specialist dermatologists" },
          { icon: "clock", label: "24-Hour Reports", desc: "Structured results delivered within one working day" },
          { icon: "lock", label: "GDPR Compliant", desc: "UK data residency with full encryption" },
          { icon: "check", label: "100% Expert Reviewed", desc: "No assessment without dermatologist oversight" },
        ]}
      />
    </section>
  );
}
