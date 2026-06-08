import { AppShell } from "@/components/layout/app-shell";
import { GlobalStructuredData } from "@/components/seo/global-structured-data";
import "@/styles/globals.css";
import { createRootMetadata } from "@/lib/seo/metadata";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = createRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <GlobalStructuredData />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
