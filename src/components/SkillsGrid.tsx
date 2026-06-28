import React from 'react';
import { Skill } from '@/types';

interface SkillsGridProps {
  skills: Skill[];
}

function RatingBar({ rating, total = 5 }: { rating: number; total?: number }) {
  return (
    <span className="flex items-center gap-[3px] flex-shrink-0">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`inline-block w-3 h-2 rounded-sm ${
            i < rating
              ? 'bg-indigo-500'
              : 'bg-indigo-900/40 dark:bg-indigo-950 border border-indigo-800/40'
          }`}
        />
      ))}
    </span>
  );
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
    {skills.map((skill) => (
      <div key={skill.category} className="rounded-xl border border-border-subtle bg-bg-page p-5 shadow-sm flex flex-col gap-2 transition-all duration-200 hover:scale-105 hover:shadow-xl">
        <h4 className="font-mono font-semibold text-sm text-indigo-500 mb-2 flex items-center gap-1">
          <span className="text-text-muted">[</span>
          {skill.category.toLowerCase().replace(' ', '_')}
          <span className="text-text-muted">]</span>
        </h4>

        <div className="flex flex-col gap-1.5">
          {skill.items.map((item) => (
            <div key={item.name} className="flex items-center justify-between w-full px-2 py-1 rounded bg-indigo-100/30 dark:bg-indigo-900/30 text-xs text-zinc-900 dark:text-zinc-100 font-mono border border-indigo-200/50 dark:border-indigo-800/50">
              <span className="font-medium truncate mr-2">{item.name}</span>
              <RatingBar rating={item.rating} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
