import type { ContactFormValidationMessages } from "@/types/content";

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues,
  messages: ContactFormValidationMessages,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = values.name.trim();
  if (!name) {
    errors.name = messages.required;
  } else if (name.length < 2) {
    errors.name = messages.nameMin;
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = messages.required;
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = messages.email;
  }

  const subject = values.subject.trim();
  if (!subject) {
    errors.subject = messages.required;
  } else if (subject.length < 3) {
    errors.subject = messages.subjectMin;
  }

  const message = values.message.trim();
  if (!message) {
    errors.message = messages.required;
  } else if (message.length < 10) {
    errors.message = messages.messageMin;
  }

  return errors;
}
