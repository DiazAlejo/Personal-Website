import type { CaseStudy } from "@/types/content";

export const onboardosCaseStudy: CaseStudy = {
  slug: "onboardos",
  hero: {
    title: "OnboardOS",
    subtitle:
      "Full-stack healthcare workflow and onboarding management platform.",
    badges: ["Full Stack", "Healthcare", "REST APIs", "2025"],
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "OnboardOS is a full-stack engineering platform I architected and built for healthcare onboarding operations. It provides a structured system for managing tasks, approvals, compliance, and team collaboration across the entire onboarding lifecycle.",
      "The platform features a custom workflow engine with role-based access control, comprehensive audit logging, approval pipelines, and dashboard analytics — delivering 40+ REST APIs with cloud deployment for production healthcare workflows.",
    ],
  },
  problem: {
    title: "Problem",
    paragraphs: [
      "Healthcare onboarding involves complex, multi-step processes spanning departments, roles, and compliance requirements. Organizations struggled with fragmented workflows, manual approval chains, and limited visibility into onboarding progress and bottlenecks.",
    ],
    bullets: [
      "Manual approval chains slowing onboarding timelines",
      "Limited visibility into task progress and operational bottlenecks",
      "Poor tracking across distributed, multi-department onboarding steps",
      "Fragmented workflows across disconnected tools and systems",
      "Compliance requirements demanding auditable, traceable process records",
      "Need for role-based permissions across diverse healthcare stakeholders",
    ],
  },
  solution: {
    title: "Solution",
    paragraphs: [
      "I architected and built a full-stack platform with a custom workflow engine, RESTful API layer, and role-based permission system. The engineering focus was on API design complexity, workflow orchestration, audit logging for compliance, and team collaboration across healthcare onboarding operations.",
    ],
    bullets: [
      "Custom workflow engine for configurable approval pipelines",
      "Role-based access control (RBAC) across all platform operations",
      "40+ REST APIs designed for workflow, task, and user management",
      "Automated notifications for task assignments and approval events",
      "Analytics dashboards for onboarding progress and bottleneck monitoring",
      "Comprehensive audit logging for compliance and traceability",
      "Cloud deployment with monitoring interfaces for operational health",
    ],
  },
  architecture: {
    title: "Workflow Architecture",
    ariaLabel: "Workflow architecture flow",
    steps: [
      { id: "user-creation", label: "User Creation" },
      { id: "task-assignment", label: "Task Assignment" },
      { id: "approval-workflow", label: "Approval Workflow" },
      { id: "role-validation", label: "Role Validation" },
      { id: "audit-logging", label: "Audit Logging" },
      { id: "completion", label: "Completion" },
    ],
  },
  impact: {
    title: "Project Outcomes",
    metrics: [
      {
        id: "rest-apis",
        value: "40+",
        label: "REST APIs Delivered",
      },
      {
        id: "rbac",
        value: "Role-Based",
        label: "Access Control",
      },
      {
        id: "workflow-engine",
        value: "End-to-End",
        label: "Workflow Engine",
      },
      {
        id: "cloud-deployment",
        value: "Cloud",
        label: "Deployment",
      },
    ],
  },
  technologies: {
    title: "Technology Stack",
    items: [
      "Next.js",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "Cloud Deployment",
    ],
  },
  highlights: {
    title: "Engineering Highlights",
    items: [
      "Role-based access control (RBAC) across all platform endpoints",
      "Custom workflow orchestration engine with configurable approval pipelines",
      "RESTful API design with 40+ production endpoints",
      "Comprehensive audit logging for healthcare compliance requirements",
      "Team collaboration features across distributed onboarding workflows",
      "Automated testing across API and workflow layers",
    ],
  },
  nextCaseStudy: {
    slug: "local-rag-assistant",
    label: "Next Case Study",
  },
  sectionOrder: "highlights-technologies-impact",
};
