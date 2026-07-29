export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type SocialPlatform = "github" | "linkedin" | "fiverr";

export type SocialLink = {
  label: string;
  href: string;
  platform: SocialPlatform;
};

const navigation = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Capabilities",
    href: "#capabilities",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const satisfies readonly NavigationItem[];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jawath-dev",
    platform: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-jawath-sm",
    platform: "linkedin",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/jawathdev",
    platform: "fiverr",
  },
] as const satisfies readonly SocialLink[];

export const siteConfig = {
  name: "Jawath",
  fullName: "Mohamed Jawath",

  title: "Frontend Engineer",
  siteTitle: "Jawath | Frontend Engineer",

  description:
    "Frontend Engineer crafting fast, accessible and thoughtfully engineered digital experiences with React, Next.js, TypeScript and Tailwind CSS.",

  url: "https://jawath.dev",
  language: "en",
  locale: "en_GB",

  email: "jawath.dev@gmail.com",
  phone: "+94 77 773 4067",
  location: "Sri Lanka",

  availability: {
    isAvailable: true,
    label: "Open to selected projects",
  },

  navigation,
  socialLinks,

  contact: {
    emailHref: "mailto:jawath.dev@gmail.com",
    phoneHref: "tel:+94777734067",
    whatsappHref: "https://wa.me/94777734067",
    primaryAction: "Start a conversation",
    secondaryAction: "View GitHub profile",
  },

  professionalProfile: {
    label: "GitHub",
    href: "https://github.com/jawath-dev",
  },

  seo: {
    applicationName: "Jawath Portfolio",
    category: "technology",
    keywords: [
      "Jawath",
      "Mohamed Jawath",
      "Frontend Engineer",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Tailwind CSS Developer",
      "Web Developer",
      "Freelance Frontend Developer",
      "Frontend Engineer Sri Lanka",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
