import { Experience, Education, Skills, ContactInfo, Project } from "@/types";

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

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: {
      fr: "Plateforme e-commerce complète avec gestion des produits, panier d'achats, paiement en ligne et tableau de bord administrateur.",
      en: "Complete e-commerce platform with product management, shopping cart, online payment and admin dashboard.",
    },
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/omaragtib/ecommerce",
    demo: "https://demo-ecommerce.com",
    category: "fullstack",
    featured: true,
    date: "2024-06",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: {
      fr: "Application mobile de gestion de tâches avec notifications push, synchronisation cloud et interface intuitive.",
      en: "Mobile task management app with push notifications, cloud sync and intuitive interface.",
    },
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
    github: "https://github.com/omaragtib/task-app",
    category: "mobile",
    featured: true,
    date: "2024-03",
  },
  {
    id: "project-3",
    title: "Social Media Dashboard",
    description: {
      fr: "Dashboard analytics pour réseaux sociaux avec graphiques interactifs et rapports détaillés.",
      en: "Social media analytics dashboard with interactive charts and detailed reports.",
    },
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/omaragtib/social-dashboard",
    demo: "https://demo-dashboard.com",
    category: "frontend",
    featured: true,
    date: "2024-01",
  },
  {
    id: "project-4",
    title: "Real-time Chat Application",
    description: {
      fr: "Application de chat en temps réel avec rooms, messages privés et partage de fichiers.",
      en: "Real-time chat application with rooms, private messages and file sharing.",
    },
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
    technologies: ["Socket.io", "Node.js", "React", "MongoDB"],
    github: "https://github.com/omaragtib/chat-app",
    category: "fullstack",
    featured: false,
    date: "2023-11",
  },
  {
    id: "project-5",
    title: "Booking System API",
    description: {
      fr: "API REST pour système de réservation avec authentification JWT et documentation Swagger.",
      en: "REST API for booking system with JWT authentication and Swagger documentation.",
    },
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
    github: "https://github.com/omaragtib/booking-api",
    category: "backend",
    featured: false,
    date: "2023-09",
  },
  {
    id: "project-6",
    title: "Portfolio Website",
    description: {
      fr: "Site portfolio moderne avec animations, mode sombre/clair et design responsive.",
      en: "Modern portfolio website with animations, dark/light mode and responsive design.",
    },
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/omaragtib/portfolio",
    demo: "https://omar-agtib.com",
    category: "frontend",
    featured: false,
    date: "2023-07",
  },
];

export const contactInfo: ContactInfo = {
  email: "OMAR.AGTIB@GMAIL.COM",
  phone: "+212713646784",
  linkedin: "omar-agtib-a1371525b",
  location: "Casablanca, Casablanca-Settat, Morocco",
};
