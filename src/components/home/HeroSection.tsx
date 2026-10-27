import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, FileText, Mail, MapPin, Github, Linkedin, Copy, Check, GraduationCap, Code2 } from 'lucide-react';
import { PROFILE_DATA, EDUCATION_DATA } from '../../data/profile';
import { CREDENTIALS_DATA } from '../../data/credentials';

interface HeroSectionProps {
  navigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ navigate }) => {
  const [copied, setCopied] = useState(false);
  const verifiedCert = CREDENTIALS_DATA.find((c) => c.status === 'Verified Completed');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-6 pb-12 border-b border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Direct Identity, Bio & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Available for Entry-Level SOC / Security Roles</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {PROFILE_DATA.fullName}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-cyan-400">
              Cybersecurity & SOC Operations · Software Developer
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Early-career cybersecurity candidate with a B.Tech in Artificial Intelligence and Machine Learning, developing practical skills in security operations, network traffic analysis, threat investigation, and security-focused software development.
            </p>
          </div>

          {/* Quick Info & Location */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              <span>Based in Karwar, Karnataka, India (Open to Bengaluru & Remote)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Presidency University · 2026</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${PROFILE_DATA.email}?subject=Opportunity%20Discussion%20-%20Suraj%20Shanbhag`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>

            <button
              onClick={() => navigate('/resume')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume</span>
            </button>

            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <span>Projects</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Quick social & copy email bar */}
          <div className="flex items-center gap-4 pt-2 text-xs">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PROFILE_DATA.email}</span>
                </>
              )}
            </button>

            {PROFILE_DATA.linkedinUrl && (
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            )}

            {PROFILE_DATA.githubUrl && (
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Clean, Polished Candidate Card */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0c121e] border border-slate-800 shadow-xl space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Candidate Overview
            </span>
          </div>

          <div className="space-y-4 text-xs">
            {/* Degree */}
            <div className="space-y-1">
              <span className="text-slate-400 block">Formal Education</span>
              <p className="text-sm font-semibold text-white">
                {EDUCATION_DATA.degree}
              </p>
              <p className="text-slate-300">
                {EDUCATION_DATA.specialization} · {EDUCATION_DATA.institution}
              </p>
              <p className="text-slate-400">Class of {EDUCATION_DATA.completionYear}</p>
            </div>

            {/* Certification */}
            {verifiedCert && (
              <div className="pt-3 border-t border-slate-800 space-y-1">
                <span className="text-slate-400 block">Professional Certification</span>
                <p className="text-sm font-semibold text-emerald-400">
                  {verifiedCert.title}
                </p>
                <p className="text-slate-300">
                  Issued by {verifiedCert.issuingOrganization} ({verifiedCert.issueYear})
                </p>
              </div>
            )}

            {/* Core Focus */}
            <div className="pt-3 border-t border-slate-800 space-y-1">
              <span className="text-slate-400 block">Target Opportunities</span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {PROFILE_DATA.primaryTargetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[11px]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Tech */}
            <div className="pt-3 border-t border-slate-800 space-y-1">
              <span className="text-slate-400 block">Core Technical Skills</span>
              <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                Python, Linux CLI, SIEM Concepts, Log Triage, FastAPI, TypeScript, React, SQL
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <button
              onClick={() => navigate('/credentials')}
              className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
            >
              <span>View Credential Details</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
