import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import PwaRegister from "@/components/PwaRegister";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = `${portfolioData.name} - ${portfolioData.title} Portfolio`;

export const metadata: Metadata = {
  title: siteTitle,
  description: portfolioData.summary,
  openGraph: {
    title: siteTitle,
    description: portfolioData.summary,
    siteName: `${portfolioData.name} Portfolio`,
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
        <meta name="apple-mobile-web-app-title" content="CV" />
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