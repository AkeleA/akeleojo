import type { Metadata } from "next";
import React from "react";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

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
  title: "Akeleojo Achor – Software Engineer & Frontend Dev",
  description:
    "Portfolio of Akeleojo Achor: Node.js, Next.js, Typescript developer.",
  openGraph: {
    title: "Akeleojo Achor – Frontend Developer",
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
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
