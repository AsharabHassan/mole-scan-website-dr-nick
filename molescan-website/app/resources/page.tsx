import type { Metadata } from "next";
import ResourcesContent from "@/components/sections/ResourcesContent";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Resources — Skin Lesion Assessment Guides & Insights",
  description:
    "Clinical guidance, pathway insights, and best practices for safe skin lesion assessment.",
};

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
      <ResourcesContent />
    </>
  );
}
