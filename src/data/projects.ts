import { Project } from '../types/portfolio';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'talentlens-ai',
    slug: 'talentlens-ai',
    title: 'TalentLens AI / Hiring Radar',
    tagline: 'Semantic candidate retrieval and skill-matching engine built with FastAPI and Sentence Transformers.',
    category: 'ai-ml',
    status: 'Completed Prototype',
    problemStatement:
      'Traditional keyword-based applicant screening often fails to capture contextual skills, synonyms, and related technical competencies across unstructured resumes.',
    significance:
      'Demonstrates end-to-end design of a semantic retrieval pipeline: generating dense vector representations, computing similarity metrics in Python, and serving results through a typed API.',
    myContribution:
      'Architected the FastAPI backend service, integrated the Sentence Transformers model, implemented vector cosine similarity ranking routines, and built the interactive React dashboard.',
    technologies: [
      'Python',
      'FastAPI',
      'Uvicorn',
      'Sentence Transformers',
      'all-MiniLM-L6-v2',
      'React',
      'TypeScript',
      'REST APIs',
    ],
    architectureOverview:
      'The React client dispatches candidate queries to FastAPI endpoints. The service tokenizes and encodes profiles using all-MiniLM-L6-v2 into 384-dimensional embeddings, executes vector similarity comparisons against candidate stores, and returns ranked results with confidence scores.',
    keyDecisions: [
      'Chose all-MiniLM-L6-v2 for its optimal balance of fast inference speed (~15-20ms) and strong semantic sentence embedding quality.',
      'Decoupled inference endpoints from the UI state to ensure clean API contracts and future horizontal scalability.',
      'Enforced strict Pydantic models for request bodies and response schemas to eliminate runtime serialization errors.',
    ],
    dataSourcesAndProvenance:
      'Tested against benchmark candidate records to evaluate ranking consistency and semantic match relevance.',
    limitations: [
      'Operates as an engineering prototype for semantic search validation; not deployed as a live commercial enterprise recruitment tool.',
      'Embedding generation is executed on CPU inference, which is sufficient for prototype scale but would require GPU clustering for massive candidate repositories.',
    ],
    githubUrl: 'https://github.com/Sankrityayana',
  },
  {
    id: 'rag-knowledge-base',
    slug: 'rag-knowledge-base',
    title: 'Enterprise RAG Knowledge Architecture',
    tagline: 'Grounded document question-answering architecture using vector indexing and contextual retrieval.',
    category: 'ai-ml',
    status: 'Technical Proof of Concept',
    problemStatement:
      'General-purpose large language models lack access to proprietary technical documentation and frequently produce hallucinated answers when queried on internal technical procedures.',
    significance:
      'Shows how information retrieval systems bridge unstructured technical knowledge and synthesis: document chunking, vector indexing, similarity thresholding, and prompt grounding.',
    myContribution:
      'Implemented the document ingestion pipeline, configured token-aware text chunking with sliding overlap, initialized local FAISS vector stores, and orchestrated context-injected prompt assembly.',
    technologies: [
      'Python',
      'LangChain',
      'FAISS',
      'ChromaDB',
      'Hugging Face Embeddings',
      'Vector Search',
      'FastAPI',
    ],
    architectureOverview:
      'Technical source files (PDF/Markdown) are split into semantic chunks with 50-token overlap. Dense embeddings are generated and stored in a FAISS index. When a user submits a technical query, top-k semantically relevant chunks are retrieved and prepended to the prompt context to ensure factual grounding.',
    keyDecisions: [
      'Used FAISS for high-speed local indexing without requiring cloud database infrastructure or subscription overhead.',
      'Configured recursive character chunking to preserve paragraph coherence and code block continuity.',
      'Included citation metadata tracking so every generated response references its source document chunk.',
    ],
    limitations: [
      'Developed as a technical proof of concept for testing vector retrieval accuracy and chunking strategies.',
      'Requires pre-indexed documents; real-time dynamic document update streaming is not yet implemented.',
    ],
    githubUrl: 'https://github.com/Sankrityayana',
  },
  {
    id: 'social-story-studio',
    slug: 'social-story-studio',
    title: 'Social Story Studio',
    tagline: 'Structured narrative workspace and full-stack API service built with FastAPI, SQLite, and React.',
    category: 'software',
    status: 'Prototype Application',
    problemStatement:
      'Digital storytellers and content creators often juggle fragmented notes, draft scripts, and media metadata across disparate text documents without structured relational persistence.',
    significance:
      'Demonstrates clean relational database modeling, schema migrations, typed RESTful endpoint design, and full-stack TypeScript state synchronization.',
    myContribution:
      'Designed the relational SQLite schema using SQLAlchemy models, wrote CRUD endpoints with Pydantic validation, and developed the component-driven editing interface in React with Tailwind CSS.',
    technologies: [
      'FastAPI',
      'Python',
      'SQLite',
      'SQLAlchemy',
      'Pydantic',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    architectureOverview:
      'The React frontend communicates via a typed REST client to FastAPI. Requests are validated through Pydantic v2 schemas and persisted into SQLite via SQLAlchemy ORM sessions, ensuring ACID guarantees and consistent relational integrity.',
    keyDecisions: [
      'Used SQLite for zero-maintenance local relational persistence with rapid startup and zero external database daemon requirements.',
      'Standardized on Pydantic models for both incoming payloads and outgoing response serialization.',
      'Implemented optimistic UI state updates for seamless editing flow.',
    ],
    limitations: [
      'Engineered as a single-user local prototype for testing full-stack CRUD patterns.',
      'Does not currently include cloud-hosted multi-tenant authentication or real-time collaborative editing.',
    ],
    githubUrl: 'https://github.com/Sankrityayana',
  },
];
