export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string[];
  domain: "ai-ml" | "software-web" | "data-science" | "cybersecurity";
  category: "AI/ML" | "Software & Web" | "Data Science" | "Cybersecurity" | "GenAI & RAG";
  status: "Completed" | "In Active Development" | "Research Prototype";
  featured: boolean;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  architecture?: {
    components: string[];
    description: string;
  };
  keyFeatures: string[];
  githubUrl?: string;
  demoUrl?: string;
  verifiedNotes?: string;
}

export const projectsData: Project[] = [
  {
    id: "hiring-radar",
    slug: "hiring-radar",
    title: "Hiring Radar / TalentLens AI",
    tagline: "Semantic candidate ranking platform indexing 100K+ resume profiles with vector embeddings.",
    description: "An AI-powered recruitment evaluation platform designed to perform deep semantic profile matching beyond keyword searches, leveraging Sentence-Transformers, FAISS vector indexing, FastAPI, and Next.js.",
    longDescription: [
      "Traditional applicant tracking systems rely on brittle keyword string matching, often discarding qualified candidates who use non-standard terminology. Hiring Radar (TalentLens AI) solves this by building high-dimensional vector representations of candidate experience profiles and job descriptions.",
      "The backend is powered by FastAPI and Sentence-Transformers (`all-MiniLM-L6-v2`), producing dense 384-dimensional embeddings stored in a optimized FAISS index. Tested on a benchmark 100K candidate profile dataset, the system achieves sub-50ms cosine similarity query latencies.",
      "The frontend features a sleek Next.js & React interface allowing recruiters to adjust semantic weights (skills vs. experience vs. education), run natural language queries, and view detailed candidate evaluation score breakdowns."
    ],
    domain: "ai-ml",
    category: "GenAI & RAG",
    status: "Completed",
    featured: true,
    technologies: ["Python", "FastAPI", "Sentence-Transformers", "FAISS", "Next.js", "React", "TypeScript", "Tailwind CSS", "NumPy", "Pandas"],
    metrics: [
      { label: "Indexed Profiles", value: "100,000+" },
      { label: "Search Latency", value: "< 50ms" },
      { label: "Vector Dimension", value: "384 dense" }
    ],
    architecture: {
      components: [
        "100K Profile Corpus",
        "FastAPI Ingestion Pipeline",
        "Sentence-Transformers Model",
        "FAISS Vector Index",
        "Next.js Ranking Workbench UI"
      ],
      description: "FastAPI ingests and vectorizes resume text into FAISS; Next.js frontend queries the index via async REST API and computes fine-grained ranking score breakdowns."
    },
    keyFeatures: [
      "Semantic profile matching using dense transformer embeddings",
      "FAISS similarity search over 100,000 candidate profiles",
      "Dynamic criteria weighting (Skill Relevance, Experience Depth, Domain Fit)",
      "Interactive evaluation matrix and candidate comparison view",
      "FastAPI asynchronous REST service backend with Pydantic validation"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    verifiedNotes: "Validated on benchmark 100K synthetic & anonymized candidate profile dataset."
  },
  {
    id: "social-story-studio",
    slug: "social-story-studio",
    title: "Social Story Studio",
    tagline: "Generative AI storyboarding platform for personalized social learning scenarios.",
    description: "Full-stack web application designed to generate visual social story scenarios with AI image context, avatar personalization, and structured scenario workflows.",
    longDescription: [
      "Social Story Studio helps educators and caregivers build structured visual narratives for individuals learning social interaction scripts. It combines a Next.js single-page storyboarding interface with a Python FastAPI backend connected to SQLite and SQLAlchemy.",
      "Users can define key social scenarios (e.g. 'Asking for Help in Class'), customize character avatar traits, and trigger contextual scene generation. Pydantic models validate narrative step schemas before persistent storage."
    ],
    domain: "software-web",
    category: "Software & Web",
    status: "Completed",
    featured: true,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "SQLite", "SQLAlchemy", "Pydantic", "Python"],
    metrics: [
      { label: "Backend API", value: "FastAPI / Async" },
      { label: "Data Layer", value: "SQLite + SQLAlchemy" },
      { label: "State Sync", value: "Real-time step sync" }
    ],
    architecture: {
      components: [
        "Next.js App Router UI",
        "FastAPI REST Endpoints",
        "Pydantic Validation Schemas",
        "SQLite Database Engine",
        "SQLAlchemy ORM"
      ],
      description: "Next.js frontend manages interactive storyboard drag-and-drop state; FastAPI processes scene logic and persists avatar/story data in SQLite."
    },
    keyFeatures: [
      "Interactive step-by-step storyboard creation UI",
      "Avatar customization and visual trait selection",
      "Context-aware story template library",
      "FastAPI backend with structured SQLAlchemy ORM database layer",
      "Exportable story cards formatted for mobile and print"
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "rag-qa-chatbot",
    slug: "rag-qa-chatbot",
    title: "RAG Technical Knowledge Engine",
    tagline: "Offline-capable retrieval-augmented QA chatbot running local Ollama LLMs and ChromaDB.",
    description: "An isolated RAG pipeline built for querying internal technical documentation without sending sensitive data to external API endpoints.",
    longDescription: [
      "Designed for data privacy and offline capability, this technical QA system ingests Markdown, PDF, and code files into a local ChromaDB vector store. It utilizes LangChain for document chunking and prompt template construction, feeding context to a locally hosted Llama 3 model via Ollama.",
      "The UI displays full citation source documents, chunk similarity scores, and execution timing metrics for every query response."
    ],
    domain: "ai-ml",
    category: "GenAI & RAG",
    status: "Completed",
    featured: true,
    technologies: ["Python", "Ollama", "LangChain", "ChromaDB", "Llama 3", "Next.js", "TypeScript", "FastAPI"],
    metrics: [
      { label: "Privacy Level", value: "100% Local / Air-gapped" },
      { label: "Vector DB", value: "ChromaDB" },
      { label: "Base LLM", value: "Llama 3 8B (Ollama)" }
    ],
    keyFeatures: [
      "100% offline local inference via Ollama runtime",
      "Semantic chunking and embedding generation",
      "ChromaDB persistent vector index with metadata filtering",
      "Source citation transparency with inline document references",
      "Responsive web interface with streaming token response rendering"
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "ads-ctr-forecasting",
    slug: "ads-ctr-forecasting",
    title: "Ads Click-Through Rate (CTR) Forecasting",
    tagline: "Predictive machine learning pipeline modeling digital advertisement interaction probability.",
    description: "A data science project featuring exploratory analysis, feature engineering, and model evaluation to forecast ad click-through rates.",
    longDescription: [
      "This predictive analytics project analyzes multi-attribute ad impression logs to forecast user click probability. Features include historical user engagement metrics, time of day, position placement, and ad content categories.",
      "Using Pandas and Scikit-learn, raw data was cleaned, categorical features were target-encoded, and numerical attributes standardized. A Gradient Boosting model achieved strong ROC-AUC validation performance."
    ],
    domain: "data-science",
    category: "Data Science",
    status: "Completed",
    featured: false,
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    metrics: [
      { label: "Evaluation Metric", value: "ROC-AUC & Log Loss" },
      { label: "Pipeline", value: "Scikit-Learn ColumnTransformer" },
      { label: "Data Scope", value: "Impression Interaction Logs" }
    ],
    keyFeatures: [
      "Rigorous exploratory data analysis (EDA) identifying feature skew and correlation",
      "Automated missing value handling and outlier treatment",
      "Target encoding for high-cardinality categorical variables",
      "Model comparison across Logistic Regression, Random Forest, and Gradient Boosting",
      "Feature importance evaluation for advertising optimization"
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "feature-flag-system",
    slug: "feature-flag-system",
    title: "Feature Flag Management System",
    tagline: "Lightweight rule-based feature flag service with audit history and low-latency evaluation.",
    description: "A software architecture prototype for dynamically enabling/disabling application features across microservices without re-deploying codebase builds.",
    longDescription: [
      "Built with Node.js, Express, TypeScript, and SQLite, this system provides a centralized dashboard to toggle feature flags, set percentage rollouts, and target specific user segments.",
      "Designed with client-side caching mechanisms to evaluate flag state in under 5ms, minimizing overhead on target web services."
    ],
    domain: "software-web",
    category: "Software & Web",
    status: "Completed",
    featured: false,
    technologies: ["Node.js", "Express", "TypeScript", "SQLite", "React", "Tailwind CSS"],
    metrics: [
      { label: "Evaluation Time", value: "< 5ms" },
      { label: "Audit Tracking", value: "Full event log" }
    ],
    keyFeatures: [
      "Real-time feature flag toggle engine with percentage rollouts",
      "User segment and environment targeting (Dev, Staging, Prod)",
      "Audit log tracking configuration changes over time",
      "REST API client SDK with local in-memory evaluation cache",
      "Clean dashboard UI built with React and Tailwind"
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "multilang-support-bot",
    slug: "multilang-support-bot",
    title: "Multi-Language Customer Support Agent",
    tagline: "Intent-routing AI agent with automatic translation and contextual answer synthesis.",
    description: "An intelligent customer assistance service integrating natural language translation APIs and vector search for cross-lingual query resolution.",
    longDescription: [
      "This system handles customer queries in multiple languages by dynamically translating incoming messages into a core language format, retrieving relevant knowledge base articles, and synthesizing polite responses in the user's native language.",
      "Features fallback escalation pathways for complex or low-confidence queries."
    ],
    domain: "ai-ml",
    category: "AI/ML",
    status: "Completed",
    featured: false,
    technologies: ["Python", "FastAPI", "Hugging Face Transformers", "Sentence-Transformers", "FAISS", "React"],
    metrics: [
      { label: "Multi-lingual", value: "Auto Language Detect" },
      { label: "Confidence Routing", value: "Smart Escalation" }
    ],
    keyFeatures: [
      "Automatic language detection and translation pipeline",
      "Intent classification routing queries to specialized handling modules",
      "Knowledge retrieval using semantic vector search",
      "Confidence score evaluation to trigger human support escalation",
      "Web interface for customer chat and agent live monitoring"
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "yoga-posture-correction",
    slug: "yoga-posture-correction",
    title: "Yoga Posture Correction Vision Engine",
    tagline: "Computer vision application evaluating human pose keypoints for real-time form feedback.",
    description: "An interactive computer vision experiment utilizing OpenCV and MediaPipe to calculate skeletal joint angles and detect posture misalignment during physical exercise.",
    longDescription: [
      "Developed to explore real-time spatial keypoint estimation, this project captures camera frames, extracts 33 3D body landmark landmarks using MediaPipe Pose, and calculates Euclidean vectors between key joints (shoulders, elbows, knees, hips).",
      "The system compares measured angles against reference posture thresholds, rendering visual skeletal overlays and actionable corrections on screen."
    ],
    domain: "ai-ml",
    category: "AI/ML",
    status: "Research Prototype",
    featured: false,
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Matplotlib"],
    metrics: [
      { label: "Keypoint Extraction", value: "33 3D Landmarks" },
      { label: "Frame Rate", value: "30 FPS Real-time" }
    ],
    keyFeatures: [
      "Real-time 3D skeletal landmark extraction via MediaPipe Pose",
      "Geometric vector math computing key joint angles",
      "Threshold comparison against reference pose models",
      "Visual skeleton overlay with color-coded posture status",
      "Frame-by-frame diagnostic logger for post-session analysis"
    ],
    githubUrl: "https://github.com"
  }
];
