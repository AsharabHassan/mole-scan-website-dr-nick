import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Clinical Safety Statement",
  description: "MoleScan clinical safety statement. Our approach to clinical safety and risk management.",
};

export default function ClinicalSafetyStatementPage() {
  return (
    <>
      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">Clinical Safety Statement</h1>
          <p className="text-gray-300 mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>Clinical Safety Framework</h2>
          <p>
            MoleScan™ is committed to clinical safety. Our platform is designed
            with clinical safety as a foundational requirement, aligned with
            DCB0129 (manufacturer) and DCB0160 (deploying organisation) clinical
            risk management standards.
          </p>

          <h2>Clinician-Led Assessment</h2>
          <p>
            MoleScan is a clinician-led platform. Every assessment is initiated by
            a healthcare professional and reviewed by a UK consultant
            dermatologist. The AI component provides decision support — it does not
            make autonomous clinical decisions.
          </p>
          <p>
            The final clinical decision always rests with the referring clinician.
            MoleScan provides structured evidence to support, not replace, clinical
            judgement.
          </p>

          <h2>Clinical Safety Officer</h2>
          <p>
            MoleScan maintains a designated Clinical Safety Officer (CSO)
            responsible for the clinical safety case, hazard identification and
            management, and clinical incident reporting.
          </p>

          <h2>Hazard Management</h2>
          <p>
            A clinical hazard log is maintained and reviewed regularly. Potential
            clinical hazards are identified, assessed, and mitigated through the
            clinical risk management process.
          </p>

          <h2>Incident Reporting</h2>
          <p>
            MoleScan operates a clinical incident reporting process. All clinical
            incidents are investigated, and findings are fed back into the clinical
            safety case and hazard log to drive continuous improvement.
          </p>

          <h2>Scope of Use</h2>
          <p>
            MoleScan is a clinical workflow and triage platform. It is not a
            diagnostic device. It supports clinicians in assessing and triaging
            skin lesions by providing AI-assisted pre-screening and UK consultant
            dermatologist review. Final diagnosis requires clinical assessment and,
            where indicated, histopathological confirmation.
          </p>

          <h2>Contact</h2>
          <p>
            For clinical safety enquiries, contact us at{" "}
            <a href="mailto:hello@molescan.co.uk">hello@molescan.co.uk</a>.
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
