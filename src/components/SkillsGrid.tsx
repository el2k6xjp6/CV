import React from 'react';
import { Skill } from '@/types';
import { Star } from 'lucide-react';

interface SkillsGridProps {
  skills: Skill[];
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
    {skills.map((skill) => (
      <div key={skill.category} className="rounded-xl border border-border-subtle bg-bg-page p-5 shadow-sm flex flex-col gap-2 transition-all duration-200 hover:scale-105 hover:shadow-xl">
        
        {/* 修復分類標題 (如 Frontend) */}
        <h4 className="font-semibold text-text-main mb-2 text-base">
          {skill.category}
        </h4>

        <div className="flex flex-col gap-2">
          {skill.items.map((item) => (
            <div key={item.name} className="flex items-center justify-between w-full px-2 py-1 rounded bg-indigo-100/50 dark:bg-indigo-900/60 text-xs text-zinc-900 dark:text-zinc-100 font-mono border border-indigo-200 dark:border-indigo-800">
              
              <span className="font-medium">{item.name}</span>
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < item.rating ? 'fill-indigo-500 text-indigo-500' : 'fill-border-subtle text-border-subtle'} />
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);