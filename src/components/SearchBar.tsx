import { useMemo, useRef, useState } from "react";
import { Search, MapPin, X } from "lucide-react";
import type { Beach } from "@/types";
import { normalizeSearchText } from "@/lib/normalizeSearchText";

interface SearchBarProps {
  beaches: Beach[];
  onSelect: (beach: Beach) => void;
}

export function SearchBar({ beaches, onSelect }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = normalizeSearchText(query);
    if (!q) return beaches;
    return beaches.filter((b) => {
      const haystack = normalizeSearchText(
        [b.name, b.area, b.locality, b.municipality, b.country, ...(b.aliases ?? [])].join(" "),
      );
      return haystack.includes(q);
    });
  }, [query, beaches]);

  const handleSelect = (beach: Beach) => {
    setQuery(`${beach.name}, ${beach.country}`);
    setIsOpen(false);
    onSelect(beach);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (wrapperRef.current?.contains(e.relatedTarget as Node)) return;
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
      setHighlightIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && isOpen && filtered[highlightIndex]) {
      e.preventDefault();
      handleSelect(filtered[highlightIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative z-50 w-full overflow-visible" onBlur={handleBlur}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-300" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setHighlightIndex(0);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search for a Baltic beach…"
          aria-label="Search for a Baltic beach"
          className="w-full rounded-2xl border border-navy-100 bg-white pl-12 pr-10 py-4 text-base text-navy-900 shadow-sm transition-all placeholder:text-navy-300 focus:border-baltic-400 focus:outline-none focus:ring-4 focus:ring-baltic-100"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-navy-300 transition-colors hover:bg-navy-50 hover:text-navy-500"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && (
        <ul
          className="baltic-scroll absolute left-0 right-0 top-full z-[100] mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-navy-100 bg-white py-2 shadow-2xl animate-slide-down"
          role="listbox"
        >
          {filtered.length === 0 ? (
            <li className="px-4 py-6 text-center text-sm text-navy-400">
              No beaches found for “{query}”
            </li>
          ) : (
            filtered.map((beach, i) => (
              <li key={beach.id} role="option" aria-selected={i === highlightIndex}>
                <button
                  onClick={() => handleSelect(beach)}
                  onMouseEnter={() => setHighlightIndex(i)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    i === highlightIndex ? "bg-baltic-50" : "bg-white"
                  }`}
                >
                  <MapPin className="h-4 w-4 flex-shrink-0 text-baltic-400" />
                  <span className="flex flex-col min-w-0">
                    <span className="truncate text-sm font-medium text-navy-800">
                      {beach.name}
                    </span>
                    <span className="truncate text-xs text-navy-400">
                      {beach.locality
                        ? `${beach.locality}, ${beach.country}`
                        : `${beach.area}, ${beach.country}`}
                    </span>
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
