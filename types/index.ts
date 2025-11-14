export type Language = "fr" | "en";

export interface Experience {
  company: string;
  role: {
    fr: string;
    en: string;
  };
  period: string;
  duration: {
    fr: string;
    en: string;
  };
  location: string;
}

export interface Education {
  school: string;
  degree: {
    fr: string;
    en: string;
  };
  period: string;
}

export interface LanguageSkill {
  lang: {
    fr: string;
    en: string;
  };
  level: {
    fr: string;
    en: string;
  };
  percentage: number;
}

export interface Skills {
  technical: string[];
  certifications: string[];
  languages: LanguageSkill[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    contact: string;
  };
  about: {
    title: string;
    description: string;
    location: string;
    yearsExp: string;
    projects: string;
  };
  experience: {
    title: string;
    present: string;
    months: string;
    year: string;
    years: string;
  };
  education: {
    title: string;
  };
  skills: {
    title: string;
    topSkills: string;
    certifications: string;
    languages: string;
  };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    linkedin: string;
  };
  footer: {
    rights: string;
  };
}
