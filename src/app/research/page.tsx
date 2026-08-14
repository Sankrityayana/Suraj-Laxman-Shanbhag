import React from "react";
import Link from "next/link";
import { researchData } from "@/data/research";
import { PageHeader } from "@/components/ui/PageHeader";
import { Microscope, CheckCircle2, Clock, Github, FileText, Sparkles } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="space-y-12 py-4">
      <PageHeader
        title="Research Works & Investigations"
        subtitle="Empirical evaluations, embedding benchmarks, local model inference testing, and software architectural explorations."
        badge="Works"
        iconName="Microscope"
        accentColor="#8b5cf6"
      />

      <div className="space-y-8">
        {researchData.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{item.period}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mt-2">{item.title}</h3>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                {item.status === "Completed" ? (
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    Completed Investigation
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-amber-400">
                    <Clock className="w-4 h-4" />
                    Active Lab Research
                  </span>
                )}
              </div>
            </div>

            {/* Abstract */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase">Abstract Summary</div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {item.abstract}
              </p>
            </div>

            {/* Methodology & Findings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-sky-400 font-semibold uppercase">Methodology</div>
                <ul className="space-y-1.5">
                  {item.methodology.map((m, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-sky-400 shrink-0">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">Key Empirical Findings</div>
                <ul className="space-y-1.5">
                  {item.findings.map((f, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Tech Stack */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {item.verifiedNotes && (
                <span className="text-[10px] font-mono text-slate-500 italic">
                  {item.verifiedNotes}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
