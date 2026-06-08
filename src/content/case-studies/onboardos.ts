import type { CaseStudy } from "@/types/content";

export const onboardosCaseStudy: CaseStudy = {
  slug: "onboardos",
  hero: {
    title: "OnboardOS",
    subtitle: "Healthcare onboarding and workflow management platform.",
    badges: ["Full Stack", "Healthcare", "Capstone Project", "2025"],
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "OnboardOS is a healthcare onboarding and workflow management platform designed to streamline employee onboarding for healthcare organizations. It provides a structured system for managing tasks, approvals, and compliance across the entire onboarding lifecycle.",
      "The platform features a workflow engine with role-based access control, audit logging, task lifecycle management, approval pipelines, and dashboard analytics — giving administrators full visibility into onboarding progress.",
    ],
  },
  problem: {
    title: "Problem",
    paragraphs: [
      "Healthcare onboarding often involves complex, multi-step processes that span departments, roles, and compliance requirements. Organizations struggled with fragmented workflows and limited operational visibility.",
    ],
    bullets: [
      "Manual approval chains slowing down onboarding timelines",
      "Limited visibility into task progress and bottlenecks",
      "Poor tracking across distributed onboarding steps",
      "Fragmented workflows across disconnected tools",
      "Compliance concerns requiring auditable process records",
    ],
  },
  solution: {
    title: "Solution",
    paragraphs: [
      "I architected and built a full-stack platform with a custom workflow engine, RESTful API layer, and role-based permission system to automate and orchestrate the entire healthcare onboarding process.",
    ],
    bullets: [
      "Custom workflow engine for configurable approval pipelines",
      "Role-based access control across all platform operations",
      "Automated notifications for task assignments and approvals",
      "Analytics dashboards for onboarding progress monitoring",
      "Audit logging for compliance and traceability",
      "Monitoring interfaces for operational health and status",
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
      "Workflow orchestration engine with configurable approval pipelines",
      "RESTful API design with 40+ production endpoints",
      "Comprehensive audit logging for compliance requirements",
      "Dashboard analytics for onboarding progress visibility",
      "Automated testing across API and workflow layers",
    ],
  },
  nextCaseStudy: {
    slug: "local-rag-assistant",
    label: "Next Case Study",
  },
  sectionOrder: "highlights-technologies-impact",
};
