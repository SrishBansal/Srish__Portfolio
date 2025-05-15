import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Innovating with Code",
  description: "Personal portfolio showcasing projects, skills, and experience in technology and development.",
  keywords: ["portfolio", "web development", "software engineer", "full stack", "developer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
