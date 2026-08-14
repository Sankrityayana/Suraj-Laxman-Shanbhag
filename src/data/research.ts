export interface ResearchItem {
  id: string;
  title: string;
  category: "Completed Investigation" | "Research in Progress" | "Technical Exploration";
  domain: string;
  status: "Completed" | "Active Research" | "Ongoing";
  period: string;
  abstract: string;
  methodology: string[];
  findings: string[];
  technologies: string[];
  githubUrl?: string;
  verifiedNotes?: string;
}

export const researchData: ResearchItem[] = [
  {
    id: "res-1",
    title: "Empirical Evaluation of Sentence Embeddings for Domain Resume Ranking",
    category: "Completed Investigation",
    domain: "AI/ML Engineering",
    status: "Completed",
    period: "2024",
    abstract: "A comparative evaluation of dense transformer embeddings (`all-MiniLM-L6-v2` vs. `bge-small-en-v1.5`) across 100K candidate resume profiles to quantify semantic match accuracy vs. vector index memory footprint.",
    methodology: [
      "Tokenized and chunked 100,000 resume text records into domain skill blocks",
      "Generated dense vector indexes in FAISS using L2 and Inner Product (Cosine) distance metrics",
      "Evaluated Precision@K and Mean Reciprocal Rank (MRR) against curated recruiters query benchmarks"
    ],
    findings: [
      "`all-MiniLM-L6-v2` provided optimal balance of 384-dim memory footprint and query speed under 50ms",
      "FAISS HNSW indexing outperformed flat IVF by 4.2x in query throughput with < 0.8% recall drop"
    ],
    technologies: ["Python", "Sentence-Transformers", "FAISS", "NumPy", "Pandas"],
    githubUrl: "https://github.com",
    verifiedNotes: "Benchmarked on synthetic & anonymized 100K profile dataset."
  },
  {
    id: "res-2",
    title: "Inference Performance of Local LLMs on High-Memory DGX Spark Clusters",
    category: "Research in Progress",
    domain: "AI/ML & Hardware",
    status: "Active Research",
    period: "2024 — Present",
    abstract: "Investigating tokens-per-second throughput and context retention of 8B to 70B parameter models running on 128 GB unified memory nodes via Ollama and vLLM backends.",
    methodology: [
      "Benchmarking quantized GGUF weights (Q4_K_M vs. Q8_0) across context window sizes (4K to 32K tokens)",
      "Measuring first-token latency (TTFT) and sustained generation throughput under concurrent user requests",
      "Analyzing VRAM allocation and CPU-GPU transfer bottlenecks in unified memory environments"
    ],
    findings: [
      "Initial tests indicate 128 GB memory allows running 32B models fully loaded in VRAM with zero disk swapping",
      "Detailed throughput matrix actively being compiled across Llama 3.1 and Qwen 2.5 checkpoints"
    ],
    technologies: ["DGX Spark Node", "128GB Memory", "Ollama", "vLLM", "GGUF Quantization", "Python"],
    verifiedNotes: "Active experimentation on 128 GB memory cluster hardware."
  },
  {
    id: "res-3",
    title: "Resilience and Latency Overhead of Feature Flag Middleware in Asynchronous Microservices",
    category: "Completed Investigation",
    domain: "Software Engineering",
    status: "Completed",
    period: "2023",
    abstract: "Analyzing client-side caching strategies vs. direct database queries for evaluating real-time feature flag rules under simulated high-concurrency Node.js and FastAPI traffic.",
    methodology: [
      "Constructed isolated benchmark HTTP clients firing 10,000 concurrent requests per second",
      "Tested flag evaluation paths: Direct SQLite lookup, In-Memory LRU Cache, and Redis pub/sub sync",
      "Measured tail latency percentiles (p50, p95, p99) and CPU load"
    ],
    findings: [
      "In-memory local caching reduced flag evaluation latency from 18ms to < 2.1ms (p99)",
      "Background polling intervals of 500ms maintained strict configuration consistency without impacting request loops"
    ],
    technologies: ["Node.js", "Express", "FastAPI", "SQLite", "Redis", "TypeScript"]
  }
];
