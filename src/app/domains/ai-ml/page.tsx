import React from "react";
import Link from "next/link";
import { domainsData } from "@/data/domains";
import { projectsData } from "@/data/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { BrainCircuit, Cpu, Sparkles, CheckCircle2, ArrowRight, Layers, Database, Lock, Terminal } from "lucide-react";

export default function AIMLPage() {
  const domain = domainsData["ai-ml"];
  const aiProjects = projectsData.filter((p) => p.domain === "ai-ml" || p.category === "GenAI & RAG");
  const featuredAIProject = projectsData.find((p) => p.id === "hiring-radar") || aiProjects[0];

  return (
    <div className="space-y-16 py-4">
      <PageHeader
        title={domain.name}
        subtitle={domain.tagline}
        badge="Domain Overview"
        iconName={domain.iconName}
        accentColor={domain.accentColor}
      />

      {/* 1. AI/ML UNIVERSE MAP */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
            Domain Architecture
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100">
            My AI/ML Universe
          </h2>
          <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
            Exploring the full spectrum of artificial intelligence—from core machine learning models to transformer embeddings, retrieval-augmented generation, and autonomous agent orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domain.keyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3"
            >
              <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                {pillar.title}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
              <ul className="space-y-1 pt-2 border-t border-slate-800/80">
                {pillar.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <span className="text-blue-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 2. RAG & VECTOR SEARCH ARCHITECTURE */}
      <section className="space-y-6">
        <ArchitectureDiagram
          title="Domain RAG & Vector Retrieval Pipeline"
          description="High-dimensional embedding extraction, persistent vector indexing, and context-guided LLM inference."
          nodes={[
            "Document Ingestion",
            "Semantic Chunking",
            "Sentence Transformers Embedding (384-dim)",
            "FAISS / ChromaDB Index Search",
            "Context Window Assembly",
            "Ollama / Llama 3 Local Inference",
            "Grounded Answer + Citations"
          ]}
        />
      </section>

      {/* 3. FEATURED AI PROJECT SHOWCASE */}
      {featuredAIProject && (
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
              Flagship Implementation
            </div>
            <h2 className="text-2xl font-extrabold text-slate-100">
              Featured AI Build: {featuredAIProject.title}
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono">
                  100K Resume Candidate Vector Index Benchmark
                </div>
                <h3 className="text-xl font-bold text-slate-100">{featuredAIProject.tagline}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{featuredAIProject.description}</p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase">Key Technical Capabilities</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featuredAIProject.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-4 p-5 rounded-lg bg-slate-950/90 border border-slate-800 space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase">Evaluation Metrics</div>
                {featuredAIProject.metrics?.map((m) => (
                  <div key={m.label} className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs text-slate-400">{m.label}</span>
                    <span className="text-xs font-mono font-bold text-sky-400">{m.value}</span>
                  </div>
                ))}

                <div className="pt-2">
                  <div className="text-[11px] font-mono text-slate-500 uppercase mb-1">Tech Stack</div>
                  <div className="flex flex-wrap gap-1">
                    {featuredAIProject.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. ALL CURATED AI PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-100">
            Curated AI/ML Projects ({aiProjects.length})
          </h2>
          <Link href="/projects" className="text-xs font-mono text-sky-400 hover:underline">
            View All Projects Explorer →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </section>
    </div>
  );
}
