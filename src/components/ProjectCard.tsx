"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            className="relative flex"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <article
                className="relative sm:ml-8 w-full rounded-xl border border-border-subtle bg-bg-card shadow-sm p-6 mb-8 transition-all duration-200 hover:scale-105 hover:shadow-xl"
                aria-label={`Project: ${project.title}`}
            >
                <header className="mb-3">
                    <h3 className="text-lg font-semibold text-text-main">
                        {project.title}
                    </h3>
                </header>

                <p className="text-text-muted text-sm mb-4">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <section className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="inline-block px-2 py-0.5 rounded bg-blue-100/50 dark:bg-blue-900/60 text-xs text-zinc-900 dark:text-zinc-100 font-mono border border-blue-200 dark:border-blue-800"
                        >
                            {tech}
                        </span>
                    ))}
                </section>

                {/* Achievements */}
                <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
                    {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="marker:text-indigo-500">{achievement}</li>
                    ))}
                </ul>
            </article>
        </motion.div>
    );
};
