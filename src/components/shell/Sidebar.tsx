"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationGroups } from "@/data/navigation";
import { profileData } from "@/data/profile";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { X, Sparkles, FileText, Mail, Github, Linkedin } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Disable background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end transition-opacity duration-300">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#0f172a] border-l border-slate-800 text-slate-100 h-full flex flex-col shadow-2xl z-10 overflow-y-auto transform transition-transform duration-300 ease-out">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-[#0f172a]/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-sm">
              SLS
            </div>
            <div>
              <h2 className="font-semibold text-sm tracking-wide text-slate-100">
                Suraj Laxman Shanbhag
              </h2>
              <p className="text-xs text-slate-400 font-mono">Engineering Universe</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search / Command CTA inside drawer */}
        <div className="px-5 pt-4 pb-2">
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              15 Dedicated Engineering Routes
            </span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
              Navigation
            </span>
          </div>
        </div>

        {/* Navigation Groups */}
        <div className="flex-1 px-4 py-2 space-y-6 overflow-y-auto">
          {navigationGroups.map((group) => (
            <div key={group.groupTitle} className="space-y-1">
              <div className="px-3 py-1 text-[11px] font-mono font-semibold tracking-wider text-slate-500 uppercase">
                {group.groupTitle}
              </div>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`group flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-sky-500/15 border border-sky-500/30 text-sky-400 font-medium shadow-sm"
                          : "text-slate-300 hover:bg-slate-800/60 hover:text-white border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`p-1.5 rounded-md transition-colors ${
                            isActive
                              ? "bg-sky-500/20 text-sky-400"
                              : "bg-slate-800/80 text-slate-400 group-hover:text-slate-200 group-hover:bg-slate-800"
                          }`}
                        >
                          <IconRenderer name={item.iconName} className="w-4 h-4" />
                        </span>
                        <div className="truncate">
                          <div className="truncate font-medium">{item.title}</div>
                          <p className="text-[11px] text-slate-500 truncate group-hover:text-slate-400 hidden sm:block">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {item.badge && (
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            isActive
                              ? "bg-sky-500/20 text-sky-300 border-sky-500/40"
                              : "bg-slate-800/90 text-slate-400 border-slate-700"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action Footer in Drawer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 space-y-3 mt-auto">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/resume"
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              Resume View
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-medium text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Get In Touch
            </Link>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1 font-mono">
            <span>© {new Date().getFullYear()} Suraj Shanbhag</span>
            <div className="flex items-center gap-3">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-300 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-300 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
