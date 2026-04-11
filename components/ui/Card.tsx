interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-card border border-gray-100/60 p-6 transition-all duration-300 ease-out-expo hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-teal/20 group ${className}`}
    >
      {children}
    </div>
  );
}
