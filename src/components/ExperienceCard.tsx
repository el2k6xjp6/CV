import React from 'react';
import { Experience } from '@/types';
import { AnimatedCard, BulletList, TechTags } from './CardParts';

const TimelineLine = (
    <div className="hidden sm:block absolute left-0 top-0 h-full w-6 flex justify-center">
        <span className="w-0.5 h-full bg-border-subtle rounded-full" />
    </div>
);

export const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
    <AnimatedCard ariaLabel={`Experience at ${experience.company}`} before={TimelineLine}>
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <div>
                <h3 className="text-lg font-semibold text-text-main">{experience.company}</h3>
                <span className="text-sm text-text-muted">
                    {experience.location} &bull; {experience.period}
                </span>
            </div>
            <span className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-indigo-100/50 dark:bg-indigo-900/80 text-indigo-700 dark:text-indigo-200 text-xs font-medium">
                {experience.role}
            </span>
        </header>
        <TechTags items={experience.techStack} className="mb-3" />
        <BulletList items={experience.achievements} />
    </AnimatedCard>
);
