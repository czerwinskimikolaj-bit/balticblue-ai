import { Database, Brain, UserCheck } from "lucide-react";

const steps = [
  {
    icon: Database,
    label: "Verified data",
    desc: "Official EU bathing-water records",
  },
  {
    icon: Brain,
    label: "AI interpretation",
    desc: "Plain-language explanation of what the data means",
  },
  {
    icon: UserCheck,
    label: "Human decision",
    desc: "You decide, using verified facts and local advice",
  },
];

export function ResponsibleAI() {
  return (
    <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50/60 to-baltic-50/40 p-6 sm:p-8">
      <h2 className="text-lg font-bold text-navy-900">Why not just ask AI?</h2>
      <p className="mt-2 text-sm leading-relaxed text-navy-600">
        AI can explain water-quality information, but it should not invent
        environmental data. BalticBlue first uses verified public data and then
        helps the user understand what it means.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center gap-3 sm:flex-1 sm:flex-row">
            <div className="flex w-full flex-1 flex-col items-center rounded-2xl border border-navy-100 bg-white p-4 text-center shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-baltic-50">
                <step.icon className="h-5 w-5 text-baltic-600" />
              </div>
              <p className="mt-3 text-sm font-semibold text-navy-800">
                {step.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-navy-400">
                {step.desc}
              </p>
            </div>
            {i < steps.length - 1 && (
              <>
                <span className="text-baltic-300 sm:hidden" aria-hidden="true">↓</span>
                <span className="hidden text-baltic-300 sm:block" aria-hidden="true">→</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
