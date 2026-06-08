import { motion } from "@/lib/motion";

/**
 * Shared CSS motion utility class names.
 */
export const motionPresets = {
  fadeIn: "animate-page-fade-in",
  slideUp: "animate-fade-up",
  hoverLift: "hover-lift",
} as const;

/**
 * Shared Framer Motion reveal builders.
 * Centralizes duplicated transition logic across sections.
 */
export function createRevealItem(y = 16) {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motion.duration.slow,
        ease: motion.easing.enter,
      },
    },
  } as const;
}

export function createRevealContainer(
  stagger: number = motion.stagger.normal,
) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.05,
      },
    },
  } as const;
}

export function createRevealHeader() {
  return createRevealItem(12);
}
