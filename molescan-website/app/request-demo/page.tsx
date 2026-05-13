import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import DemoForm from "@/components/forms/DemoForm";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Get Early Access · Request a Demo",
  description:
    "Get early access to MoleScan. Request a no-obligation demo of our dermatologist-led skin lesion assessment platform — we&rsquo;re now onboarding UK clinics and NHS partners.",
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
        eyebrow="Early Access · Now Onboarding"
        title="Get Early Access to MoleScan"
        titleHighlight="Early Access"
        subtitle="Be among the first clinics and NHS teams to use MoleScan. Request a no-obligation demo and join our early access cohort — limited spaces, priority onboarding, and a direct line to the team building the platform."
        ctas={[]}
        background="blue"
        backgroundImage="/images/hero-bg-demo.png"
        badges={{
          text: "",
          items: ["Limited Cohort", "Priority Onboarding", "Response Within 24h"],
        }}
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-brand-deep-teal">
                Early Access Open
              </span>
            </div>

            <h2 className="mb-6">Join Early Access</h2>
            <p className="text-brand-text/70 leading-relaxed mb-8">
              Spaces in our early access cohort are limited. Fill in the form
              and a member of our team will be in touch within 24 hours to
              arrange your personalised demo and confirm your place.
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
                  Priority onboarding and dedicated support from the MoleScan
                  clinical team
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
                  See the full assessment workflow from image capture to
                  dermatologist-reviewed report
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
