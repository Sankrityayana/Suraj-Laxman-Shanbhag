export interface DomainDetail {
  id: string;
  slug: string;
  name: string;
  shortTitle: string;
  tagline: string;
  iconName: string; // Lucide icon name string
  accentColor: string;
  overview: string;
  keyPillars: {
    title: string;
    description: string;
    items: string[];
  }[];
  architectureFlow?: {
    nodes: string[];
    description: string;
  };
  technologies: string[];
  projectsCount: number;
}

export const domainsData: Record<string, DomainDetail> = {
  "ai-ml": {
    id: "ai-ml",
    slug: "ai-ml",
    name: "AI/ML Engineering",
    shortTitle: "AI / ML",
    tagline: "Building intelligent agents, RAG knowledge systems, neural representations, and local LLM inference engines.",
    iconName: "BrainCircuit",
    accentColor: "#3b82f6", // Electric Blue
    overview: "Focusing on end-to-end artificial intelligence engineering—from transformer embeddings and vector retrieval pipelines to deep learning vision models and local LLM agent orchestration.",
    keyPillars: [
      {
        title: "Generative AI & RAG",
        description: "Designing semantic retrieval-augmented generation architectures that ground LLMs on domain knowledge.",
        items: ["Chunking & Strategy", "Sentence Transformers", "FAISS & ChromaDB", "Prompt Engineering", "Context Window Optimization"]
      },
      {
        title: "LLMs & Local AI",
        description: "Deploying and evaluating open weights models on local hardware and edge clusters.",
        items: ["Ollama Runtime", "Llama 3 / Mistral", "GGUF Quantization", "Model Benchmarking", "Local API Wrappers"]
      },
      {
        title: "AI Agents & Autonomous Workflows",
        description: "Orchestrating multi-step autonomous tool use, agentic decision trees, and MCP protocols.",
        items: ["LangChain & LlamaIndex", "Model Context Protocol (MCP)", "Tool Calling & Schemas", "Stateful Reasoning Loops"]
      },
      {
        title: "Computer Vision & NLP",
        description: "Extracting structural signals from unstructured text corpora and visual video streams.",
        items: ["MediaPipe Keypoints", "OpenCV Image Pipelines", "Named Entity Recognition", "Text Classification", "Similarity Scoring"]
      }
    ],
    architectureFlow: {
      nodes: ["User Prompt", "Query Embedding (SentenceTransformers)", "Vector Index Search (FAISS/ChromaDB)", "Context Assembly & Re-ranking", "Local Model Inference (Ollama)", "Validated Output"],
      description: "Standard Domain RAG Execution Loop"
    },
    technologies: ["Python", "PyTorch", "Hugging Face", "Transformers", "Sentence Transformers", "LangChain", "LlamaIndex", "Ollama", "FAISS", "ChromaDB", "Scikit-learn", "NumPy", "OpenCV"],
    projectsCount: 4
  },
  "software-web": {
    id: "software-web",
    slug: "software-web",
    name: "Software & Web Development",
    shortTitle: "Software & Web",
    tagline: "Engineering responsive web interfaces, robust backend APIs, and modular full-stack systems.",
    iconName: "Code2",
    accentColor: "#10b981", // Emerald Green
    overview: "Crafting clean, accessible, performant software applications with modern JavaScript/TypeScript, React, Next.js, FastAPI, Node.js, and structured relational & document databases.",
    keyPillars: [
      {
        title: "Frontend Engineering",
        description: "Building responsive, dynamic, design-system-driven web interfaces with modern UI standards.",
        items: ["Next.js App Router", "React 19 & TypeScript", "Tailwind CSS & Vanilla CSS", "Framer Motion Animations", "Accessibility (WCAG)"]
      },
      {
        title: "Backend Services & REST APIs",
        description: "Architecting async web servers, structured schemas, authentication flows, and business logic.",
        items: ["FastAPI (Python)", "Node.js & Express", "RESTful Endpoint Design", "Pydantic & Zod Validation", "Middleware & Routing"]
      },
      {
        title: "Database Architecture",
        description: "Designing efficient data models for transactional integrity and rapid query execution.",
        items: ["PostgreSQL", "MongoDB Document Stores", "SQLite & SQLAlchemy", "Redis Caching", "Vector Stores Integration"]
      },
      {
        title: "DevOps & Cloud Delivery",
        description: "Automating builds, continuous deployment, and zero-downtime application hosting.",
        items: ["Git & GitHub Workflows", "Vercel Edge Platform", "Render Cloud Hosting", "Firebase Infrastructure", "Environment Management"]
      }
    ],
    architectureFlow: {
      nodes: ["Next.js Frontend Client", "TypeScript API Route Handler", "FastAPI / Node Server", "SQLAlchemy / Prisma ORM", "PostgreSQL / SQLite Database"],
      description: "Full-Stack End-to-End Application Pattern"
    },
    technologies: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "FastAPI", "Node.js", "Python", "HTML5/CSS3", "PostgreSQL", "SQLite", "MongoDB", "Redis", "Git", "Vercel"],
    projectsCount: 5
  },
  "data-science": {
    id: "data-science",
    slug: "data-science",
    name: "Data Science & Analytics",
    shortTitle: "Data Science",
    tagline: "Extracting actionable intelligence, statistically modeling trends, and engineering clean data pipelines.",
    iconName: "ChartNoAxesCombined",
    accentColor: "#8b5cf6", // Purple Accent
    overview: "Transforming raw structured and unstructured data into quantitative insights through exploratory analysis, statistical modeling, feature engineering, and clear visualizations.",
    keyPillars: [
      {
        title: "Data Pipeline & Cleaning",
        description: "Parsing, filtering, deduplicating, and normalizing complex datasets for downstream modeling.",
        items: ["Pandas DataFrames", "NumPy Matrix Operations", "Outlier Detection & Imputation", "Schema Enforcement", "ETL Processing"]
      },
      {
        title: "Exploratory Data Analysis (EDA)",
        description: "Discovering correlations, distribution anomalies, and feature importance in large corpora.",
        items: ["Statistical Distribution Tests", "Correlation Matrices", "Matplotlib & Seaborn Plots", "Interactive Dashboards", "Hypothesis Testing"]
      },
      {
        title: "Predictive Analytics & Forecasting",
        description: "Training mathematical models to forecast quantitative metrics like CTR and user behavior.",
        items: ["Gradient Boosting (XGBoost/LightGBM)", "Linear & Logistic Regression", "Evaluation Metrics (ROC-AUC, RMSE)", "Cross-Validation Pipelines"]
      },
      {
        title: "Feature Engineering & Scale",
        description: "Designing informative numerical representations and indexing high-scale datasets.",
        items: ["One-Hot & Target Encoding", "Standardization & Scaling", "100K+ Candidate Indexing", "Dimensionality Reduction (PCA)"]
      }
    ],
    architectureFlow: {
      nodes: ["Raw Data Source", "Preprocessing & Cleaning (Pandas)", "Feature Vectorization", "Scikit-Learn Model Training", "Metric Evaluation (Precision/Recall)", "Insight Visualization"],
      description: "Predictive Data Pipeline Architecture"
    },
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "Jupyter", "SQL", "Feature Engineering", "Predictive Analytics"],
    projectsCount: 3
  },
  "cybersecurity": {
    id: "cybersecurity",
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortTitle: "Cybersecurity",
    tagline: "Understanding security fundamentals, threat modeling, API defense, and AI-assisted application security.",
    iconName: "ShieldCheck",
    accentColor: "#f59e0b", // Amber / Shield Gold
    overview: "Studying defensive cybersecurity concepts, secure coding standards, application threat modeling, GRC principles, and AI-driven security automation.",
    keyPillars: [
      {
        title: "Application Security & Secure Coding",
        description: "Building defense-in-depth mechanisms to mitigate vulnerabilities like SQLi, XSS, and CSRF.",
        items: ["OWASP Top 10 Awareness", "Input Sanitization & Escaping", "Authentication & JWT", "Role-Based Access Control (RBAC)"]
      },
      {
        title: "Threat Modeling & Risk Assessment",
        description: "Deconstructing systems into assets, attack surfaces, threat vectors, and mitigations.",
        items: ["STRIDE Methodology", "Attack Surface Analysis", "Least Privilege Principle", "Defense in Depth Architecture"]
      },
      {
        title: "AI Security & GRC Foundations",
        description: "Exploring governance frameworks, data privacy, and security risks unique to LLM applications.",
        items: ["Prompt Injection Defense", "Model Data Leakage Mitigation", "GRC Control Frameworks", "AI Ethics & Accountability"]
      },
      {
        title: "API & Infrastructure Security",
        description: "Securing web services, enforcing TLS encryption, and configuring CORS and security headers.",
        items: ["Rate Limiting & Throttling", "Header Protection (CSP, HSTS)", "Environment Secrets Handling", "Audit Logging"]
      }
    ],
    architectureFlow: {
      nodes: ["Untrusted Input", "WAF / CORS Middleware", "Input Validation & Sanitization", "Auth Token Verification (JWT)", "Encrypted Storage (TLS/BCrypt)", "Audit Log Event"],
      description: "Secure Request Verification Pipeline"
    },
    technologies: ["Python", "Java", "Linux Security Basics", "OWASP Top 10", "JWT Auth", "HTTPS/TLS Basics", "Threat Modeling", "GRC Awareness", "Git Security"],
    projectsCount: 2
  }
};
