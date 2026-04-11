"use client";

import { useInView } from "@/components/hooks/useInView";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StepProcessProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export default function StepProcess({ title, subtitle, steps }: StepProcessProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref}>
      {title && (
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="mb-4">{title}</h2>
          {subtitle && (
            <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative">
        {/* Connecting line (desktop only) */}
        <div
          className="hidden lg:block absolute top-6 left-[16.6%] right-[16.6%] h-[2px] bg-gradient-to-r from-brand-teal/20 via-brand-teal/40 to-brand-teal/20 z-0"
          aria-hidden="true"
        />

        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`relative z-10 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: inView ? `${index * 150 + 200}ms` : "0ms",
            }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-teal to-brand-deep-teal text-white flex items-center justify-center font-bold text-lg shadow-md transition-transform duration-300 hover:scale-110">
                {step.number}
              </div>
              <div className="text-brand-teal transition-transform duration-300 hover:translate-y-[-2px]">
                {step.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-brand-text/70 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
