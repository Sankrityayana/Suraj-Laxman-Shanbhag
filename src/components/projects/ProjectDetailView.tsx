import React from 'react';
import { ArrowLeft, CheckCircle2, AlertCircle, Code, ExternalLink, Database, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { StatusBadge } from '../common/StatusBadge';

interface ProjectDetailViewProps {
  slug: string;
  navigate: (path: string) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  slug,
  navigate,
}) => {
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-100">Project Not Found</h2>
        <p className="text-sm text-slate-400">
          The requested project case study could not be located.
        </p>
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to All Projects</span>
        </button>
      </div>
    );
  }

  return (
    <article className="space-y-10 max-w-4xl mx-auto">
      {/* Top Breadcrumb & Navigation */}
      <div>
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded py-0.5 px-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to Projects Showcase</span>
        </button>

        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>{project.category === 'ai-ml' ? 'AI / Machine Learning' : 'Software Engineering'}</span>
            <span aria-hidden="true">·</span>
            <span>Technical Case Study</span>
          </div>
          <StatusBadge status={project.status} variant="cyan" />
        </div>
      </div>

      {/* Title & Tagline */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
          {project.title}
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          {project.tagline}
        </p>

        {project.githubUrl && (
          <div className="pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-medium text-slate-200 hover:text-cyan-400 transition-colors"
            >
              <Code className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Inspect Source Repository</span>
              <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>

      {/* Technologies Section */}
      <div className="p-5 rounded-xl bg-[#0c121e] border border-slate-800 space-y-3">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
          Technologies Implemented
        </span>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-200 border border-slate-700/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Problem & Significance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-[#0c121e] border border-slate-800 space-y-2">
          <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-cyan-400" aria-hidden="true" />
            <span>Problem Addressed</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#0c121e] border border-slate-800 space-y-2">
          <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span>Significance & Utility</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.significance}
          </p>
        </div>
      </div>

      {/* Individual Contribution */}
      <div className="p-6 rounded-xl bg-[#0c121e] border border-slate-800 space-y-3">
        <h2 className="text-base font-bold text-slate-100">
          My Individual Contribution
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.myContribution}
        </p>
      </div>

      {/* Architecture & Workflow */}
      <div className="p-6 rounded-xl bg-[#0c121e] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" aria-hidden="true" />
            <span>Architecture & Workflow</span>
          </h2>
          <span className="text-xs font-mono text-slate-400">System Flow</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.architectureOverview}
        </p>
      </div>

      {/* Key Implementation Decisions */}
      <div className="p-6 rounded-xl bg-[#0c121e] border border-slate-800 space-y-4">
        <h2 className="text-base font-bold text-slate-100">
          Key Implementation Decisions
        </h2>
        <ul className="space-y-2.5">
          {project.keyDecisions.map((decision, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{decision}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Data Provenance (if applicable) */}
      {project.dataSourcesAndProvenance && (
        <div className="p-6 rounded-xl bg-[#0c121e] border border-slate-800 space-y-2">
          <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <Database className="w-4 h-4 text-cyan-400" aria-hidden="true" />
            <span>Data Sources & Testing Provenance</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.dataSourcesAndProvenance}
          </p>
        </div>
      )}

      {/* Honest Limitations & Boundaries */}
      <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
          <AlertCircle className="w-4 h-4 text-amber-400" aria-hidden="true" />
          <span>Documented Limitations & Scope Constraints</span>
        </div>
        <ul className="space-y-2">
          {project.limitations.map((limit, idx) => (
            <li key={idx} className="text-xs sm:text-sm text-slate-400 flex items-start gap-2">
              <span className="text-slate-400 font-mono">·</span>
              <span>{limit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Back Button */}
      <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to All Projects</span>
        </button>
      </div>
    </article>
  );
};
