import { AnalyticsShell } from "@/components/analytics/analytics-shell";
import { PageTransition } from "@/components/layout/page-transition";
import { Footer, Navbar } from "@/components/navigation";
import { ErrorBoundary } from "@/components/shared/error-boundary";
import { SkipLink } from "@/components/shared/skip-link";

interface AppShellProps {
  children: React.ReactNode;
}

function AppShell({ children }: AppShellProps) {
  return (
    <AnalyticsShell>
      <div className="flex min-h-screen flex-col">
        <SkipLink />
        <Navbar />
        <ErrorBoundary>
          <PageTransition>{children}</PageTransition>
        </ErrorBoundary>
        <Footer />
      </div>
    </AnalyticsShell>
  );
}

export { AppShell };
