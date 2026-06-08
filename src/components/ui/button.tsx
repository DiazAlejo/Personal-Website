import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-element-sm rounded-lg text-sm font-medium whitespace-nowrap transition-[background-color,box-shadow,border-color,color] duration-normal ease-default outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-elevated",
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-elevated",
        secondary:
          "border border-border bg-surface-secondary text-text-primary hover:border-primary/30 hover:bg-surface-secondary/80",
        ghost:
          "text-text-primary hover:bg-surface-secondary/60 hover:text-text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border border-border bg-transparent text-text-primary hover:border-primary/30 hover:bg-surface-secondary/40",
      },
      size: {
        default: "h-10 px-element-md py-element-sm has-[>svg]:px-element",
        sm: "h-8 gap-element-sm rounded-md px-element has-[>svg]:px-element-sm text-xs",
        lg: "h-11 rounded-lg px-element-lg has-[>svg]:px-element-md",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
