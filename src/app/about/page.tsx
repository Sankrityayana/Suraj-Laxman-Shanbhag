import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { PageHeader } from "@/components/ui/PageHeader";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import {
  UserRound,
  BrainCircuit,
  Code2,
  ChartNoAxesCombined,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Terminal,
  Layers,
  BookOpen,
  GraduationCap,
  Lightbulb
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16 py-4">
      <PageHeader
        title="About Suraj Laxman Shanbhag"
        subtitle="The story, technical philosophy, problem-solving mindset, and engineering principles behind the code."
        badge="About Me"
        iconName="UserRound"
        accentColor="#38bdf8"
      />

      {/* 1. WHO IS SURAJ & MY STORY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-100">
              Who Is Suraj?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {profileData.bio.summary}
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-bold text-slate-100 font-mono flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-400" />
              My Technical Story
            </h3>
            {profileData.bio.story.map((paragraph, idx) => (
              <p key={idx} className="text-sm text-slate-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Education & Overview Quick Card */}
        <div className="lg:col-span-5 p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-100 text-sm">
                Academic Background
              </h4>
              <p className="text-xs text-slate-400 font-mono">
                {profileData.education.degree}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs font-mono text-slate-300 bg-slate-950/80 p-4 rounded-lg border border-slate-800">
            <div className="text-sky-400 font-bold">{profileData.education.field}</div>
            <div className="text-slate-400">{profileData.education.institution}</div>
            <div className="text-slate-500">{profileData.education.location} • {profileData.education.period}</div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Hardware Lab Specs</div>
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs space-y-1">
              <div className="font-mono text-sky-400 font-bold">{profileData.hardwareSpecs.cluster}</div>
              <div className="text-slate-300 font-mono">{profileData.hardwareSpecs.memory}</div>
              <p className="text-[11px] text-slate-500">{profileData.hardwareSpecs.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY FOUR DOMAINS? */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
            Architecture Philosophy
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100">
            Why Four Domains?
          </h2>
          <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
            Many developers view AI, web engineering, data science, and cybersecurity as separate disciplines. I see them as tightly connected pillars of modern software engineering:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm font-mono">
              <BrainCircuit className="w-4 h-4" />
              AI Provides Intelligence
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Models, RAG pipelines, and embeddings provide natural language capability and reasoning.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm font-mono">
              <Code2 className="w-4 h-4" />
              Software Provides Delivery
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              React, Next.js, and FastAPI transform raw models into fast, accessible, real-world user applications.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm font-mono">
              <ChartNoAxesCombined className="w-4 h-4" />
              Data Provides Grounding
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cleaning, indexing, vectorization, and statistical EDA ensure models are fed high-quality signals.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm font-mono">
              <ShieldCheck className="w-4 h-4" />
              Security Provides Resilience
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Threat modeling, auth, and OWASP defenses ensure the system remains safe under hostile input.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW I SOLVE PROBLEMS & HOW I LEARN */}
      <section className="space-y-8">
        <ArchitectureDiagram
          title="Problem Solving & Engineering Workflow"
          description="How I approach new technical problems from initial discovery to validated delivery."
          nodes={[
            "Problem Definition",
            "Understand Specs",
            "Deep Research",
            "Deconstruct System",
            "Build Prototype",
            "Stress Test",
            "Refine & Ship"
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Engineering Principles */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              My Engineering Principles
            </h3>
            <ul className="space-y-3">
              {profileData.bio.philosophy.map((principle, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn -> Build -> Break -> Learn Loop */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 font-mono">
              <Sparkles className="w-5 h-5 text-sky-400" />
              Learn → Build → Break → Learn Loop
            </h3>
            <div className="space-y-2">
              {profileData.bio.learnLoop.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTINUE EXPLORING */}
      <section className="p-8 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100">Ready to explore my engineering work?</h3>
          <p className="text-xs text-slate-400">Discover project implementations, verified course records, or my tech stack universe.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-mono font-medium text-white transition-colors"
          >
            Projects Explorer
          </Link>
          <Link
            href="/toolkit"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
          >
            My Toolkit
          </Link>
          <Link
            href="/experience"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
          >
            Experience Timeline
          </Link>
        </div>
      </section>
    </div>
  );
}
