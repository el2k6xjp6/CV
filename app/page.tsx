
"use client";
import { portfolioData } from '@/data/portfolio';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { SkillsGrid } from '@/components/SkillsGrid';
import { Linkedin, Mail } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-page text-text-main font-sans relative">
      {/* Sticky Header */}
      <header className="sticky top-0 z-20 w-full backdrop-blur-md bg-bg-page/70 border-b border-border-subtle shadow-sm">
        <nav className="max-w-3xl mx-auto flex items-center justify-between py-4 px-6 gap-4 overflow-x-auto">
          <span className="font-bold text-xl tracking-tight flex-shrink-0">Deron Kao</span>
          <ul className="flex gap-6 text-sm font-medium flex-nowrap overflow-x-auto md:overflow-x-visible scrollbar-hide">
            <li>
              <button
                type="button"
                className="hover:text-indigo-600 hover:scale-105 transition-all duration-200 bg-transparent p-0 m-0 border-none cursor-pointer h-9 flex items-center"
                onClick={() => {
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-indigo-600 hover:scale-105 transition-all duration-200 bg-transparent p-0 m-0 border-none cursor-pointer h-9 flex items-center"
                onClick={() => {
                  const el = document.getElementById('experience');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-indigo-600 hover:scale-105 transition-all duration-200 bg-transparent p-0 m-0 border-none cursor-pointer h-9 flex items-center"
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-indigo-600 hover:scale-105 transition-all duration-200 bg-transparent p-0 m-0 border-none cursor-pointer h-9 flex items-center"
                onClick={() => {
                  const el = document.getElementById('skills');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-indigo-600 hover:scale-105 transition-all duration-200 bg-transparent p-0 m-0 border-none cursor-pointer h-9 flex items-center"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Contact
              </button>
            </li>
          </ul>
          <ThemeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <Section
        title={undefined}
        className="bg-bg-card relative"
        id="about"
      >
        {/* Grid Background - using border-subtle variable for the stroke */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="none" className="stroke-border-subtle" strokeWidth="0.3" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="relative sm:ml-8 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">{portfolioData.title}</h1>
          <h2 className="text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-2">Based in {portfolioData.location}</h2>
          <p className="max-w-3xl text-lg mb-6 opacity-80">{portfolioData.summary}</p>
        </div>
      </Section>

      {/* Main Content Wrapper */}
      <div id="main-content">
        {/* Contact Section */}
        <Section
          title="Contact"
          className="bg-bg-page"
          id="contact"
        >
          <div className="sm:ml-8 flex flex-col gap-4 text-text-main">
            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Mail size={18} />
              {portfolioData.contact.email}
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </Section>

        {/* Experience Section */}
        <Section title="Experience" className="bg-bg-page" id="experience">
          {portfolioData.experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </Section>

        {/* Projects Section */}
        <Section title="Projects" className="bg-bg-page" id="projects">
          {portfolioData.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </Section>

        {/* Skills Section */}
        <Section
          title="Skills"
          className="bg-bg-card border-y border-border-subtle"
          id="skills"
        >
          <div className="sm:ml-8">
            <SkillsGrid skills={portfolioData.skills} />
          </div>
        </Section>

        {/* Education Section */}
        <Section
          title="Education"
          className="bg-bg-page"
          id="education"
        >
          <ul className="sm:ml-8 space-y-4">
            {portfolioData.education.map((edu, idx) => (
              <li key={edu.institution + idx} className="border-l-4 border-indigo-500 pl-4">
                {/* 使用 text-text-main 確保在深色模式變亮 */}
                <div className="text-base font-medium text-text-main">{edu.institution}</div>
                <div className="text-sm text-text-muted">{edu.degree} &bull; {edu.period}</div>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs border-t bg-bg-page border-border-subtle text-text-muted flex flex-col items-center gap-2">
        <div className="flex gap-4 justify-center mb-2">
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="hover:text-indigo-600 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
        <span>
          &copy; {new Date().getFullYear()} Deron Kao. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
