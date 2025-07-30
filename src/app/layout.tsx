import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Geist_Mono, Montserrat } from "next/font/google";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/app/tokens.css";
import "@/app/tailwind.css";

export const metadata: Metadata = {
  title: "Confluence UI Kit",
  description: "Atlassian Design System components and blocks for Confluence applications",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

const AtlassianSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const MontserratSerif = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        AtlassianSans.variable,
        GeistMono.variable,
        MontserratSerif.variable,
        "bg-background text-foreground",
      )}
    >
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <body className="flex grow">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
