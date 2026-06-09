import type { GroupProjectsOverview } from "@/types/content";

export const groupProjectsOverview: GroupProjectsOverview = {
  slug: "university-group-projects",
  intro:
    "At university, I contributed to 15+ team-built software projects across different classes — spanning full-stack web apps, mobile clients, and data-backed platforms. Work was delivered in agile sprints with shared ownership of architecture, implementation, and demos.",
  highlights: [
    "Led or co-led delivery on marketplace, transit, and campus utility applications",
    "Built with Next.js, TypeScript, React Native, PostgreSQL, and real-time data flows",
    "Practiced sprint planning, code review, and presentation-ready releases",
  ],
  examples: [
    {
      title: "ThriftUni",
      description:
        "Campus marketplace for university students — listings, search, messaging, and a responsive web experience for thrift commerce.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Marketplace"],
    },
    {
      title: "Trolley Tracker",
      description:
        "Mobile-first transit app with live trolley locations, route visibility, and arrival estimates for campus transportation.",
      tags: ["React Native", "Real-time", "GPS", "Mobile"],
    },
  ],
};
