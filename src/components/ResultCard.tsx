import { ExternalLink, ShieldCheck, Info } from "lucide-react";
import type { Beach } from "@/types";
import { classificationInfo } from "@/lib/classifications";

interface ResultCardProps {
  beach: Beach;
}

export function ResultCard({ beach }: ResultCardProps) {
  const info = classificationInfo[beach.classification];

  return (
    <div className="animate-fade-in-up overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-lg shadow-navy-900/5">
      {/* Top accent strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${info.accentClass}`} />

      <div className="p-6 sm:p-8">
        {/* Beach identity */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-navy-900">{beach.name}</h3>
            <p className="mt-1 text-sm text-navy-400">
              {beach.area}, {beach.country}
            </p>
          </div>
          <span className="flex-shrink-0 rounded-lg bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-500">
            {beach.assessmentYear}
          </span>
        </div>

        {/* Classification badge */}
        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-wider text-navy-400">
            Water quality
          </p>
          <div className="mt-2 flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-base font-bold tracking-wide ${info.badgeClass}`}
            >
              <span className={`h-2.5 w-2.5 rounded-full ${info.dotClass}`} />
              {info.label.toUpperCase()}
            </span>
          </div>
        </div>

        <p className="mt-3 text-xs text-navy-300">
          Based on the official 2025 EU bathing-water classification.
        </p>

        {/* Plain-language explanation */}
        <div className="mt-5 rounded-2xl bg-baltic-50/60 p-4">
          <div className="flex items-start gap-2.5">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-baltic-500" />
            <p className="text-sm leading-relaxed text-navy-700">
              {info.explanation}
            </p>
          </div>
        </div>

        {beach.note && (
          <p className="mt-3 text-sm text-navy-400">{beach.note}</p>
        )}

        {/* Source */}
        <div className="mt-5 flex items-center gap-2 border-t border-navy-50 pt-4">
          <ShieldCheck className="h-4 w-4 flex-shrink-0 text-emerald-500" />
          <span className="text-xs text-navy-400">Source: </span>
          <a
            href={beach.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-baltic-600 transition-colors hover:text-baltic-700 hover:underline"
          >
            European Environment Agency / EU bathing-water data
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Safety disclaimer */}
        <div className="mt-3 rounded-xl border border-amber-100 bg-amber-50/50 p-3.5">
          <p className="text-xs leading-relaxed text-amber-800">
            This classification is not a real-time swimming safety forecast.
            Conditions may change due to weather, pollution incidents, algae or
            local warnings. Always check current local advice before swimming.
          </p>
        </div>
      </div>
    </div>
  );
}
