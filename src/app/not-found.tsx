import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { notFoundContent } from "@/content/ui-states";
import { hoverPatterns } from "@/lib/hover";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <Typography variant="small" className="font-medium text-text-secondary">
            404
          </Typography>
          <Typography variant="h1" className="mt-element-sm">
            {notFoundContent.title}
          </Typography>
          <Typography variant="body" className="mt-element text-text-secondary">
            {notFoundContent.description}
          </Typography>

          <div className="mt-element-xl flex w-full flex-col gap-element-sm sm:w-auto sm:flex-row sm:justify-center">
            {notFoundContent.actions.map((action) => (
              <Button
                key={action.href}
                asChild
                variant={action.href === "/" ? "primary" : "secondary"}
                size="lg"
                className={cn("w-full sm:w-auto", hoverPatterns.elevation)}
              >
                <Link href={action.href}>
                  {action.label}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
