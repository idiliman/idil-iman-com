"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = "Idil Iman - Resume.pdf";

    const printStyle = document.createElement("style");
    printStyle.textContent = `
          @media print {
            @page { size: auto; margin: 0; }
          }
        `;

    document.head.appendChild(printStyle);
    window.print();

    // Cleanup after print
    setTimeout(() => {
      document.head.removeChild(printStyle);
      document.title = originalTitle;
    }, 500);
  };

  return (
    <button
      onClick={handlePrint}
      className="flex items-center justify-center p-3 backdrop-blur-sm text-zinc-400 rounded-full shadow-lg print:hidden z-50 transition-all duration-200 hover:scale-105"
    >
      <Printer size={24} />
    </button>
  );
}
