export interface Certification {
  id: string;
  title: string;
  issuer: "Meta" | "IBM" | "Coursera" | "Presidency University";
  issueDate?: string;
  grade?: string;
  verifiedScore?: string;
  skills: string[];
  description: string;
  credentialUrl?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export const educationData: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science and Technology",
  institution: "Presidency University",
  location: "Bangalore, Karnataka, India",
  period: "2021 — 2025",
  highlights: [
    "Core focus on Artificial Intelligence, Machine Learning, Data Structures, Web Engineering, and Software Security",
    "Hands-on project work in RAG architectures, computer vision keypoints, and full-stack software development",
    "Continuous practical self-directed learning across cloud platforms, local AI models, and open-source stacks"
  ]
};

export const certificationsData: Certification[] = [
  {
    id: "meta-js",
    title: "Programming with JavaScript",
    issuer: "Meta",
    grade: "95.33%",
    verifiedScore: "95.33%",
    skills: ["JavaScript (ES6+)", "Asynchronous Programming", "DOM Manipulation", "OOP & Functional Concepts"],
    description: "In-depth course on JavaScript fundamentals, object-oriented concepts, DOM interaction, JSON parsing, and test-driven development."
  },
  {
    id: "meta-version-control",
    title: "Version Control",
    issuer: "Meta",
    grade: "88.12%",
    verifiedScore: "88.12%",
    skills: ["Git", "GitHub", "Branching & Merging", "Workflow Management"],
    description: "Hands-on version control workflows, repository management, resolving merge conflicts, and team collaboration on GitHub."
  },
  {
    id: "ibm-gen-ai",
    title: "Develop Generative AI Applications",
    issuer: "IBM",
    grade: "95.23%",
    verifiedScore: "95.23%",
    skills: ["Generative AI", "LLM APIs", "Prompt Engineering", "Python GenAI Apps"],
    description: "Practical engineering of Generative AI applications, model selection, prompt construction, and API integration."
  },
  {
    id: "ibm-rag-apps",
    title: "Build RAG Applications",
    issuer: "IBM",
    grade: "85.71%",
    verifiedScore: "85.71%",
    skills: ["Retrieval-Augmented Generation", "LangChain", "Vector Indexing", "Context Window Engineering"],
    description: "Building production RAG architecture, document parsing, embedding generation, vector store retrieval, and response synthesis."
  },
  {
    id: "ibm-vector-db",
    title: "Vector Databases for RAG",
    issuer: "IBM",
    grade: "100%",
    verifiedScore: "100% Perfect Score",
    skills: ["Vector Databases", "Embeddings", "FAISS", "Similarity Metrics", "Indexing"],
    description: "Advanced study of vector representation, distance metrics (Cosine, Euclidean), indexing algorithms, and high-performance vector search."
  }
];

export const activeLearningPillars = [
  {
    title: "Agentic AI & MCP Protocols",
    description: "Exploring tool-calling agents, stateful multi-agent workflows, and the Model Context Protocol for system integration."
  },
  {
    title: "Local LLM Optimization",
    description: "Benchmarking local inference performance on 128 GB memory cluster hardware using Ollama and GGUF quantization."
  },
  {
    title: "Application Defense & Threat Modeling",
    description: "Deepening knowledge of secure software design, OWASP mitigation patterns, and API security controls."
  }
];
