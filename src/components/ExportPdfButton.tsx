"use client";

import { FileDown } from "lucide-react";

const PDF_FILE_NAME = "Deron_Kao_CV";

export default function ExportPdfButton() {
  const handleExport = () => {
    // The browser uses the document title as the default PDF file name.
    const originalTitle = document.title;
    document.title = PDF_FILE_NAME;
    window.addEventListener("afterprint", () => { document.title = originalTitle; }, { once: true });
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      aria-label="Export CV as PDF"
      title="Export CV as PDF"
      className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      <FileDown className="w-4 h-4" />
    </button>
  );
}
