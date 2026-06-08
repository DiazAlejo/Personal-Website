import type { ContactPageContent } from "@/types/content";

export const contactPage: ContactPageContent = {
  header: {
    title: "Contact",
    subtitleLines: [
      "Interested in software engineering, AI systems, data platforms, or collaboration opportunities?",
      "Let's connect.",
    ],
  },
  methods: {
    title: "Contact Methods",
  },
  form: {
    title: "Send a Message",
    fields: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
    placeholders: {
      name: "Your name",
      email: "you@example.com",
      subject: "What is this about?",
      message: "Tell me about the opportunity or project...",
    },
    submitLabel: "Send Message",
    submittingLabel: "Sending...",
    validation: {
      required: "This field is required.",
      email: "Enter a valid email address.",
      nameMin: "Name must be at least 2 characters.",
      subjectMin: "Subject must be at least 3 characters.",
      messageMin: "Message must be at least 10 characters.",
    },
    success: {
      title: "Message received.",
      lines: ["Thanks for reaching out.", "I'll get back to you soon."],
      resetLabel: "Send another message",
    },
  },
  availability: {
    title: "Availability",
    intro: "Currently open to:",
    items: [
      "Software Engineering",
      "AI Engineering",
      "Machine Learning",
      "Data Engineering",
      "Technical Collaboration",
    ],
  },
};
