import { Credential } from '../types/portfolio';

export const CREDENTIALS_DATA: Credential[] = [
  {
    id: 'google-cybersecurity',
    title: 'Google Cybersecurity Professional Certificate',
    issuingOrganization: 'Google',
    status: 'Verified Completed',
    issueYear: '2026',
    isPrimary: true,
    credentialUrl: 'https://www.coursera.org/professional-certificates/google-cybersecurity',
    competencies: [
      'Security Operations Center (SOC) workflows & alert lifecycle',
      'Network defense architectures & packet inspection concepts',
      'SIEM log management and security event identification',
      'Linux CLI navigation, system permissions, and shell utilities',
      'SQL data filtering and security investigation queries',
      'Incident response frameworks (NIST / CISA baseline standards)',
      'Security controls, access management, and threat landscapes',
    ],
  },
  {
    id: 'owasp-top-10',
    title: 'OWASP Top 10 Security Specialization',
    issuingOrganization: 'Infosec',
    status: 'Active Coursework',
    competencies: [
      'Injection vulnerabilities (SQLi, command injection)',
      'Broken access control & cryptographic failures',
      'Security misconfigurations and defensive mitigation patterns',
    ],
  },
  {
    id: 'tryhackme-learning',
    title: 'TryHackMe Practical Security Foundations',
    issuingOrganization: 'TryHackMe',
    status: 'In Progress',
    competencies: [
      'Pre-Security pathway & networking fundamentals',
      'Windows command-line & event viewer exploration',
      'Linux core commands and file permission auditing',
      'SOC Level 1 pathway exercises and log inspection modules',
    ],
  },
  {
    id: 'ibm-genai-rag',
    title: 'Generative AI & Vector Retrieval Concepts',
    issuingOrganization: 'IBM',
    status: 'Verified Completed',
    competencies: [
      'Vector databases for semantic information retrieval',
      'Retrieval-Augmented Generation (RAG) architecture fundamentals',
      'Embeddings generation and document chunking strategies',
    ],
  },
];
