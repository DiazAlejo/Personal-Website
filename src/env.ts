import { z } from "zod";

const optionalUrl = z.preprocess(
  (value) => (value === "" || value === undefined ? undefined : value),
  z.string().url().optional(),
);

const optionalNonEmptyString = z.preprocess(
  (value) => (value === "" || value === undefined ? undefined : value),
  z.string().min(1).optional(),
);

const envSchema = z
  .object({
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    NEXT_PUBLIC_SITE_URL: optionalUrl,
    NEXT_PUBLIC_ANALYTICS_ENABLED: z
      .enum(["true", "false"])
      .optional()
      .default("true"),
    NEXT_PUBLIC_POSTHOG_KEY: optionalNonEmptyString,
    NEXT_PUBLIC_POSTHOG_HOST: optionalUrl,
    NEXT_PUBLIC_SENTRY_DSN: optionalUrl,
  })
  .superRefine((data, context) => {
    if (data.NEXT_PUBLIC_ANALYTICS_ENABLED === "false") {
      return;
    }

    if (data.NEXT_PUBLIC_POSTHOG_KEY && !data.NEXT_PUBLIC_POSTHOG_HOST) {
      return;
    }

    if (
      data.NODE_ENV === "production" &&
      data.NEXT_PUBLIC_POSTHOG_KEY &&
      !data.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "NEXT_PUBLIC_POSTHOG_HOST is required when NEXT_PUBLIC_POSTHOG_KEY is set.",
        path: ["NEXT_PUBLIC_POSTHOG_HOST"],
      });
    }
  });

function formatEnvErrors(error: z.ZodError<unknown>): string {
  const fieldErrors = error.flatten().fieldErrors as Record<
    string,
    string[] | undefined
  >;
  const messages = Object.entries(fieldErrors).flatMap(([key, values]) =>
    (values ?? []).map((message: string) => `${key}: ${message}`),
  );

  return messages.join("\n");
}

function parseEnv() {
  const result = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ANALYTICS_ENABLED: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_SENTRY_DSN:
      process.env.NEXT_PUBLIC_SENTRY_DSN ?? process.env.SENTRY_DSN,
  });

  if (!result.success) {
    throw new Error(
      `Invalid environment variables:\n${formatEnvErrors(result.error)}`,
    );
  }

  return result.data;
}

export const env = parseEnv();

export type Env = z.infer<typeof envSchema>;
