import { ContactView } from "@/components/contact/contact-view";
import { seo } from "@/content/seo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: seo.pages.contact.title,
  description: seo.pages.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactView />;
}
