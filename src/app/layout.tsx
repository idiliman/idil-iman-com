import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const font = Geist_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://idiliman.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Idil Iman",
    template: "%s | Idil Iman",
  },
  description: "Full-Stack Developer based in Kuala Lumpur, Malaysia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={font.className}
    >
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main>{children}</main>
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
