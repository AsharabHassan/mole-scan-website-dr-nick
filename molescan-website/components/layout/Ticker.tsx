import Link from "next/link";

const TICKER_MESSAGES = [
  "Now onboarding UK clinics",
  "Reports within 24 hours",
  "GMC-registered clinicians",
  "Reviewed by UK GPwSI dermatology doctors",
  "DCB0129 aligned · UK GDPR compliant",
];

export default function Ticker() {
  const messages = [...TICKER_MESSAGES, ...TICKER_MESSAGES];

  return (
    <div className="relative bg-brand-deep-navy text-white border-b border-white/10 overflow-hidden">
      <div className="ticker-group relative flex items-stretch h-9 sm:h-10">
        <div className="flex-1 min-w-0 overflow-hidden flex items-center">
          <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
            {messages.map((msg, i) => (
              <span
                key={`${msg}-${i}`}
                className="inline-flex items-center text-xs sm:text-[13px] font-medium text-white/85 px-6"
              >
                <span
                  className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-brand-teal"
                  aria-hidden="true"
                />
                {msg}
              </span>
            ))}
          </div>
        </div>

        <div
          className="pointer-events-none absolute right-[200px] top-0 h-full w-16 bg-gradient-to-r from-transparent to-brand-deep-navy"
          aria-hidden="true"
        />

        <div className="relative z-10 flex items-center pr-4 sm:pr-6 bg-brand-deep-navy">
          <Link
            href="/request-demo"
            className="inline-flex items-center gap-1.5 rounded-md bg-brand-teal hover:bg-brand-deep-teal transition-colors px-3.5 py-1.5 text-xs sm:text-[13px] font-semibold text-white shadow-sm"
          >
            Get Early Access
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
