import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "MoleScan cookie policy. How we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">Cookie Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help the website function properly and provide
            information to the website owner.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>The MoleScan website uses the following types of cookies:</p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function. They enable
            basic features such as page navigation and form submissions. They
            cannot be disabled.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use Vercel Analytics to understand how visitors interact with our
            website. These cookies collect anonymous usage data to help us improve
            the site. They are only set with your consent.
          </p>

          <h2>3. Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Most browsers
            allow you to block or delete cookies. However, blocking essential
            cookies may affect website functionality.
          </p>

          <h2>4. Contact</h2>
          <p>
            For questions about our cookie policy, contact us at{" "}
            <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>.
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
