import type { Metadata } from "next";
import React from "react";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akeleojo Achor - Software Engineer & Frontend Dev",
  description:
    "Portfolio of Akeleojo Achor: Node.js, Next.js, Typescript developer.",
  openGraph: {
    title: "Akeleojo Achor - Frontend Developer",
    description: "Check out my portfolio and projects",
    url: "https://akeleojo.dev",
    siteName: "Akeleojo Achor",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-background text-foreground ${inter.variable} ${outfit.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-background"
            >
              Skip to main content
            </a>
            <ParticleBackground />
            <Header />
            <Toaster richColors position="top-right" />
            <main id="main-content" className="relative z-10 scroll-smooth">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
