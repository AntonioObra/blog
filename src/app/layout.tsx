import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { ThemeProvider } from "@/components/ThemeProvider";

// * Fonts
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
const fontHeading = localFont({
  src: "../assets/fonts/DankMono-Bold.woff2",
  variable: "--font-heading",
});

// * Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://blog.obradovic.dev"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "obradovic",
    "obradovic blog",
    "antonio obradovic",
    "Antonio Obradović",
    "portfolio",
    "obradovic.dev",
    "blog.obradovic",
    "blog.obradovic.dev",
    "antonio obradovic blog",
    "antonio obradovic website",
    "Next.js",
    "React",
    "web development",
    "web developer",
  ],
  authors: [
    {
      name: "Antonio Obradović",
      url: "https://obradovic.dev",
    },
  ],
  creator: "Antonio Obradović",
  publisher: "Antonio Obradović",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@obradovicdotdev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.className,
          fontHeading.variable,
          "min-h-screen bg-background antialiased"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
