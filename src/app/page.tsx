import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { domainsData } from "@/data/domains";
import { projectsData } from "@/data/projects";
import { DomainCard } from "@/components/ui/DomainCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
  Code2,
  ChartNoAxesCombined,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  FileText,
  Mail,
  Zap,
  CheckCircle2
} from "lucide-react";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="space-y-20 py-4">
      {/* 1. HERO / IDENTITY SECTION */}
      <section className="relative pt-8 pb-12 sm:py-16 border-b border-slate-800/80 overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/10 via-sky-500/10 to-purple-600/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-4xl space-y-8">
          {/* Identity Tag & Status */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sky-400 font-semibold">{profileData.name}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Technical Builder & Systems Engineer</span>
          </div>

          {/* Hero Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black text-slate-100 tracking-tight leading-[1.1]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-400">Intelligent Systems</span> across AI, Software & Security.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
              I build, experiment, research, and explore technology across four connected disciplines: <strong className="text-slate-100 font-medium">AI/ML Engineering</strong>, <strong className="text-slate-100 font-medium">Software & Web Development</strong>, <strong className="text-slate-100 font-medium">Data Science</strong>, and <strong className="text-slate-100 font-medium">Cybersecurity</strong>.
            </p>
          </div>

          {/* Core Domains Pill Matrix */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-1">Domains:</span>
            {profileData.domains.map((dom) => (
              <span
                key={dom}
                className="text-xs font-mono px-3 py-1 rounded-md bg-slate-900/90 text-slate-200 border border-slate-800 shadow-sm"
              >
                {dom}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-sm font-mono tracking-wide shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-sm font-mono flex items-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Let&apos;s Build Together</span>
            </Link>

            <Link
              href="/resume"
              className="px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Resume</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CURRENTLY SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <h2 className="text-2xl font-bold text-slate-100 font-mono">
              Currently Pursuing
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500">Live Focus Dashboard</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
              Building
            </div>
            <ul className="space-y-2">
              {profileData.currentPursuits.building.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              Learning
            </div>
            <ul className="space-y-2">
              {profileData.currentPursuits.learning.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
              Researching
            </div>
            <ul className="space-y-2">
              {profileData.currentPursuits.researching.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-purple-400 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
              Experimenting
            </div>
            <ul className="space-y-2">
              {profileData.currentPursuits.experimenting.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-amber-400 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. THE FOUR DOMAINS SECTION */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
            Technical Universe
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            The Four Pillars of Engineering
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Rather than confining myself to a single isolated layer, I work across the full spectrum of modern intelligent software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DomainCard domain={domainsData["ai-ml"]} />
          <DomainCard domain={domainsData["software-web"]} />
          <DomainCard domain={domainsData["data-science"]} />
          <DomainCard domain={domainsData["cybersecurity"]} />
        </div>
      </section>

      {/* 4. WHAT I BUILD SECTION */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Capabilities
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            What I Engineer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Intelligent AI & RAG Apps",
              desc: "Vector embeddings, sentence transformers, FAISS/ChromaDB indexing, and local LLM inference.",
              icon: BrainCircuit,
              color: "text-blue-400"
            },
            {
              title: "Modern Web Platforms",
              desc: "Responsive TypeScript UIs, Next.js App Router, React 19 components, and accessible design systems.",
              icon: Code2,
              color: "text-emerald-400"
            },
            {
              title: "Data Pipelines & Analytics",
              desc: "Exploratory analysis, predictive CTR modeling, Pandas vector transformations, and statistical EDA.",
              icon: ChartNoAxesCombined,
              color: "text-purple-400"
            },
            {
              title: "Software & API Services",
              desc: "FastAPI REST endpoints, Pydantic validation schemas, Node microservices, and ORM database layers.",
              icon: Cpu,
              color: "text-sky-400"
            },
            {
              title: "Security & Threat Modeling",
              desc: "OWASP vulnerability defenses, STRIDE threat assessments, authentication, and secure code practices.",
              icon: ShieldCheck,
              color: "text-amber-400"
            },
            {
              title: "Experimental Prototypes",
              desc: "Computer vision keypoint extraction, feature flag management, and multi-agent tool calling.",
              icon: Terminal,
              color: "text-cyan-400"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors space-y-2"
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <h3 className="font-bold text-sm text-slate-100">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE ARCHITECTURE DIAGRAM */}
      <section className="space-y-4">
        <ArchitectureDiagram
          title="TalentLens AI / Hiring Radar Semantic Match Flow"
          description="Sub-50ms vector query execution pattern indexing 100,000 resume candidate profiles."
          nodes={[
            "Recruiter Query",
            "Sentence-Transformers Embedding",
            "FAISS Dense Vector Index",
            "Cosine Score Calculation",
            "FastAPI REST Response",
            "Next.js Ranking UI"
          ]}
        />
      </section>

      {/* 5. FEATURED PROJECTS SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
              Selected Builds
            </div>
            <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 font-medium"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </section>

      {/* 6. LET'S BUILD SOMETHING CTA */}
      <section className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-900 border border-slate-800 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Open for Engineering Collaboration
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Have an idea worth exploring or a system to build?
          </h2>

          <p className="text-sm text-slate-400 leading-relaxed">
            Whether it&apos;s an AI/ML vector search architecture, a modern web application, or a technical inquiry, I&apos;m ready to collaborate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-xs font-mono uppercase tracking-wider shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </Link>

            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono font-medium flex items-center gap-2 transition-colors"
            >
              <span>Explore Projects Explorer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
