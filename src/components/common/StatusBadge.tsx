import React from 'react';

interface StatusBadgeProps {
  status: string;
  variant?: 'emerald' | 'cyan' | 'slate';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  variant = 'cyan',
  className = '',
}) => {
  const colorMap = {
    emerald: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20',
    cyan: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20',
    slate: 'text-slate-400 border-slate-700/60 bg-slate-900/40',
  };

  return (
    <span
      className={`inline-flex items-center text-xs font-mono tracking-wide px-2 py-0.5 rounded border ${colorMap[variant]} ${className}`}
    >
      {status}
    </span>
  );
};
