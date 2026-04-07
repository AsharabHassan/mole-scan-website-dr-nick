import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MoleScan privacy policy. How we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>1. Introduction</h2>
          <p>
            MoleScan™ is operated by Dermme Health Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a company
            registered in England and Wales. We are committed to protecting your
            personal data and respecting your privacy.
          </p>
          <p>
            This privacy policy explains how we collect, use, store, and protect
            personal data when you use our website and services.
          </p>

          <h2>2. Data Controller</h2>
          <p>
            Dermme Health Ltd is the data controller for personal data processed
            through the MoleScan website and platform. We are registered with the
            Information Commissioner&apos;s Office (ICO).
          </p>

          <h2>3. What Data We Collect</h2>
          <p>We may collect the following categories of personal data:</p>
          <ul>
            <li><strong>Contact information:</strong> name, email address, phone number, organisation, and job role when you submit a demo request or contact form.</li>
            <li><strong>Usage data:</strong> information about how you use our website, including pages visited and time spent.</li>
            <li><strong>Technical data:</strong> IP address, browser type, device information, and cookies.</li>
          </ul>

          <h2>4. How We Use Your Data</h2>
          <p>We use personal data for the following purposes:</p>
          <ul>
            <li>To respond to demo requests and contact form submissions</li>
            <li>To provide information about MoleScan services</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>5. Legal Basis for Processing</h2>
          <p>
            We process personal data on the following legal bases: consent (for
            marketing communications), legitimate interests (for responding to
            enquiries and improving our services), and legal obligation (for
            regulatory compliance).
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the
            purposes for which it was collected. Contact form and demo request data
            is retained for a maximum of 24 months unless you request earlier
            deletion.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under the UK GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>Object to processing</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>.
          </p>

          <h2>8. Contact</h2>
          <p>
            For any questions about this privacy policy or your personal data,
            please contact: <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
