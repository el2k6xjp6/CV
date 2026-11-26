"use client";
import React from 'react';
import { motion } from 'framer-motion';

/** Card that fades in on scroll; shared by experience and project entries. */
export function AnimatedCard({ ariaLabel, children, before }: { ariaLabel: string; children: React.ReactNode; before?: React.ReactNode }) {
    return (
        <motion.div
            className="relative flex"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {before}
            <article
                className="relative sm:ml-8 w-full rounded-xl border border-border-subtle bg-bg-card shadow-sm p-6 mb-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                aria-label={ariaLabel}
            >
                {children}
            </article>
        </motion.div>
    );
}

export function TechTags({ items, className = '' }: { items: string[]; className?: string }) {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {items.map((tech) => (
                <span
                    key={tech}
                    className="inline-block px-2 py-0.5 rounded bg-blue-100/50 dark:bg-blue-900/60 text-xs text-zinc-900 dark:text-zinc-100 font-mono border border-blue-200 dark:border-blue-800"
                >
                    {tech}
                </span>
            ))}
        </div>
    );
}

export function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-2 text-text-muted text-sm">
            {items.map((item) => (
                <li key={item} className="flex gap-2">
                    <span className="text-indigo-500 font-mono flex-shrink-0 select-none">›</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
