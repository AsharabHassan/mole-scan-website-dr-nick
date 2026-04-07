import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "ghost-light";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-teal text-white hover:bg-brand-soft-teal focus:ring-brand-teal",
  secondary:
    "bg-brand-deep-blue text-white hover:bg-brand-deep-navy focus:ring-brand-deep-blue",
  ghost:
    "border-2 border-brand-deep-blue text-brand-deep-blue hover:bg-brand-deep-blue hover:text-white focus:ring-brand-deep-blue",
  "ghost-light":
    "border-2 border-white text-white hover:bg-white hover:text-brand-deep-navy focus:ring-white",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
