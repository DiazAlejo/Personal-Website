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

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  featured: boolean;
}
