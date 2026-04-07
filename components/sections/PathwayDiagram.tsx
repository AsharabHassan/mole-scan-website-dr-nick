interface PathwayDiagramProps {
  title?: string;
}

export default function PathwayDiagram({
  title = "MoleScan in the NHS Referral Pathway",
}: PathwayDiagramProps) {
  const steps = [
    {
      label: "Patient presents\nwith skin lesion",
      bg: "bg-brand-soft-blue",
      text: "text-brand-deep-blue",
    },
    {
      label: "GP / Primary Care\ncaptures images",
      bg: "bg-brand-soft-blue",
      text: "text-brand-deep-blue",
    },
    {
      label: "MoleScan\nAI + Dermatologist\nTriage",
      bg: "bg-brand-teal",
      text: "text-white",
      highlight: true,
    },
    {
      label: "Structured report\nwithin 24 hours",
      bg: "bg-brand-teal",
      text: "text-white",
      highlight: true,
    },
  ];

  const outcomes = [
    { label: "Reassure & discharge", color: "bg-green-100 text-green-800" },
    { label: "Monitor & review", color: "bg-amber-100 text-amber-800" },
    { label: "Urgent 2WW referral", color: "bg-red-100 text-red-800" },
  ];

  return (
    <div>
      <h2 className="text-center mb-12">{title}</h2>
      {/* Main flow */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`${step.bg} ${step.text} rounded-lg p-6 text-center font-medium whitespace-pre-line min-w-[180px] ${
                step.highlight ? "ring-2 ring-brand-teal/30 shadow-lg" : ""
              }`}
            >
              {step.label}
            </div>
            {index < steps.length - 1 && (
              <svg
                className="w-8 h-8 text-brand-teal mx-2 hidden md:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
      {/* Outcomes */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className={`${outcome.color} rounded-lg px-6 py-3 text-center font-medium text-sm`}
          >
            {outcome.label}
          </div>
        ))}
      </div>
    </div>
  );
}
