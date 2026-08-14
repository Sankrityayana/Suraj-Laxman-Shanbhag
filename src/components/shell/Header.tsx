"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allNavLinks } from "@/data/navigation";
import { Sidebar } from "@/components/shell/Sidebar";
import { Menu, Search, FileText } from "lucide-react";

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for backdrop blur enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find current active page title
  const activeNavItem = allNavLinks.find((item) => item.href === pathname);
  const currentPageTitle = activeNavItem ? activeNavItem.title : "Digital Universe";

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-slate-800/40"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Branding & Current Context */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md p-1"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                SS
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-sky-400 transition-colors">
                  Suraj Shanbhag
                </span>
                <span className="text-[10px] font-mono text-slate-400 hidden xs:inline-block">
                  AI • Web • Data • Cyber
                </span>
              </div>
            </Link>

            {/* Current Page Context Badge */}
            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-slate-800 text-xs text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-300 font-medium">{currentPageTitle}</span>
            </div>
          </div>

          {/* Right: Search, Resume CTA, Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Command / Search Trigger */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                title="Open Command Search (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-300 rounded border border-slate-700">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Resume CTA Button */}
            <Link
              href="/resume"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
            </Link>

            {/* Primary Navigation Trigger: Hamburger Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Open primary menu drawer"
            >
              <Menu className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Primary Sidebar Navigation Drawer */}
      <Sidebar isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
