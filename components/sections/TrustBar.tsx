interface TrustItem {
  label: string;
  icon: React.ReactNode;
}

interface TrustBarProps {
  items: TrustItem[];
}

export default function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="bg-white border-b border-gray-100 py-6">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-brand-deep-blue"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
