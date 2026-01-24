
"use client";
import { portfolioData } from '@/data/portfolio';
import { ExperienceCard } from '@/components/ExperienceCard';
import { Section } from '@/components/Section';
import { SkillsGrid } from '@/components/SkillsGrid';
import { Linkedin, Mail } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-page text-text-main font-sans relative">
      {/* Sticky Header */}
      <header className="sticky top-0 z-20 w-full backdrop-blur-md bg-bg-page/70 border-b border-border-subtle shadow-sm">
        <nav className="max-w-3xl mx-auto flex items-center justify-between py-4 px-6">
          <span className="font-bold text-xl tracking-tight">Deron Kao</span>
          <ul className="flex gap-6 text-sm font-medium">
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
        <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 z-10">{portfolioData.title}</h1>
        <h2 className="relative text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-2 z-10">Based in {portfolioData.location}</h2>
        <p className="relative max-w-3xl text-lg mb-6 z-10 opacity-80">{portfolioData.summary}</p>
      </Section>

      {/* Main Content Wrapper */}
      <div id="main-content">
        {/* Contact Section */}
        <Section
          title="Contact"
          className="bg-bg-page"
          id="contact"
        >
          <div className="flex flex-col gap-4 text-text-main">
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

        {/* Skills Section */}
        <Section
          title="Skills"
          className="bg-bg-card border-y border-border-subtle"
          id="skills"
        >
          <SkillsGrid skills={portfolioData.skills} />
        </Section>

        {/* Education Section */}
        <Section
          title="Education"
          className="bg-bg-page"
          id="education"
        >
          <ul className="space-y-4">
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
