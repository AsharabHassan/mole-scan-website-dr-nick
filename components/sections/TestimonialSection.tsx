import Card from "@/components/ui/Card";

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
  title = "What Clinicians Say",
  testimonials,
}: TestimonialSectionProps) {
  return (
    <div>
      <h2 className="text-center mb-12">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col">
            <blockquote className="text-brand-text/80 italic leading-relaxed mb-4 flex-grow">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-brand-deep-blue">
                {testimonial.name}
              </p>
              <p className="text-sm text-brand-text/60">
                {testimonial.role}, {testimonial.organisation}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
