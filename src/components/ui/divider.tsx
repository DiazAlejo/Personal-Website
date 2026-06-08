import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type DividerOrientation = "horizontal" | "vertical";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation;
}

function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Divider };
export type { DividerOrientation, DividerProps };
