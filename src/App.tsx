import { useState } from "react";
import { Waves, Microscope, Search as SearchIcon } from "lucide-react";
import type { Beach } from "@/types";
import { beaches } from "@/data/beaches";
import { SearchBar } from "@/components/SearchBar";
import { ResultCard } from "@/components/ResultCard";
import { ResponsibleAI } from "@/components/ResponsibleAI";

function App() {
  const [selected, setSelected] = useState<Beach | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-50/40 via-white to-white">
      {/* Header */}
      <header className="border-b border-navy-50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center gap-2.5 px-4 py-4 sm:px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-baltic-400 to-baltic-600 shadow-sm">
            <Waves className="h-5 w-5 text-white" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-bold text-navy-900">
              BalticBlue
            </span>
            <span className="text-sm font-medium text-baltic-500">AI</span>
          </div>
          <span className="ml-auto rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-400">
            Verified EU data
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Hero */}
        <section className="text-center animate-fade-in-up">
          <h1 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            BalticBlue AI
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-navy-500 sm:text-lg">
            Check Baltic bathing-water quality using verified EU data — and see
            how responsible AI should work.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-navy-400">
            Search for a beach to see its official 2025 EU bathing-water
            classification.
          </p>
        </section>

        {/* Search */}
        <section className="relative z-50 mt-8 overflow-visible animate-fade-in-up animate-delay-100">
          <SearchBar beaches={beaches} onSelect={setSelected} />
          {!selected && (
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-navy-300">
              <SearchIcon className="h-3.5 w-3.5" />
              Try “Helsinki”, “Jūrmala”, or “Warnemünde” — {beaches.length}{" "}
              official 2025 bathing sites
            </p>
          )}
        </section>

        {/* Result */}
        {selected && (
          <section className="relative z-0 mt-6">
            <ResultCard beach={selected} />
          </section>
        )}

        {/* Responsible AI */}
        <section className="relative z-0 mt-8 animate-fade-in-up animate-delay-200">
          <ResponsibleAI />
        </section>

        {/* Educational */}
        <section className="mt-6 animate-fade-in-up animate-delay-300">
          <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5">
              <Microscope className="h-5 w-5 text-baltic-500" />
              <h2 className="text-lg font-bold text-navy-900">
                What does the EU measure?
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              EU bathing-water assessments mainly use two microbiological
              indicators: <span className="font-medium text-navy-800">Escherichia coli</span> and{" "}
              <span className="font-medium text-navy-800">intestinal enterococci</span>.
              Over an assessment period, the levels of these bacteria indicate
              whether the water is clean enough for safe swimming.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-navy-50 pt-6 text-center">
          <p className="text-xs text-navy-300">
            BalticBlue AI — a prototype for a youth AI working group using official EEA 2025 data.
          </p>
          <p className="mt-1 text-xs text-navy-300">
            Data source: European Environment Agency, Bathing Water Directive — 2025 classification.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
