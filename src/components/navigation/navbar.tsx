"use client";

import { Container } from "@/components/layout/container";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { NavLink } from "@/components/navigation/nav-link";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar() {
  const isScrolled = useScroll();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-normal ease-default",
        isScrolled
          ? "border-b border-border/80 bg-background/75 shadow-glass backdrop-blur-md backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav
          className="flex h-14 items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="rounded-md text-small font-medium text-text-primary transition-colors duration-normal ease-default hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {site.domain}
          </Link>

          <div className="hidden items-center gap-element-lg md:flex">
            {navigation.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>

          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
}

export { Navbar };
