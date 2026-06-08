"use client";

import { NavLink } from "@/components/navigation/nav-link";
import { Button } from "@/components/ui/button";
import { navigation } from "@/content/navigation";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { mobileMenuTransition } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

const MENU_ID = "mobile-navigation-menu";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const buttonId = useId();

  useLockBodyScroll(isOpen);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((current) => !current);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !menuPanelRef.current) {
        return;
      }

      const focusableElements = Array.from(
        menuPanelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const firstLink =
      menuPanelRef.current?.querySelector<HTMLElement>(focusableSelector);
    firstLink?.focus();

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  return (
    <div className="md:hidden">
      <Button
        ref={menuButtonRef}
        id={buttonId}
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-expanded={isOpen}
        aria-controls={MENU_ID}
        aria-haspopup="dialog"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={toggleMenu}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              key="mobile-menu-overlay"
              role="presentation"
              aria-hidden="true"
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
              initial={
                prefersReducedMotion
                  ? false
                  : mobileMenuTransition.overlay.initial
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : mobileMenuTransition.overlay.animate
              }
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : mobileMenuTransition.overlay.exit
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : mobileMenuTransition.overlay.transition
              }
              onClick={closeMenu}
            />
            <motion.div
              key="mobile-menu-panel"
              ref={menuPanelRef}
              id={MENU_ID}
              role="dialog"
              aria-modal="true"
              aria-labelledby={buttonId}
              className={cn(
                "fixed inset-x-0 top-14 z-40 border-b border-border",
                "bg-background/95 px-container-x py-element-lg backdrop-blur-md",
              )}
              initial={
                prefersReducedMotion
                  ? false
                  : mobileMenuTransition.panel.initial
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : mobileMenuTransition.panel.animate
              }
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : mobileMenuTransition.panel.exit
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : mobileMenuTransition.panel.transition
              }
            >
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-element-sm"
              >
                {navigation.map((item) => (
                  <NavLink
                    key={item.href}
                    {...item}
                    mobile
                    onNavigate={closeMenu}
                  />
                ))}
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export { MobileMenu };
