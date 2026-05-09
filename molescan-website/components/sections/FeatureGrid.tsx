"use client";

import Card from "@/components/ui/Card";
import { useInView } from "@/components/hooks/useInView";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
}: FeatureGridProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.08 });

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div ref={ref}>
      {title && (
        <div
          className={`text-center mb-14 transition-all duration-700 ${
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
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-out-expo ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: inView ? `${index * 100 + 200}ms` : "0ms",
            }}
          >
            <Card className="h-full">
              <div className="text-brand-teal mb-4 transition-all duration-300 group-hover:text-brand-deep-teal group-hover:scale-110 origin-left">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-brand-teal">
                {feature.title}
              </h3>
              <div className="text-brand-text/70 leading-relaxed space-y-3">
                {typeof feature.description === "string" ? (
                  <p>{feature.description}</p>
                ) : (
                  feature.description
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
