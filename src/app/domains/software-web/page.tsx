import React from "react";
import Link from "next/link";
import { domainsData } from "@/data/domains";
import { projectsData } from "@/data/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { Code2, Server, Database, Layers, CheckCircle2, Globe, Cpu } from "lucide-react";

export default function SoftwareWebPage() {
  const domain = domainsData["software-web"];
  const webProjects = projectsData.filter((p) => p.domain === "software-web" || p.category === "Software & Web");

  return (
    <div className="space-y-16 py-4">
      <PageHeader
        title={domain.name}
        subtitle={domain.tagline}
        badge="Domain Overview"
        iconName={domain.iconName}
        accentColor={domain.accentColor}
      />

      {/* 1. DEVELOPMENT UNIVERSE */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Full-Stack Stack & Architecture
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100">
            My Development Universe
          </h2>
          <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
            Building reliable, accessible, performant software—from responsive React & Next.js user interfaces to asynchronous FastAPI & Node.js backend services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domain.keyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3"
            >
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                {pillar.title}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
              <ul className="space-y-1 pt-2 border-t border-slate-800/80">
                {pillar.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <span className="text-emerald-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FULL-STACK ARCHITECTURE FLOW */}
      <section className="space-y-6">
        <ArchitectureDiagram
          title="Full-Stack Web Architecture Pattern"
          description="Client state management, type-safe API routing, async service validation, and ORM database persistence."
          nodes={[
            "Next.js 19 Client App Router",
            "TypeScript Zod Input Validation",
            "FastAPI / Node REST Endpoint",
            "Pydantic / SQLAlchemy Schema",
            "SQLite / PostgreSQL Database",
            "Vercel & Render Cloud Hosting"
          ]}
        />
      </section>

      {/* 3. FEATURED SOFTWARE BUILD: SOCIAL STORY STUDIO */}
      <section className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Featured Full-Stack Web Platform
          </span>
          <h3 className="text-2xl font-bold text-slate-100">
            Social Story Studio
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Generative AI storyboarding application for personalized social learning scenarios built with Next.js, React, Tailwind CSS, FastAPI, SQLite, and SQLAlchemy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-slate-950/80 border border-slate-800">
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-slate-500 uppercase">Frontend Architecture</div>
            <div className="text-xs text-slate-200 font-semibold">Next.js + React 19 + TypeScript</div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-slate-500 uppercase">Backend API</div>
            <div className="text-xs text-slate-200 font-semibold">FastAPI + Async Routes</div>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-slate-500 uppercase">Persistence Layer</div>
            <div className="text-xs text-slate-200 font-semibold">SQLite + SQLAlchemy ORM</div>
          </div>
        </div>
      </section>

      {/* 4. SOFTWARE PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-100">
            Curated Software Projects ({webProjects.length})
          </h2>
          <Link href="/projects" className="text-xs font-mono text-sky-400 hover:underline">
            View All Projects Explorer →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </section>
    </div>
  );
}
