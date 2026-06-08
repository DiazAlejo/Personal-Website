import { skipLinkContent } from "@/content/ui-states";
import { cn } from "@/lib/utils";

function SkipLink() {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only",
        "focus:fixed focus:top-element focus:left-element focus:z-[100]",
        "focus:rounded-lg focus:border focus:border-border focus:bg-surface",
        "focus:px-element-md focus:py-element-sm focus:text-small focus:font-medium",
        "focus:text-text-primary focus:shadow-elevated",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
      )}
    >
      {skipLinkContent.label}
    </a>
  );
}

export { SkipLink };
