// lib/data.ts
// Single source of truth for all resume content rendered across the site.

export interface Profile {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string;
}

export const profile: Profile = {
  name: "Mubashir Ahmad",
  role: "Software Engineer & Full Stack Developer",
  location: "Sohan, Islamabad, Pakistan",
  phone: "0319 1548437",
  email: "mubiahmad33@gmail.com",
  linkedin: "https://www.linkedin.com/in/mubashir-ahmad-1575b7184/",
  summary:
    "Software Engineering graduate from Kohat University of Science and Technology (KUST), 2022, currently working as a React and Next.js Developer focused on building scalable and high-performance web applications. Experienced in frontend and full-stack development using React.js, Next.js, and the MERN stack, including API integration and responsive UI development. Committed to writing clean, efficient code and improving application performance, usability, and scalability while working in collaborative team environments.",
};

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Software Engineering",
    institution: "Kohat University of Science & Technology (KUST), Kohat",
    period: "2018 – 2022",
  },
  {
    id: "edu-2",
    degree: "HSSC (Intermediate)",
    institution: "Oxford Group of College, Chokara Karak",
    period: "2016 – 2018",
  },
  {
    id: "edu-3",
    degree: "SSC (Matriculation)",
    institution: "Oxford Group of College, Chokara Karak",
    period: "2014 – 2016",
  },
];

export interface SkillGroup {
  id: string;
  layer: string;
  caption: string;
  items: string[];
}

// Grouped to echo the hero's architecture-flow motif: presentation, application,
// data, and the practices that hold the stack together.
export const skillGroups: SkillGroup[] = [
  {
    id: "layer-frontend",
    layer: "Frontend",
    caption: "What the user touches",
    items: ["React.js", "Next.js", "Responsive UI Development"],
  },
  {
    id: "layer-backend",
    layer: "Backend",
    caption: "What runs the logic",
    items: ["Node.js", "Express.js", "API Integration & Development"],
  },
  {
    id: "layer-data",
    layer: "Data",
    caption: "What holds the state",
    items: ["MongoDB", "Database Management", "MERN Stack"],
  },
  {
    id: "layer-practice",
    layer: "Practice",
    caption: "What keeps it shippable",
    items: ["Problem-Solving & Debugging", "Collaboration & Teamwork"],
  },
];

export interface ExperienceProject {
  name: string;
  url: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
  projects: ExperienceProject[];
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-alphinex",
    role: "Full Stack Developer (Next.js)",
    company: "Alphinex Solutions",
    period: "2024 — Present",
    current: true,
    bullets: [
      "Developed and maintained full-stack web applications using Next.js with a focus on performance and scalability.",
      "Built responsive and user-friendly interfaces for improved user experience across devices.",
      "Integrated front-end components with backend APIs for smooth functionality and data flow.",
      "Optimized application performance using efficient rendering and reusable components.",
      "Collaborated with designers and developers to deliver high-quality solutions.",
    ],
    projects: [
      { name: "StaffVertex", url: "https://www.staffvertex.com/" },
      { name: "SpaceHub", url: "https://spacehub-bay.vercel.app" },
    ],
  },
  {
    id: "exp-alright",
    role: "MERN Stack Developer",
    company: "Alright Tech",
    period: "2023 — 2024",
    current: false,
    bullets: [
      "Designed and developed scalable full-stack applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
      "Created responsive and user-friendly interfaces while integrating backend APIs and services.",
      "Developed and optimized database schemas, queries, and data models to improve performance.",
      "Implemented secure CRUD functionality and RESTful API integrations.",
      "Improved application reliability, maintainability, and scalability through code optimization and best practices.",
      "Participated in the full software development lifecycle, from requirements gathering to deployment and maintenance.",
    ],
    projects: [
      {
        name: "Izhar Builders",
        url: "https://izhar-builders-te4j-dyzkwqsg3-mubashir-s-projects.vercel.app/",
      },
    ],
  },
  {
    id: "exp-nausal",
    role: "Frontend Developer (React.js)",
    company: "Nausal Technology",
    period: "2022 — 2023",
    current: false,
    bullets: [
      "Developed responsive web and mobile interfaces using React.js.",
      "Translated UI/UX designs into clean and high-performing applications.",
      "Integrated front-end components with APIs for smooth data flow and functionality.",
      "Improved application performance, responsiveness, and usability across devices and platforms.",
    ],
    projects: [
      { name: "CareerBooster AI", url: "https://www.careerbooster.ai/" },
    ],
  },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  tech: string[];
  role: string;
  company: string;
}

export const projects: Project[] = [
  {
    id: "proj-staffvertex",
    name: "StaffVertex",
    description:
      "A full-stack staffing platform built with Next.js, focused on fast page loads and a clean recruiter-facing workflow. Built end to end while shipping performance and rendering improvements across the app.",
    url: "https://www.staffvertex.com/",
    tech: ["Next.js", "React.js", "API Integration"],
    role: "Full Stack Developer",
    company: "Alphinex Solutions",
  },
  {
    id: "proj-spacehub",
    name: "SpaceHub",
    description:
      "A Next.js application emphasizing responsive, device-agnostic interfaces with backend APIs wired in for smooth, real-time data flow.",
    url: "https://spacehub-bay.vercel.app",
    tech: ["Next.js", "React.js", "REST APIs"],
    role: "Full Stack Developer",
    company: "Alphinex Solutions",
  },
  {
    id: "proj-izhar",
    name: "Izhar Builders",
    description:
      "A MERN-stack web presence for a construction & real estate business, built on optimized database schemas and secure CRUD operations from the ground up.",
    url: "https://izhar-builders-te4j-dyzkwqsg3-mubashir-s-projects.vercel.app/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    role: "MERN Stack Developer",
    company: "Alright Tech",
  },
  {
    id: "proj-careerbooster",
    name: "CareerBooster AI",
    description:
      "A React.js front end translating UI/UX designs into clean, high-performing interfaces, with API integrations tuned for responsiveness across devices.",
    url: "https://www.careerbooster.ai/",
    tech: ["React.js", "Responsive UI", "API Integration"],
    role: "Frontend Developer",
    company: "Nausal Technology",
  },
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Fluent" },
  { name: "Pashto", level: "Fluent" },
];

export const coreValues: { title: string; description: string }[] = [
  {
    title: "Clean over clever",
    description:
      "Code is read far more than it's written. I optimize for the next engineer's ability to understand it — including future me.",
  },
  {
    title: "Performance is a feature",
    description:
      "Rendering strategy, reusable components, and query efficiency aren't afterthoughts — they're part of how I scope work from the start.",
  },
  {
    title: "Built with, not just for",
    description:
      "The strongest releases I've shipped came out of close back-and-forth with designers and other developers, not solo work.",
  },
];

export const siteConfig = {
  name: "Mubashir Ahmad",
  title: "Mubashir Ahmad — Full Stack Developer (React.js · Next.js · MERN)",
  description:
    "Portfolio of Mubashir Ahmad, a Full Stack Developer specializing in React.js, Next.js, and the MERN stack — building scalable, high-performance web applications.",
  url: "https://mubashirahmad.dev",
};
