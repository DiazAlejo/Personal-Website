import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  className?: string;
}

function EmptyState({ title, description, className }: EmptyStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "rounded-xl border border-dashed border-border bg-surface/50 px-card py-section-y text-center shadow-soft",
        className,
      )}
    >
      <Typography variant="h3" as="p">
        {title}
      </Typography>
      <Typography variant="body" className="mt-element text-text-secondary">
        {description}
      </Typography>
    </div>
  );
}

export { EmptyState };
