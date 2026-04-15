import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import PwaRegister from "@/components/PwaRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deron Kao - Senior Software Engineer Portfolio",
  description:
    "Senior Software Engineer with 6+ years of experience building scalable web applications and cloud-native solutions. Currently driving platform optimization at SPH Media. Proven track record in improving system performance and boosting developer productivity. Expert in React, Node.js, Python, and AWS architecture.",
  openGraph: {
    title: "Deron Kao - Senior Software Engineer Portfolio",
    description:
      "Senior Software Engineer with 6+ years of experience building scalable web applications and cloud-native solutions. Currently driving platform optimization at SPH Media. Proven track record in improving system performance and boosting developer productivity. Expert in React, Node.js, Python, and AWS architecture.",
    url: "https://your-domain.com/",
    siteName: "Deron Kao Portfolio",
    locale: "en_SG",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          {/* Register PWA Service Worker on client only */}
          <PwaRegister />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}