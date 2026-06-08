import { motion } from "@/lib/motion";

/**
 * Shared page transition configuration for Framer Motion.
 * Future slices extend these values — keep animations minimal for now.
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
  item: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motion.duration.slow,
        ease: motion.easing.enter,
      },
    },
  },
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
  item: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motion.duration.slow,
        ease: motion.easing.enter,
      },
    },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motion.stagger.normal,
        delayChildren: 0.05,
      },
    },
  },
} as const;

export const featuredWorkRevealTransition = {
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motion.duration.slow,
        ease: motion.easing.enter,
      },
    },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motion.stagger.slow,
        delayChildren: 0.05,
      },
    },
  },
  header: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motion.duration.slow,
        ease: motion.easing.enter,
      },
    },
  },
} as const;

export const timelineRevealTransition = {
  item: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motion.duration.slow,
        ease: motion.easing.enter,
      },
    },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motion.stagger.normal,
        delayChildren: 0.05,
      },
    },
  },
  header: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motion.duration.slow,
        ease: motion.easing.enter,
      },
    },
  },
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
  item: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motion.duration.slow,
        ease: motion.easing.enter,
      },
    },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motion.stagger.normal,
        delayChildren: 0.05,
      },
    },
  },
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
  button: {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motion.duration.normal,
        ease: motion.easing.enter,
      },
    },
  },
} as const;

export const projectsGridRevealTransition = {
  item: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motion.duration.slow,
        ease: motion.easing.enter,
      },
    },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: motion.stagger.normal,
        delayChildren: 0.05,
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
