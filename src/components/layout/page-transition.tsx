interface PageTransitionProps {
  children: React.ReactNode;
}

function PageTransition({ children }: PageTransitionProps) {
  return (
    <main id="main-content" className="flex-1 animate-page-fade-in">
      {children}
    </main>
  );
}

export { PageTransition };
