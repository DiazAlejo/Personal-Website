import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-section-y md:py-section-y-md", className)}
      {...props}
    >
      {children}
    </section>
  );
}
