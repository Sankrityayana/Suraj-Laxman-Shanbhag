export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    period: string;
  };
  domains: string[];
  bio: {
    short: string;
    summary: string;
    story: string[];
    philosophy: string[];
    learnLoop: string[];
  };
  currentPursuits: {
    building: string[];
    learning: string[];
    researching: string[];
    experimenting: string[];
  };
  hardwareSpecs: {
    cluster: string;
    memory: string;
    note: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const profileData: ProfileData = {
  name: "Suraj Laxman Shanbhag",
  title: "AI/ML Engineer & Systems Builder",
  tagline: "Building, experimenting, researching, and exploring technology across AI, software, data, and cybersecurity.",
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Technology",
    institution: "Presidency University",
    location: "Bangalore, Karnataka, India",
    period: "2021 — 2025"
  },
  domains: [
    "AI/ML Engineering",
    "Software & Web Development",
    "Data Science & Analytics",
    "Cybersecurity"
  ],
  bio: {
    short: "Systems-focused technical builder crafting intelligent applications, modern full-stack platforms, scalable data workflows, and secure software architectures.",
    summary: "Graduated with a B.Tech in Computer Science and Technology from Presidency University, Bangalore. I focus on bridging theoretical computer science with high-performance practical software—ranging from domain-specific RAG pipelines and semantic ranking systems to modern web applications and security threat modeling.",
    story: [
      "My technical journey began with deep curiosity about how computer systems turn raw instructions into intelligence. From early exploration of software algorithms to hands-on experimentation with neural networks, data structures, and threat vectors, I built a foundation rooted in problem-solving.",
      "During my B.Tech studies at Presidency University, I gravitated toward the intersection of Artificial Intelligence, web development, data analysis, and software security. Rather than specializing too early in a single silo, I realized that true engineering mastery comes from understanding the full stack—from data ingestion and model inference to responsive UI design and application defense.",
      "Today, I spend my time designing AI agents, deploying local LLM inference models via Ollama and LangChain, engineering vector search architectures with FAISS and ChromaDB, and crafting high-utility web platforms using Next.js, React, TypeScript, and FastAPI."
    ],
    philosophy: [
      "Understand the fundamentals before abstracting them away.",
      "Build realistic, practical solutions over decorative novelties.",
      "Data quality and schema architecture determine system success.",
      "Security and defense must be integrated into software design from day one.",
      "Iterate constantly through hands-on experimentation and rigorous testing."
    ],
    learnLoop: [
      "Discover core challenge or technical gap",
      "Deconstruct documentation and academic specs",
      "Build prototype or isolated sandbox",
      "Benchmark, stress test, and uncover edge cases",
      "Synthesize insights into durable reusable components"
    ]
  },
  currentPursuits: {
    building: [
      "TalentLens AI / Hiring Radar: Semantic candidate ranking platform evaluating 100K+ profiles using Sentence-Transformers and FAISS",
      "Social Story Studio: Generative AI scenario creation engine with custom image context and avatar personalization",
      "Local RAG Knowledge Systems: High-efficiency context injection pipelines using Ollama and ChromaDB"
    ],
    learning: [
      "Model Context Protocol (MCP) server integration for autonomous agent tool use",
      "Advanced RAG techniques: Graph RAG, multi-query expansion, and re-ranking models",
      "Application security controls, OWASP Top 10 mitigation, and GRC framework fundamentals"
    ],
    researching: [
      "Empirical evaluation of embedding models for domain-specific semantic match precision",
      "Inference optimization for local LLMs running on constrained edge vs. multi-GPU setups",
      "Feature flag management pattern resilience under high-concurrency Node/FastAPI workloads"
    ],
    experimenting: [
      "DGX Spark environment with 128 GB unified memory for high-throughput model fine-tuning",
      "Computer vision posture correction real-time keypoint extraction using OpenCV and MediaPipe",
      "Multi-agent task decomposition strategies using LangChain and LlamaIndex"
    ]
  },
  hardwareSpecs: {
    cluster: "DGX Spark Compute Node",
    memory: "128 GB Unified Memory",
    note: "High-memory compute pipeline configured for localized LLM evaluation, embeddings generation, and large dataset indexing."
  },
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "surajshanbhag.dev@gmail.com"
  }
};
