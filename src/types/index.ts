export interface Experience {
  company: string;
  location: string;
  period: string;
  role: string;
  techStack: string[];
  achievements: string[];
}

export interface Skill {
  category: string;
  items: Array<{
    name: string;
    rating: number;
  }>;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  achievements: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  summary: string;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
  contact: {
    email: string;
    linkedin: string;
  };
}
