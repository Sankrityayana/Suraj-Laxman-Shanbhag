"use client";

import React, { useState } from "react";
import { technologiesData, Technology } from "@/data/technologies";
import { Search, Sparkles, Terminal, CheckCircle2, Clock, Code2 } from "lucide-react";

export const ToolkitGroup: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const categories = Array.from(
    new Set(technologiesData.map((tech) => tech.category))
  );

  const statusBadge = (status: Technology["status"]) => {
    switch (status) {
      case "Core":
        return "bg-blue-500/15 text-blue-400 border-blue-500/30";
      case "Experienced":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
      case "Working With":
        return "bg-purple-500/15 text-purple-400 border-purple-500/30";
      case "Learning":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30";
      case "Exploring":
        return "bg-cyan-500/15 text-cyan-400 border-cyan-500/30";
      default:
        return "bg-slate-800 text-slate-400 border-slate-700";
    }
  };

  const filteredTechs = technologiesData.filter((tech) => {
    const matchesSearch =
      searchQuery === "" ||
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" || tech.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-10">
      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies, tools (Ollama, FAISS, PyTorch, Next.js)..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {["All", "Core", "Experienced", "Working With", "Learning", "Exploring"].map(
            (status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors ${
                  selectedStatus === status
                    ? "bg-sky-500 text-white font-medium"
                    : "bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-700/60"
                }`}
              >
                {status}
              </button>
            )
          )}
        </div>
      </div>

      {/* Grouped Categories */}
      <div className="space-y-8">
        {categories.map((category) => {
          const categoryTechs = filteredTechs.filter(
            (t) => t.category === category
          );
          if (categoryTechs.length === 0) return null;

          return (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
                <h3 className="text-base font-bold text-slate-100 font-mono">
                  {category}
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  ({categoryTechs.length})
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryTechs.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-sm text-slate-100">
                        {tech.name}
                      </h4>
                      <span
                        className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${statusBadge(
                          tech.status
                        )}`}
                      >
                        {tech.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {tech.description}
                    </p>

                    {tech.projectsUsedIn.length > 0 && (
                      <div className="pt-2 border-t border-slate-800/60 flex flex-wrap gap-1">
                        <span className="text-[10px] font-mono text-slate-500 mr-1">
                          Used in:
                        </span>
                        {tech.projectsUsedIn.map((p) => (
                          <span
                            key={p}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
