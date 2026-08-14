"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CommandPalette } from "./CommandPalette";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 bg-tech-grid relative">
      <Header onOpenSearch={() => setIsCommandOpen(true)} />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      <Footer />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </div>
  );
};
