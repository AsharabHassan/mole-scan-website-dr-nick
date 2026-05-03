"use client";

import { useState, useEffect, useCallback } from "react";
import Card from "@/components/ui/Card";
import { useInView } from "@/components/hooks/useInView";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organisation: string;
}

interface TestimonialSectionProps {
  title?: string;
  testimonials: Testimonial[];
}

export default function TestimonialSection({
  title = "What Practitioners Say",
  testimonials,
}: TestimonialSectionProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  // Auto-play carousel
  useEffect(() => {
    if (isPaused || !inView) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, inView, goToNext]);

  return (
    <div ref={ref}>
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2>{title}</h2>
      </div>

      {/* Desktop: grid layout */}
      <div
        className={`hidden lg:grid grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col relative">
            {/* Decorative quote */}
            <div
              className="absolute -top-3 -left-1 text-brand-teal/10 text-6xl font-serif leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="text-brand-text/80 italic leading-relaxed mb-5 flex-grow relative z-10 text-[15px]">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-deep-teal flex items-center justify-center text-white font-bold text-sm">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold text-brand-deep-blue text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-brand-text/60">
                  {testimonial.role}, {testimonial.organisation}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Mobile/Tablet: carousel */}
      <div
        className="lg:hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className={`transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out-expo"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <Card className="flex flex-col relative mx-auto max-w-lg">
                    <div
                      className="absolute -top-3 -left-1 text-brand-teal/10 text-6xl font-serif leading-none select-none pointer-events-none"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </div>
                    <blockquote className="text-brand-text/80 italic leading-relaxed mb-5 flex-grow relative z-10">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-deep-teal flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-semibold text-brand-deep-blue text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-brand-text/60">
                          {testimonial.role}, {testimonial.organisation}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? "w-8 h-2.5 bg-brand-teal"
                    : "w-2.5 h-2.5 bg-brand-teal/25 hover:bg-brand-teal/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
