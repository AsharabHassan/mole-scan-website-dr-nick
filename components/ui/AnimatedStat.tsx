"use client";

import { useInView } from "@/components/hooks/useInView";
import { useCountUp } from "@/components/hooks/useCountUp";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
}: AnimatedStatProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const count = useCountUp({ end: value, duration, enabled: inView });

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold font-display text-brand-teal mb-3 tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <p className="text-brand-text/70 text-base leading-relaxed">{label}</p>
    </div>
  );
}
