export type ProjectStatus =
  | 'Completed Prototype'
  | 'Technical Proof of Concept'
  | 'Prototype Application';

export type ProjectCategory = 'all' | 'software' | 'ai-ml';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'software' | 'ai-ml';
  status: ProjectStatus;
  problemStatement: string;
  significance: string;
  myContribution: string;
  technologies: string[];
  architectureOverview: string;
  keyDecisions: string[];
  dataSourcesAndProvenance?: string;
  limitations: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export type CredentialStatus = 'Verified Completed' | 'Active Coursework' | 'In Progress';

export interface Credential {
  id: string;
  title: string;
  issuingOrganization: string;
  status: CredentialStatus;
  issueYear?: string;
  credentialUrl?: string;
  competencies: string[];
  isPrimary?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  completionYear: string;
  specialization: string;
  relevanceToSecOps: string;
}

export interface SkillItem {
  name: string;
  context: string;
  tier: 'Demonstrated in Projects' | 'Coursework & Labs' | 'Fundamental Knowledge';
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Profile {
  fullName: string;
  tagline: string;
  location: string;
  primaryTargetRoles: string[];
  summary: string[];
  email: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumePdfPath: string;
  careerObjective: string;
}
