"use client";

import { pageTransition } from "@/lib/transitions";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        id="main-content"
        initial={prefersReducedMotion ? false : pageTransition.initial}
        animate={prefersReducedMotion ? { opacity: 1 } : pageTransition.animate}
        exit={prefersReducedMotion ? { opacity: 0 } : pageTransition.exit}
        transition={
          prefersReducedMotion ? { duration: 0 } : pageTransition.transition
        }
        className="flex-1"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export { PageTransition };
