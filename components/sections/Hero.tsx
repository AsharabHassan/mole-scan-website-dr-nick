import Button from "@/components/ui/Button";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "ghost-light";
}

interface HeroProps {
  title: string;
  subtitle: string;
  ctas: HeroCTA[];
  background?: "navy" | "blue";
}

export default function Hero({
  title,
  subtitle,
  ctas,
  background = "navy",
}: HeroProps) {
  const bgStyle =
    background === "navy" ? "bg-brand-deep-navy" : "bg-brand-deep-blue";

  return (
    <section className={`${bgStyle} text-white py-20 md:py-28`}>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={cta.variant || "primary"}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
