import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import DemoForm from "@/components/forms/DemoForm";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "See MoleScan in action. Book a no-obligation demo of our clinician-led skin lesion assessment platform.",
};

export default function RequestDemoPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Request Demo", url: "/request-demo" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        eyebrow="Book a Walkthrough"
        title="See MoleScan in Action"
        titleHighlight="in Action"
        subtitle="Request a no-obligation demo and discover how MoleScan can support your skin lesion assessment pathway."
        ctas={[]}
        background="blue"
        badges={{
          text: "",
          items: ["No Obligation", "Personalised Demo", "Response Within 24h"],
        }}
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-6">Request a Demo</h2>
            <p className="text-brand-text/70 leading-relaxed mb-8">
              Fill in the form and a member of our team will be in touch within
              24 hours to arrange your personalised demo.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-brand-text/80">
                  See the full assessment workflow from image capture to
                  consultant-reviewed report
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-brand-text/80">
                  Discuss integration with your existing clinical workflows
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-brand-text/80">
                  Ask questions about clinical governance, data protection, and
                  compliance
                </p>
              </div>
            </div>
          </div>

          <div>
            <DemoForm sourcePage="request-demo" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
