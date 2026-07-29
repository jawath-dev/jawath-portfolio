export type ProjectCategory =
  | "AI Travel Platform"
  | "Business Management Platform"
  | "Healthcare Management Platform"
  | "Portfolio Experience";

export type ProjectStatus = "In development" | "Completed";

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  href: string;
  image: string;
  technologies: readonly string[];
  highlights: readonly string[];
  visual: {
    label: string;
    background: string;
    foreground: string;
    accent: string;
  };
};

export const projects = [
  {
    id: "serendivo",
    title: "SERENDIVO",
    summary:
      "A premium AI-powered tourism platform that helps travellers discover Sri Lanka, generate personalised itineraries and manage their complete journey through one connected travel experience.",
    category: "AI Travel Platform",
    status: "In development",
    year: "2026",
    href: "#contact",
    image: "/images/work/serendivo.webp",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AI Integration",
      "Google Maps Platform",
    ],
    highlights: [
      "AI-assisted trip planning",
      "Interactive itinerary mapping",
      "Unified digital travel pass",
      "Responsive premium interface",
    ],
    visual: {
      label: "Travel intelligence",
      background: "#08120e",
      foreground: "#f5f1e8",
      accent: "#c8a96b",
    },
  },
  {
    id: "gasbygas",
    title: "GasByGas",
    summary:
      "A scalable business operations platform that streamlines booking, customer and service-management workflows through a clear and structured administrative experience.",
    category: "Business Management Platform",
    status: "In development",
    year: "2026",
    href: "#contact",
    image: "/images/work/gasbygas.webp",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Form Validation",
    ],
    highlights: [
      "Operational dashboard",
      "Booking management workflows",
      "Reusable form architecture",
      "Responsive data interfaces",
    ],
    visual: {
      label: "Operations platform",
      background: "#102033",
      foreground: "#f7fafc",
      accent: "#8eb8d9",
    },
  },
  {
    id: "medi-life",
    title: "Medi-Life",
    summary:
      "A doctor appointment platform that simplifies patient registration, appointment scheduling, doctor availability and healthcare administration through an intuitive, responsive interface.",
    category: "Healthcare Management Platform",
    status: "Completed",
    year: "2025",
    href: "#contact",
    image: "/images/work/medi-life.webp",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Bootstrap",
      "JavaScript",
    ],
    highlights: [
      "Doctor appointment scheduling",
      "Patient management",
      "Doctor availability management",
      "Healthcare administration dashboard",
    ],
    visual: {
      label: "Healthcare platform",
      background: "#0b4b55",
      foreground: "#f8fbfc",
      accent: "#69c7d0",
    },
  },
  {
    id: "jawath-portfolio",
    title: "Jawath Portfolio",
    summary:
      "A refined personal portfolio that presents product thinking, frontend engineering capability and selected work through a focused, accessible digital experience.",
    category: "Portfolio Experience",
    status: "In development",
    year: "2026",
    href: "#home",
    image: "/images/work/portfolio.webp",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Compiler",
      "Turbopack",
    ],
    highlights: [
      "Premium visual system",
      "Accessible responsive navigation",
      "Content-first project storytelling",
      "Performance-focused architecture",
    ],
    visual: {
      label: "Personal identity",
      background: "#eee9df",
      foreground: "#16201b",
      accent: "#9b7641",
    },
  },
] as const satisfies readonly Project[];
