import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ContactForm from "@/components/forms/ContactForm";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact MoleScan™",
  description:
    "Get in touch with the MoleScan team. General enquiries, partnership discussions, and support.",
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        eyebrow="Get in Touch"
        title="Contact Us"
        titleHighlight="Contact"
        subtitle="Have a question about MoleScan? Get in touch and our team will get back to you."
        ctas={[]}
        background="blue"
        backgroundImage="/images/hero-bg-contact.png"
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a
                  href="mailto:hello@molescan.uk"
                  className="text-brand-teal hover:text-brand-deep-teal transition-colors"
                >
                  hello@molescan.uk
                </a>
              </div>

              <div>
                <h4 className="font-semibold mb-1">For Demo Requests</h4>
                <p className="text-brand-text/70 mb-2">
                  Want to see MoleScan in action? Visit our dedicated demo
                  request page.
                </p>
                <a
                  href="/request-demo"
                  className="text-brand-teal hover:text-brand-deep-teal font-medium transition-colors"
                >
                  Request a Demo &rarr;
                </a>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Company Details</h4>
                <p className="text-brand-text/70 text-sm leading-relaxed">
                  MoleScan™ is operated by Dermme Health Ltd
                  <br />
                  Company registered in England & Wales
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
