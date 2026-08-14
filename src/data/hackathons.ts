export interface HackathonItem {
  id: string;
  title: string;
  event: string;
  date: string;
  domain: string;
  projectBuilt: string;
  summary: string;
  keyOutcome: string;
  technologies: string[];
  githubUrl?: string;
  detailsUrl?: string;
}

export const hackathonsData: HackathonItem[] = [
  {
    id: "hack-1",
    title: "Semantic Candidate Matching Challenge",
    event: "AI Systems Engineering Challenge",
    date: "2024",
    domain: "AI/ML Engineering",
    projectBuilt: "Hiring Radar / TalentLens AI",
    summary: "Built a high-performance vector search engine evaluating natural language job prompts against a 100K resume candidate dataset in under 50ms.",
    keyOutcome: "Successfully deployed sub-50ms vector query pipeline using FAISS and Sentence-Transformers.",
    technologies: ["Python", "FastAPI", "Sentence-Transformers", "FAISS", "Next.js"],
    githubUrl: "https://github.com"
  },
  {
    id: "hack-2",
    title: "Generative UX Hackathon",
    event: "Web & AI Product Buildathon",
    date: "2024",
    domain: "Software & Web Development",
    projectBuilt: "Social Story Studio",
    summary: "Created a full-stack visual storyboarding tool for personalized social learning scenarios using Next.js and FastAPI with custom avatar generation.",
    keyOutcome: "Featured prototype demonstrating context-aware avatar image rendering and structured Pydantic scene schemas.",
    technologies: ["Next.js", "React", "FastAPI", "SQLite", "SQLAlchemy"],
    githubUrl: "https://github.com"
  },
  {
    id: "hack-3",
    title: "Local AI & RAG Sprint",
    event: "Privacy-First AI Hackathon",
    date: "2023",
    domain: "AI/ML & Security",
    projectBuilt: "Local Offline RAG QA Chatbot",
    summary: "Architected a zero-external-api documentation QA system running Ollama (Llama 3) and ChromaDB locally on developer hardware.",
    keyOutcome: "100% air-gapped performance with inline document chunk citation transparency.",
    technologies: ["Python", "Ollama", "LangChain", "ChromaDB", "Llama 3"],
    githubUrl: "https://github.com"
  }
];
