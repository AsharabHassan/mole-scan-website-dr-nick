"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useInView } from "@/components/hooks/useInView";

interface AudienceCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  ctaLabel: string;
  ctaHref: string;
}

export default function AudienceCard({
  title,
  description,
  bulletPoints,
  ctaLabel,
  ctaHref,
}: AudienceCardProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out-expo ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Card className="p-8 flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-brand-text/70 mb-5">{description}</p>
        <ul className="space-y-3 mb-8 flex-grow">
          {bulletPoints.map((point, index) => (
            <li
              key={index}
              className={`flex items-start gap-3 transition-all duration-500 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{
                transitionDelay: inView ? `${index * 80 + 300}ms` : "0ms",
              }}
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center mt-0.5">
                <svg
                  className="w-3 h-3 text-brand-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-brand-text/80">{point}</span>
            </li>
          ))}
        </ul>
        <Button href={ctaHref} variant="secondary" showArrow>
          {ctaLabel}
        </Button>
      </Card>
    </div>
  );
}
