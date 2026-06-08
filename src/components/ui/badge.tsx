import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-element-xs overflow-hidden rounded-full border px-element-sm py-element-xs text-xs font-medium whitespace-nowrap transition-[color,box-shadow,border-color] duration-normal ease-default focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "border-border bg-surface-secondary text-text-secondary [a&]:hover:border-primary/30 [a&]:hover:bg-surface-secondary/80",
        secondary:
          "border-primary/20 bg-primary/15 text-text-primary [a&]:hover:border-primary/30 [a&]:hover:bg-primary/25",
        outline:
          "border-border bg-transparent text-text-secondary [a&]:hover:border-primary/30 [a&]:hover:text-text-primary",
        tag: "border-border bg-surface-secondary/80 text-text-secondary [a&]:hover:border-primary/30",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90",
        ghost:
          "border-transparent bg-transparent text-text-secondary [a&]:hover:bg-surface-secondary/60 [a&]:hover:text-text-primary",
      },
    },
    defaultVariants: {
      variant: "tag",
    },
  },
);

function Badge({
  className,
  variant = "tag",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
