"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Mail, Copy, Check, Send, Sparkles, User, MessageSquare, Briefcase, Code2, HelpCircle } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [selectedPurpose, setSelectedPurpose] = useState<string>("Hire Me");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectScope: "Standard Build",
    timeline: "Flexible"
  });

  const purposeOptions = [
    "Hire Me",
    "Collaborate",
    "Have an Idea",
    "Discuss AI/ML",
    "Research",
    "Just Say Hello"
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Direct Info & Copy Email */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-100">
              Start a Conversation
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Have an AI engineering challenge, full-stack project idea, data research query, or potential opportunity? I&apos;m always open to discussing technology and building high-utility software systems.
            </p>
          </div>

          {/* Email Copy Card */}
          <div className="p-4 rounded-lg bg-slate-950/90 border border-slate-800 space-y-3">
            <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Email Address</div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-sky-400 font-semibold truncate">
                {profileData.socialLinks.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Current Focus & Availability */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Current Focus</span>
              <span className="font-mono text-slate-200">AI Agents & Full-Stack Apps</span>
            </div>
            <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Availability</span>
              <span className="font-mono text-emerald-400 font-medium">Open to Opportunities</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Preferred Location</span>
              <span className="font-mono text-slate-200">Bangalore / Remote</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Purpose Selector & Form */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
          {/* Purpose Selector */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-semibold text-slate-300 uppercase">
              What Brings You Here?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {purposeOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedPurpose(opt)}
                  className={`px-3 py-2 rounded-lg text-xs font-mono text-center transition-all ${
                    selectedPurpose === opt
                      ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                      : "bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="p-8 text-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">Message Draft Prepared</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you, {formData.name || "there"}! Your message for &quot;{selectedPurpose}&quot; has been formatted. You can also reach out directly to {profileData.socialLinks.email}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-700 transition-colors"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={`[${selectedPurpose}] Engineering Inquiry...`}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Message / Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, question, or technical collaboration idea..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-medium text-xs font-mono tracking-wider uppercase transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry ({selectedPurpose})</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
