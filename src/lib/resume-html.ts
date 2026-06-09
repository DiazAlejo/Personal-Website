import { readFileSync } from "node:fs";
import path from "node:path";

export function getResumeHtml(): string {
  return readFileSync(
    path.join(process.cwd(), "public/alejandro_diaz_resume.html"),
    "utf-8",
  );
}
