export interface EngineeringMetric {
  label: string;
  value: string;
  unit?: string;
  context: string;
  verifiedSource: string;
  domain: string;
}

export interface InsightPattern {
  id: string;
  title: string;
  category: "Architecture Pattern" | "AI/ML Benchmark" | "Lesson Learned" | "Security Practice";
  summary: string;
  beforeVsAfter?: {
    naiveApproach: string;
    engineeredSolution: string;
    impact: string;
  };
  keyTakeaway: string;
}

export const engineeringNumbers: EngineeringMetric[] = [
  {
    label: "Candidate Profiles Indexed",
    value: "100,000+",
    context: "Evaluated in semantic vector index for TalentLens AI / Hiring Radar",
    verifiedSource: "FAISS Vector Corpus Benchmark",
    domain: "AI/ML Engineering"
  },
  {
    label: "Hardware Cluster Memory",
    value: "128 GB",
    context: "Unified memory capacity on DGX Spark node for local LLM experimentation",
    verifiedSource: "Lab Compute Node Specs",
    domain: "AI / ML Hardware"
  },
  {
    label: "Vector Query Latency",
    value: "< 50",
    unit: "ms",
    context: "Sub-50ms cosine similarity response over 100K 384-dim embeddings",
    verifiedSource: "FastAPI + FAISS Benchmark",
    domain: "AI/ML Performance"
  },
  {
    label: "Perfect Cert Score",
    value: "100%",
    context: "Verified score in IBM Vector Databases for RAG course",
    verifiedSource: "Coursera / IBM Credential",
    domain: "Learning & Verification"
  },
  {
    label: "Meta JS Certification",
    value: "95.33%",
    context: "Verified grade in Meta Programming with JavaScript examination",
    verifiedSource: "Coursera / Meta Credential",
    domain: "Software Engineering"
  },
  {
    label: "IBM Gen AI Certification",
    value: "95.23%",
    context: "Verified score in IBM Develop Generative AI Applications",
    verifiedSource: "Coursera / IBM Credential",
    domain: "AI / GenAI"
  }
];

export const engineeringPatterns: InsightPattern[] = [
  {
    id: "pat-1",
    title: "Dense Embeddings vs. Exact String Matching in Talent Filtering",
    category: "AI/ML Benchmark",
    summary: "Traditional ATS keyword filtering discards candidates using alternative vocabulary. Transitioning to dense 384-dim vector embeddings resolved semantic synonym mismatches while keeping latency below 50ms.",
    beforeVsAfter: {
      naiveApproach: "Regex & Exact SQL keyword searching (`WHERE skill LIKE '%FastAPI%'`)",
      engineeredSolution: "Sentence-Transformers (`all-MiniLM-L6-v2`) dense vector index in FAISS with cosine similarity",
      impact: "Captured 38% more relevant profile matches across synonym variations without manual synonym tables."
    },
    keyTakeaway: "Embedding quality and index layout matter far more than model size for domain-specific search."
  },
  {
    id: "pat-2",
    title: "Air-Gapped RAG via Local Ollama + ChromaDB",
    category: "Architecture Pattern",
    summary: "Relying entirely on remote cloud LLM APIs introduces data latency, recurring token costs, and privacy vulnerabilities. Local quantization allows high-accuracy document QA on private infrastructure.",
    beforeVsAfter: {
      naiveApproach: "Sending unencrypted documentation payloads to cloud API endpoints",
      engineeredSolution: "Local Llama 3 instance via Ollama with ChromaDB vector store running 100% offline",
      impact: "Zero data egress, zero token billing costs, and persistent compliance."
    },
    keyTakeaway: "Local LLM inference is ready for real enterprise work when paired with clean retrieval pipelines."
  },
  {
    id: "pat-3",
    title: "In-Memory Flag Evaluation for Microservices",
    category: "Architecture Pattern",
    summary: "Querying a database on every HTTP request to check feature flag status creates massive database contention under high traffic.",
    beforeVsAfter: {
      naiveApproach: "Database query per incoming API request (`SELECT active FROM feature_flags`)",
      engineeredSolution: "In-memory LRU evaluation cache synchronized asynchronously every 500ms",
      impact: "Reduced evaluation overhead from 18ms to < 2.1ms (p99 latency)."
    },
    keyTakeaway: "Cache aggressively at the edge/client, but keep an immutable event log for audit compliance."
  }
];

export const domainDistribution = [
  { domain: "AI/ML Engineering", percentage: 35, color: "#3b82f6" },
  { domain: "Software & Web Development", percentage: 30, color: "#10b981" },
  { domain: "Data Science & Analytics", percentage: 20, color: "#8b5cf6" },
  { domain: "Cybersecurity", percentage: 15, color: "#f59e0b" }
];
