import { socials } from "@/content/socials";
import type { SocialLink } from "@/types/content";
import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactMethod {
  id: string;
  name: string;
  url: string;
  label: string;
  detail: string;
  icon: LucideIcon;
}

function getMethodDetail(link: SocialLink): string {
  if (link.name === "Email") {
    return socials.email;
  }

  return link.url.replace(/^https?:\/\/(www\.)?/, "");
}

export function getContactMethods(): ContactMethod[] {
  const emailLink: SocialLink = {
    name: "Email",
    url: `mailto:${socials.email}`,
    label: `Email ${socials.email}`,
  };

  const orderedNames = ["Email", "LinkedIn", "GitHub"];
  const allLinks = [emailLink, ...socials.links];
  const iconMap: Record<string, LucideIcon> = {
    Email: Mail,
    LinkedIn: Linkedin,
    GitHub: Github,
  };

  return orderedNames
    .map((name) => allLinks.find((link) => link.name === name))
    .filter((link): link is SocialLink => link !== undefined)
    .map((link) => ({
      id: link.name.toLowerCase(),
      name: link.name,
      url: link.url,
      label: link.label,
      detail: getMethodDetail(link),
      icon: iconMap[link.name] ?? Mail,
    }));
}
