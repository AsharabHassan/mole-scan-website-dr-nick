const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://molescan.co.uk";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MoleScan",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.svg`,
    description:
      "Clinician-led skin lesion assessment and triage platform for healthcare professionals.",
    parentOrganization: {
      "@type": "Organization",
      name: "Dermme Health Ltd",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    knowsAbout: [
      "skin lesion assessment",
      "AI dermatology",
      "dermoscopy",
      "skin cancer triage",
    ],
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MoleScan Clinician-Led Skin Lesion Assessment",
    provider: {
      "@type": "Organization",
      name: "MoleScan",
      url: SITE_URL,
    },
    serviceType: "Clinician-led clinical triage",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Clinician",
    },
    description:
      "Clinician-led skin lesion assessment with UK GP and dermatologist review. Dermoscopic imaging with results within 24 hours.",
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
