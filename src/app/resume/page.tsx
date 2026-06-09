import { ResumeView } from "@/components/resume/resume-view";
import { seo } from "@/content/seo";
import { getResumeHtml } from "@/lib/resume-html";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: seo.pages.resume.title,
  description: seo.pages.resume.description,
  path: "/resume",
});

export default function ResumePage() {
  return <ResumeView html={getResumeHtml()} />;
}
