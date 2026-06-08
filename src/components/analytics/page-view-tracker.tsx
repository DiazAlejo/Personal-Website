"use client";

import { trackProjectViewed } from "@/lib/analytics/analytics";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const PROJECT_PATH_PATTERN = /^\/projects\/([^/]+)$/;

function PageViewTracker() {
  const pathname = usePathname();
  const lastTrackedSlug = useRef<string | null>(null);

  useEffect(() => {
    const match = pathname.match(PROJECT_PATH_PATTERN);

    if (!match) {
      lastTrackedSlug.current = null;
      return;
    }

    const projectSlug = match[1];

    if (lastTrackedSlug.current === projectSlug) {
      return;
    }

    lastTrackedSlug.current = projectSlug;
    trackProjectViewed(projectSlug);
  }, [pathname]);

  return null;
}

export { PageViewTracker };
