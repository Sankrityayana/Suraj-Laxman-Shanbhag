"use client";

import React, { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Search, Filter, Sparkles, FolderKanban } from "lucide-react";

export const ProjectExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "AI/ML",
    "Software & Web",
    "Data Science",
    "Cybersecurity",
    "GenAI & RAG"
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, technology (FastAPI, FAISS, Next.js)..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 pr-1 shrink-0">
            <Filter className="w-3 h-3" />
            Filter:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-sky-500 text-white shadow-sm"
                    : "bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-700/60"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
        <span>
          Showing <strong className="text-slate-100">{filteredProjects.length}</strong> project{filteredProjects.length === 1 ? "" : "s"}
        </span>
        {selectedCategory !== "All" && (
          <span className="text-sky-400">
            Category: <strong>{selectedCategory}</strong>
          </span>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
          <FolderKanban className="w-8 h-8 text-slate-600 mx-auto" />
          <h3 className="text-sm font-semibold text-slate-300">No matching projects found</h3>
          <p className="text-xs text-slate-500">
            Try adjusting your search criteria or resetting the filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
