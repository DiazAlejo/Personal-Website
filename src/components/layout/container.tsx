import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-container-x sm:px-container-x-sm lg:px-container-x-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
