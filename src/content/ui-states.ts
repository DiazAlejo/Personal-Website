import type { HeroCta } from "@/types/content";

export const notFoundContent = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist or may have been moved.",
  actions: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ] satisfies HeroCta[],
};

export const errorContent = {
  title: "Something went wrong",
  description:
    "An unexpected error occurred while loading this page. Please try again.",
  retryLabel: "Try again",
  actions: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ] satisfies HeroCta[],
};

export const emptyStateContent = {
  projects: {
    title: "No projects found",
    description: "No projects match the selected category. Try another filter.",
  },
  generic: {
    title: "Nothing here yet",
    description: "Content for this section is not available right now.",
  },
  caseStudy: {
    title: "Case study coming soon",
  },
};

export const skipLinkContent = {
  label: "Skip to main content",
};
