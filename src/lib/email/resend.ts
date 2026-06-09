import { Resend } from "resend";

export interface ContactEmailConfig {
  apiKey: string;
  from: string;
  to: string;
}

export function getContactEmailConfig(): ContactEmailConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

export function getResendClient(apiKey: string): Resend {
  return new Resend(apiKey);
}

export function buildContactEmailContent(submission: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const { name, email, subject, message } = submission;

  return {
    subject: `[Portfolio] ${subject}`,
    text: [
      `New portfolio contact form submission`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
    html: `
      <h2>New portfolio contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `.trim(),
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
