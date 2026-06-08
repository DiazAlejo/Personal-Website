import type { ContactCtaContent } from "@/types/content";

export const contactCta: ContactCtaContent = {
  headline: "Let's build something meaningful.",
  supportingLines: [
    "Interested in software engineering, AI systems, data platforms, or collaboration opportunities?",
    "I'd love to connect.",
  ],
  primaryCta: {
    label: "Contact Me",
    href: "/contact",
  },
  secondaryCta: {
    label: "View Resume",
    href: "/resume",
  },
};
