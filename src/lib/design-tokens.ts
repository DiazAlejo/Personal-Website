/**
 * Design token reference for TypeScript consumers.
 * Visual values are defined in src/styles/tokens/*.css
 */
export const colors = {
  background: "#09090B",
  surface: "#111827",
  surfaceSecondary: "#1F2937",
  primary: "#1E3A8A",
  textPrimary: "#F9FAFB",
  textSecondary: "#9CA3AF",
  border: "rgba(255, 255, 255, 0.08)",
} as const;

export const spacing = {
  sectionY: "section-y",
  sectionYMd: "section-y-md",
  containerX: "container-x",
  containerXSm: "container-x-sm",
  containerXLg: "container-x-lg",
  card: "card",
  cardGap: "card-gap",
  element: "element",
  elementSm: "element-sm",
  elementLg: "element-lg",
  elementXl: "element-xl",
} as const;

export const typography = {
  hero: "text-hero",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  body: "text-body",
  small: "text-small",
} as const;

export const shadows = {
  soft: "shadow-soft",
  elevated: "shadow-elevated",
  hover: "shadow-hover",
  glass: "shadow-glass",
} as const;
