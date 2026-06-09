"use client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import type { ContactPageContent } from "@/types/content";
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/validate-contact-form";
import { hoverPatterns } from "@/lib/hover";
import { caseStudyRevealTransition } from "@/lib/transitions";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useId, useState } from "react";

interface ContactFormProps {
  form: ContactPageContent["form"];
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm({ form }: ContactFormProps) {
  const formId = useId();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactFormValues, boolean>>
  >({});

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : caseStudyRevealTransition.item;

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));

    if (touched[field]) {
      const nextErrors = validateContactForm(
        { ...values, [field]: value },
        form.validation,
      );
      setErrors((current) => ({
        ...current,
        [field]: nextErrors[field],
      }));
    }
  }

  function handleBlur(field: keyof ContactFormValues) {
    setTouched((current) => ({ ...current, [field]: true }));
    const nextErrors = validateContactForm(values, form.validation);
    setErrors((current) => ({
      ...current,
      [field]: nextErrors[field],
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateContactForm(values, form.validation);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setSubmitError(data?.error ?? form.error.description);
        return;
      }

      setStatus("success");
      setValues(initialValues);
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
      setSubmitError(form.error.description);
    }
  }

  function fieldErrorId(field: keyof ContactFormValues) {
    return `${formId}-${field}-error`;
  }

  function renderField(
    field: keyof ContactFormValues,
    type: "text" | "email" | "textarea",
  ) {
    const error = touched[field] ? errors[field] : undefined;
    const inputId = `${formId}-${field}`;

    return (
      <div className="flex flex-col gap-element-sm">
        <Label htmlFor={inputId}>{form.fields[field]}</Label>

        {type === "textarea" ? (
          <Textarea
            id={inputId}
            name={field}
            value={values[field]}
            onChange={(event) => updateField(field, event.target.value)}
            onBlur={() => handleBlur(field)}
            placeholder={form.placeholders[field]}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? fieldErrorId(field) : undefined}
            disabled={status === "submitting"}
            required
          />
        ) : (
          <Input
            id={inputId}
            name={field}
            type={type}
            value={values[field]}
            onChange={(event) => updateField(field, event.target.value)}
            onBlur={() => handleBlur(field)}
            placeholder={form.placeholders[field]}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? fieldErrorId(field) : undefined}
            disabled={status === "submitting"}
            required
            autoComplete={field === "email" ? "email" : field === "name" ? "name" : undefined}
          />
        )}

        {error ? (
          <p
            id={fieldErrorId(field)}
            role="alert"
            className="text-small text-destructive"
          >
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      aria-labelledby="contact-form-heading"
      className="rounded-xl border border-border bg-surface p-card shadow-soft"
    >
      <Typography variant="h2" id="contact-form-heading">
        {form.title}
      </Typography>

      <AnimatePresence mode="wait">
        {status === "error" ? (
          <motion.div
            key="error"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            role="alert"
            aria-live="assertive"
            className="mt-element-xl flex flex-col items-start gap-element-md rounded-lg border border-destructive/30 bg-destructive/5 p-card"
          >
            <AlertCircle aria-hidden="true" className="size-8 text-destructive" />
            <div>
              <Typography variant="h3" as="p">
                {form.error.title}
              </Typography>
              <Typography
                variant="body"
                className="mt-element-sm text-text-secondary"
              >
                {submitError ?? form.error.description}
              </Typography>
            </div>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setStatus("idle");
                setSubmitError(null);
              }}
            >
              {form.error.retryLabel}
            </Button>
          </motion.div>
        ) : status === "success" ? (
          <motion.div
            key="success"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            role="status"
            aria-live="polite"
            className="mt-element-xl flex flex-col items-start gap-element-md rounded-lg border border-border bg-surface-secondary/40 p-card"
          >
            <CheckCircle2
              aria-hidden="true"
              className="size-8 text-primary"
            />
            <div>
              <Typography variant="h3" as="p">
                {form.success.title}
              </Typography>
              {form.success.lines.map((line) => (
                <Typography
                  key={line}
                  variant="body"
                  className="mt-element-sm text-text-secondary"
                >
                  {line}
                </Typography>
              ))}
            </div>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setStatus("idle")}
            >
              {form.success.resetLabel}
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            id={formId}
            onSubmit={handleSubmit}
            noValidate
            className="mt-element-xl flex flex-col gap-element-lg"
            aria-busy={status === "submitting"}
          >
            {renderField("name", "text")}
            {renderField("email", "email")}
            {renderField("subject", "text")}
            {renderField("message", "textarea")}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === "submitting"}
              className={cn("w-full sm:w-auto", hoverPatterns.elevation)}
              aria-describedby={status === "submitting" ? `${formId}-status` : undefined}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 aria-hidden="true" className="animate-spin" />
                  {form.submittingLabel}
                </>
              ) : (
                form.submitLabel
              )}
            </Button>

            {status === "submitting" ? (
              <p id={`${formId}-status`} className="sr-only">
                {form.submittingLabel}
              </p>
            ) : null}
          </motion.form>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export { ContactForm };
