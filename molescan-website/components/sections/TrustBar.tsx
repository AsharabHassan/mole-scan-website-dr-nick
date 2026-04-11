"use client";

import { useInView } from "@/components/hooks/useInView";

interface TrustItem {
  label: string;
  icon: React.ReactNode;
}

interface TrustBarProps {
  items: TrustItem[];
}

export default function TrustBar({ items }: TrustBarProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="trust-bar"
      className="bg-white border-b border-gray-100 py-6"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`flex items-center gap-2.5 text-brand-deep-blue group cursor-default transition-all duration-500 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: inView ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="text-brand-teal transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold tracking-wide">
                  {item.label}
                </span>
              </div>
              {/* Separator dot */}
              {index < items.length - 1 && (
                <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
