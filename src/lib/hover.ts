/**
 * Reusable hover interaction patterns.
 * Subtle elevation and border highlights — no aggressive scaling.
 */
export const hoverPatterns = {
  elevation:
    "transition-[transform,box-shadow,border-color] duration-normal ease-default hover:-translate-y-px hover:shadow-hover active:translate-y-0 active:shadow-soft",
  borderHighlight:
    "transition-[border-color,box-shadow] duration-normal ease-default hover:border-primary/30",
  softShadow:
    "transition-shadow duration-normal ease-default hover:shadow-elevated",
  interactive:
    "transition-[transform,box-shadow,border-color] duration-normal ease-default hover:-translate-y-px hover:border-primary/30 hover:shadow-hover active:translate-y-0",
  cardInteractive:
    "transition-[transform,box-shadow,border-color] duration-normal ease-default hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-hover",
  activePress: "active:scale-[0.98] active:duration-fast",
} as const;

export type HoverPattern = keyof typeof hoverPatterns;
