import React from 'react';
import { ShieldCheck, GraduationCap, ArrowRight, Code2, Layers, CheckCircle2, Mail, FileText, ExternalLink, Terminal } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { PROFILE_DATA, EDUCATION_DATA } from '../../data/profile';
import { CREDENTIALS_DATA } from '../../data/credentials';
import { SKILL_CATEGORIES_DATA } from '../../data/skills';
import { StatusBadge } from '../common/StatusBadge';

interface CorePillarsProps {
  navigate: (path: string) => void;
}

export const CorePillars: React.FC<CorePillarsProps> = ({ navigate }) => {
  const verifiedCert = CREDENTIALS_DATA.find((c) => c.status === 'Verified Completed');
  const ongoingLearning = CREDENTIALS_DATA.filter((c) => c.status !== 'Verified Completed');

  return (
    <div className="space-y-16 py-8">
      {/* 1. About Me & Background */}
      <section className="p-8 rounded-2xl bg-[#0c121e] border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
          <Terminal className="w-4 h-4" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Bridging Software Engineering & Security Operations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed pt-2">
          <p>
            I am a 2026 graduate with a Bachelor of Technology in Artificial Intelligence and Machine Learning from Presidency University, Bengaluru. Having built full-stack applications with databases, authentication, and REST APIs, I developed a strong curiosity for how systems communicate, where security controls fail, and how attacks are detected.
          </p>
          <p>
            Through the Google Cybersecurity Professional program and hands-on coursework, I have developed a structured approach to SOC alert triage, SIEM log analysis, network protocol fundamentals, and incident response lifecycles. My goal is to join a Security Operations Center as an entry-level analyst where my programming skills can automate routine tasks and enhance detection workflows.
          </p>
        </div>
      </section>

      {/* 2. Verified Credentials & Education */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              Qualifications
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Education & Certification
            </h2>
          </div>
          <button
            onClick={() => navigate('/credentials')}
            className="text-xs font-medium text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Full Credentials Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Degree Card */}
          <div className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-cyan-400">Completed 2026</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-sm text-cyan-400 font-medium mt-0.5">
                  {EDUCATION_DATA.specialization}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {EDUCATION_DATA.institution} · {EDUCATION_DATA.location}
                </p>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rigorous four-year engineering curriculum covering algorithms, operating systems, data engineering, and statistical modeling.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400">
              Presidency University · Bengaluru, Karnataka
            </div>
          </div>

          {/* Certificate Card */}
          {verifiedCert && (
            <div className="p-6 rounded-2xl bg-[#0c121e] border border-emerald-500/30 space-y-4 flex flex-col justify-between shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Verified Completed</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {verifiedCert.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Issued by {verifiedCert.issuingOrganization} ({verifiedCert.issueYear})
                  </p>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {verifiedCert.competencies.slice(0, 3).map((comp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Security Operations & Triage</span>
                <button
                  onClick={() => navigate('/credentials')}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  View Details →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Featured Technical Projects */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              Code & Systems
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Featured Technical Projects
            </h2>
          </div>
          <button
            onClick={() => navigate('/projects')}
            className="text-xs font-medium text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>All Projects Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    {project.category === 'ai-ml' ? 'AI / ML' : 'Software'}
                  </span>
                  <StatusBadge status={project.status} variant="cyan" />
                </div>

                <h3 className="text-base font-bold text-white hover:text-cyan-400 transition-colors">
                  <button
                    onClick={() => navigate(`/projects/${project.slug}`)}
                    className="text-left"
                  >
                    {project.title}
                  </button>
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1 text-[11px] font-mono text-slate-400">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 text-slate-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="w-full text-center py-2 px-3 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:text-cyan-400 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Core Skills Matrix at a Glance */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              Demonstrated Capabilities
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Technical Skillset
            </h2>
          </div>
          <button
            onClick={() => navigate('/skills')}
            className="text-xs font-medium text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Detailed Skills Breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              className="p-5 rounded-xl bg-[#0c121e] border border-slate-800 space-y-3"
            >
              <h3 className="text-sm font-bold text-white border-b border-slate-800/80 pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 text-xs leading-tight"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Direct Contact Banner */}
      <section className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-[#0e1726] border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
            Let's Connect
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Looking for a capable, entry-level SOC Analyst?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Based in Karwar, Karnataka, India. Open to in-office and hybrid opportunities in Bengaluru, Karnataka, as well as remote roles.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={`mailto:${PROFILE_DATA.email}?subject=SOC%20Analyst%20Role%20-%20Suraj%20Shanbhag`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me Directly</span>
          </a>

          <button
            onClick={() => navigate('/resume')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-medium transition-colors"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>View Resume</span>
          </button>
        </div>
      </section>
    </div>
  );
};
