import { Experience, Education, Skills, ContactInfo } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Elavi",
    role: {
      fr: "Développeur Frontend",
      en: "Frontend Developer",
    },
    period: "Aug 2025 - Present",
    duration: {
      fr: "4 mois",
      en: "4 months",
    },
    location: "Casablanca-Settat, Maroc",
  },
  {
    company: "Smalter",
    role: {
      fr: "Développeur Full-stack",
      en: "Full-stack Developer",
    },
    period: "Apr 2024 - Jul 2025",
    duration: {
      fr: "1 an 4 mois",
      en: "1 year 4 months",
    },
    location: "Rabat, Rabat-Salé-Kénitra, Morocco",
  },
  {
    company: "ARKx Education",
    role: {
      fr: "Développeur Full-stack",
      en: "Full-stack Developer",
    },
    period: "Jul 2023 - Dec 2023",
    duration: {
      fr: "6 mois",
      en: "6 months",
    },
    location: "Casablanca Metropolitan Area",
  },
  {
    company: "Université Hassan 1er",
    role: {
      fr: "Développeur Full-stack",
      en: "Full-stack Developer",
    },
    period: "Apr 2023 - Jun 2023",
    duration: {
      fr: "3 mois",
      en: "3 months",
    },
    location: "Casablanca-Settat, Maroc",
  },
];

export const education: Education[] = [
  {
    school: "Ecole Nationale des Sciences Appliquées - Kénitra",
    degree: {
      fr: "Master, Ingénierie Logicielle et Management des Systèmes D'Information",
      en: "Master, Software Engineering and Information Systems Management",
    },
    period: "Oct 2024 - Jun 2026",
  },
  {
    school: "FST Settat",
    degree: {
      fr: "Licence en sciences et techniques, Génie Informatique",
      en: "Bachelor in Science and Technology, Computer Engineering",
    },
    period: "Sep 2022 - Jun 2024",
  },
  {
    school: "FST Settat",
    degree: {
      fr: "DEUST, Mathématiques et informatique",
      en: "DEUST, Mathematics and Computer Science",
    },
    period: "Sep 2020 - Jun 2022",
  },
];

export const skills: Skills = {
  technical: [
    "C#",
    "Microsoft SQL Server",
    "Entity Framework",
    "React",
    "React Native",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Express.js",
    "Next.js",
    "Tailwind CSS",
  ],
  certifications: [
    "Learn Intermediate JavaScript Course",
    "Learn Express Course",
    "Learn Node.js Course",
    "Learn React Course",
    "Learn JavaScript Course",
  ],
  languages: [
    {
      lang: { fr: "Arabe", en: "Arabic" },
      level: { fr: "Langue Maternelle", en: "Native" },
      percentage: 100,
    },
    {
      lang: { fr: "Français", en: "French" },
      level: { fr: "Élémentaire", en: "Elementary" },
      percentage: 40,
    },
    {
      lang: { fr: "Anglais", en: "English" },
      level: { fr: "Élémentaire", en: "Elementary" },
      percentage: 40,
    },
  ],
};

export const contactInfo: ContactInfo = {
  email: "OMAR.AGTIB@GMAIL.COM",
  phone: "+212713646784",
  linkedin: "omar-agtib-a1371525b",
  location: "Casablanca, Casablanca-Settat, Morocco",
};
