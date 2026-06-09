"use client";

import { Button } from "@/components/ui/button";
import { resume } from "@/content/resume";
import { trackResumeDownload } from "@/lib/analytics/analytics";
import { Download, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ResumeViewProps {
  html: string;
}

function ResumeView({ html }: ResumeViewProps) {
  const router = useRouter();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-black/85"
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
    >
      <div className="flex shrink-0 items-center justify-between gap-element-sm border-b border-white/10 bg-background/95 px-element-md py-element-sm backdrop-blur-md sm:px-element-lg">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="text-text-primary"
        >
          <X aria-hidden="true" />
          Close
        </Button>

        <Button asChild variant="secondary" size="sm">
          <a
            href={resume.pdf.path}
            download={resume.pdf.filename}
            onClick={() => trackResumeDownload("resume")}
          >
            <Download aria-hidden="true" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-element-md sm:p-element-lg">
        <iframe
          srcDoc={html}
          title="Alejandro Díaz Resume"
          className="mx-auto block min-h-[calc(100vh-6rem)] w-full max-w-[860px] rounded-md border-0 bg-white shadow-2xl"
        />
      </div>
    </div>
  );
}

export { ResumeView };
