import React, { useState } from 'react';
import { Mail, MapPin, ExternalLink, Send, ShieldCheck, Github, Linkedin, AlertCircle } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';
import { PageHeader } from '../layout/PageHeader';

export const ContactView: React.FC = () => {
  const [subject, setSubject] = useState('SOC Analyst Opportunity / Technical Inquiry');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `From: ${senderName || 'Recruiter / Hiring Team'}\n\n${message}`
    );
    const sub = encodeURIComponent(subject);
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${sub}&body=${body}`;
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <PageHeader
        badgeText="Get In Touch"
        title="Contact & Professional Links"
        description="Open to in-office and hybrid opportunities in Bengaluru, Karnataka, as well as remote roles."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Direct Contact Info & Profiles */}
        <div className="md:col-span-5 space-y-6">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Direct Email
              </span>
              <p className="text-sm font-mono text-cyan-400 font-medium break-all mt-1">
                {PROFILE_DATA.email}
              </p>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
              <MapPin className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              <span>Location & Availability</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Based in Karwar, Karnataka, India. Open to in-office and hybrid opportunities in Bengaluru, Karnataka, as well as remote roles.
            </p>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 space-y-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Professional Profiles
            </span>
            <div className="space-y-2">
              {PROFILE_DATA.githubUrl && (
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-400" />
                    <span>GitHub Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}

              {PROFILE_DATA.linkedinUrl && (
                <div className="space-y-1">
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-200 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <p className="text-[10px] text-amber-400/80 flex items-center gap-1 px-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>LinkedIn URL pending manual verification</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Direct Mail Client Launcher Form */}
        <div className="md:col-span-7">
          <form
            onSubmit={handleSendMail}
            className="p-6 sm:p-8 rounded-2xl bg-[#0c121e] border border-slate-800 space-y-5"
          >
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-100">
                Compose Message
              </h2>
              <p className="text-xs text-slate-400">
                Launches your default email application with recipient and subject pre-filled.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label htmlFor="sender-name" className="block text-slate-300 font-medium mb-1">
                  Your Name / Organization
                </label>
                <input
                  id="sender-name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Acme SOC Hiring Team"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="subject-line" className="block text-slate-300 font-medium mb-1">
                  Subject Line
                </label>
                <input
                  id="subject-line"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message-body" className="block text-slate-300 font-medium mb-1">
                  Message Details
                </label>
                <textarea
                  id="message-body"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe the opportunity, role requirements, or technical inquiry..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Send Message to Suraj</span>
            </button>

            <div className="flex items-start gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                Note: This form opens your system's default email client. No backend server or automated inbox delivery is configured, and messages are sent directly from your email client.
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
