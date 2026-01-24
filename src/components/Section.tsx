import React from 'react';


interface SectionProps {
    title?: string;
    className?: string;
    id?: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, className = '', id, children }) => (
    <section
        id={id}
        /* 外層撐滿寬度，接收 bg-bg-card 或 bg-bg-page */
        className={`w-full py-8 scroll-mt-24 ${className}`}
        aria-label={title}
    >
        {/* 內層負責居中與限制寬度 */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
            {title && (
                <h2 className="text-3xl font-bold mb-6 tracking-tight text-text-main text-center sm:text-left">
                    {title}
                </h2>
            )}
            {children}
        </div>
    </section>
);