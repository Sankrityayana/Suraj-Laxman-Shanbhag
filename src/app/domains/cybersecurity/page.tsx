import React from "react";
import Link from "next/link";
import { domainsData } from "@/data/domains";
import { projectsData } from "@/data/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { ShieldCheck, Lock, Key, AlertTriangle, FileCode, CheckCircle2, ShieldAlert } from "lucide-react";

export default function CybersecurityPage() {
  const domain = domainsData["cybersecurity"];
  const securityProjects = projectsData.filter((p) => p.domain === "cybersecurity" || p.category === "Cybersecurity");

  return (
    <div className="space-y-16 py-4">
      <PageHeader
        title={domain.name}
        subtitle={domain.tagline}
        badge="Domain Overview"
        iconName={domain.iconName}
        accentColor={domain.accentColor}
      />

      {/* 1. SECURITY UNIVERSE */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
            Defensive Fundamentals & Application Security
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100">
            My Security Universe
          </h2>
          <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
            Exploring defensive cybersecurity principles, secure software development practices, web service threat modeling, and AI application risk mitigation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domain.keyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3"
            >
              <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                {pillar.title}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
              <ul className="space-y-1 pt-2 border-t border-slate-800/80">
                {pillar.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <span className="text-amber-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THREAT MODELING FLOW */}
      <section className="space-y-6">
        <ArchitectureDiagram
          title="STRIDE Threat Modeling & Defense Verification"
          description="Deconstructing applications into critical assets, attack surfaces, threat vectors, and defensive controls."
          nodes={[
            "Identify Assets & Trust Boundaries",
            "Map Attack Surfaces (API, DB, UI)",
            "STRIDE Threat Identification",
            "Input Sanitization & JWT Verification",
            "Least Privilege Authorization",
            "Audit Event Logging & Security Headers"
          ]}
        />
      </section>

      {/* 3. CORE DEFENSIVE CONCEPTS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
            <Lock className="w-4 h-4" />
            CIA Triad Principles
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Enforcing Confidentiality (encryption & RBAC), Integrity (hashing & input validation), and Availability (rate limiting).
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
            <ShieldAlert className="w-4 h-4" />
            OWASP Top 10 Mitigation
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Understanding defensive coding to prevent SQL injection, cross-site scripting (XSS), CSRF, and broken access control.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
            <Key className="w-4 h-4" />
            AI & LLM Security Risks
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Studying prompt injection attacks, indirect context hijacking, model data leakage, and air-gapped local inference.
          </p>
        </div>
      </section>

      {/* 4. SECURITY PROJECTS & LAB EXPERIMENTS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-100">
            Security & Defense Lab Projects
          </h2>
          <Link href="/projects" className="text-xs font-mono text-sky-400 hover:underline">
            View All Projects Explorer →
          </Link>
        </div>

        {securityProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="font-mono text-amber-400 font-bold">Defensive Security Focus</div>
            <p>Security fundamentals are integrated directly into all full-stack and AI projects (JWT authentication, input validation, environment secret handling, and air-gapped RAG pipelines).</p>
          </div>
        )}
      </section>
    </div>
  );
}
