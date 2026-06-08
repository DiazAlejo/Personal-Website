"use client";

import { isNavLinkActive } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/content";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends NavItem {
  onNavigate?: () => void;
  className?: string;
  mobile?: boolean;
}

function NavLink({
  href,
  label,
  onNavigate,
  className,
  mobile = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = isNavLinkActive(pathname, href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "rounded-md transition-[color,background-color] duration-normal ease-default",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        mobile
          ? cn(
              "block py-element-sm text-h3",
              isActive && "bg-surface-secondary/40 text-text-primary",
            )
          : cn(
              "relative px-element-sm py-element-xs text-small hover:text-text-primary",
              isActive &&
                "font-medium text-text-primary after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-5 after:-translate-x-1/2 after:rounded-full after:bg-primary/50",
            ),
        !mobile && !isActive && "text-text-secondary",
        className,
      )}
    >
      {label}
    </Link>
  );
}

export { NavLink };
