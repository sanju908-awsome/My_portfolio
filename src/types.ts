export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  featured?: boolean;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  architectureSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  challenges: string[];
  outcome: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  status: string;
  accentColor?: string;
  diagramType: 'geo-dispatch' | 'cv-detection' | 'ml-pipeline' | 'hash-verification';
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    proficiency: 'Working Knowledge' | 'Familiar' | 'Currently Learning';
    iconName?: string;
    note?: string;
  }[];
}

export interface HackathonEntry {
  id: string;
  number: string;
  name: string;
  year: string;
  domain: string;
  teamSize: string;
  role: string;
  problemStatement: string;
  technologies: string[];
  outcome: 'Finalist' | 'Participant' | 'Team Prototype' | 'Honorable Mention';
  keyTakeaway: string;
}

export interface JourneyStep {
  period: string;
  milestone: string;
  title: string;
  institutionOrContext: string;
  description: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  description: string;
  skillsGained: string[];
  verifyUrl?: string;
}

export interface CodingPlatform {
  name: string;
  handle: string;
  tagline: string;
  url: string;
  focusAreas: string[];
  metricsText: string;
}
