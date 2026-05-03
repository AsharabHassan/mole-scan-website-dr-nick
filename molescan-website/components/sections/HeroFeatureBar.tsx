"use client";

interface FeatureBarItem {
  icon: "shield" | "clock" | "chart" | "lock" | "check" | "users";
  label: string;
  desc: string;
}

interface HeroFeatureBarProps {
  items: FeatureBarItem[];
  inView?: boolean;
}

const iconMap = {
  shield: (
    <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  clock: (
    <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  chart: (
    <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
    </svg>
  ),
  lock: (
    <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  users: (
    <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
};

export default function HeroFeatureBar({ items, inView = true }: HeroFeatureBarProps) {
  return (
    <div className="relative z-10 mt-8">
      <div className="border-t border-white/[0.06]">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 transition-all duration-700 delay-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 py-5 px-3 md:py-6 md:px-4 ${
                  i < items.length - 1 ? "md:border-r md:border-white/[0.06]" : ""
                } border-b border-white/[0.06] md:border-b-0`}
              >
                <div className="w-9 h-9 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {iconMap[item.icon]}
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-0.5">{item.label}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
