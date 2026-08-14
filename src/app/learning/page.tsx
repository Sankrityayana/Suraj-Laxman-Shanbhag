import React from "react";
import Link from "next/link";
import { certificationsData, educationData, activeLearningPillars } from "@/data/learning";
import { PageHeader } from "@/components/ui/PageHeader";
import { GraduationCap, Award, CheckCircle2, Sparkles, BookOpen, ExternalLink } from "lucide-react";

export default function LearningPage() {
  return (
    <div className="space-y-16 py-4">
      <PageHeader
        title="Learning & Certifications"
        subtitle="Verified course credentials, academic education at Presidency University, and active research pursuits."
        badge="Career"
        iconName="GraduationCap"
        accentColor="#10b981"
      />

      {/* 1. ACADEMIC EDUCATION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-100 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-emerald-400" />
          Academic Education
        </h2>

        <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-100">{educationData.degree}</h3>
              <div className="text-xs font-mono text-emerald-400 font-semibold">{educationData.field}</div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {educationData.period}
            </span>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            {educationData.institution} • {educationData.location}
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <div className="text-xs font-mono text-slate-500 uppercase">Key Academic Focus</div>
            <ul className="space-y-1.5">
              {educationData.highlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED CERTIFICATIONS */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Verified Knowledge Credentials
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100">
            Verified Certifications ({certificationsData.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Issuer: {cert.issuer}
                  </span>

                  {cert.verifiedScore && (
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Verified Grade: {cert.verifiedScore}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-100">{cert.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Verified Skills</div>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((s) => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ACTIVE LEARNING PILLARS */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
            Continuous Evolution
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100">
            Active Learning Pursuits
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {activeLearningPillars.map((p) => (
            <div key={p.title} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-sky-400">{p.title}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
