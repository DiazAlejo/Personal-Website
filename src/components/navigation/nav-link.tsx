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
        "transition-colors duration-normal ease-default",
        mobile
          ? "block py-element-sm text-h3"
          : "text-small hover:text-text-primary",
        isActive ? "font-medium text-text-primary" : "text-text-secondary",
        className,
      )}
    >
      {label}
    </Link>
  );
}

export { NavLink };
