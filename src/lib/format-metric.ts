import type { MetricCountUp } from "@/types/content";

export function formatCountUpValue(
  current: number,
  config: MetricCountUp,
): string {
  const rounded = Math.round(current);
  const prefix = config.prefix ?? "";
  const suffix = config.suffix ?? "";

  return `${prefix}${rounded}${suffix}`;
}
