export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  type: "Education & Degree" | "Engineering Lead Project" | "Systems & Full-Stack" | "AI Research & Lab";
  domain: "AI/ML Engineering" | "Software & Web Development" | "Data Science & Analytics" | "Cybersecurity";
  organization: string;
  location: string;
  description: string;
  keyWork: string[];
  technologies: string[];
}

export const experienceTimelineData: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2024 — Present",
    title: "AI/ML Systems & RAG Pipeline Engineer",
    type: "Engineering Lead Project",
    domain: "AI/ML Engineering",
    organization: "Independent Systems Lab",
    location: "Bangalore, India",
    description: "Architected high-dimensional semantic search and retrieval systems, including the Hiring Radar (TalentLens AI) candidate ranking platform.",
    keyWork: [
      "Engineered vector retrieval backend indexing 100K+ resume candidate profiles using Sentence-Transformers and FAISS",
      "Achieved sub-50ms cosine similarity query latencies for natural language recruitment queries",
      "Developed local offline RAG documentation engine powered by Ollama (Llama 3) and ChromaDB"
    ],
    technologies: ["Python", "FastAPI", "Sentence-Transformers", "FAISS", "ChromaDB", "Ollama", "Next.js", "TypeScript"]
  },
  {
    id: "exp-2",
    period: "2023 — 2024",
    title: "Full-Stack Web & Software Developer",
    type: "Systems & Full-Stack",
    domain: "Software & Web Development",
    organization: "Full-Stack Development Projects",
    location: "Bangalore, India",
    description: "Designed and delivered web platforms emphasizing modular architecture, clean UI engineering, and structured backend API design.",
    keyWork: [
      "Built Social Story Studio visual storyboarding app using Next.js, React, Tailwind, and FastAPI with SQLite/SQLAlchemy",
      "Created lightweight Feature Flag Management service with real-time toggle rules and audit history",
      "Implemented responsive visual design systems adhering to modern UI accessibility guidelines"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Node.js", "SQLite", "Pydantic"]
  },
  {
    id: "exp-3",
    period: "2023",
    title: "Data Science & Predictive Analytics Developer",
    type: "AI Research & Lab",
    domain: "Data Science & Analytics",
    organization: "Applied Analytics Lab",
    location: "Bangalore, India",
    description: "Performed exploratory analysis, feature extraction, and predictive modeling on digital advertising interaction datasets.",
    keyWork: [
      "Engineered data pipelines for cleaning, target encoding, and normalizing multi-attribute impression logs",
      "Trained Gradient Boosting and Random Forest algorithms to forecast ad click-through rates",
      "Constructed correlation matrices and statistical distribution plots using Pandas, Matplotlib, and Seaborn"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter"]
  },
  {
    id: "exp-4",
    period: "2022 — Present",
    title: "Application Security & Threat Modeling Explorer",
    type: "AI Research & Lab",
    domain: "Cybersecurity",
    organization: "Security & Defense Lab",
    location: "Bangalore, India",
    description: "Explored defensive security principles, application threat modeling (STRIDE), secure coding standards, and AI security risks.",
    keyWork: [
      "Analyzed web service attack surfaces and OWASP Top 10 vulnerabilities (XSS, SQLi, CSRF, JWT flaws)",
      "Studied defensive controls for prompt injection mitigation and LLM data leakage prevention",
      "Evaluated GRC governance frameworks and security automation patterns in REST backends"
    ],
    technologies: ["Python", "Java", "OWASP Top 10", "JWT Auth", "STRIDE Threat Modeling", "Linux Security"]
  },
  {
    id: "exp-5",
    period: "2021 — 2025",
    title: "B.Tech in Computer Science and Technology",
    type: "Education & Degree",
    domain: "Software & Web Development",
    organization: "Presidency University",
    location: "Bangalore, India",
    description: "Completed undergraduate degree in Computer Science, building deep foundations in algorithms, system design, artificial intelligence, database systems, and software engineering.",
    keyWork: [
      "Graduated with comprehensive coursework across software engineering, AI, computer networks, and databases",
      "Achieved high certifications in Meta JavaScript (95.33%), IBM GenAI (95.23%), and IBM Vector DBs (100%)",
      "Collaborated on peer technical initiatives and practical coding projects throughout degree"
    ],
    technologies: ["Computer Science", "Algorithms", "Data Structures", "Web Engineering", "Database Systems"]
  }
];
