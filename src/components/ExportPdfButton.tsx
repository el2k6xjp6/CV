"use client";

import { Download } from 'lucide-react';

export default function ExportPdfButton() {
  return (
    <button
      type="button"
      aria-label="Export as PDF"
      onClick={() => window.print()}
      className="print:hidden flex-shrink-0 flex items-center gap-1.5 h-9 px-3 rounded-full border border-indigo-500 text-indigo-500 text-xs font-mono hover:bg-indigo-500 hover:text-white transition-colors duration-200"
    >
      <Download size={14} />
      <span className="hidden sm:inline">Export PDF</span>
    </button>
  );
}
