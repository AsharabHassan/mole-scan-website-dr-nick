import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "ghost-light";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  showArrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-teal text-white hover:bg-brand-deep-teal hover:shadow-glow-teal focus:ring-brand-teal",
  secondary:
    "bg-brand-deep-blue text-white hover:bg-brand-deep-navy focus:ring-brand-deep-blue",
  ghost:
    "border-2 border-brand-deep-blue text-brand-deep-blue hover:bg-brand-deep-blue hover:text-white focus:ring-brand-deep-blue",
  "ghost-light":
    "border-2 border-white/80 text-white hover:bg-white hover:text-brand-deep-navy focus:ring-white",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  disabled = false,
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 ease-out-expo focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]";

  const arrowMarkup = showArrow ? (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  ) : null;

  const styles = `${baseStyles} ${variantStyles[variant]} ${className} group`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
        {arrowMarkup}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} disabled={disabled}>
      {children}
      {arrowMarkup}
    </button>
  );
}
