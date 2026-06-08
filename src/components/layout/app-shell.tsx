import { PageTransition } from "@/components/layout/page-transition";
import { Footer, Navbar } from "@/components/navigation";

interface AppShellProps {
  children: React.ReactNode;
}

function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </div>
  );
}

export { AppShell };
