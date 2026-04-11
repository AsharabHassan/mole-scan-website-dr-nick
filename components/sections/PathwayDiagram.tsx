"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "@/components/hooks/useInView";

interface PathwayDiagramProps {
  title?: string;
}

export default function PathwayDiagram({
  title = "How MoleScan Fits Into the NHS Skin Cancer Pathway",
}: PathwayDiagramProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      id: "01",
      title: "Patient Presentation",
      phase: "Primary Care",
      desc: "A patient presents to their GP or primary care clinician with a suspicious skin lesion requiring clinical assessment.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      bgGradient: "from-[#F0F4FF] to-[#E5EDFF]",
      accent: "text-blue-600",
      accentBg: "bg-blue-600",
    },
    {
      id: "02",
      title: "Image Capture",
      phase: "Primary Care",
      desc: "The clinician captures dermoscopic images of the lesion and uploads them securely via the MoleScan platform.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        </svg>
      ),
      bgGradient: "from-[#E8F0FE] to-[#D2E3FC]",
      accent: "text-indigo-600",
      accentBg: "bg-indigo-600",
    },
    {
      id: "03",
      title: "Clinical Analysis",
      phase: "MoleScan Platform",
      desc: "MoleScan's clinical team performs thorough risk stratification, flagging high-risk patterns and supporting the review process.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      bgGradient: "from-[#E6F7F8] to-[#C8EFF0]",
      accent: "text-teal-600",
      accentBg: "bg-teal-600",
    },
    {
      id: "04",
      title: "Dermatologist Review",
      phase: "MoleScan Platform",
      desc: "Every case is reviewed by a UK GP or dermatologist, who provides a structured clinical assessment with a clear management recommendation.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      bgGradient: "from-[#F0FDF4] to-[#DCFCE7]",
      accent: "text-emerald-600",
      accentBg: "bg-emerald-600",
    },
    {
      id: "05",
      title: "Structured Report",
      phase: "Clinical Outcome",
      desc: "A structured, evidence-based report is delivered within 24 hours, giving the referring clinician a clear clinical outcome and recommended next steps.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      bgGradient: "from-[#FAF5FF] to-[#F3E8FF]",
      accent: "text-purple-600",
      accentBg: "bg-purple-600",
    },
  ];

  const DURATION = 6000; // 6 seconds per slide

  // Auto-advance logic
  useEffect(() => {
    if (!inView || isPaused) {
      if (progressInterval.current) clearInterval(progressInterval.current);
      return;
    }

    const intervalRun = 50; // ms
    const increment = (intervalRun / DURATION) * 100;

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((current) => (current + 1) % steps.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalRun);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [inView, isPaused, activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
    setIsPaused(true);
  };

  const activeData = steps[activeStep];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white relative overflow-hidden" aria-label="Interactive Pathway Diagram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Heading ── */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-display text-[#0A1629] leading-[1.1] mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
              We bridge the gap between primary care and secondary care. A unified, rigorous, clinician-led approach.
            </p>
          </div>
          
          {/* Pause/Play Controls */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-gray-800 transition-colors bg-gray-50 hover:bg-gray-100 rounded-full py-2 px-4 border border-gray-200"
            >
              {isPaused ? (
                <><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg> Play Tour</>
              ) : (
                <><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg> Pause</>
              )}
            </button>
          </div>
        </div>

        {/* ── Interactive Stage ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-24">
          
          {/* Left: Step Selection List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`relative group text-left p-5 rounded-2xl transition-all duration-500 overflow-hidden ${
                    isActive ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100 scale-[1.02]" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-6">
                    <span className={`text-2xl md:text-3xl font-display font-medium transition-colors duration-500 ${isActive ? step.accent : "text-gray-300"}`}>
                      {step.id}
                    </span>
                    <div>
                      <h3 className={`text-xl font-bold transition-colors duration-500 ${isActive ? "text-[#0A1629]" : "text-gray-400 group-hover:text-gray-600"}`}>
                        {step.title}
                      </h3>
                      {isActive && (
                        <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-widest animate-fadeIn">
                          {step.phase}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Progress bar background for active step */}
                  {isActive && !isPaused && (
                    <div className="absolute bottom-0 left-0 h-1 bg-gray-100 w-full">
                      <div 
                        className={`h-full ${step.accentBg} transition-all duration-75 ease-linear`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                  {isActive && isPaused && (
                    <div className="absolute bottom-0 left-0 h-1 bg-gray-100 w-full">
                      <div className={`h-full ${step.accentBg} w-full opacity-30`} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: The Cinematic Display Area */}
          <div className="lg:col-span-7 h-full min-h-[450px]">
            <div className={`relative w-full h-full rounded-[40px] overflow-hidden p-8 md:p-14 transition-all duration-700 shadow-2xl flex flex-col justify-center bg-gradient-to-br ${activeData.bgGradient}`}>
              {/* Decorative background blurring elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/40 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3 mix-blend-overlay" />
              
              <div className="relative z-10" key={activeData.id}>
                {/* Icon Circle */}
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-10 text-gray-800 animate-slideUpFade ${activeData.accent}`}>
                  {activeData.icon}
                </div>
                
                <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0A1629] mb-6 leading-tight animate-slideUpFade" style={{ animationDelay: '100ms' }}>
                  {activeData.title}
                </h3>
                
                <p className="text-lg md:text-xl text-[#0A1629]/70 leading-relaxed font-light animate-slideUpFade max-w-lg" style={{ animationDelay: '200ms' }}>
                  {activeData.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Completely Redesigned Outcomes (No pastel boxes) ── */}
        <div className={`pt-20 border-t border-gray-100 transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-12">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap">The Results</h3>
            <div className="h-px w-full bg-gray-100" />
            <p className="text-sm text-gray-400 whitespace-nowrap">Rapid, structured outcomes</p>
          </div>

          <div className="flex flex-col md:flex-row shadow-[0_8px_40px_rgb(0,0,0,0.04)] rounded-[32px] border border-gray-100 overflow-hidden bg-white">
            
            {/* Outcome 1: Reassure */}
            <div className="flex-1 p-10 md:p-12 relative group hover:bg-[#F6FEF9] transition-colors duration-500">
              <div className="w-12 h-12 rounded-full border border-emerald-200 bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              </div>
              <h4 className="text-xl font-bold text-[#0A1629] mb-3">Reassure & Discharge</h4>
              <p className="text-gray-500 leading-relaxed text-[15px]">Benign lesion confirmed. Patient is safely reassured in primary care without any unnecessary hospital referral.</p>
            </div>

            {/* Divider */}
            <div className="w-px bg-gradient-to-b from-transparent via-gray-100 to-transparent hidden md:block" />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent md:hidden" />

            {/* Outcome 2: Monitor */}
            <div className="flex-1 p-10 md:p-12 relative group hover:bg-[#FFFBF5] transition-colors duration-500">
              <div className="w-12 h-12 rounded-full border border-amber-200 bg-amber-50 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-[#0A1629] mb-3">Monitor & Review</h4>
              <p className="text-gray-500 leading-relaxed text-[15px]">Watchful waiting recommended. Patient is safely monitored with a specific follow-up assessment scheduled.</p>
            </div>

            {/* Divider */}
            <div className="w-px bg-gradient-to-b from-transparent via-gray-100 to-transparent hidden md:block" />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent md:hidden" />

            {/* Outcome 3: Urgent */}
            <div className="flex-1 p-10 md:p-12 relative group hover:bg-[#FFF7F7] transition-colors duration-500">
              <div className="w-12 h-12 rounded-full border border-rose-200 bg-rose-50 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-[#0A1629] mb-3">Urgent 2WW Referral</h4>
              <p className="text-gray-500 leading-relaxed text-[15px]">Suspicious lesion identified. Flagged immediately for an urgent 2-week-wait secondary care referral with evidence.</p>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUpFade {
          animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease forwards;
        }
      `}</style>
    </section>
  );
}
