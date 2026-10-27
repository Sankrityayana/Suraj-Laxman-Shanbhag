# Suraj Laxman Shanbhag — Professional Portfolio (Revised Factual Implementation Plan)

A production-grade, multi-page professional portfolio website engineered for Suraj Laxman Shanbhag, strategically positioning his B.Tech AI/ML background and hands-on software development experience toward entry-level Cybersecurity, SOC Analyst, and SecOps opportunities, built on 100% verified facts with zero simulated findings or artificial metrics.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following revisions have been incorporated directly from your feedback and clarification answers:

- **Confirmed Verified Credential**: **Google Cybersecurity Professional Certificate** (Issuing Organization: Google) is the sole verified credential displayed in the verified credentials section. All other coursework (Google Network Security, OWASP Top 10, Meta, IBM) will be cataloged strictly under "Ongoing & Complementary Learning" without claiming verified completion.
- **Project Exclusion**: **AI-Based Network Attack Forecasting from Network Traffic Data has been completely removed** per your explicit instruction ("i dont want this to be added"). It will not appear anywhere on the website.
- **Zero Hallucinated Security Lab Findings**: The website will **not publish any unverified lab investigations** (no fabricated brute-force timelines, DNS tunneling, beaconing intervals, or sudo audits). The underlying TypeScript data structures for lab reports will exist for future updates, but the published live interface will strictly feature completed, verifiable content to maintain absolute recruiter trust.
- **Verified Education**: B.Tech in Artificial Intelligence and Machine Learning, Presidency University, Bengaluru (completed in 2026). No invented GPA, rank, or specific dates.
- **Contact & Profile Strategy**: Clean, working contact view displaying your Bengaluru location, an interactive email contact card (`pokemastersuraj66@gmail.com` with one-click copy and direct mail client launcher), and centralized configuration constants in `src/data/profile.ts` for your exact GitHub and LinkedIn handles.
- **Interactive Resume**: A clean, ATS-formatted browser-rendered resume on `/resume` showing your verified education, Google Cybersecurity credential, technical skills, and candidate projects, with a clean download hook ready for your actual PDF file.

---

## 1. Overview & Core Concept

### What It Does
An authentic, fast, and accessible digital portfolio that presents Suraj Laxman Shanbhag's qualifications, technical capabilities, and analytical mindset to recruiters, SOC managers, and engineering teams. It bridges his formal education in AI/ML (Presidency University, 2026) with his dedicated trajectory into Security Operations (SIEM fundamentals, log analysis, network security, and scripting).

### Target Audience & Persona
- **SOC Managers & Lead Analysts**: Seeking fresh talent with structured analytical thinking, solid system fundamentals (Linux/Windows, networking, Python), and the Google Cybersecurity foundation.
- **Technical Recruiters & Talent Acquisition**: Looking for verified credentials (Google Cybersecurity), clear graduation status (B.Tech AIML 2026), and clean contact channels in Bengaluru or remote.
- **Engineering Teams**: Evaluating his software development fundamentals (Python, TypeScript, React, FastAPI, REST APIs, Git) and practical AI/ML literacy.

### Key Value
- **100% Evidence-Based Integrity**: Zero fabricated metrics, zero unverified lab claims, zero fake production deployments.
- **Dual-Domain Strength**: Demonstrates how software engineering and machine learning principles enhance security operations (log automation, data parsing, detection logic) rather than diluting focus.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Recruiter Overview (< 60 seconds)**:
   - Lands on Home -> immediate professional positioning: *Suraj Laxman Shanbhag · Entry-Level SOC / SecOps Analyst & Software Developer · Bengaluru, India*.
   - Reads a concise executive summary highlighting his B.Tech AI/ML foundation and verified Google Cybersecurity qualification.
   - Core technical capability grid: Security Operations & Fundamentals, Systems & Networking, Software Development, AI/ML.
   - Quick CTA to view the interactive resume or initiate contact.
2. **Project Inspection Flow**:
   - Navigates to `/projects` -> views curated software and AI projects (TalentLens AI, RAG Knowledge Retrieval, Social Story Studio).
   - Each project clearly states its truthful status (`Completed Prototype`, `Technical Proof of Concept`), technologies used, architecture workflow, and explicit limitations.
   - Individual detail view with full technical reasoning.
3. **Credentials & Education Flow**:
   - Navigates to `/credentials` -> inspects verified B.Tech degree (Presidency University, 2026) and official Google Cybersecurity Professional Certificate, alongside an honest list of active technical learning areas.
4. **Interactive Resume Flow**:
   - Navigates to `/resume` -> inspects a formatted, high-contrast, ATS-friendly digital resume.

### Visual Identity & Theme Tokens
Adheres strictly to the **Universal Frontend Design Constitution** and **60-30-10 Color Discipline**:
- **60% Dominant Neutral Canvas**: Deep cyber background (`#090d16` canvas with subtle slate tone `#0f172a`).
- **30% Structural Surfaces**: Clean dark slate cards (`#111827` / `#162032`) with crisp 1px hairline borders (`border-slate-800`), standard container padding ($\ge 16\text{px}$), and nested radius math ($r_{\text{inner}} = r_{\text{outer}} - \text{padding}$).
- **10% High-Intent Accent Budget**: High-contrast, restrained emerald (`#10b981`) for security/verified indicators and cyan (`#06b6d4`) for primary action highlights and active navigation states.
- **Typography**:
  - Display / Headings: `Plus Jakarta Sans` with tight tracking (`tracking-tight`) and balanced line wrapping (`text-wrap: balance`).
  - Body Prose: `Plus Jakarta Sans` (15px–16px, 1.6 line-height, high contrast against dark background with dark mode optical compensation).
  - Code & Telemetry: Monospace (`font-mono tabular-nums`) for technical commands, ports, protocols, and tool configs.
- **Zero-Pill Discipline**: All metadata (dates, categories, tools, locations) rendered as clean unboxed text with subtle typographic separators (`·`, `/`), never floating badge sandwiches or multi-colored candy pills.

### Top Bar Contract
Adheres strictly to the one-row, three-zone header contract:
$$\text{[Suraj Laxman Shanbhag]} \quad\text{—}\quad \text{[Overview · Projects · Skills · Credentials · Resume]} \quad\text{—}\quad \text{[Contact]}$$
- Zone 1: Single unadorned wordmark (`whitespace-nowrap shrink-0`).
- Zone 2: 5 single-line navigation links with subtle underline/cyan active state.
- Zone 3: 1 primary action button (`Contact`).

---

## 3. Key Product Decisions & Trade-Offs

### Decision 1: Repository-Native Architecture & Routing
- **Repository Audit**:
  - Current dependencies: React 19.0.1, Vite 8.3.0, Tailwind CSS v4 (`@tailwindcss/vite` 4.3.3, `@import "tailwindcss";`), `lucide-react` 0.546.0, `motion` 12.23.24.
  - Dev dependencies: TypeScript 7.0.2, TSX 4.21.0, Express 4.21.2.
- **Routing Approach**:
  - Implement a dedicated, lightweight client-side URL route manager using browser History API (`/`, `/projects`, `/projects/:id`, `/skills`, `/credentials`, `/resume`, `/contact`).
  - Supports direct deep-linking, back/forward browser navigation, and clean URL states without adding third-party router version mismatches with React 19.
- **Why**: Delivers a genuine multi-page user experience with shareable URLs while remaining completely lightweight, fast, and free of dependency conflicts.

### Decision 2: Complete Removal of Unverified Lab Reports & Forecast Project
- **Approach**:
  - Completely exclude the Network Attack Forecasting project from all views and shortlists.
  - Do not render simulated or hypothetical security lab write-ups. The navigation will present verified content: Overview, Projects, Skills, Credentials & Education, Resume, and Contact.
- **Why**: Fulfills the user's primary requirement of absolute factual accuracy for real recruiters. Zero fabricated findings ensures unquestionable professional integrity.

### Decision 3: ATS-Grade Interactive Resume
- **Approach**:
  - Provide a clean, semantic HTML representation of Suraj's resume that can be read directly on mobile or desktop without downloading a file.
  - Include a clear download action wired to a designated path (`/public/resume_suraj_shanbhag.pdf`) with an intuitive status prompt if the user has not yet uploaded their local PDF.

---

## 4. Technical Architecture & System Layout

### System & Navigation Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            App Entry (main.tsx)                             │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          App Router & Layout Shell                          │
│     [ Top Bar: Brand Wordmark ── 5 Nav Links ── Primary Contact CTA ]       │
└──────┬─────────────┬─────────────┬─────────────┬─────────────┬──────────────┘
       │             │             │             │             │
       ▼             ▼             ▼             ▼             ▼
┌─────────────┐┌─────────────┐┌─────────────┐┌─────────────┐┌─────────────┐
│  Home View  ││Projects View││ Skills View ││Credentials  ││ Resume View │
│  - Hero     ││- TalentLens ││- SOC/SecOps ││  & Education││- ATS Layout │
│  - Position ││- RAG KB     ││- Systems/OS ││- B.Tech AIML││- Education  │
│  - Core Grid││- SocialStory││- Scripting  ││- Google Sec ││- Google Sec │
│  - Quick CTAs││- Case Details││- AI/ML Dev ││- Active Study││- PDF Action │
└─────────────┘└─────────────┘└─────────────┘└─────────────┘└─────────────┘
                                                           ▲
                                                           │
                                             ┌─────────────┴─────────────┐
                                             │       Contact View        │
                                             │ - Bengaluru Location      │
                                             │ - Email Action & Copy     │
                                             │ - Profile Link Handlers   │
                                             └───────────────────────────┘
```

### Component Hierarchy & File Structure
```
src/
├── types/
│   └── portfolio.ts              # Data contracts: Project, Credential, SkillGroup, Profile
├── data/
│   ├── profile.ts                # Centralized identity, verified bio, contact constants
│   ├── projects.ts               # Verified project manifests (TalentLens, RAG, Social Story)
│   ├── skills.ts                 # Defensible, demonstrated technical skills
│   └── credentials.ts            # B.Tech degree, Google Cybersecurity, and active learning
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Top Bar Contract (Brand, 5 links, Contact CTA)
│   │   ├── Footer.tsx            # Clean unadorned footer with copyright and location
│   │   └── PageHeader.tsx        # Section header with breadcrumb and unboxed metadata
│   ├── common/
│   │   ├── StatusBadge.tsx       # Clean text-based status indicator with separator
│   │   └── TabGroup.tsx          # Segmented filter controls with active handlers
│   ├── home/
│   │   ├── HeroSection.tsx       # Direct positioning, verified intro, primary actions
│   │   └── CorePillars.tsx       # SOC Operations, Systems, Scripting, AI/ML integration
│   ├── projects/
│   │   ├── ProjectCard.tsx       # Truthful status, technologies, architecture summary
│   │   └── ProjectDetailView.tsx # Deep-dive view with data provenance & limitations
│   ├── skills/
│   │   └── SkillMatrix.tsx       # Defensible skills categorized by practical domain
│   ├── credentials/
│   │   └── CredentialCard.tsx    # Official Google Cybersecurity credential & degree
│   ├── resume/
│   │   └── ResumeViewer.tsx      # Clean ATS-grade HTML resume + PDF download handler
│   └── contact/
│       └── ContactView.tsx       # Working email launcher, copy button, verified links
├── App.tsx                       # Lightweight client router & global page transitions
└── index.css                     # Tailwind CSS directives & color tokens
```

---

## 5. Curated Content Strategy & Verified Shortlists

### A. Curated Project Shortlist (Factual & Honest)
1. **TalentLens AI / Hiring Radar**
   - *Status*: Completed Software / Information Retrieval Prototype.
   - *Problem*: High-volume candidate matching and semantic skill retrieval.
   - *Technologies Actually Used*: Python, FastAPI, Uvicorn, Next.js/React, TypeScript, Sentence Transformers (`all-MiniLM-L6-v2`), vector similarity.
   - *Key Implementation*: RESTful endpoint design, embedding generation, fast cosine similarity ranking.
   - *Limitations*: Self-contained demonstration project; evaluated on candidate dataset; not an enterprise commercial deployment.
2. **Enterprise RAG Knowledge Base**
   - *Status*: Technical Proof of Concept / Exploration.
   - *Problem*: Grounded question-answering over technical documentation.
   - *Technologies Actually Used*: Python, LangChain, FAISS / ChromaDB, Hugging Face embeddings, local model integration.
   - *Key Implementation*: Document chunking, vector index search, prompt grounding.
   - *Limitations*: Proof-of-concept pipeline; not deployed in commercial cloud production.
3. **Social Story Studio**
   - *Status*: Prototype Application.
   - *Technologies Actually Used*: FastAPI, SQLite, SQLAlchemy, Pydantic, React, Tailwind CSS.
   - *Key Implementation*: Typed API contracts, relational database persistence, full-stack state coordination.
   - *Limitations*: Prototype environment for exploring full-stack CRUD architectures.

*(Note: AI-Based Network Attack Forecasting is completely excluded as requested).*

### B. Education & Credentials Shortlist
- **Education (Verified)**:
  - Degree: Bachelor of Technology (B.Tech) in Artificial Intelligence and Machine Learning.
  - Institution: Presidency University, Bengaluru.
  - Completion Status: Completed in 2026.
  - Note: Factually presented with no fabricated GPA or exact date.
- **Verified Certification (Verified)**:
  - **Google Cybersecurity Professional Certificate**
  - Issuing Organization: Google (via Coursera).
  - Status: Completed.
  - Competencies: Security operations fundamentals, network security concepts, Linux & SQL fundamentals, incident response principles.
- **Ongoing & Complementary Learning (Transparently Labeled)**:
  - Google Network Security Specialization (In progress / active coursework).
  - OWASP Top 10 Web Security (Active coursework).
  - TryHackMe Hands-on Practice (Pre-Security, Windows & Linux command-line learning).
  - IBM Generative AI & RAG Concepts (Completed course modules).

### C. Defensible Technical Skills Matrix
Organized strictly by what is defensible through coursework and code:
- **Security Operations & Fundamentals**: Security Monitoring, SIEM concepts, Log Analysis fundamentals, Network Fundamentals (TCP/IP, DNS, HTTP), OWASP Top 10 overview, Incident Response lifecycle.
- **Operating Systems & Environments**: Linux command-line utilities, Windows OS fundamentals, Bash scripting basics.
- **Programming & Scripting**: Python, TypeScript, JavaScript, HTML, CSS, SQL / SQLite fundamentals.
- **Frameworks & Web Engineering**: FastAPI, React, Next.js, RESTful APIs, Git, GitHub.
- **AI/ML & Data Engineering**: Sentence Transformers, Vector search (FAISS/ChromaDB), LangChain, Pandas, NumPy.

### D. Contact & Profile Strategy
Configured in `src/data/profile.ts`:
- Full Name: `Suraj Laxman Shanbhag`
- Location: `Bengaluru / Karwar, Karnataka, India`
- Email: `pokemastersuraj66@gmail.com` (with one-click clipboard copy + direct `mailto:` handler)
- GitHub & LinkedIn: Configurable handles with clear, functional UI action states.
- Resume Document: Download button linked to `/resume_suraj_shanbhag.pdf` with clear instructional feedback if the physical PDF has not yet been placed in the public directory.

---

## 6. Accessibility, SEO & Performance Plan

- **Accessibility (WCAG 2.1 AA)**:
  - Strict color contrast ($\ge 4.5:1$ on body text, $\ge 3:1$ on headlines against `#090d16`).
  - Visible keyboard focus indicators (`focus-visible:ring-2 focus-visible:ring-cyan-500`).
  - Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
  - Screen-reader labels (`aria-label`) on all icon buttons and links.
  - Full `prefers-reduced-motion` compliance.
- **SEO & Structured Metadata (`applet-seo`)**:
  - Branded Page Title: `Suraj Laxman Shanbhag | Cybersecurity & SOC Analyst Portfolio`
  - Meta Description: `Early-career SOC Analyst & AI/ML engineering graduate (Presidency University, 2026) specializing in security operations, SIEM fundamentals, and software development.`
  - Schema.org JSON-LD (`ProfilePage` + `Person`) embedded in `index.html`.
  - Canonical URL and OpenGraph card tags properly configured.
- **Performance**:
  - Pure Vite React build with zero bloated external dependencies.
  - Fast page transitions with standard React state and zero layout shifts.

---

## 7. Prioritized Implementation Sequence

### Phase 1: Core Foundation & Verified Navigation (Immediate)
- Update `metadata.json` and `index.html` with branded title, SEO metadata, and Schema.org JSON-LD.
- Create strongly typed data structures (`src/types/portfolio.ts`) and truthful data registries (`src/data/profile.ts`, `src/data/projects.ts`, `src/data/credentials.ts`, `src/data/skills.ts`).
- Build the layout shell (`Navbar.tsx` conforming to Top Bar Contract, `Footer.tsx`).
- Implement the lightweight client router supporting `/`, `/projects`, `/projects/:id`, `/skills`, `/credentials`, `/resume`, and `/contact`.
- Implement **Home View**: Direct identity, SOC positioning, core capability pillars, and quick navigation.

### Phase 2: Detailed Views & Verified Showcase
- Implement **Projects View**: Curated projects (TalentLens AI, RAG Knowledge Base, Social Story Studio) with status badges and dedicated deep-dive view (`/projects/:id`).
- Implement **Credentials View**: B.Tech degree (Presidency University, 2026), official Google Cybersecurity Professional Certificate, and transparent ongoing learning.
- Implement **Skills View**: Defensible skills categorized by operational domain.
- Implement **Resume View**: Formatted, ATS-friendly digital resume with clean PDF download trigger.
- Implement **Contact View**: Working email launcher, copy button, and location marker.

### Phase 3: Validation & Quality Assurance
- Run `tsc --noEmit` and `compile_applet` to ensure zero compilation or type errors.
- Test responsive behavior across mobile, tablet, and desktop viewports.
- Verify that every button, link, and route handler functions with zero dead clicks or console warnings.
