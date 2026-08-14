import React from "react";
import Link from "next/link";
import { hackathonsData } from "@/data/hackathons";
import { PageHeader } from "@/components/ui/PageHeader";
import { Trophy, Calendar, CheckCircle2, ArrowUpRight, Github, Sparkles } from "lucide-react";

export default function HackathonsPage() {
  return (
    <div className="space-y-12 py-4">
      <PageHeader
        title="Hackathons & Competitions"
        subtitle="Competitive technical sprints, hackathon builds, and time-constrained system engineering outcomes."
        badge="Works"
        iconName="Trophy"
        accentColor="#f59e0b"
      />

      <div className="grid grid-cols-1 gap-6">
        {hackathonsData.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 space-y-4 shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Trophy className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                  <div className="text-xs font-mono text-slate-400">{item.event} • {item.date}</div>
                </div>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-sky-400 border border-slate-700">
                {item.domain}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {item.summary}
            </p>

            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-start gap-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-400 font-mono">Key Outcome: </strong>
                <span>{item.keyOutcome}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>

              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 font-mono font-medium"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Build Repo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
