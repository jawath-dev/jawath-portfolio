export type Capability = {
  id: string;
  number: string;
  title: string;
  description: string;
  expertise: readonly string[];
};

export const capabilities = [
  {
    id: "frontend-engineering",
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building polished, responsive and maintainable interfaces with modern frontend architecture.",
    expertise: [
      "React",
      "Next.js",
      "TypeScript",
      "Component architecture",
      "Performance optimisation",
    ],
  },
  {
    id: "product-design",
    number: "02",
    title: "Product Design",
    description:
      "Turning complex product ideas into clear, intuitive and accessible digital experiences.",
    expertise: [
      "User experience",
      "Interface design",
      "Design systems",
      "Responsive design",
      "Accessibility",
    ],
  },
  {
    id: "backend-and-apis",
    number: "03",
    title: "Backend & APIs",
    description:
      "Developing reliable application foundations, secure integrations and scalable data workflows.",
    expertise: [
      "API architecture",
      "Authentication",
      "Database design",
      "Third-party integrations",
      "Application security",
    ],
  },
  {
    id: "ai-solutions",
    number: "04",
    title: "AI Solutions",
    description:
      "Creating practical AI-powered features that improve workflows, decisions and customer experiences.",
    expertise: [
      "AI assistants",
      "Workflow automation",
      "Intelligent search",
      "Data-driven experiences",
      "Product integration",
    ],
  },
] as const satisfies readonly Capability[];