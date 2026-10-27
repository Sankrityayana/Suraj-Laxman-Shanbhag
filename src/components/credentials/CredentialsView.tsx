import React from 'react';
import { Award, GraduationCap, ExternalLink, CheckCircle2, BookOpen, ShieldCheck } from 'lucide-react';
import { CREDENTIALS_DATA } from '../../data/credentials';
import { EDUCATION_DATA } from '../../data/profile';
import { PageHeader } from '../layout/PageHeader';
import { StatusBadge } from '../common/StatusBadge';

interface CredentialsViewProps {
  navigate: (path: string) => void;
}

export const CredentialsView: React.FC<CredentialsViewProps> = () => {
  const verifiedCredentials = CREDENTIALS_DATA.filter((c) => c.status === 'Verified Completed');
  const ongoingLearning = CREDENTIALS_DATA.filter((c) => c.status !== 'Verified Completed');

  return (
    <div className="space-y-12">
      <PageHeader
        badgeText="Academic & Professional Qualifications"
        title="Education & Credentials"
        description="Formal degree completion and verified cybersecurity qualifications, with complete transparency distinguishing completed credentials from active coursework."
      />

      {/* Formal Degree Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-cyan-400" aria-hidden="true" />
          <h2 className="text-xl font-bold tracking-tight text-slate-100">
            Formal Higher Education
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Completed Degree
              </span>
              <h3 className="text-xl font-bold text-slate-100">
                {EDUCATION_DATA.degree} in {EDUCATION_DATA.specialization}
              </h3>
              <p className="text-sm font-medium text-slate-300 mt-0.5">
                {EDUCATION_DATA.institution} · {EDUCATION_DATA.location}
              </p>
            </div>
            <StatusBadge status={`Class of ${EDUCATION_DATA.completionYear}`} variant="cyan" />
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <span className="font-semibold text-slate-200 block">Relevance to Security Operations:</span>
            <p className="leading-relaxed text-slate-400">
              {EDUCATION_DATA.relevanceToSecOps}
            </p>
          </div>
        </div>
      </section>

      {/* Verified Cybersecurity Certification Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-400" aria-hidden="true" />
          <h2 className="text-xl font-bold tracking-tight text-slate-100">
            Verified Professional Certification
          </h2>
        </div>

        <div className="space-y-6">
          {verifiedCredentials.map((cred) => (
            <div
              key={cred.id}
              className="p-6 rounded-2xl bg-[#0c121e] border border-emerald-500/30 shadow-lg space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                    <span>Issuing Organization: {cred.issuingOrganization}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Official Professional Program · Completed {cred.issueYear}
                  </p>
                </div>
                <StatusBadge status={cred.status} variant="emerald" />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Core Competencies & Curriculum Mastered:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {cred.competencies.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {cred.credentialUrl && (
                <div className="pt-2">
                  <a
                    href={cred.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Inspect Official Program Specification</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ongoing & Complementary Learning */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" aria-hidden="true" />
          <h2 className="text-xl font-bold tracking-tight text-slate-100">
            Ongoing Study & Practical Learning
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 max-w-3xl">
          Active technical courses and hands-on lab training currently in progress to deepen specialization in network security, web controls, and host auditing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ongoingLearning.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-[#0c121e] border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-400">
                    {item.issuingOrganization}
                  </span>
                  <StatusBadge status={item.status} variant="slate" />
                </div>
                <h3 className="text-base font-bold text-slate-200">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/60">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Syllabus Focus:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {item.competencies.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-cyan-400 font-mono">·</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
