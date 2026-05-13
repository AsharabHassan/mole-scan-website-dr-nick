import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white border-b border-gray-100"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li
                key={`${item.name}-${idx}`}
                className="flex items-center gap-1.5"
              >
                {idx > 0 && (
                  <svg
                    className="w-3.5 h-3.5 text-gray-300 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                )}
                {isLast || !item.href ? (
                  <span
                    className="text-brand-deep-navy font-medium"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-brand-text/60 hover:text-brand-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
