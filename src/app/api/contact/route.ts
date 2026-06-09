import { contactSubmissionSchema } from "@/lib/email/contact-schema";
import {
  buildContactEmailContent,
  getContactEmailConfig,
  getResendClient,
} from "@/lib/email/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const config = getContactEmailConfig();

  if (!config) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSubmissionSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    const firstError = Object.values(fieldErrors).flat()[0];

    return NextResponse.json(
      { error: firstError ?? "Invalid form submission." },
      { status: 400 },
    );
  }

  const emailContent = buildContactEmailContent(parsed.data);
  const resend = getResendClient(config.apiKey);

  const { error } = await resend.emails.send({
    from: config.from,
    to: [config.to],
    replyTo: parsed.data.email,
    subject: emailContent.subject,
    html: emailContent.html,
    text: emailContent.text,
  });

  if (error) {
    console.error("Resend contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
