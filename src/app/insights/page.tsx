import React from "react";
import Link from "next/link";
import { engineeringNumbers, engineeringPatterns, domainDistribution } from "@/data/insights";
import { PageHeader } from "@/components/ui/PageHeader";
import { ChartNoAxesColumnIncreasing, Layers, CheckCircle2, ArrowRight, Zap, Code2, Cpu } from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="space-y-12 py-4">
      <PageHeader
        title="Engineering Insights & Benchmarks"
        subtitle="Empirical data, verified metrics, architecture trade-offs, and lessons learned from building software systems."
        badge="Works"
        iconName="ChartNoAxesColumnIncreasing"
        accentColor="#06b6d4"
      />

      {/* 1. MY NUMBERS GRID */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
            Quantitative Evidence
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100">
            My Numbers & Verified Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringNumbers.map((num) => (
            <div
              key={num.label}
              className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-lg"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{num.domain}</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-sky-400 text-[10px]">Verified</span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-mono text-slate-100">{num.value}</span>
                {num.unit && <span className="text-lg font-mono text-sky-400">{num.unit}</span>}
              </div>

              <h3 className="font-bold text-sm text-slate-200">{num.label}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{num.context}</p>

              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                Source: {num.verifiedSource}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. DOMAIN DISTRIBUTION */}
      <section className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-slate-100 font-mono">
          Engineering Focus Distribution
        </h3>
        <div className="space-y-3">
          {domainDistribution.map((item) => (
            <div key={item.domain} className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">{item.domain}</span>
                <span className="text-sky-400 font-bold">{item.percentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BEFORE VS AFTER ENGINEERING PATTERNS */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Architecture Trade-offs
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100">
            Engineering Lessons: Before vs. After
          </h2>
        </div>

        <div className="space-y-6">
          {engineeringPatterns.map((pat) => (
            <div key={pat.id} className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-100">{pat.title}</h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                  {pat.category}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{pat.summary}</p>

              {pat.beforeVsAfter && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg bg-slate-950/80 border border-slate-800 text-xs">
                  <div className="space-y-1">
                    <div className="font-mono text-rose-400 font-semibold uppercase text-[11px]">Naive Approach</div>
                    <p className="text-slate-400">{pat.beforeVsAfter.naiveApproach}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-emerald-400 font-semibold uppercase text-[11px]">Engineered Solution</div>
                    <p className="text-slate-200">{pat.beforeVsAfter.engineeredSolution}</p>
                  </div>
                </div>
              )}

              <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/80 text-xs text-sky-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <strong className="font-mono text-white">Impact: </strong>
                  <span>{pat.keyTakeaway}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
