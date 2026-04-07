import Button from "@/components/ui/Button";

interface CTABandProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
  background?: "teal" | "navy";
}

export default function CTABand({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  background = "teal",
}: CTABandProps) {
  const bgStyle =
    background === "teal"
      ? "bg-gradient-to-r from-brand-teal to-brand-deep-teal"
      : "bg-brand-deep-navy";

  return (
    <section className={`${bgStyle} text-white py-16`}>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <Button
          href={buttonHref}
          variant={background === "teal" ? "secondary" : "primary"}
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
