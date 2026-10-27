import React from 'react';
import { MapPin, Mail, ShieldCheck, Github, Linkedin } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#070a12] text-slate-400 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800/60">
          {/* Identity & Positioning */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-200 font-bold text-sm tracking-tight">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>{PROFILE_DATA.fullName}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Early-career cybersecurity candidate with a B.Tech in Artificial Intelligence and Machine Learning, developing practical skills in security operations, network traffic analysis, threat investigation, and security-focused software development.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              <span>{PROFILE_DATA.location}</span>
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => navigate('/')}
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Overview
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => navigate('/skills')}
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => navigate('/credentials')}
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Credentials
              </button>
              <button
                onClick={() => navigate('/resume')}
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Resume
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="text-left text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Professional Contact & Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Direct Contact & Profiles
            </h4>
            <p className="text-xs text-slate-400">
              Open to in-office and hybrid opportunities in Bengaluru, Karnataka, as well as remote roles.
            </p>
            <div className="space-y-1.5 pt-1">
              <div>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{PROFILE_DATA.email}</span>
                </a>
              </div>
              <div className="flex items-center gap-4 text-xs pt-1">
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
              </div>
            </div>
          </div>
        </div>

        {/* Quiet copyright with explicit 2026 year */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {PROFILE_DATA.fullName}. All rights reserved.</p>
          <p className="text-slate-400">
            Truthful, evidence-backed professional portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
};
