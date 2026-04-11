interface SectionWrapperProps {
  children: React.ReactNode;
  background?: "white" | "soft-blue" | "navy";
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  background = "white",
  className = "",
  id,
}: SectionWrapperProps) {
  const bgStyles = {
    white: "bg-white",
    "soft-blue": "bg-brand-soft-blue",
    navy: "bg-brand-deep-navy text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
