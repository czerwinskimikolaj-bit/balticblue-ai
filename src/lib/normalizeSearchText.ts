/**
 * Normalize text for diacritic-insensitive search.
 *
 * Converts to lowercase, decomposes Unicode to NFD, strips combining
 * diacritical marks, replaces characters that don't decompose cleanly,
 * and trims whitespace.
 */
export function normalizeSearchText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/ø/g, "o")
    .replace(/æ/g, "ae")
    .replace(/œ/g, "oe")
    .replace(/ß/g, "ss")
    .trim();
}
