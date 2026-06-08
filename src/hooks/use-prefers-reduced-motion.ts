"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Returns whether the user prefers reduced motion.
 * Wraps Framer Motion's hook for a project-wide animation preference API.
 */
function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}

export { usePrefersReducedMotion };
