import React from 'react';
import { Project } from '@/types';
import { AnimatedCard, BulletList, TechTags } from './CardParts';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <AnimatedCard ariaLabel={`Project: ${project.title}`}>
        <header className="mb-3">
            <h3 className="text-lg font-semibold text-text-main">{project.title}</h3>
        </header>
        <p className="text-text-muted text-sm mb-4">{project.description}</p>
        <TechTags items={project.techStack} className="mb-4" />
        <BulletList items={project.achievements} />
    </AnimatedCard>
);
