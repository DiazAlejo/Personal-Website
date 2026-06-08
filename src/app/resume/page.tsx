import { ResumeView } from "@/components/resume/resume-view";
import { resume } from "@/content/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${resume.header.title} | Alejandro Díaz`,
  description: resume.header.subtitle,
};

export default function ResumePage() {
  return <ResumeView />;
}
