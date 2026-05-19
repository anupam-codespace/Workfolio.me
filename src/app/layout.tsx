import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.subtitle}`,
  description: siteConfig.description,
  keywords: ["portfolio", "developer", "android", "full stack", "AI", siteConfig.name],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: `https://${siteConfig.website}`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: `@${siteConfig.twitter}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
