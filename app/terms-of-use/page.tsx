import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "MoleScan website terms of use.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">Terms of Use</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>1. About This Website</h2>
          <p>
            This website is operated by Dermme Health Ltd, trading as MoleScan™.
            By using this website, you agree to these terms of use.
          </p>

          <h2>2. Information Only</h2>
          <p>
            The content on this website is provided for general informational
            purposes only. It does not constitute medical advice, diagnosis, or
            treatment. Healthcare professionals should exercise their own clinical
            judgement at all times.
          </p>

          <h2>3. No Clinical Advice</h2>
          <p>
            Nothing on this website should be interpreted as clinical guidance or a
            substitute for professional medical advice. The information presented
            describes the MoleScan platform and its capabilities. It is not
            intended to guide clinical decision-making outside the platform.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            MoleScan™ is a trademark of Dermme Health Ltd. All content on this
            website, including text, graphics, logos, and images, is the property
            of Dermme Health Ltd and is protected by copyright and intellectual
            property laws.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Dermme Health Ltd makes no warranties about the completeness,
            reliability, or accuracy of the information on this website. Use of
            this website is at your own risk.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales.
          </p>

          <h2>7. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>.
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
