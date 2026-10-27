import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description: string;
  parentLabel?: string;
  onBack?: () => void;
  badgeText?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  parentLabel,
  onBack,
  badgeText,
}) => {
  return (
    <div className="mb-10 pb-6 border-b border-slate-800/80">
      {onBack && (
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded py-0.5 px-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to {parentLabel || 'previous'}</span>
        </button>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          {badgeText && (
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-1.5">
              {badgeText}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            {title}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
