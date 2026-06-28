import { portfolioData } from '@/data/portfolio';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { SkillsGrid } from '@/components/SkillsGrid';
import { Linkedin, Mail } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import NavLinks from '@/components/NavLinks';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-page text-text-main font-sans relative">
      {/* Sticky Header */}
      <header className="sticky top-0 z-20 w-full backdrop-blur-md bg-bg-page/70 border-b border-border-subtle shadow-sm">
        <nav className="max-w-3xl mx-auto flex items-center justify-between py-4 px-6 gap-4 overflow-x-auto">
          <span className="font-mono font-bold text-base tracking-tight flex-shrink-0 text-indigo-500">
            <span className="text-text-muted">~/</span>deron
          </span>
          <NavLinks />
          <ThemeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <Section title={undefined} className="bg-bg-card relative overflow-hidden" id="about">
        {/* Dot matrix background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" className="fill-border-subtle" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        <div className="relative sm:ml-8 z-10">
          {/* Terminal prompt line */}
          <p className="font-mono text-sm text-indigo-500 mb-3 flex items-center gap-2">
            <span className="text-text-muted">$</span> whoami
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-1 flex items-end gap-2">
            {portfolioData.title.split(' ').slice(0, 2).join(' ')}
            <span className="inline-block w-[3px] h-[0.85em] mb-1 bg-indigo-500 cursor-blink align-bottom" aria-hidden="true" />
          </h1>

          {/* Role as comment */}
          <p className="font-mono text-base text-text-muted mb-3">
            <span className="text-indigo-500">//</span> {portfolioData.title}
          </p>

          {/* Available badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs text-emerald-500">Available for opportunities</span>
            <span className="font-mono text-xs text-text-muted">· {portfolioData.location}</span>
          </div>

          <p className="max-w-2xl text-sm text-text-muted leading-relaxed font-mono border-l-2 border-indigo-500/40 pl-4">
            {portfolioData.summary}
          </p>
        </div>
      </Section>

      {/* Main Content Wrapper */}
      <div id="main-content">
        {/* Contact Section */}
        <Section title="Contact" className="bg-bg-page" id="contact">
          <div className="sm:ml-8 flex flex-col gap-3 text-text-main font-mono text-sm">
            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 hover:text-indigo-400 transition-colors group">
              <span className="text-indigo-500 group-hover:text-indigo-400">$</span>
              <Mail size={14} />
              {portfolioData.contact.email}
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors group">
              <span className="text-indigo-500 group-hover:text-indigo-400">$</span>
              <Linkedin size={14} />
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
        <Section title="Skills" className="bg-bg-card border-y border-border-subtle" id="skills">
          <div className="sm:ml-8">
            <SkillsGrid skills={portfolioData.skills} />
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Education" className="bg-bg-page" id="education">
          <ul className="sm:ml-8 space-y-4">
            {portfolioData.education.map((edu, idx) => (
              <li key={edu.institution + idx} className="border-l-2 border-indigo-500/60 pl-4">
                <div className="font-mono text-sm font-medium text-text-main">{edu.institution}</div>
                <div className="font-mono text-xs text-text-muted mt-0.5">
                  <span className="text-indigo-500">//</span> {edu.degree} · {edu.period}
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center border-t bg-bg-page border-border-subtle text-text-muted flex flex-col items-center gap-2">
        <div className="flex gap-4 justify-center mb-1">
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-indigo-400 transition-colors">
            <Mail size={16} />
          </a>
        </div>
        <span className="font-mono text-xs text-text-muted">
          <span className="text-indigo-500">©</span> {new Date().getFullYear()} Deron Kao
        </span>
      </footer>
    </div>
  );
}
