/**
 * Reusable hover interaction patterns.
 * Subtle elevation and border highlights — no aggressive scaling.
 */
export const hoverPatterns = {
  elevation:
    "transition-[transform,box-shadow,border-color] duration-normal ease-default hover:-translate-y-px hover:shadow-hover",
  borderHighlight:
    "transition-[border-color,box-shadow] duration-normal ease-default hover:border-primary/30",
  softShadow:
    "transition-shadow duration-normal ease-default hover:shadow-elevated",
  interactive:
    "transition-[transform,box-shadow,border-color] duration-normal ease-default hover:-translate-y-px hover:border-primary/30 hover:shadow-hover",
} as const;

export type HoverPattern = keyof typeof hoverPatterns;
