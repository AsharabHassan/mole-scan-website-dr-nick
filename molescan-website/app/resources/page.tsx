import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTABand from "@/components/sections/CTABand";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Resources — Skin Lesion Assessment Guides & Insights",
  description:
    "Clinical guides, insights, and articles on dermoscopic imaging, skin cancer pathways, and skin lesion assessment best practices.",
};

const articles = [
  {
    title: "Understanding the 2-Week-Wait Dermatology Pathway",
    excerpt:
      "An overview of the NHS 2-week-wait referral pathway for suspected skin cancer, the pressures it faces, and how structured triage at the primary care level can help reduce unnecessary referrals.",
    category: "NHS Pathways",
    readTime: "5 min read",
  },
  {
    title: "Dermoscopic Imaging: What Practitioners Need to Know",
    excerpt:
      "A practical guide to understanding how dermoscopic imaging is used in skin lesion assessment, what it can and cannot show, and how dermatologist-led platforms like MoleScan leverage dermoscopy with human expertise.",
    category: "Dermoscopy",
    readTime: "7 min read",
  },
  {
    title: "What to Look for in a Skin Lesion Triage Platform",
    excerpt:
      "Key considerations for healthcare professionals evaluating digital triage solutions: clinical governance, data protection, turnaround times, and integration with existing workflows.",
    category: "Clinical Practice",
    readTime: "6 min read",
  },
];

export default function ResourcesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        eyebrow="Guides & Insights"
        title="Resources"
        titleHighlight="Resources"
        subtitle="Clinical guides, insights, and articles on dermoscopic imaging, skin cancer pathways, and skin lesion assessment best practices."
        ctas={[]}
        background="blue"
        backgroundImage="/images/hero-bg-resources.png"
        badges={{
          text: "",
          items: ["NHS Pathways", "Dermoscopy", "Clinical Practice"],
        }}
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-brand-teal bg-brand-teal/10 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-brand-text/50">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-brand-text/70 leading-relaxed mb-4 flex-grow">
                {article.excerpt}
              </p>
              <span className="text-brand-text/40 text-sm italic">
                Coming soon
              </span>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <CTABand
        title="Want to Learn More?"
        subtitle="Request a demo to see MoleScan in action and discuss how it can support your clinical practice."
        buttonLabel="Request Demo"
        buttonHref="/request-demo"
      />
    </>
  );
}
