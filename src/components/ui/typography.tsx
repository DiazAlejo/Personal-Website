import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, HTMLAttributes } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      hero: "text-hero",
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      body: "text-body",
      small: "text-small",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const defaultElements: Record<
  NonNullable<VariantProps<typeof typographyVariants>["variant"]>,
  ElementType
> = {
  hero: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  small: "span",
};

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

interface TypographyProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  as?: ElementType;
  children: React.ReactNode;
}

function Typography({
  variant = "body",
  as,
  className,
  children,
  ...props
}: TypographyProps) {
  const resolvedVariant = variant ?? "body";
  const Component = as ?? defaultElements[resolvedVariant];

  return (
    <Component
      className={cn(
        typographyVariants({ variant: resolvedVariant }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Typography, typographyVariants };
export type { TypographyProps, TypographyVariant };
