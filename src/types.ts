export type Classification =
  | "Excellent"
  | "Good"
  | "Sufficient"
  | "Poor"
  | "Not classified";

export interface Beach {
  id: string;
  name: string;
  area: string;
  locality?: string;
  municipality?: string;
  country: string;
  aliases?: string[];
  classification: Classification;
  assessmentYear: number;
  lat: number;
  lng: number;
  sourceUrl: string;
  note?: string;
}
