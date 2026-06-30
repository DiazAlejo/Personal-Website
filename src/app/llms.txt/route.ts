import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { seo } from "@/content/seo";
import { site } from "@/content/site";
import { socials } from "@/content/socials";
import { getCanonicalUrl } from "@/lib/seo/constants";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.headline}`);
  lines.push("");
  lines.push(site.supportingStatement);
  lines.push("");

  lines.push("## Experience");
  for (const entry of experience) {
    lines.push(`- ${entry.role} at ${entry.company} (${entry.period})`);
  }
  lines.push("");

  lines.push("## Projects");
  for (const project of projects) {
    lines.push(
      `- [${project.title}](${getCanonicalUrl(`/projects/${project.slug}`)}): ${project.summary} — ${project.impact}`,
    );
  }
  lines.push("");

  lines.push("## Skills");
  lines.push(seo.keywords.join(", "));
  lines.push("");

  lines.push("## Contact");
  lines.push(`- Email: ${socials.email}`);
  for (const link of socials.links) {
    lines.push(`- ${link.name}: ${link.url}`);
  }

  return lines.join("\n");
}

export function GET(): NextResponse {
  return new NextResponse(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
