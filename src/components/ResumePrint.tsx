import { portfolioData } from '@/data/portfolio';

/**
 * Plain, printer-friendly CV layout. Hidden on screen and shown only when
 * printing, so "Save as PDF" produces a clean, text-selectable (ATS-friendly) document.
 */
export function ResumePrint() {
  const { name, title, location, summary, experiences, projects, skills, education, contact } = portfolioData;

  return (
    <div className="hidden print:block bg-white text-black font-sans text-[10.5pt] leading-snug">
      <header className="mb-4 border-b border-black pb-2">
        <h1 className="text-[20pt] font-bold leading-tight">{name}</h1>
        <p className="text-[11pt]">{title} · {location}</p>
        <p className="text-[9.5pt] mt-0.5">
          {contact.email} · {contact.linkedin.replace(/^https?:\/\//, '')}
        </p>
      </header>

      <PrintSection title="Summary">
        <p>{summary}</p>
      </PrintSection>

      <PrintSection title="Experience">
        {experiences.map((exp) => (
          <div key={exp.company + exp.period} className="mb-3 break-inside-avoid-page">
            <div className="flex justify-between gap-4">
              <span className="font-bold">{exp.role}, {exp.company}</span>
              <span className="whitespace-nowrap">{exp.period}</span>
            </div>
            <p className="italic text-[9.5pt]">{exp.location} · {exp.techStack.join(', ')}</p>
            <ul className="list-disc pl-5 mt-1 space-y-0.5">
              {exp.achievements.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        ))}
      </PrintSection>

      <PrintSection title="Projects">
        {projects.map((p) => (
          <div key={p.title} className="mb-3 break-inside-avoid">
            <span className="font-bold">{p.title}</span>
            <p className="italic text-[9.5pt]">{p.description} · {p.techStack.join(', ')}</p>
            <ul className="list-disc pl-5 mt-1 space-y-0.5">
              {p.achievements.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        ))}
      </PrintSection>

      <PrintSection title="Skills">
        <ul className="space-y-0.5">
          {skills.map((s) => (
            <li key={s.category}>
              <span className="font-bold">{s.category}:</span> {s.items.map((i) => i.name).join(', ')}
            </li>
          ))}
        </ul>
      </PrintSection>

      <PrintSection title="Education">
        {education.map((e) => (
          <div key={e.institution} className="flex justify-between gap-4">
            <span><span className="font-bold">{e.degree}</span>, {e.institution}</span>
            <span className="whitespace-nowrap">{e.period}</span>
          </div>
        ))}
      </PrintSection>
    </div>
  );
}

function PrintSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-4">
      <h2 className="text-[11.5pt] font-bold uppercase tracking-wide border-b border-gray-400 mb-1.5 break-after-avoid">
        {title}
      </h2>
      {children}
    </section>
  );
}
