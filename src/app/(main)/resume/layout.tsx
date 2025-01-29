import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import PrintButton from "./_components/print-button";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-16 inset-x-0 flex justify-center md:justify-end lg:top-0 p-4 z-50">
        <PrintButton />
      </div>
      <article
        className={cn(
          inter.className,
          "max-w-7xl mx-auto p-6",
          "print:max-w-none print:m-0 print:p-0",
          "print:scale-[0.95] print:origin-top",
          "[&>h1:first-child]:print:mt-0"
        )}
      >
        {children}
      </article>
    </>
  );
}
