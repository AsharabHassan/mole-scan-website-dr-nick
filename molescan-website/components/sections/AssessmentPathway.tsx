"use client";

import { useInView } from "@/components/hooks/useInView";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  detail: string;
  icon: React.ReactNode;
  phase: "capture" | "analysis" | "delivery";
  phaseLabel?: string;
}

interface AssessmentPathwayProps {
  steps: ProcessStep[];
}

const phaseConfig = {
  capture: {
    label: "Data Capture",
    gradient: "from-sky-500 to-blue-600",
    bgLight: "bg-sky-50",
    borderLight: "border-sky-200",
    dotColor: "bg-sky-500",
    textColor: "text-sky-700",
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
    accentBg: "bg-sky-500/8",
    ringColor: "ring-sky-200",
  },
  analysis: {
    label: "Clinical Analysis",
    gradient: "from-brand-teal to-brand-deep-teal",
    bgLight: "bg-teal-50",
    borderLight: "border-teal-200",
    dotColor: "bg-brand-teal",
    textColor: "text-brand-teal",
    iconBg: "bg-gradient-to-br from-brand-teal to-brand-deep-teal",
    accentBg: "bg-brand-teal/8",
    ringColor: "ring-brand-teal/20",
  },
  delivery: {
    label: "Report & Action",
    gradient: "from-brand-deep-blue to-brand-deep-navy",
    bgLight: "bg-indigo-50",
    borderLight: "border-indigo-200",
    dotColor: "bg-brand-deep-blue",
    textColor: "text-brand-deep-blue",
    iconBg: "bg-gradient-to-br from-brand-deep-blue to-brand-deep-navy",
    accentBg: "bg-brand-deep-blue/5",
    ringColor: "ring-brand-deep-blue/15",
  },
};

export default function AssessmentPathway({ steps }: AssessmentPathwayProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05 });

  // Group steps by phase for the summary
  const phases = [
    { key: "capture" as const, steps: "1–2", label: "Data Capture", desc: "Image capture and secure upload" },
    { key: "analysis" as const, steps: "3–4", label: "Clinical Analysis", desc: "Structured analysis and GPwSI clinician review" },
    { key: "delivery" as const, steps: "5–6", label: "Report & Action", desc: "Structured report and clinical decision" },
  ];

  return (
    <article ref={ref} aria-label="MoleScan Assessment Pathway">
      {/* Section Header */}
      <div
        className={`text-center mb-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-3">
          6-Step Clinical Process
        </p>
        <h2 className="mb-4">The MoleScan Assessment Pathway</h2>
        <p className="text-brand-text/70 text-lg max-w-3xl mx-auto">
          Every MoleScan assessment follows a structured 6-step pathway designed
          to ensure clinical safety, consistency, and speed.
        </p>
      </div>

      {/* Phase overview cards — desktop */}
      <div
        className={`hidden md:grid grid-cols-3 gap-5 mb-16 transition-all duration-700 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {phases.map((phase) => {
          const config = phaseConfig[phase.key];
          return (
            <div
              key={phase.key}
              className={`relative rounded-xl p-5 ${config.accentBg} border ${config.borderLight} overflow-hidden`}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient}`} />
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-2.5 h-2.5 rounded-full ${config.dotColor}`} />
                <span className={`text-xs font-bold uppercase tracking-widest ${config.textColor}`}>
                  Steps {phase.steps}
                </span>
              </div>
              <h3 className={`text-lg font-bold ${config.textColor} mb-1`}>{phase.label}</h3>
              <p className="text-brand-text/60 text-sm">{phase.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Main Timeline */}
      <div className="relative">
        {/* Vertical connecting line — runs down the left side */}
        <div
          className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-[1px] transition-all duration-1000 ease-out-expo ${
            inView ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}
        >
          <div className="h-full bg-gradient-to-b from-sky-300/40 via-brand-teal/40 to-brand-deep-blue/30" />
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => {
            const config = phaseConfig[step.phase];
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: inView ? `${index * 120 + 300}ms` : "0ms",
                }}
              >
                {/* Desktop: alternating layout */}
                <div className="hidden md:flex items-start">
                  {/* Left column */}
                  <div className="flex-1 pr-10">
                    {isEven ? (
                      <StepCard step={step} config={config} align="right" />
                    ) : (
                      <div className="h-full" />
                    )}
                  </div>

                  {/* Center node */}
                  <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl ${config.iconBg} text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ring-4 ring-white`}
                    >
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <div
                      className={`mt-2 w-7 h-7 rounded-full ${config.iconBg} text-white text-xs font-bold flex items-center justify-center shadow-sm`}
                    >
                      {step.number}
                    </div>
                    {/* Spacer to next step */}
                    {index < steps.length - 1 && <div className="h-12" />}
                  </div>

                  {/* Right column */}
                  <div className="flex-1 pl-10">
                    {!isEven ? (
                      <StepCard step={step} config={config} align="left" />
                    ) : (
                      <div className="h-full" />
                    )}
                  </div>
                </div>

                {/* Mobile: left-aligned timeline */}
                <div className="md:hidden flex gap-5 pb-10">
                  {/* Node */}
                  <div className="flex-shrink-0 flex flex-col items-center relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl ${config.iconBg} text-white flex items-center justify-center shadow-md ring-4 ring-white`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-0.5">
                    <StepCard step={step} config={config} align="left" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* End node */}
        <div className="flex justify-start md:justify-center relative z-10 pl-3 md:pl-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal to-brand-deep-teal flex items-center justify-center shadow-md ring-4 ring-white">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── Step Card Sub-Component ─── */

interface StepCardProps {
  step: ProcessStep;
  config: (typeof phaseConfig)[keyof typeof phaseConfig];
  align: "left" | "right";
}

function StepCard({ step, config, align }: StepCardProps) {
  return (
    <div
      className={`group rounded-xl border ${config.borderLight} ${config.accentBg} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {/* Phase badge */}
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest ${config.textColor} ${config.bgLight} border ${config.borderLight} mb-3`}
      >
        <div className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`} />
        {step.phaseLabel ?? phaseConfig[step.phase].label}
      </div>

      <h3 className="text-lg font-bold text-brand-deep-blue mb-2.5 leading-snug">
        {step.title}
      </h3>

      <p className="text-brand-text/75 text-[15px] leading-relaxed mb-3">
        {step.description}
      </p>

      {/* Detail callout */}
      <div
        className={`p-3.5 rounded-lg bg-white/60 border ${config.borderLight} transition-all duration-300`}
      >
        <div className="flex items-start gap-2">
          <svg
            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${config.textColor}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <p className="text-brand-text/60 text-[13px] leading-relaxed">
            {step.detail}
          </p>
        </div>
      </div>
    </div>
  );
}
