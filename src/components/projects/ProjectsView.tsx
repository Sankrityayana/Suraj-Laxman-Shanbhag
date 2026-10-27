import React, { useState } from 'react';
import { ArrowRight, Code, ExternalLink, ShieldCheck } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectCategory } from '../../types/portfolio';
import { StatusBadge } from '../common/StatusBadge';
import { PageHeader } from '../layout/PageHeader';

interface ProjectsViewProps {
  navigate: (path: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ navigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="space-y-8">
      <PageHeader
        badgeText="Technical Showcase"
        title="Software & Applied AI Projects"
        description="Genuine projects built and tested during my academic and independent work, documented with technical decisions, architecture workflows, and explicit engineering limitations."
      />

      {/* Category Filter Controls */}
      <div className="flex items-center gap-2 p-1 bg-slate-900/80 border border-slate-800 rounded-lg max-w-fit">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            selectedCategory === 'all'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          All Projects ({PROJECTS_DATA.length})
        </button>
        <button
          onClick={() => setSelectedCategory('ai-ml')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            selectedCategory === 'ai-ml'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          AI & Embeddings
        </button>
        <button
          onClick={() => setSelectedCategory('software')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            selectedCategory === 'software'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Full-Stack & APIs
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-slate-400 uppercase">
                  {project.category === 'ai-ml' ? 'AI / Machine Learning' : 'Software Engineering'}
                </span>
                <StatusBadge status={project.status} variant="cyan" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                  <button
                    onClick={() => navigate(`/projects/${project.slug}`)}
                    className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                  >
                    {project.title}
                  </button>
                </h2>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Problem statement summary */}
              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs text-slate-400 space-y-1">
                <span className="font-semibold text-slate-300 block">Problem Addressed:</span>
                <p className="leading-relaxed">{project.problemStatement}</p>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-slate-400 block">Technologies Actually Used:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions & Links */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
              <button
                onClick={() => navigate(`/projects/${project.slug}`)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <Code className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
        <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
        <p>
          Candidate project presentations reflect individual implementation, local benchmark testing, and explicit boundaries. No unverified commercial deployments or inflated performance metrics are claimed.
        </p>
      </div>
    </div>
  );
};
