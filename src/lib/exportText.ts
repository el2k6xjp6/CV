import { PortfolioData } from '@/types';

export function portfolioToText(data: PortfolioData): string {
  const lines: string[] = [];
  const rule = '='.repeat(60);

  lines.push(data.name);
  lines.push(data.title);
  lines.push(data.location);
  lines.push(`${data.contact.email} | ${data.contact.linkedin}`);
  lines.push('');
  lines.push(data.summary);
  lines.push('');

  lines.push(rule);
  lines.push('EXPERIENCE');
  lines.push(rule);
  for (const exp of data.experiences) {
    lines.push('');
    lines.push(`${exp.role} — ${exp.company}`);
    lines.push(`${exp.location} | ${exp.period}`);
    lines.push(`Tech: ${exp.techStack.join(', ')}`);
    for (const ach of exp.achievements) {
      lines.push(`- ${ach}`);
    }
  }
  lines.push('');

  lines.push(rule);
  lines.push('PROJECTS');
  lines.push(rule);
  for (const project of data.projects) {
    lines.push('');
    lines.push(project.title);
    lines.push(project.description);
    lines.push(`Tech: ${project.techStack.join(', ')}`);
    for (const ach of project.achievements) {
      lines.push(`- ${ach}`);
    }
  }
  lines.push('');

  lines.push(rule);
  lines.push('SKILLS');
  lines.push(rule);
  for (const skill of data.skills) {
    lines.push('');
    lines.push(`${skill.category}:`);
    lines.push(skill.items.map(i => `${i.name} (${i.rating}/5)`).join(', '));
  }
  lines.push('');

  lines.push(rule);
  lines.push('EDUCATION');
  lines.push(rule);
  for (const edu of data.education) {
    lines.push('');
    lines.push(edu.institution);
    lines.push(`${edu.degree} · ${edu.period}`);
  }

  return lines.join('\n');
}
