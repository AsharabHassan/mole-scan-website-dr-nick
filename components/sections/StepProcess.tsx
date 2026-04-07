interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StepProcessProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export default function StepProcess({ title, subtitle, steps }: StepProcessProps) {
  return (
    <div>
      {title && (
        <div className="text-center mb-12">
          <h2 className="mb-4">{title}</h2>
          {subtitle && (
            <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <div className="text-brand-teal">{step.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-brand-text/70 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
