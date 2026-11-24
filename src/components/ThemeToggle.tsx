"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const subscribe = () => () => {}; 
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  
  if (!isMounted) {
    return <div className="w-[80px] h-10 flex-shrink-0" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      // p-1 (4px) padding keeps the slider clear of the border
      className="group relative w-[80px] h-10 flex-shrink-0 rounded-full border-2 border-indigo-500 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 p-1"
    >
      {/* Slider track */}
      <div className="relative w-full h-full flex items-center">
        
        {/* Slider knob */}
        <div
          className={`
            w-7 h-7 flex items-center justify-center rounded-full 
            transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            shadow-md
            ${isDark 
              ? 'bg-zinc-950 text-indigo-400' 
              : 'bg-white text-yellow-500'
            }
          `}
          style={{
            // Travel distance: 80px width - 4px borders - 8px padding = 68px track;
            // knob is 28px (w-7), so it slides 68 - 28 = 40px
            transform: isDark ? 'translateX(40px)' : 'translateX(0px)'
          }}
        >
          {isDark ? (
            <Moon className="w-4 h-4 fill-current" />
          ) : (
            <Sun className="w-4 h-4 fill-current" />
          )}
        </div>

        {/* Decorative background icons, pinned to each side */}
        <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
          <Sun className={`w-3.5 h-3.5 text-yellow-500/30 transition-opacity ${isDark ? 'opacity-100' : 'opacity-0'}`} />
          <Moon className={`w-3.5 h-3.5 text-indigo-400/30 transition-opacity ${isDark ? 'opacity-0' : 'opacity-100'}`} />
        </div>
      </div>

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}