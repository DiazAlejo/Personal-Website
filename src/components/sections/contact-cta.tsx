"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { contactCta } from "@/content/contact-cta";
import { hoverPatterns } from "@/lib/hover";
import { getSocialLinks } from "@/lib/socials";
import { contactCtaRevealTransition } from "@/lib/transitions";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

function ContactCTA() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const socialLinks = getSocialLinks();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : contactCtaRevealTransition.container;

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : contactCtaRevealTransition.item;

  const buttonsContainerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : contactCtaRevealTransition.buttons;

  const buttonVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : contactCtaRevealTransition.button;

  return (
    <Section
      aria-labelledby="contact-cta-heading"
      className="border-t border-border bg-surface"
    >
      <Container>
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h2" id="contact-cta-heading">
              {contactCta.headline}
            </Typography>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-element-lg flex flex-col gap-element-sm"
          >
            {contactCta.supportingLines.map((line) => (
              <Typography
                key={line}
                variant="body"
                className="text-text-secondary"
              >
                {line}
              </Typography>
            ))}
          </motion.div>

          <motion.div
            variants={buttonsContainerVariants}
            className="mt-element-xl flex w-full flex-col gap-element-sm sm:w-auto sm:flex-row sm:justify-center"
          >
            <motion.div variants={buttonVariants}>
              <Button
                asChild
                variant="primary"
                size="lg"
                className={`w-full sm:w-auto ${hoverPatterns.elevation}`}
              >
                <Link href={contactCta.primaryCta.href}>
                  {contactCta.primaryCta.label}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={buttonVariants}>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className={`w-full sm:w-auto ${hoverPatterns.elevation}`}
              >
                <Link href={contactCta.secondaryCta.href}>
                  <FileText aria-hidden="true" />
                  {contactCta.secondaryCta.label}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.nav
            variants={itemVariants}
            aria-label="Social links"
            className="mt-element-xl flex flex-wrap items-center justify-center gap-element-md"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.url.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={link.label}
                className="text-small text-text-secondary transition-colors duration-normal ease-default hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        </motion.div>
      </Container>
    </Section>
  );
}

export { ContactCTA };
