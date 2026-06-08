import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import type { HeroCta } from "@/types/content";
import { hoverPatterns } from "@/lib/hover";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ErrorFallbackProps {
  title: string;
  description: string;
  actions: HeroCta[];
  retryLabel?: string;
  onRetry?: () => void;
  className?: string;
}

function ErrorFallback({
  title,
  description,
  actions,
  retryLabel,
  onRetry,
  className,
}: ErrorFallbackProps) {
  return (
    <Section className={className}>
      <Container>
        <div
          role="alert"
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          <Typography variant="h1">{title}</Typography>
          <Typography variant="body" className="mt-element text-text-secondary">
            {description}
          </Typography>

          <div className="mt-element-xl flex w-full flex-col gap-element-sm sm:w-auto sm:flex-row sm:justify-center">
            {onRetry && retryLabel ? (
              <Button
                type="button"
                variant="primary"
                size="lg"
                onClick={onRetry}
                className={cn("w-full sm:w-auto", hoverPatterns.elevation)}
              >
                {retryLabel}
              </Button>
            ) : null}

            {actions.map((action) => (
              <Button
                key={action.href}
                asChild
                variant={onRetry ? "secondary" : "primary"}
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

export { ErrorFallback };
