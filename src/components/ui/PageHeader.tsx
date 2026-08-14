import React from "react";
import { IconRenderer } from "./IconRenderer";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  iconName?: string;
  accentColor?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  iconName,
  accentColor = "#3b82f6"
}) => {
  return (
    <div className="relative py-8 sm:py-12 border-b border-slate-800/80 mb-10 overflow-hidden">
      {/* Background glow overlay */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      <div className="relative space-y-3">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-slate-800 text-sky-400">
            {iconName && <IconRenderer name={iconName} className="w-3.5 h-3.5" />}
            <span>{badge}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
