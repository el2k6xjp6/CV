"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

// Helper to check if we are on the client
const subscribe = () => () => {}; 
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!isMounted) {
    return <div className="p-2 w-20 h-9" aria-hidden="true" />;
  }
  const isDark = resolvedTheme === "dark";
  return (
    <button
      aria-label={isDark ? "切換至淺色模式" : "切換至深色模式"}
      className="w-20 h-9 flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 relative transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-2"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
      tabIndex={0}
    >
      {/* Track background animation */}
      <span className={`absolute inset-0 rounded-full transition-colors duration-300 ${isDark ? 'bg-zinc-900' : 'bg-white'}`}></span>
        <span
          className={`absolute inset-0 rounded-full transition-all duration-500 ${isDark ? 'bg-zinc-900' : 'bg-white'}`}
          style={{
            boxShadow: isDark
              ? '0 0 0 2px #6366f1, 0 2px 8px rgba(0,0,0,0.12)'
              : '0 0 0 2px #6366f1, 0 2px 8px rgba(0,0,0,0.08)',
            transition: 'background-color 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1)',
          }}
        ></span>
      <span
        className="absolute top-1 w-7 h-7 flex items-center justify-center z-10"
        style={{
            transform: `translateX(${isDark ? 32 : 0}px) scale(${isDark ? 1.1 : 1})`,
            opacity: isDark ? 1 : 0.92,
            transition:
              'transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-zinc-200 transition-colors duration-200" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)] transition-colors duration-200" />
        )}
      </span>
      {/* Accessible label for screen readers */}
      <span className="sr-only">{isDark ? "切換至淺色模式" : "切換至深色模式"}</span>
    </button>
  );
}