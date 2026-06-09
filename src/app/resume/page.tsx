import { seo } from "@/content/seo";
import { createPageMetadata } from "@/lib/seo/metadata";
import { redirect } from "next/navigation";

export const metadata = createPageMetadata({
  title: seo.pages.resume.title,
  description: seo.pages.resume.description,
  path: "/resume",
});

export default function ResumePage() {
  redirect("/alejandro_diaz_resume.html");
}
