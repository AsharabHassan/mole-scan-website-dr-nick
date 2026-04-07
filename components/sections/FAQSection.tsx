import Accordion from "@/components/ui/Accordion";
import { generateFAQSchema } from "@/lib/schema";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  faqs,
}: FAQSectionProps) {
  const schema = generateFAQSchema(faqs);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-center mb-12">{title}</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion items={faqs} />
      </div>
    </div>
  );
}
