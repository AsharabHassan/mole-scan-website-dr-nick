"use client";

import Accordion from "@/components/ui/Accordion";
import { useInView } from "@/components/hooks/useInView";

interface FAQ {
  question: string;
  answer: string;
  intro?: string;
  bullets?: string[];
  outro?: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
  schemaScript?: string;
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  faqs,
  schemaScript,
}: FAQSectionProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref}>
      {schemaScript && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaScript }}
        />
      )}
      <h2
        className={`text-center mb-14 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {title}
      </h2>
      <div
        className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Accordion items={faqs} />
      </div>
    </div>
  );
}
