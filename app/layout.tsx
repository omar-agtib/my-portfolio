import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar Agtib - Full-Stack Developer",
  description:
    "Portfolio of Omar Agtib - Full-Stack Developer specializing in React, React Native, and Node.js",
  keywords: [
    "Omar Agtib",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Omar Agtib" }],
  openGraph: {
    title: "Omar Agtib - Full-Stack Developer",
    description: "Portfolio of Omar Agtib - Full-Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
