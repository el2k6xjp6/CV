"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/types';

interface ExperienceCardProps {
    experience: Experience;
}



export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <motion.div
            className="relative flex"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {/* Timeline 垂直線：改用 border-subtle */}
            <div className="hidden sm:block absolute left-0 top-0 h-full w-6 flex justify-center">
                <span className="w-0.5 h-full bg-border-subtle rounded-full" />
            </div>

            <article
                /* 背景改用 bg-bg-card，邊框改用 border-border-subtle */
                className="relative sm:ml-8 w-full rounded-xl border border-border-subtle bg-bg-card shadow-sm p-6 mb-8 transition-all duration-200 hover:scale-105 hover:shadow-xl"
                aria-label={`Experience at ${experience.company}`}
            >
                <header className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div>
                        {/* 標題改用 text-text-main (亮色) */}
                        <h3 className="text-lg font-semibold text-text-main">
                            {experience.company}
                        </h3>
                        {/* 副標題改用 text-text-muted (淺灰色) */}
                        <span className="text-sm text-text-muted">
                            {experience.location} &bull; {experience.period}
                        </span>
                    </div>
                    {/* Badge：調高深色模式下的不透明度，增強對比 */}
                    <span className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-indigo-100/50 dark:bg-indigo-900/80 text-indigo-700 dark:text-indigo-200 text-xs font-medium">
                        {experience.role}
                    </span>
                </header>

                {/* Tech Stack Tags：調整顏色確保可讀性 */}
                <section className="mb-3 flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="inline-block px-2 py-0.5 rounded bg-blue-100/50 dark:bg-blue-900/60 text-xs text-zinc-900 dark:text-zinc-100 font-mono border border-blue-200 dark:border-blue-800"
                        >
                            {tech}
                        </span>
                    ))}
                </section>

                {/* 列表內容：改用 text-text-main 或 text-text-muted */}
                <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
                    {experience.achievements.map((ach, idx) => (
                        <li key={idx} className="marker:text-indigo-500">{ach}</li>
                    ))}
                </ul>
            </article>
        </motion.div>
    );
};