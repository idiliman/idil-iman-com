import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

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
    <html lang="en">
      <body className={font.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
