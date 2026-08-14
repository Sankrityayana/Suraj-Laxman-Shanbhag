import React from "react";
import Link from "next/link";
import { DomainDetail } from "@/data/domains";
import { IconRenderer } from "./IconRenderer";
import { ArrowUpRight } from "lucide-react";

interface DomainCardProps {
  domain: DomainDetail;
}

export const DomainCard: React.FC<DomainCardProps> = ({ domain }) => {
  return (
    <Link
      href={`/domains/${domain.slug}`}
      className="group relative p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden shadow-lg"
    >
      {/* Accent corner line */}
      <div
        className="absolute top-0 left-0 w-full h-1 transition-all duration-300 opacity-80 group-hover:h-1.5"
        style={{ backgroundColor: domain.accentColor }}
      />

      <div className="space-y-4">
        {/* Header with Icon and Badge */}
        <div className="flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-100 bg-slate-800/80 border border-slate-700/80 group-hover:scale-105 transition-transform"
            style={{ color: domain.accentColor }}
          >
            <IconRenderer name={domain.iconName} className="w-6 h-6" />
          </div>

          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            {domain.projectsCount} Projects
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
            {domain.name}
          </h3>
          <p className="text-xs font-mono text-slate-400 mt-1">
            {domain.tagline}
          </p>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
          {domain.overview}
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {domain.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {domain.technologies.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/50 text-slate-400">
              +{domain.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-slate-200">
        <span>Explore Domain Specs</span>
        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
};
