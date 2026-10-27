import React, { useState } from 'react';
import { Download, Mail, MapPin, Printer, ShieldCheck, Check } from 'lucide-react';
import { PROFILE_DATA, EDUCATION_DATA } from '../../data/profile';
import { CREDENTIALS_DATA } from '../../data/credentials';
import { PROJECTS_DATA } from '../../data/projects';
import { PageHeader } from '../layout/PageHeader';

export const ResumeViewer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const verifiedCert = CREDENTIALS_DATA.find((c) => c.status === 'Verified Completed');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <PageHeader
        badgeText="Document View"
        title="Curriculum Vitae / Resume"
        description="A structured, high-contrast, ATS-friendly digital resume detailing verified qualifications, education, and technical capabilities."
      />

      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-[#0c121e] border border-slate-800">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
          <span>Factual, evidence-backed representation</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Print / Save as PDF</span>
          </button>
          <a
            href={PROFILE_DATA.resumePdfPath}
            download="Suraj_Laxman_Shanbhag_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* ATS-Grade Digital Resume Document Paper */}
      <div className="p-8 sm:p-12 rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-2xl space-y-8 text-slate-200 font-sans print:bg-white print:text-black print:border-none print:shadow-none">
        {/* Resume Header */}
        <div className="border-b border-slate-800 pb-6 print:border-slate-300 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black">
                {PROFILE_DATA.fullName}
              </h1>
              <p className="text-sm font-medium text-cyan-400 print:text-blue-800 mt-1">
                {PROFILE_DATA.tagline}
              </p>
            </div>
            <div className="text-xs text-slate-400 print:text-slate-600 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-blue-700" aria-hidden="true" />
                <span>{PROFILE_DATA.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-blue-700" aria-hidden="true" />
                <button
                  onClick={handleCopyEmail}
                  className="hover:text-cyan-300 underline transition-colors"
                  title="Click to copy email address"
                >
                  {PROFILE_DATA.email}
                </button>
                {copiedEmail && (
                  <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
            Professional Profile & Career Objective
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
            {PROFILE_DATA.careerObjective}
          </p>
        </div>

        {/* Verified Education */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
            Education
          </h2>
          <div className="space-y-1 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white print:text-black">
              <span>{EDUCATION_DATA.institution}</span>
              <span className="text-slate-400 print:text-slate-600 font-normal">
                Class of {EDUCATION_DATA.completionYear} · {EDUCATION_DATA.location}
              </span>
            </div>
            <p className="text-slate-300 print:text-slate-700">
              {EDUCATION_DATA.degree} in {EDUCATION_DATA.specialization}
            </p>
          </div>
        </div>

        {/* Verified Certification */}
        {verifiedCert && (
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
              Verified Professional Certification
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-emerald-400 print:text-emerald-800">
                <span>{verifiedCert.title}</span>
                <span className="text-slate-400 print:text-slate-600 font-normal">
                  Issued by {verifiedCert.issuingOrganization} ({verifiedCert.issueYear})
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-700">
                {verifiedCert.competencies.slice(0, 4).map((comp, idx) => (
                  <li key={idx}>{comp}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Technical Competencies Matrix */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="font-semibold text-slate-200 print:text-black block mb-0.5">
                Security & SOC Operations:
              </span>
              <p className="text-slate-400 print:text-slate-700 leading-relaxed">
                Security Monitoring, SIEM concepts, Log triage, Network fundamentals, OWASP Top 10, Incident Response lifecycle.
              </p>
            </div>
            <div>
              <span className="font-semibold text-slate-200 print:text-black block mb-0.5">
                Systems & Networking:
              </span>
              <p className="text-slate-400 print:text-slate-700 leading-relaxed">
                Linux command line, Windows OS, TCP/IP, DNS, HTTP/S, Subnetting, Bash scripting.
              </p>
            </div>
            <div>
              <span className="font-semibold text-slate-200 print:text-black block mb-0.5">
                Languages & Frameworks:
              </span>
              <p className="text-slate-400 print:text-slate-700 leading-relaxed">
                Python, FastAPI, TypeScript, React, SQL / SQLite, REST APIs, Git & GitHub.
              </p>
            </div>
            <div>
              <span className="font-semibold text-slate-200 print:text-black block mb-0.5">
                AI / ML & Data Science:
              </span>
              <p className="text-slate-400 print:text-slate-700 leading-relaxed">
                Sentence Transformers, Vector search (FAISS/ChromaDB), RAG architectures, Pandas, NumPy.
              </p>
            </div>
          </div>
        </div>

        {/* Selected Technical Projects */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
            Technical Projects & Implementation
          </h2>

          <div className="space-y-4 text-xs sm:text-sm">
            {PROJECTS_DATA.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white print:text-black">
                  <span>{proj.title}</span>
                  <span className="text-xs font-mono text-slate-400 print:text-slate-600 font-normal">
                    {proj.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 print:text-slate-600 font-mono">
                  Stack: {proj.technologies.join(', ')}
                </p>
                <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                  {proj.tagline} {proj.myContribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
