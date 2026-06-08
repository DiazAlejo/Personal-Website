"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import type { ContactPageContent } from "@/types/content";
import { getContactMethods } from "@/lib/contact-methods";
import { hoverPatterns } from "@/lib/hover";
import { caseStudyRevealTransition } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ContactMethodsProps {
  methods: ContactPageContent["methods"];
}

function ContactMethods({ methods }: ContactMethodsProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const contactMethods = getContactMethods();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : caseStudyRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : caseStudyRevealTransition.item;

  return (
    <section aria-labelledby="contact-methods-heading">
      <Typography variant="h2" id="contact-methods-heading">
        {methods.title}
      </Typography>

      <motion.ul
        className="mt-element-md flex flex-col gap-card"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {contactMethods.map((method) => {
          const Icon = method.icon;

          return (
            <motion.li key={method.id} variants={itemVariants}>
              <a
                href={method.url}
                target={
                  method.url.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  method.url.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={method.label}
                className={cn(
                  "group block rounded-xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                )}
              >
                <Card
                  variant="interactive"
                  className={cn(
                    "transition-[transform,box-shadow,border-color] duration-normal ease-default",
                    hoverPatterns.borderHighlight,
                    "group-hover:-translate-y-px",
                  )}
                >
                  <CardHeader className="flex-row items-start justify-between gap-element-sm">
                    <div className="flex items-start gap-element-md">
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-secondary text-primary"
                      >
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <CardTitle>{method.name}</CardTitle>
                        <CardDescription className="mt-element-xs text-text-secondary">
                          {method.detail}
                        </CardDescription>
                      </div>
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-text-secondary transition-transform duration-normal ease-default group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary"
                    />
                  </CardHeader>
                  <CardContent className="sr-only">
                    {method.label}
                  </CardContent>
                </Card>
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}

export { ContactMethods };
