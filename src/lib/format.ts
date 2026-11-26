/** Turns a display title into a code-style label, e.g. "Cloud & DevOps" -> "cloud_&_devops". */
export function toCodeLabel(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '_');
}
