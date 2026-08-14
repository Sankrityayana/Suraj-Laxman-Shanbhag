export interface NavItem {
  title: string;
  href: string;
  iconName: string;
  description: string;
  badge?: string;
}

export interface NavGroup {
  groupTitle: string;
  items: NavItem[];
}

export const navigationGroups: NavGroup[] = [
  {
    groupTitle: "MAIN",
    items: [
      {
        title: "Home",
        href: "/",
        iconName: "House",
        description: "Overview of identity, current focus, domains, and featured builds"
      },
      {
        title: "About Me",
        href: "/about",
        iconName: "UserRound",
        description: "Technical background, engineering story, and problem-solving principles"
      }
    ]
  },
  {
    groupTitle: "DOMAINS",
    items: [
      {
        title: "AI/ML Engineering",
        href: "/domains/ai-ml",
        iconName: "BrainCircuit",
        description: "RAG architectures, local LLMs, vector search, and AI agents",
        badge: "AI/ML"
      },
      {
        title: "Software & Web Development",
        href: "/domains/software-web",
        iconName: "Code2",
        description: "Full-stack web applications, TypeScript, React, Next.js, & APIs",
        badge: "Web"
      },
      {
        title: "Data Science & Analytics",
        href: "/domains/data-science",
        iconName: "ChartNoAxesCombined",
        description: "Exploratory data analysis, predictive modeling, and pipelines",
        badge: "Data"
      },
      {
        title: "Cybersecurity",
        href: "/domains/cybersecurity",
        iconName: "ShieldCheck",
        description: "App security, threat modeling, GRC fundamentals, and secure code",
        badge: "Security"
      }
    ]
  },
  {
    groupTitle: "WORKS",
    items: [
      {
        title: "Projects",
        href: "/projects",
        iconName: "FolderKanban",
        description: "Interactive project explorer across AI, full-stack, data, and security"
      },
      {
        title: "Hackathons & Competitions",
        href: "/hackathons",
        iconName: "Trophy",
        description: "Verified hackathon projects, competitive builds, and sprint outcomes"
      },
      {
        title: "Research Works",
        href: "/research",
        iconName: "Microscope",
        description: "Empirical experiments, embedding evaluations, and technical investigations"
      },
      {
        title: "Engineering Insights",
        href: "/insights",
        iconName: "ChartNoAxesColumnIncreasing",
        description: "Metrics, dataset benchmarks, architecture patterns, and learning logs"
      }
    ]
  },
  {
    groupTitle: "CAREER",
    items: [
      {
        title: "My Toolkit",
        href: "/toolkit",
        iconName: "Wrench",
        description: "Grouped technical stack, frameworks, developer tools, and resources"
      },
      {
        title: "Learning & Certifications",
        href: "/learning",
        iconName: "GraduationCap",
        description: "Verified course scores (Meta, IBM), education, and active pursuits"
      },
      {
        title: "Experience",
        href: "/experience",
        iconName: "BriefcaseBusiness",
        description: "Visual vertical journey timeline of engineering work & milestones"
      },
      {
        title: "Resume",
        href: "/resume",
        iconName: "FileText",
        description: "Clean recruiter-friendly document layout & print view"
      },
      {
        title: "Contact",
        href: "/contact",
        iconName: "Mail",
        description: "Direct outreach, collaboration paths, and email copy interface"
      }
    ]
  }
];

export const allNavLinks = navigationGroups.flatMap((group) => group.items);
