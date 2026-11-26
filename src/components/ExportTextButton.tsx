"use client";

import { FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { portfolioToText } from '@/lib/exportText';

export default function ExportTextButton() {
  const handleExport = () => {
    const text = portfolioToText(portfolioData);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolioData.name.replace(/\s+/g, '_')}_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      type="button"
      aria-label="Export as plain text"
      onClick={handleExport}
      className="print:hidden flex-shrink-0 flex items-center gap-1.5 h-9 px-3 rounded-full border border-indigo-500 text-indigo-500 text-xs font-mono hover:bg-indigo-500 hover:text-white transition-colors duration-200"
    >
      <FileText size={14} />
      <span className="hidden sm:inline">Export TXT</span>
    </button>
  );
}
