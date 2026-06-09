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
  | "Group Projects";

export interface ProjectsPageContent {
  title: string;
  description: string;
  ctaLabel: string;
  overviewCtaLabel: string;
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
  hasCaseStudy?: boolean;
}

export interface GroupProjectHighlight {
  title: string;
  description: string;
  tags: string[];
}

export interface GroupProjectsOverview {
  slug: string;
  intro: string;
  highlights: string[];
  examples: GroupProjectHighlight[];
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
  label: string;
  slug?: string;
  href?: string;
}

export type CaseStudySectionOrder =
  | "impact-technologies-highlights"
  | "impact-highlights-technologies"
  | "highlights-technologies-impact";

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
    ariaLabel?: string;
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
  sectionOrder?: CaseStudySectionOrder;
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

export interface ResumeAction {
  label: string;
  href: string;
  download?: string;
}

export interface ResumeHeader {
  title: string;
  subtitle: string;
  primaryAction: ResumeAction;
  secondaryAction: ResumeAction;
}

export interface ResumeExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  minor?: string;
}

export interface ContactFormFieldLabels {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormValidationMessages {
  required: string;
  email: string;
  nameMin: string;
  subjectMin: string;
  messageMin: string;
}

export interface ContactPageContent {
  header: {
    title: string;
    subtitleLines: string[];
  };
  methods: {
    title: string;
  };
  form: {
    title: string;
    fields: ContactFormFieldLabels;
    placeholders: ContactFormFieldLabels;
    submitLabel: string;
    submittingLabel: string;
    validation: ContactFormValidationMessages;
    success: {
      title: string;
      lines: string[];
      resetLabel: string;
    };
    error: {
      title: string;
      description: string;
      retryLabel: string;
    };
  };
  availability: {
    title: string;
    intro: string;
    items: string[];
  };
}

export interface ResumeProjectEntry {
  id: string;
  title: string;
  impact: string;
  description: string;
  technologies: string[];
  href?: string;
}

export interface ResumeContent {
  header: ResumeHeader;
  summary: {
    title: string;
    paragraphs: string[];
  };
  selectedProjects: {
    title: string;
    entries: ResumeProjectEntry[];
  };
  experience: {
    title: string;
    entries: ResumeExperienceEntry[];
  };
  education: {
    title: string;
    entry: ResumeEducation;
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  highlights: {
    title: string;
    metrics: Metric[];
  };
  pdf: {
    path: string;
    filename: string;
  };
  html: {
    path: string;
  };
}
