import { ContactView } from "@/components/contact/contact-view";
import { contactPage } from "@/content/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${contactPage.header.title} | Alejandro Díaz`,
  description: contactPage.header.subtitleLines[0],
};

export default function ContactPage() {
  return <ContactView />;
}
