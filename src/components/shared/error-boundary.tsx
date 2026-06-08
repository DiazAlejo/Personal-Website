"use client";

import { ErrorFallback } from "@/components/shared/error-fallback";
import { errorContent } from "@/content/ui-states";
import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackDescription?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Application error boundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          title={this.props.fallbackTitle ?? errorContent.title}
          description={
            this.props.fallbackDescription ?? errorContent.description
          }
          retryLabel={errorContent.retryLabel}
          onRetry={this.handleRetry}
          actions={errorContent.actions}
        />
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
