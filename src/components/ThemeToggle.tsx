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
    return <div className="w-20 h-10" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "切換至淺色模式" : "切換至深色模式"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      // 設定 p-1 (4px) 的內距，讓滑塊與邊框保持安全距離
      className="group relative w-20 h-10 rounded-full border-2 border-indigo-500 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 p-1"
    >
      {/* 內部滑動軌道 */}
      <div className="relative w-full h-full flex items-center">
        
        {/* 滑動圓圈 (Slider) */}
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
            // 精確位移計算：
            // 容器寬度 80px - 兩邊邊框 4px - 兩邊內距 8px = 剩餘空間 68px
            // 滑塊 28px (w-7)，所以滑動距離 = 68 - 28 = 40px
            transform: isDark ? 'translateX(40px)' : 'translateX(0px)'
          }}
        >
          {isDark ? (
            <Moon className="w-4 h-4 fill-current" />
          ) : (
            <Sun className="w-4 h-4 fill-current" />
          )}
        </div>

        {/* 裝飾性背景圖示 (固定在左右兩側) */}
        <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
          <Sun className={`w-3.5 h-3.5 text-yellow-500/30 transition-opacity ${isDark ? 'opacity-100' : 'opacity-0'}`} />
          <Moon className={`w-3.5 h-3.5 text-indigo-400/30 transition-opacity ${isDark ? 'opacity-0' : 'opacity-100'}`} />
        </div>
      </div>

      <span className="sr-only">切換主題</span>
    </button>
  );
}