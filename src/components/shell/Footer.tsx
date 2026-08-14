"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { navigationGroups } from "@/data/navigation";
import { Github, Linkedin, Mail, FileText, ArrowUp, Sparkles, Code2, ShieldCheck, BrainCircuit, ChartNoAxesCombined } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#080c14] border-t border-slate-800/80 text-slate-400 text-sm mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Top Footer Banner / Digital Signature */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/60">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md">
                SLS
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-100 tracking-tight">
                  {profileData.name}
                </h3>
                <p className="text-xs font-mono text-sky-400">
                  {profileData.title}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {profileData.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>Presidency University Bangalore (B.Tech CST)</span>
              <span>•</span>
              <span>2021—2025</span>
            </div>
          </div>

          {/* Core Domains Showcase */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-3">
            <Link
              href="/domains/ai-ml"
              className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-800/50 transition-all group"
            >
              <div className="flex items-center gap-2 text-blue-400 font-medium text-xs mb-1">
                <BrainCircuit className="w-4 h-4" />
                AI/ML Engineering
              </div>
              <p className="text-[11px] text-slate-500 group-hover:text-slate-400 line-clamp-2">
                RAG, Local LLMs, Vector Search & AI Agents
              </p>
            </Link>

            <Link
              href="/domains/software-web"
              className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-800/50 transition-all group"
            >
              <div className="flex items-center gap-2 text-emerald-400 font-medium text-xs mb-1">
                <Code2 className="w-4 h-4" />
                Software & Web
              </div>
              <p className="text-[11px] text-slate-500 group-hover:text-slate-400 line-clamp-2">
                TypeScript, React, Next.js & FastAPI APIs
              </p>
            </Link>

            <Link
              href="/domains/data-science"
              className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-800/50 transition-all group"
            >
              <div className="flex items-center gap-2 text-purple-400 font-medium text-xs mb-1">
                <ChartNoAxesCombined className="w-4 h-4" />
                Data Science
              </div>
              <p className="text-[11px] text-slate-500 group-hover:text-slate-400 line-clamp-2">
                Predictive Analytics, EDA & Vector Indexing
              </p>
            </Link>

            <Link
              href="/domains/cybersecurity"
              className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-800/50 transition-all group"
            >
              <div className="flex items-center gap-2 text-amber-400 font-medium text-xs mb-1">
                <ShieldCheck className="w-4 h-4" />
                Cybersecurity
              </div>
              <p className="text-[11px] text-slate-500 group-hover:text-slate-400 line-clamp-2">
                App Security, Threat Modeling & GRC Basics
              </p>
            </Link>
          </div>
        </div>

        {/* Middle Footer Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
          {navigationGroups.map((group) => (
            <div key={group.groupTitle} className="space-y-3">
              <h4 className="font-mono font-semibold text-[11px] tracking-wider text-slate-300 uppercase">
                {group.groupTitle}
              </h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-sky-400 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 text-slate-500">
            <span>© {new Date().getFullYear()} Suraj Laxman Shanbhag</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <Link
              href="/resume"
              className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
