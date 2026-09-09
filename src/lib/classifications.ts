import type { Classification } from "@/types";

interface ClassificationInfo {
  label: string;
  explanation: string;
  badgeClass: string;
  dotClass: string;
  iconClass: string;
  accentClass: string;
}

export const classificationInfo: Record<Classification, ClassificationInfo> = {
  Excellent: {
    label: "Excellent",
    explanation:
      "Excellent means this bathing site has met the highest EU microbiological water-quality standard across the full assessment period. The water consistently showed very low levels of bacterial indicators.",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dotClass: "bg-emerald-500",
    iconClass: "text-emerald-600",
    accentClass: "from-emerald-500 to-teal-500",
  },
  Good: {
    label: "Good",
    explanation:
      "Good means the water quality is above the minimum EU threshold but did not reach the highest standard. It is generally considered clean and suitable for bathing.",
    badgeClass: "bg-sky-50 text-sky-700 border-sky-200",
    dotClass: "bg-sky-500",
    iconClass: "text-sky-600",
    accentClass: "from-sky-500 to-cyan-500",
  },
  Sufficient: {
    label: "Sufficient",
    explanation:
      "Sufficient means the water quality meets the minimum EU bathing-water requirement. It is acceptable for bathing, though bacterial levels were higher than at sites rated Good or Excellent.",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    dotClass: "bg-amber-500",
    iconClass: "text-amber-600",
    accentClass: "from-amber-500 to-orange-500",
  },
  Poor: {
    label: "Poor",
    explanation:
      "Poor means the water quality did not meet EU bathing-water standards. Bathing is generally discouraged at sites with this rating and further monitoring or improvement measures may be in place.",
    badgeClass: "bg-rose-50 text-rose-700 border-rose-200",
    dotClass: "bg-rose-500",
    iconClass: "text-rose-600",
    accentClass: "from-rose-500 to-red-500",
  },
  "Not classified": {
    label: "Not classified",
    explanation:
      "Not classified means there is not enough verified assessment data for this site yet, so no EU quality rating can be assigned. This is not the same as Poor — it simply means no result is available.",
    badgeClass: "bg-slate-100 text-slate-600 border-slate-200",
    dotClass: "bg-slate-400",
    iconClass: "text-slate-500",
    accentClass: "from-slate-400 to-slate-500",
  },
};
