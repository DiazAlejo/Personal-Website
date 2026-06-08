import type { ResumeContent } from "@/types/content";

export const resume: ResumeContent = {
  header: {
    title: "Resume",
    subtitle:
      "Software Engineer building AI systems, automation platforms, and data-driven products.",
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
      "Software Engineer with professional experience building production AI systems, automation platforms, and data-driven products. Currently developing enterprise AI and ML solutions at Jacobs Engineering, with a track record of delivering measurable business impact across document automation, forecasting, and full-stack application development.",
      "Skilled in LLM integration, retrieval-augmented generation, machine learning pipelines, API design, and large-scale data processing. Combines strong software engineering fundamentals with practical AI deployment experience.",
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
          "Develop production AI and ML solutions for enterprise engineering workflows",
          "Build automated document transformation and data processing pipelines in Palantir Foundry",
          "Deliver forecasting and analytics systems across large-scale infrastructure datasets",
        ],
      },
      {
        id: "jacobs-intern-2025",
        company: "Jacobs Engineering",
        role: "Software Engineering Intern",
        period: "May 2025 – Aug 2025",
        achievements: [
          "Built AI Resume Pipeline reducing document processing time by 98%",
          "Engineered Water Forecasting Platform achieving 56% forecasting improvement across 1,107 tanks",
          "Processed 22M+ historical records with PySpark and AutoGluon time-series models",
        ],
      },
      {
        id: "jacobs-intern-2024",
        company: "Jacobs Engineering",
        role: "Software Engineering Intern",
        period: "Jun 2024 – Aug 2024",
        achievements: [
          "Contributed to enterprise software and data engineering initiatives",
          "Developed automation tooling and data pipeline components for engineering teams",
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
        id: "records-processed",
        value: "22M+",
        label: "Records Processed",
      },
      {
        id: "time-reduction",
        value: "98%",
        label: "Time Reduction",
      },
      {
        id: "forecasting-improvement",
        value: "56%",
        label: "Forecasting Improvement",
      },
      {
        id: "apis-delivered",
        value: "40+",
        label: "APIs Delivered",
      },
    ],
  },
  pdf: {
    path: "/resume/alejandro-diaz-resume.pdf",
    filename: "alejandro-diaz-resume.pdf",
  },
};
