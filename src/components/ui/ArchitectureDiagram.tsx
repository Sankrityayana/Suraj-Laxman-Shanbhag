import React from "react";
import { ArrowRight, Server, Database, Cpu, Layers, ShieldCheck, Code2 } from "lucide-react";

interface ArchitectureDiagramProps {
  title: string;
  description: string;
  nodes: string[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  title,
  description,
  nodes
}) => {
  return (
    <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold font-mono text-slate-100 flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            {title}
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">{description}</p>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-sky-500/30">
          Technical Flow
        </span>
      </div>

      {/* Nodes visual flow */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        {nodes.map((node, index) => (
          <React.Fragment key={index}>
            <div className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>{node}</span>
            </div>
            {index < nodes.length - 1 && (
              <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
