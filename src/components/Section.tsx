import React from 'react';
import { toCodeLabel } from '@/lib/format';

interface SectionProps {
    title?: string;
    className?: string;
    id?: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, className = '', id, children }) => (
    <section
        id={id}
        // Full-width outer band; takes the section background (bg-bg-card or bg-bg-page)
        className={`w-full py-8 scroll-mt-24 ${className}`}
        aria-label={title}
    >
        {/* Inner container centres the content and limits its width */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
            {title && (
                <h2 className="font-mono text-2xl font-bold mb-6 tracking-tight text-text-main text-center sm:text-left flex items-center gap-2">
                    <span className="text-indigo-500 font-normal">{'//'}</span>
                    {toCodeLabel(title)}
                </h2>
            )}
            {children}
        </div>
    </section>
);
