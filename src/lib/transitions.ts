import { motion } from "@/lib/motion";
import {
  createRevealContainer,
  createRevealHeader,
  createRevealItem,
} from "@/lib/motion-presets";

/**
 * Shared page transition configuration.
 * Target: 150ms–300ms subtle fade.
 */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: motion.duration.normal,
    ease: motion.easing.enter,
  },
} as const;

export const heroRevealTransition = {
  item: createRevealItem(12),
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motion.stagger.normal,
        delayChildren: 0.1,
      },
    },
  },
} as const;

export const metricsRevealTransition = {
  item: createRevealItem(16),
  container: createRevealContainer(),
} as const;

export const featuredWorkRevealTransition = {
  item: createRevealItem(20),
  container: createRevealContainer(motion.stagger.slow),
  header: createRevealHeader(),
} as const;

export const timelineRevealTransition = {
  item: createRevealItem(16),
  container: createRevealContainer(),
  header: createRevealHeader(),
  line: {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: motion.duration.slower,
        ease: motion.easing.smooth,
      },
    },
  },
} as const;

export const contactCtaRevealTransition = {
  item: createRevealItem(12),
  container: createRevealContainer(),
  buttons: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motion.stagger.fast,
        delayChildren: 0,
      },
    },
  },
  button: createRevealItem(8),
} as const;

export const projectsGridRevealTransition = {
  item: createRevealItem(16),
  container: createRevealContainer(),
} as const;

export const caseStudyRevealTransition = {
  item: createRevealItem(16),
  container: createRevealContainer(),
  diagramStep: createRevealItem(12),
  diagramContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motion.stagger.fast,
        delayChildren: 0.1,
      },
    },
  },
} as const;

export const mobileMenuTransition = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: motion.duration.fast,
      ease: motion.easing.enter,
    },
  },
  panel: {
    initial: { opacity: 0, y: -8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: {
      duration: motion.duration.normal,
      ease: motion.easing.enter,
    },
  },
} as const;
