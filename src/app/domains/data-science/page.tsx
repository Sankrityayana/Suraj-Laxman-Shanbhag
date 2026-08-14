import React from "react";
import Link from "next/link";
import { domainsData } from "@/data/domains";
import { projectsData } from "@/data/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { ChartNoAxesCombined, Database, BarChart, CheckCircle2, Table, LineChart } from "lucide-react";

export default function DataSciencePage() {
  const domain = domainsData["data-science"];
  const dataProjects = projectsData.filter((p) => p.domain === "data-science" || p.category === "Data Science");

  return (
    <div className="space-y-16 py-4">
      <PageHeader
        title={domain.name}
        subtitle={domain.tagline}
        badge="Domain Overview"
        iconName={domain.iconName}
        accentColor={domain.accentColor}
      />

      {/* 1. MY DATA UNIVERSE */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
            Quantitative Analysis & Pipelines
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100">
            My Data Universe
          </h2>
          <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
            Extracting mathematical signal from raw noise through exploratory data analysis, statistical distribution testing, target encoding, and predictive gradient boosting models.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domain.keyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3"
            >
              <div className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                {pillar.title}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
              <ul className="space-y-1 pt-2 border-t border-slate-800/80">
                {pillar.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <span className="text-purple-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PREDICTIVE DATA PIPELINE ARCHITECTURE */}
      <section className="space-y-6">
        <ArchitectureDiagram
          title="Ads CTR Predictive Analytics Pipeline"
          description="Impression log parsing, target encoding, scaling, model cross-validation, and ROC-AUC metric calculation."
          nodes={[
            "Ad Impression Logs",
            "Pandas Cleaning & Imputation",
            "Target & One-Hot Encoding",
            "Scikit-Learn ColumnTransformer",
            "Gradient Boosting Model Training",
            "ROC-AUC & Log Loss Evaluation"
          ]}
        />
      </section>

      {/* 3. VERIFIED DATASET SCALE SHOWCASE */}
      <section className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
        <h3 className="text-xl font-bold text-slate-100 font-mono flex items-center gap-2">
          <Table className="w-5 h-5 text-purple-400" />
          Verified Dataset & Model Benchmarks
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="text-2xl font-mono font-extrabold text-purple-400">100,000+</div>
            <div className="text-xs font-bold text-slate-200">Resume Profiles Ingested</div>
            <p className="text-[11px] text-slate-400">Structured candidate text parsed and converted into 384-dimensional dense vectors.</p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="text-2xl font-mono font-extrabold text-sky-400">&lt; 50ms</div>
            <div className="text-xs font-bold text-slate-200">Similarity Query Speed</div>
            <p className="text-[11px] text-slate-400">FAISS index cosine distance computation latency across 100K candidate corpus.</p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="text-2xl font-mono font-extrabold text-emerald-400">100%</div>
            <div className="text-xs font-bold text-slate-200">IBM Vector DB Grade</div>
            <p className="text-[11px] text-slate-400">Verified perfect score in IBM Vector Databases for RAG examination.</p>
          </div>
        </div>
      </section>

      {/* 4. DATA PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-100">
            Curated Data Science Projects ({dataProjects.length})
          </h2>
          <Link href="/projects" className="text-xs font-mono text-sky-400 hover:underline">
            View All Projects Explorer →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </section>
    </div>
  );
}
