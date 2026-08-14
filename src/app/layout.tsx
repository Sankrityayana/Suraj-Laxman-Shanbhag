import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppLayout } from "@/components/shell/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suraj Laxman Shanbhag | AI/ML Engineer & Builder",
  description:
    "Explore the engineering work, projects, research, technologies and experiments of Suraj Laxman Shanbhag across AI/ML, software, data science and cybersecurity.",
  keywords: [
    "Suraj Laxman Shanbhag",
    "Suraj Shanbhag",
    "AI/ML Engineer",
    "Software Developer",
    "Data Science",
    "Cybersecurity",
    "Presidency University",
    "RAG",
    "FastAPI",
    "Next.js",
    "Sentence Transformers",
    "FAISS"
  ],
  authors: [{ name: "Suraj Laxman Shanbhag" }],
  openGraph: {
    title: "Suraj Laxman Shanbhag | AI/ML Engineer & Builder",
    description:
      "Explore the engineering universe, projects, research, technologies and experiments of Suraj Laxman Shanbhag across AI/ML, software, data science and cybersecurity.",
    type: "website",
    locale: "en_US",
    siteName: "Suraj Laxman Shanbhag Portfolio"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
