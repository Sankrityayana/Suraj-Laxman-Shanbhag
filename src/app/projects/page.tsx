import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectExplorer } from "@/components/ui/ProjectExplorer";
import { FolderKanban, Sparkles, ArrowRight, Mail } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="space-y-12 py-4">
      <PageHeader
        title="Projects Universe"
        subtitle="Explore interactive implementations, systems, semantic search engines, and technical prototypes built across AI, web, data, and security."
        badge="Works"
        iconName="FolderKanban"
        accentColor="#10b981"
      />

      {/* Primary Interactive Explorer */}
      <ProjectExplorer />

      {/* Closing CTA */}
      <section className="p-8 sm:p-10 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-4">
        <h3 className="text-xl font-bold text-slate-100">
          Interested in a custom technical build or collaboration?
        </h3>
        <p className="text-xs text-slate-400 max-w-xl mx-auto">
          Explore my complete technology toolkit or start a direct conversation regarding AI engineering or full-stack software development.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-mono font-medium text-white transition-colors flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </Link>
          <Link
            href="/toolkit"
            className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
          >
            My Toolkit Universe
          </Link>
        </div>
      </section>
    </div>
  );
}
