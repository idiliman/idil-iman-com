import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.seo.title} | ${site.seo.subtitle}`,
  description: site.seo.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="mx-auto flex min-h-dvh max-w-xl flex-col px-6 py-12 sm:py-20">
          <div className="mb-4 flex flex-1 flex-col gap-12 sm:gap-16">
            {children}
          </div>

          <footer className="text-sm text-muted/40">
            <span>Designed + Coded with by Me</span>
          </footer>
        </main>
      </body>
    </html>
  );
}
