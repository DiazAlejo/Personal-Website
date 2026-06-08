export interface SiteConfig {
  name: string;
  domain: string;
  headline: string;
  supportingStatement: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroContent {
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
}

export interface ContactCtaContent {
  headline: string;
  supportingLines: string[];
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
}

export interface MetricCountUp {
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  countUp?: MetricCountUp;
}

export interface FeaturedWorkContent {
  title: string;
  description: string;
  ctaLabel: string;
}

export interface ExperienceSectionContent {
  title: string;
  description: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
}

export type ProjectCategory =
  | "Production Systems"
  | "AI & ML"
  | "Full Stack"
  | "Data Engineering"
  | "Personal Projects";

export interface ProjectsPageContent {
  title: string;
  description: string;
  ctaLabel: string;
  emptyStateMessage: string;
  filterAllLabel: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  impact: string;
  summary: string;
  category: ProjectCategory;
  tags: string[];
  featured: boolean;
}

export interface CaseStudyArchitectureStep {
  id: string;
  label: string;
}

export interface CaseStudyImpactMetric {
  id: string;
  value: string;
  label: string;
}

export interface CaseStudyNarrativeSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface CaseStudyNavigation {
  slug: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    badges: string[];
  };
  overview: CaseStudyNarrativeSection;
  problem: CaseStudyNarrativeSection;
  solution: CaseStudyNarrativeSection;
  architecture: {
    title: string;
    steps: CaseStudyArchitectureStep[];
  };
  impact: {
    title: string;
    metrics: CaseStudyImpactMetric[];
  };
  technologies: {
    title: string;
    items: string[];
  };
  highlights: {
    title: string;
    items: string[];
  };
  nextCaseStudy: CaseStudyNavigation;
  highlightsBeforeTechnologies?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface Socials {
  email: string;
  links: SocialLink[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}
