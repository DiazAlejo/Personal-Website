/**
 * Shared motion constants for Framer Motion and CSS transitions.
 * Future slices consume these values — do not animate pages in this slice.
 */
export const motion = {
  duration: {
    fast: 0.15,
    normal: 0.25,
    slow: 0.4,
    slower: 0.6,
  },
  easing: {
    default: [0.25, 0.1, 0.25, 1] as const,
    enter: [0, 0, 0.2, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
    smooth: [0.45, 0, 0.15, 1] as const,
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

export type MotionDuration = keyof typeof motion.duration;
export type MotionEasing = keyof typeof motion.easing;
export type MotionStagger = keyof typeof motion.stagger;
