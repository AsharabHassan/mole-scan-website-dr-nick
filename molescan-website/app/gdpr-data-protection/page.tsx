import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "GDPR & Data Protection",
  description: "How MoleScan complies with UK GDPR and data protection requirements.",
};

export default function GDPRDataProtectionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "GDPR & Data Protection", url: "/gdpr-data-protection" },
  ]);
  const webPageSchema = generateWebPageSchema(
    "GDPR & Data Protection",
    "How MoleScan complies with UK GDPR and data protection requirements.",
    "/gdpr-data-protection"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "GDPR & Data Protection" },
        ]}
      />

      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">GDPR & Data Protection</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>Our Commitment to Data Protection</h2>
          <p>
            Dermme Health Ltd, operating as MoleScan™, is committed to protecting
            personal data in accordance with the UK General Data Protection
            Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2>Data Controller</h2>
          <p>
            Dermme Health Ltd is the data controller for personal data collected
            through the MoleScan website. For clinical platform data, the
            relationship between Dermme Health Ltd and deploying organisations is
            governed by data processing agreements.
          </p>

          <h2>UK Data Residency</h2>
          <p>
            All personal and clinical data processed by MoleScan is stored within
            the United Kingdom. We do not transfer personal data outside the UK.
          </p>

          <h2>Security Measures</h2>
          <p>We implement appropriate technical and organisational measures including:</p>
          <ul>
            <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
            <li>Role-based access controls</li>
            <li>Regular security assessments</li>
            <li>Incident response procedures</li>
          </ul>

          <h2>Data Subject Rights</h2>
          <p>
            Individuals have the right to access, rectify, erase, restrict, and
            port their personal data, as well as the right to object to
            processing. Requests can be submitted to{" "}
            <a href="mailto:hello@molescan.uk">hello@molescan.uk</a>.
          </p>

          <h2>Data Protection Impact Assessments</h2>
          <p>
            MoleScan conducts Data Protection Impact Assessments (DPIAs) for
            processing activities that are likely to result in a high risk to
            individuals, in line with ICO guidance.
          </p>

          <h2>ICO Registration</h2>
          <p>
            Dermme Health Ltd is registered with the Information Commissioner&apos;s
            Office (ICO).
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
