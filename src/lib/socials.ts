import { socials } from "@/content/socials";
import type { SocialLink } from "@/types/content";

/**
 * Returns all social links including email for display components.
 */
export function getSocialLinks(): SocialLink[] {
  return [
    ...socials.links,
    {
      name: "Email",
      url: `mailto:${socials.email}`,
      label: `Email ${socials.email}`,
    },
  ];
}
