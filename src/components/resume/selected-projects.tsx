import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import type { ResumeProjectEntry } from "@/types/content";
import Link from "next/link";

interface SelectedProjectsProps {
  title: string;
  entries: ResumeProjectEntry[];
}

function SelectedProjects({ title, entries }: SelectedProjectsProps) {
  return (
    <section aria-labelledby="selected-projects-heading">
      <Typography variant="h2" id="selected-projects-heading">
        {title}
      </Typography>

      <ul className="mt-element-lg flex flex-col gap-element-lg">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="rounded-xl border border-border bg-surface p-card"
          >
            <div className="flex flex-col gap-element-sm">
              {entry.href ? (
                <Link
                  href={entry.href}
                  className="w-fit rounded-sm text-h3 font-semibold text-text-primary transition-colors duration-normal ease-default hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {entry.title}
                </Link>
              ) : (
                <Typography variant="h3" as="h3">
                  {entry.title}
                </Typography>
              )}

              <Typography
                variant="small"
                as="p"
                className="font-medium text-primary"
              >
                {entry.impact}
              </Typography>

              <Typography variant="body" className="text-text-secondary">
                {entry.description}
              </Typography>

              {entry.technologies.length > 0 ? (
                <ul
                  className="flex flex-wrap gap-element-sm"
                  aria-label={`${entry.title} technologies`}
                >
                  {entry.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge variant="tag">{tech}</Badge>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { SelectedProjects };
