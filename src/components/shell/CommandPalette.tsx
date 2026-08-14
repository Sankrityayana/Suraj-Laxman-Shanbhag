"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { allNavLinks } from "@/data/navigation";
import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { Search, X, FolderKanban, FileText, Mail, Github, Linkedin, ArrowRight } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state trigger
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredNav = allNavLinks.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter((proj) =>
    proj.title.toLowerCase().includes(query.toLowerCase()) ||
    proj.description.toLowerCase().includes(query.toLowerCase()) ||
    proj.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleNavigate = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-10 text-slate-100 animate-fade-in">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-sky-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, projects, skills, or shortcuts..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Quick Actions / External */}
          {query === "" && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-mono font-semibold text-slate-500 uppercase">
                Quick Action Shortcuts
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleNavigate("/resume")}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white text-left transition-colors"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>View Resume</span>
                </button>
                <button
                  onClick={() => handleNavigate("/contact")}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white text-left transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Contact Suraj</span>
                </button>
              </div>
            </div>
          )}

          {/* Nav Pages */}
          {filteredNav.length > 0 && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-mono font-semibold text-slate-500 uppercase">
                Pages ({filteredNav.length})
              </div>
              {filteredNav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigate(item.href)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800/80 text-left group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-md bg-slate-800 text-slate-400 group-hover:text-sky-400">
                      <IconRenderer name={item.iconName} className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-xs font-medium text-slate-200 group-hover:text-white">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">{item.description}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1">
              <div className="px-3 py-1 text-[10px] font-mono font-semibold text-slate-500 uppercase">
                Projects ({filteredProjects.length})
              </div>
              {filteredProjects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => handleNavigate(`/projects`)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800/80 text-left group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-md bg-slate-800 text-slate-400 group-hover:text-emerald-400">
                      <FolderKanban className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-xs font-medium text-slate-200 group-hover:text-white">
                        {proj.title}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate max-w-md">
                        {proj.tagline}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {proj.category}
                  </span>
                </button>
              ))}
            </div>
          )}

          {filteredNav.length === 0 && filteredProjects.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-xs font-mono">
              No matching pages or projects found for &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Press ESC to close</span>
          <span>Suraj Laxman Shanbhag Portfolio</span>
        </div>
      </div>
    </div>
  );
};
