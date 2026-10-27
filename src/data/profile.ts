import { Education, Profile } from '../types/portfolio';

export const PROFILE_DATA: Profile = {
  fullName: 'Suraj Laxman Shanbhag',
  tagline: 'Entry-Level SOC & SecOps Candidate · Software Developer',
  location: 'Karwar, Karnataka, India',
  primaryTargetRoles: [
    'SOC Analyst',
    'SecOps Analyst',
    'Junior Cybersecurity Analyst',
  ],
  careerObjective:
    'Early-career cybersecurity candidate with a B.Tech in Artificial Intelligence and Machine Learning, developing practical skills in security operations, network traffic analysis, threat investigation, and security-focused software development.',
  summary: [
    'Graduated in 2026 with a B.Tech in Artificial Intelligence and Machine Learning from Presidency University, Bengaluru.',
    'Certified in the Google Cybersecurity Professional program, with foundational training in security frameworks, network defense, Linux/Windows operating systems, and SIEM monitoring principles.',
    'Hands-on experience developing typed backend services, RESTful APIs, and data retrieval systems using Python, FastAPI, TypeScript, and React.',
    'Focusing on entry-level security operations, log triage, traffic analysis, and applying programming to security-focused problem-solving.',
  ],
  email: 'shanbhagsuraj84@gmail.com',
  githubUrl: 'https://github.com/Sankrityayana',
  // NOTE: Unverified LinkedIn URL flagged for manual user confirmation
  linkedinUrl: 'https://linkedin.com/in/suraj-shanbhag',
  resumePdfPath: '/resume_suraj_shanbhag.pdf',
};

export const EDUCATION_DATA: Education = {
  degree: 'Bachelor of Technology (B.Tech)',
  specialization: 'Artificial Intelligence and Machine Learning',
  institution: 'Presidency University',
  location: 'Bengaluru, Karnataka, India',
  completionYear: '2026',
  relevanceToSecOps:
    'Rigorous coursework in computational logic, algorithms, operating systems, data engineering, and probability. Applied toward understanding telemetry data structures, statistical baseline anomalies, and automated script-based log parsing.',
};
