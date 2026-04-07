import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

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
  return (
    <Card className="p-8 flex flex-col h-full">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-brand-text/70 mb-4">{description}</p>
      <ul className="space-y-2 mb-6 flex-grow">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-brand-text/80">{point}</span>
          </li>
        ))}
      </ul>
      <Button href={ctaHref} variant="secondary">
        {ctaLabel}
      </Button>
    </Card>
  );
}
