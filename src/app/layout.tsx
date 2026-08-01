import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kheang Huysor | Java Developer",
  description: "Portfolio of Kheang Huysor, a Software Developer specializing in APIs, microservices, and backend development.",
  keywords: ["Java Developer", "Software Developer", "Spring Boot", "APIs", "Microservices", "Kheang Huysor", "Cambodia"],
  authors: [{ name: "Kheang Huysor" }],
  openGraph: {
    title: "Kheang Huysor | Java Developer",
    description: "Portfolio of Kheang Huysor, a Software Developer specializing in APIs, microservices, and backend development.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans min-h-screen bg-slate-950 text-slate-50 antialiased flex flex-col selection:bg-cyan-500/30`}>
        {children}
      </body>
    </html>
  );
}
