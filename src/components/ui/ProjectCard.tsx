import React from "react";
import { Project } from "@/data/projects";
import { Github, ExternalLink, Sparkles, CheckCircle2, Clock, Terminal } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const domainBadgeStyle = {
    "ai-ml": "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "software-web": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    "data-science": "bg-purple-500/10 text-purple-400 border-purple-500/30",
    "cybersecurity": "bg-amber-500/10 text-amber-400 border-amber-500/30"
  }[project.domain];

  return (
    <div className="group relative p-6 sm:p-7 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl">
      <div className="space-y-4">
        {/* Category & Status Row */}
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${domainBadgeStyle}`}>
            {project.category}
          </span>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            {project.status === "Completed" ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Completed</span>
              </>
            ) : (
              <>
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.status}</span>
              </>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-slate-400 mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics Pill Grid if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 rounded-lg bg-slate-950/80 border border-slate-800/80">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-xs font-mono font-bold text-sky-400">{m.value}</div>
                <div className="text-[10px] text-slate-500 font-mono">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Key Features */}
        <div className="space-y-1.5 pt-1">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Highlights</div>
          <ul className="space-y-1">
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="text-sky-400 mt-0.5">•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
        {project.verifiedNotes ? (
          <span className="text-[10px] font-mono text-slate-500 italic max-w-[200px] truncate">
            {project.verifiedNotes}
          </span>
        ) : (
          <span className="text-[10px] font-mono text-slate-500">Verified Build</span>
        )}

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
              title="View Repository"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium"
              title="Live Prototype"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
