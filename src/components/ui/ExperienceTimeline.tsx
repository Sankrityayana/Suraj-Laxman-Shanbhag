import React from "react";
import { experienceTimelineData } from "@/data/experience";
import { BriefcaseBusiness, GraduationCap, Code2, BrainCircuit, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative py-10">
      {/* Central Vertical Line for Desktop & Left-aligned line for Mobile */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-blue-600 to-purple-600 -translate-x-1/2 opacity-80" />

      <div className="space-y-12 relative">
        {experienceTimelineData.map((item, index) => {
          const isEven = index % 2 === 0;

          const typeIcon = {
            "Education & Degree": GraduationCap,
            "Engineering Lead Project": BrainCircuit,
            "Systems & Full-Stack": Code2,
            "AI Research & Lab": BriefcaseBusiness
          }[item.type] || BriefcaseBusiness;

          const IconComponent = typeIcon;

          return (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row items-center ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Central Milestone Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-[#0f172a] border-2 border-sky-400 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-500/20">
                <IconComponent className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4">
                  {/* Period & Domain Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.domain}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span className="font-medium text-slate-300">{item.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Work Highlights */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Key Work</div>
                    <ul className="space-y-1">
                      {item.keyWork.map((kw, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{kw}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
