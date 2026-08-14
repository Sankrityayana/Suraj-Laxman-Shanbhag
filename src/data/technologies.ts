export interface Technology {
  name: string;
  category: 
    | "Programming Languages"
    | "AI / ML"
    | "Generative AI & RAG"
    | "Frontend"
    | "Backend"
    | "Data Science & Analytics"
    | "Databases & Storage"
    | "Cloud & Deployment"
    | "Developer Environment"
    | "AI Developer Tools"
    | "Cybersecurity"
    | "APIs & Integrations"
    | "Frameworks & Libraries"
    | "Platforms & Infrastructure";
  status: "Core" | "Experienced" | "Working With" | "Learning" | "Exploring";
  description: string;
  projectsUsedIn: string[];
}

export const technologiesData: Technology[] = [
  // Programming Languages
  {
    name: "Python",
    category: "Programming Languages",
    status: "Core",
    description: "Primary language for AI/ML pipelines, FastAPI services, data engineering, and automation scripts.",
    projectsUsedIn: ["Hiring Radar", "RAG QA Chatbot", "Ads CTR Forecasting", "Yoga Posture Correction"]
  },
  {
    name: "TypeScript",
    category: "Programming Languages",
    status: "Core",
    description: "Type-safe modern web application logic, client state management, and serverless route functions.",
    projectsUsedIn: ["Hiring Radar", "Social Story Studio", "Feature Flag System"]
  },
  {
    name: "JavaScript (ES6+)",
    category: "Programming Languages",
    status: "Core",
    description: "Core DOM interactions, asynchronous event loops, and web platform APIs.",
    projectsUsedIn: ["Social Story Studio", "Feature Flag System"]
  },
  {
    name: "Java",
    category: "Programming Languages",
    status: "Experienced",
    description: "Object-oriented programming, data structures, and core software engineering concepts.",
    projectsUsedIn: ["Academic Projects"]
  },
  {
    name: "HTML5 / CSS3",
    category: "Programming Languages",
    status: "Core",
    description: "Semantic document structuring, modern CSS layouts (Grid/Flexbox), and accessible web styling.",
    projectsUsedIn: ["All Web Projects"]
  },

  // AI / ML
  {
    name: "PyTorch",
    category: "AI / ML",
    status: "Working With",
    description: "Neural network architecture experimentation, tensor operations, and model evaluation.",
    projectsUsedIn: ["Hiring Radar", "AI Experiments"]
  },
  {
    name: "Hugging Face Transformers",
    category: "AI / ML",
    status: "Experienced",
    description: "Pre-trained model loading, tokenization, fine-tuning, and inference pipelines.",
    projectsUsedIn: ["Multi-Lang Support Agent", "NLP Benchmarks"]
  },
  {
    name: "Sentence Transformers",
    category: "AI / ML",
    status: "Core",
    description: "Generating dense vector embeddings for semantic document search and similarity ranking.",
    projectsUsedIn: ["Hiring Radar", "Multi-Lang Support Agent"]
  },
  {
    name: "Scikit-Learn",
    category: "AI / ML",
    status: "Core",
    description: "Supervised & unsupervised ML algorithms, preprocessing pipelines, and performance metrics.",
    projectsUsedIn: ["Ads CTR Forecasting", "Data Benchmarks"]
  },
  {
    name: "OpenCV",
    category: "AI / ML",
    status: "Working With",
    description: "Real-time frame processing, image matrix manipulations, and computer vision overlays.",
    projectsUsedIn: ["Yoga Posture Correction"]
  },

  // Generative AI & RAG
  {
    name: "LangChain",
    category: "Generative AI & RAG",
    status: "Core",
    description: "Document loaders, semantic chunking, prompt template engineering, and chain execution.",
    projectsUsedIn: ["RAG QA Chatbot", "Knowledge Engine"]
  },
  {
    name: "LlamaIndex",
    category: "Generative AI & RAG",
    status: "Working With",
    description: "Data indexing strategies and query engine interfaces for structured knowledge retrieval.",
    projectsUsedIn: ["RAG Experiments"]
  },
  {
    name: "Ollama",
    category: "Generative AI & RAG",
    status: "Core",
    description: "Local execution runtime for open-weight LLMs (Llama 3, Mistral, Qwen) in private environments.",
    projectsUsedIn: ["RAG QA Chatbot", "Local AI Lab"]
  },
  {
    name: "FAISS",
    category: "Generative AI & RAG",
    status: "Core",
    description: "High-performance vector similarity search library optimized for dense embedding indexing.",
    projectsUsedIn: ["Hiring Radar (100K candidates)", "Multi-Lang Support Agent"]
  },
  {
    name: "ChromaDB",
    category: "Generative AI & RAG",
    status: "Core",
    description: "Developer-friendly persistent vector database for document embeddings and metadata retrieval.",
    projectsUsedIn: ["RAG QA Chatbot"]
  },
  {
    name: "MCP (Model Context Protocol)",
    category: "Generative AI & RAG",
    status: "Learning",
    description: "Standardized open protocol connecting AI assistants to local & remote tool capabilities.",
    projectsUsedIn: ["Agent Tooling Prototypes"]
  },

  // Frontend
  {
    name: "React 19",
    category: "Frontend",
    status: "Core",
    description: "Component architecture, hooks, state management, and declarative UI rendering.",
    projectsUsedIn: ["Hiring Radar", "Social Story Studio", "Feature Flag UI"]
  },
  {
    name: "Next.js (App Router)",
    category: "Frontend",
    status: "Core",
    description: "Server components, client hydration, route handlers, metadata, and production web deployment.",
    projectsUsedIn: ["Personal Digital Universe", "Hiring Radar", "Social Story Studio"]
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    status: "Core",
    description: "Utility-first design systems, responsive layout rules, dark mode tokens, and custom styling.",
    projectsUsedIn: ["Personal Digital Universe", "Social Story Studio", "Feature Flag UI"]
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    status: "Experienced",
    description: "Fluid micro-interactions, layout transitions, drawer navigation, and accessible UI motion.",
    projectsUsedIn: ["Personal Digital Universe"]
  },

  // Backend
  {
    name: "FastAPI",
    category: "Backend",
    status: "Core",
    description: "Asynchronous Python web framework, automatic OpenAPI documentation, and Pydantic validation.",
    projectsUsedIn: ["Hiring Radar", "Social Story Studio", "Multi-Lang Support Agent"]
  },
  {
    name: "Node.js & Express",
    category: "Backend",
    status: "Experienced",
    description: "Server-side JavaScript runtime for light microservices and RESTful API endpoints.",
    projectsUsedIn: ["Feature Flag System"]
  },
  {
    name: "Pydantic & SQLAlchemy",
    category: "Backend",
    status: "Core",
    description: "Data validation, schema enforcement, and ORM mapping for relational database interactions.",
    projectsUsedIn: ["Social Story Studio", "FastAPI Services"]
  },

  // Data Science & Analytics
  {
    name: "Pandas",
    category: "Data Science & Analytics",
    status: "Core",
    description: "Data manipulation, tabular transformation, exploratory analysis, and missing value cleaning.",
    projectsUsedIn: ["Hiring Radar Dataset Analysis", "Ads CTR Forecasting"]
  },
  {
    name: "NumPy",
    category: "Data Science & Analytics",
    status: "Core",
    description: "Multidimensional array computation, matrix linear algebra, and vector numerical operations.",
    projectsUsedIn: ["Vector Search Utilities", "Ads CTR Forecasting"]
  },
  {
    name: "Matplotlib & Seaborn",
    category: "Data Science & Analytics",
    status: "Experienced",
    description: "Statistical visual plotting, feature correlation heatmaps, and distribution graphs.",
    projectsUsedIn: ["Ads CTR Forecasting", "EDA Notebooks"]
  },

  // Databases & Storage
  {
    name: "SQLite",
    category: "Databases & Storage",
    status: "Core",
    description: "Embedded SQL database engine for zero-configuration persistent application storage.",
    projectsUsedIn: ["Social Story Studio", "Feature Flag System"]
  },
  {
    name: "PostgreSQL",
    category: "Databases & Storage",
    status: "Working With",
    description: "Relational database server for transactional integrity, complex joins, and JSON querying.",
    projectsUsedIn: ["Full-stack Prototypes"]
  },
  {
    name: "MongoDB",
    category: "Databases & Storage",
    status: "Working With",
    description: "NoSQL document store for unstructured payload storage and dynamic schema flexibility.",
    projectsUsedIn: ["Web Prototypes"]
  },
  {
    name: "Redis",
    category: "Databases & Storage",
    status: "Exploring",
    description: "In-memory key-value store for session management and fast API caching layers.",
    projectsUsedIn: ["Backend Caching Research"]
  },

  // Developer Environment & Tools
  {
    name: "Git & GitHub",
    category: "Developer Environment",
    status: "Core",
    description: "Source code version control, branching strategies, code reviews, and project collaboration.",
    projectsUsedIn: ["All Projects"]
  },
  {
    name: "VS Code",
    category: "Developer Environment",
    status: "Core",
    description: "Primary IDE environment with customized extensions, linting setup, and debugging configuration.",
    projectsUsedIn: ["Daily Workflow"]
  },

  // AI Developer Tools
  {
    name: "Claude Code / Codex / Copilot",
    category: "AI Developer Tools",
    status: "Core",
    description: "AI-assisted code generation, inline code navigation, refactoring, and test writing.",
    projectsUsedIn: ["Daily Workflow"]
  },
  {
    name: "Antigravity Agentic IDE",
    category: "AI Developer Tools",
    status: "Core",
    description: "Advanced multi-agent coding platform for task planning, codebase research, and automated implementation.",
    projectsUsedIn: ["Digital Universe Engineering"]
  },

  // Cloud & Deployment
  {
    name: "Vercel",
    category: "Cloud & Deployment",
    status: "Core",
    description: "Frontend hosting, serverless edge functions, instant preview deployments, and custom domain setup.",
    projectsUsedIn: ["Personal Digital Universe"]
  },
  {
    name: "Render",
    category: "Cloud & Deployment",
    status: "Experienced",
    description: "Cloud application hosting for FastAPI backends, web workers, and managed PostgreSQL databases.",
    projectsUsedIn: ["Backend API Deployment"]
  },
  {
    name: "Firebase",
    category: "Cloud & Deployment",
    status: "Working With",
    description: "Application backend services, authentication providers, and client Firestore databases.",
    projectsUsedIn: ["Web Experiments"]
  },

  // Platforms & Infrastructure
  {
    name: "DGX Spark Memory Cluster",
    category: "Platforms & Infrastructure",
    status: "Working With",
    description: "High-capacity compute infrastructure featuring 128 GB unified memory for large model experiments.",
    projectsUsedIn: ["Local Model Inference & Evaluation"]
  },

  // Cybersecurity
  {
    name: "Threat Modeling (STRIDE)",
    category: "Cybersecurity",
    status: "Learning",
    description: "Systematic identification of security threats across system boundaries and data stores.",
    projectsUsedIn: ["Security Audits"]
  },
  {
    name: "OWASP Web Security",
    category: "Cybersecurity",
    status: "Working With",
    description: "Understanding application vulnerabilities (XSS, SQLi, CSRF, broken access control) and defensive coding.",
    projectsUsedIn: ["API & Web Projects"]
  }
];
