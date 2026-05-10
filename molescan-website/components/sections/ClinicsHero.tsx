"use client";

import Button from "@/components/ui/Button";
import { useInView } from "@/components/hooks/useInView";

export default function ClinicsHero() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  const valueProps = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Doctor-led assessment within 24 hours",
      desc: "Clear guidance on whether it\u2019s safe to proceed",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Reviewed by UK Dermatologists",
      desc: "You\u2019re not expected to diagnose \u2014 we provide the clinical assessment",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Support safe, appropriate treatment decisions",
      desc: "Helping you avoid unnecessary referrals and delays \u2014 while maintaining safe clinical decision-making.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        </svg>
      ),
      title: "Full clinical audit trail",
      desc: "Every assessment is fully documented and traceable \u2014 providing a clear audit trail for governance and medico-legal protection",
    },
  ];

  const clinicTypes = [
    "Aesthetic Clinics",
    "Laser Clinics",
    "Skin Clinics",
    "Podiatry Clinics",
    "Private GPs",
    "Physio Clinics",
    "Chiropractors",
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden min-h-[80vh] flex flex-col"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-navy via-[#152057] to-brand-deep-blue animate-gradient" />

        {/* Background image */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url('/images/hero-bg-clinics.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-brand-teal/6 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-brand-teal/4 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-brand-teal/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -left-16 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] animate-float delay-500" />
        <div className="absolute top-16 right-24 w-28 h-28 border border-white/[0.03] rounded-2xl rotate-12" />
        <div className="absolute bottom-24 left-[8%] w-16 h-16 border border-brand-teal/[0.05] rounded-xl -rotate-6" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content — 7 cols */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
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
                For private non-dermatology clinics
              </span>
            </div>

            <h1
              className={`text-white text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-bold font-display leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              A mole or a skin lesion in the{" "}
              <span className="relative inline-block">
                <span className="relative z-10">treatment area?</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-brand-teal/25 rounded-sm -z-0"
                  aria-hidden="true"
                />
              </span>
              <br />
              <span className="text-gray-300/90 text-[0.72em] font-semibold">
                Get it clinically assessed. Then treat with confidence.
              </span>
            </h1>

            <p
              className={`text-gray-300/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              You&apos;ve identified a mole or skin lesion in the treatment area.
              You may not be a dermatologist — and you&apos;re not expected to be.
              MoleScan provides a fast doctor-led skin lesion assessment, giving
              your clinic clear, structured guidance — so you can treat safely,
              advise confidently, or refer appropriately.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button href="/request-demo" variant="primary" showArrow>
                Request Demo
              </Button>
              <Button href="/about/how-molescan-works" variant="ghost-light" showArrow>
                See how it works
              </Button>
            </div>

            {/* Clinic types */}
            <div
              className={`flex flex-wrap items-center gap-2 transition-all duration-700 delay-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-gray-400 text-sm mr-1">Built for:</span>
              {clinicTypes.map((type, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.07] text-gray-300 text-xs font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Value prop cards — 5 cols */}
          <div className="lg:col-span-5">
            <div
              className={`space-y-4 transition-all duration-1000 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {valueProps.map((prop, i) => (
                <div
                  key={i}
                  className={`group relative bg-white/[0.06] backdrop-blur-md border border-white/[0.09] rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.1] hover:border-brand-teal/20 hover:-translate-y-0.5 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{
                    transitionDelay: inView ? `${i * 120 + 400}ms` : "0ms",
                  }}
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-teal/0 to-brand-teal/0 group-hover:from-brand-teal/5 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-teal to-brand-deep-teal flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-brand-teal/20">
                      {prop.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{prop.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{prop.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Bottom trust indicator */}
              <div
                className={`flex items-center gap-3 pt-4 pl-1 transition-all duration-700 ${
                  inView ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: inView ? "800ms" : "0ms" }}
              >
                <div className="flex -space-x-1.5" aria-hidden="true">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-teal/70 to-brand-deep-teal ring-2 ring-brand-deep-navy flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs">
                  Supporting <span className="text-white font-medium">clinics across the UK</span> for safe skin lesion assessments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
