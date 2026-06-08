import type { ResumeContent } from "@/types/content";

export const resume: ResumeContent = {
  header: {
    title: "Resume",
    subtitle:
      "Software Engineer building AI systems, machine learning platforms, and data-driven automation solutions.",
    primaryAction: {
      label: "Download PDF Resume",
      href: "/resume/alejandro-diaz-resume.pdf",
      download: "alejandro-diaz-resume.pdf",
    },
    secondaryAction: {
      label: "View Projects",
      href: "/projects",
    },
  },
  summary: {
    title: "Professional Summary",
    paragraphs: [
      "I am a Software Engineering graduate from the University of Puerto Rico at Mayagüez with professional experience building AI systems, machine learning pipelines, enterprise software, and large-scale data platforms.",
      "At Jacobs Engineering, I have worked on projects spanning water infrastructure digitization, AI-powered document processing, workforce analytics, forecasting systems, and enterprise automation. My work focuses on transforming manual, time-consuming business processes into scalable software solutions with measurable impact.",
      "I enjoy working across the full lifecycle of a system—from understanding operational problems and designing architecture to deployment, monitoring, and continuous improvement.",
      "My technical interests include AI engineering, machine learning, distributed data processing, software architecture, and developer productivity. I regularly leverage modern AI development tools such as Cursor, Claude, and ChatGPT to accelerate implementation, improve system design, and prototype solutions efficiently.",
    ],
  },
  selectedProjects: {
    title: "Selected Projects",
    entries: [
      {
        id: "ai-resume-pipeline",
        title: "AI Resume Pipeline",
        impact: "98% processing time reduction (4+ hours → ~2 minutes)",
        description:
          "Enterprise AI document transformation system in Palantir Foundry using Claude Sonnet, chunked extraction for 60K+ character resumes, PII governance, and HR data enrichment.",
        technologies: [
          "Python",
          "Palantir Foundry",
          "Claude Sonnet",
          "LLMs",
        ],
        href: "/projects/ai-resume-pipeline",
      },
      {
        id: "water-forecasting-platform",
        title: "Water Forecasting Platform",
        impact: "56% forecasting improvement across 1,107 tanks",
        description:
          "ML forecasting platform processing 22M+ SCADA records with PySpark, 30+ engineered features, AutoGluon time-series models, and production deployment.",
        technologies: ["PySpark", "AutoGluon", "Python", "Palantir Foundry"],
        href: "/projects/water-forecasting-platform",
      },
      {
        id: "onboardos",
        title: "OnboardOS",
        impact: "40+ REST APIs with RBAC and audit logging",
        description:
          "Full-stack healthcare onboarding platform with custom workflow engine, approval pipelines, team collaboration, and cloud deployment.",
        technologies: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
        href: "/projects/onboardos",
      },
      {
        id: "local-rag-assistant",
        title: "Local RAG Assistant",
        impact: "Fully local RAG with Docker and REST API",
        description:
          "Private document intelligence system using Ollama, vector retrieval, and containerized deployment without hosted AI dependencies.",
        technologies: ["Python", "Docker", "Ollama", "RAG"],
        href: "/projects/local-rag-assistant",
      },
    ],
  },
  experience: {
    title: "Experience",
    entries: [
      {
        id: "jacobs-engineer-2026",
        company: "Jacobs Engineering",
        role: "Software Engineer",
        period: "Jan 2026 – Present",
        achievements: [
          "Develop and maintain production AI and ML solutions for enterprise engineering workflows",
          "Build automated document transformation pipelines in Palantir Foundry with Claude Sonnet integration",
          "Deliver forecasting and analytics systems across large-scale infrastructure datasets",
          "Engineer data pipelines processing millions of records with governance and monitoring",
        ],
      },
      {
        id: "jacobs-intern-2025",
        company: "Jacobs Engineering",
        role: "Software Engineering Intern",
        period: "May 2025 – Aug 2025",
        achievements: [
          "Built AI Resume Pipeline reducing document processing time by 98% (4+ hours to ~2 minutes)",
          "Engineered Water Forecasting Platform achieving 56% improvement across 1,107 water tanks",
          "Processed 22M+ SCADA records with PySpark and AutoGluon time-series forecasting models",
          "Discovered and resolved data contamination issues through residual analysis and validation",
        ],
      },
      {
        id: "jacobs-intern-2024",
        company: "Jacobs Engineering",
        role: "Software Engineering Intern",
        period: "Jun 2024 – Aug 2024",
        achievements: [
          "Contributed to enterprise software and data engineering initiatives for engineering teams",
          "Developed automation tooling and data pipeline components in production environments",
          "Supported large-scale data processing workflows and operational analytics",
        ],
      },
      {
        id: "nagnoi",
        company: "Nagnoi",
        role: "Data & Software Engineering Intern",
        period: "May 2023 – Jul 2023",
        achievements: [
          "Built data processing and software tooling for operational analytics",
          "Supported ETL workflows and database-driven reporting solutions",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    entry: {
      institution: "University of Puerto Rico – Mayagüez",
      degree: "B.S. Software Engineering",
      minor: "Minor Certificate in Project Management",
    },
  },
  skills: {
    title: "Skills",
    categories: [
      {
        id: "languages",
        name: "Languages",
        skills: [
          "Python",
          "TypeScript",
          "JavaScript",
          "Go",
          "SQL",
          "Java",
          "C++",
        ],
      },
      {
        id: "ai-ml",
        name: "AI / ML",
        skills: [
          "LLMs",
          "RAG",
          "AutoGluon",
          "TensorFlow",
          "scikit-learn",
          "Prompt Engineering",
        ],
      },
      {
        id: "data",
        name: "Data",
        skills: [
          "PySpark",
          "Palantir Foundry",
          "PostgreSQL",
          "Oracle",
          "Power BI",
        ],
      },
      {
        id: "web",
        name: "Web",
        skills: ["Next.js", "React", "Node.js", "REST APIs", "Tailwind"],
      },
    ],
  },
  highlights: {
    title: "Career Highlights",
    metrics: [
      {
        id: "time-reduction",
        value: "98%",
        label: "Processing Time Reduction",
      },
      {
        id: "records-processed",
        value: "22M+",
        label: "Records Processed",
      },
      {
        id: "forecasting-improvement",
        value: "56%",
        label: "Forecasting Improvement",
      },
      {
        id: "apis-delivered",
        value: "40+",
        label: "REST APIs Delivered",
      },
    ],
  },
  pdf: {
    path: "/resume/alejandro-diaz-resume.pdf",
    filename: "alejandro-diaz-resume.pdf",
  },
};
