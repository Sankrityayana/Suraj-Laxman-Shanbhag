"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { certificationsData, educationData } from "@/data/learning";
import { experienceTimelineData } from "@/data/experience";
import { FileText, Printer, Download, Mail, Github, Linkedin, ExternalLink, CheckCircle2 } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 py-4 max-w-4xl mx-auto">
      {/* Top Print Toolbar */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 no-print">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
          <FileText className="w-4 h-4 text-sky-400" />
          <span>Recruiter-Friendly Resume View</span>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-mono font-medium text-white transition-colors shadow-md"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Main Continuous Document */}
      <div className="p-8 sm:p-12 rounded-xl bg-slate-900/95 border border-slate-800 space-y-10 shadow-2xl text-slate-100 print-page">
        {/* Header Header Info */}
        <div className="border-b border-slate-800 pb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
                {profileData.name}
              </h1>
              <p className="text-sm font-mono text-sky-400 font-medium mt-1">
                {profileData.title}
              </p>
            </div>

            <div className="text-xs font-mono text-slate-400 space-y-1 text-left sm:text-right">
              <div>Bangalore, Karnataka, India</div>
              <div>{profileData.socialLinks.email}</div>
              <div className="flex items-center sm:justify-end gap-3 pt-1">
                <a href={profileData.socialLinks.github} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                  GitHub
                </a>
                <span>•</span>
                <a href={profileData.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed pt-2">
            {profileData.bio.summary}
          </p>
        </div>

        {/* Core Domains & Technical Skills */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">
            Technical Stack & Core Domains
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="font-mono text-slate-400 font-semibold">AI / ML & GenAI:</span>
              <p className="text-slate-200">Python, PyTorch, Sentence Transformers, LangChain, LlamaIndex, Ollama (Llama 3), FAISS, ChromaDB, Hugging Face.</p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-slate-400 font-semibold">Software & Web:</span>
              <p className="text-slate-200">TypeScript, JavaScript, React 19, Next.js (App Router), Tailwind CSS, FastAPI, Node.js, REST APIs, HTML5/CSS3.</p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-slate-400 font-semibold">Data Science & Analytics:</span>
              <p className="text-slate-200">Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn, Feature Engineering, Target Encoding, Predictive Analytics.</p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-slate-400 font-semibold">Databases & Infrastructure:</span>
              <p className="text-slate-200">SQLite, PostgreSQL, MongoDB, Redis, Git, GitHub, VS Code, Vercel, Render, DGX Spark 128GB Memory Node.</p>
            </div>
          </div>
        </div>

        {/* Selected Engineering Builds */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">
            Selected Engineering Projects
          </h2>

          <div className="space-y-6">
            {projectsData.slice(0, 4).map((proj) => (
              <div key={proj.id} className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-100 text-sm">{proj.title}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{proj.category}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-1 font-mono text-[10px] text-slate-400">
                  <span>Stack: </span>
                  {proj.technologies.map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Experience */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">
            Engineering Milestones
          </h2>

          <div className="space-y-4 text-xs">
            {experienceTimelineData.slice(0, 3).map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-200">
                  <span>{exp.title} — {exp.organization}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{exp.period}</span>
                </div>
                <p className="text-slate-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Verified Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          <div className="space-y-2 text-xs">
            <h3 className="font-mono font-bold uppercase text-sky-400 text-[11px]">Education</h3>
            <div className="font-bold text-slate-200">{educationData.degree}</div>
            <div className="text-slate-400">{educationData.field}</div>
            <div className="text-slate-500">{educationData.institution} • {educationData.period}</div>
          </div>

          <div className="space-y-2 text-xs">
            <h3 className="font-mono font-bold uppercase text-sky-400 text-[11px]">Verified Credentials</h3>
            <ul className="space-y-1 text-slate-300 font-mono text-[11px]">
              {certificationsData.map((c) => (
                <li key={c.id}>
                  • {c.issuer}: {c.title} ({c.grade})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
