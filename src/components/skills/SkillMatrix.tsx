import React from 'react';
import { SKILL_CATEGORIES_DATA } from '../../data/skills';
import { PageHeader } from '../layout/PageHeader';
import { Shield, Terminal, Code2, Cpu } from 'lucide-react';

export const SkillMatrix: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'secops':
        return <Shield className="w-5 h-5 text-emerald-400" aria-hidden="true" />;
      case 'systems':
        return <Terminal className="w-5 h-5 text-cyan-400" aria-hidden="true" />;
      case 'software':
        return <Code2 className="w-5 h-5 text-cyan-400" aria-hidden="true" />;
      case 'ai-ml':
        return <Cpu className="w-5 h-5 text-cyan-400" aria-hidden="true" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" aria-hidden="true" />;
    }
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'Demonstrated in Projects':
        return 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20';
      case 'Coursework & Labs':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20';
      default:
        return 'text-slate-400 border-slate-700/60 bg-slate-900/40';
    }
  };

  return (
    <div className="space-y-10">
      <PageHeader
        badgeText="Technical Competencies"
        title="Skills & Tool Proficiency"
        description="Structured by practical capability and verified context—free from arbitrary percentage meters. Distinguishing tools demonstrated in code, practiced in labs, and studied in academic coursework."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SKILL_CATEGORIES_DATA.map((category) => (
          <section
            key={category.id}
            className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 space-y-6"
          >
            <div className="flex items-start gap-3.5 pb-4 border-b border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                {getCategoryIcon(category.id)}
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-100">
                  {category.title}
                </h2>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="space-y-3.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <span className="text-sm font-semibold text-slate-200">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border self-start sm:self-auto ${getTierBadge(
                        skill.tier
                      )}`}
                    >
                      {skill.tier}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.context}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
