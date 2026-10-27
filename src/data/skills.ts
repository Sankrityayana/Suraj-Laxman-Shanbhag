import { SkillCategory } from '../types/portfolio';

export const SKILL_CATEGORIES_DATA: SkillCategory[] = [
  {
    id: 'secops',
    title: 'Security Operations & Fundamentals',
    description:
      'Core competencies developed through the Google Cybersecurity Professional program and practical security coursework.',
    skills: [
      {
        name: 'Security Operations Center (SOC) Workflows',
        context: 'Alert triage lifecycle, severity classification, and incident ticketing procedures.',
        tier: 'Coursework & Labs',
      },
      {
        name: 'SIEM & Log Management Concepts',
        context: 'Event ingestion, log source normalization, and security event correlation principles.',
        tier: 'Coursework & Labs',
      },
      {
        name: 'Security Log Analysis & Triage',
        context: 'Log inspection, anomaly identification, and event correlation principles.',
        tier: 'Coursework & Labs',
      },
      {
        name: 'Incident Response Principles',
        context: 'Preparation, identification, containment, eradication, recovery, and lessons learned (NIST SP 800-61).',
        tier: 'Coursework & Labs',
      },
      {
        name: 'OWASP Top 10 Web Vulnerabilities',
        context: 'Understanding injection attacks, broken authentication, and security misconfigurations.',
        tier: 'Coursework & Labs',
      },
      {
        name: 'Security Governance & Compliance Basics',
        context: 'Foundations of CIA triad, least privilege, and role-based access control (RBAC).',
        tier: 'Fundamental Knowledge',
      },
    ],
  },
  {
    id: 'systems',
    title: 'Operating Systems & Networking',
    description:
      'Understanding system internals, host commands, and communication protocols.',
    skills: [
      {
        name: 'Linux Command-Line Utilities',
        context: 'Navigation, process inspection (ps, top), file permissions (chmod, chown), and text search (grep, awk).',
        tier: 'Demonstrated in Projects',
      },
      {
        name: 'Windows Operating System Fundamentals',
        context: 'Windows CLI, Event Viewer navigation, system services, and registry basics.',
        tier: 'Coursework & Labs',
      },
      {
        name: 'TCP/IP & Protocol Suite',
        context: 'Handshakes, addressing, subnetting, DNS resolution, and HTTP/HTTPS transaction flows.',
        tier: 'Coursework & Labs',
      },
      {
        name: 'Bash Scripting Basics',
        context: 'Automating directory inspection, batch text processing, and administrative scripting.',
        tier: 'Demonstrated in Projects',
      },
    ],
  },
  {
    id: 'software',
    title: 'Programming & Web Engineering',
    description:
      'Demonstrated software engineering capability building typed APIs, data pipelines, and responsive interfaces.',
    skills: [
      {
        name: 'Python',
        context: 'Data processing, backend API engineering, vector embeddings, and automation scripts.',
        tier: 'Demonstrated in Projects',
      },
      {
        name: 'FastAPI & RESTful APIs',
        context: 'Asynchronous API routing, Pydantic schema validation, and typed HTTP contracts.',
        tier: 'Demonstrated in Projects',
      },
      {
        name: 'TypeScript & JavaScript',
        context: 'Strictly typed client applications, modern ESNext features, and component state management.',
        tier: 'Demonstrated in Projects',
      },
      {
        name: 'React',
        context: 'Component architecture, custom hooks, accessible UI design, and responsive layout systems.',
        tier: 'Demonstrated in Projects',
      },
      {
        name: 'SQL & SQLite',
        context: 'Relational data modeling, table schemas, parameterized queries, and SQLAlchemy ORM integration.',
        tier: 'Demonstrated in Projects',
      },
      {
        name: 'Git & GitHub',
        context: 'Version control workflows, commit discipline, branch management, and repository documentation.',
        tier: 'Demonstrated in Projects',
      },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI/ML & Information Retrieval',
    description:
      'Undergraduate foundation from B.Tech in Artificial Intelligence & Machine Learning applied to practical systems.',
    skills: [
      {
        name: 'Sentence Transformers & Embeddings',
        context: 'Generating dense vector representations of text for semantic similarity ranking.',
        tier: 'Demonstrated in Projects',
      },
      {
        name: 'Vector Search (FAISS & ChromaDB)',
        context: 'Nearest-neighbor vector search, index building, and similarity distance calculations.',
        tier: 'Demonstrated in Projects',
      },
      {
        name: 'RAG Architecture Principles',
        context: 'Document chunking, prompt context augmentation, and factual grounding patterns.',
        tier: 'Demonstrated in Projects',
      },
      {
        name: 'Data Analysis (Pandas & NumPy)',
        context: 'Telemetry dataset loading, tabular feature filtering, and statistical analysis.',
        tier: 'Demonstrated in Projects',
      },
    ],
  },
];
