"use client";

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export default function NavLinks() {
  return (
    <ul className="flex gap-6 text-sm font-medium flex-nowrap overflow-x-auto md:overflow-x-visible scrollbar-hide">
      {sections.map(({ id, label }) => (
        <li key={id}>
          <button
            type="button"
            className="hover:text-indigo-400 hover:scale-105 transition-all duration-200 bg-transparent p-0 m-0 border-none cursor-pointer h-9 flex items-center font-mono gap-0.5"
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            <span className="text-indigo-500 opacity-60">./</span>
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
