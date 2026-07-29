export type AboutDetail = {
  label: string;
  value: string;
};

export type AboutContent = {
  eyebrow: string;
  heading: {
    firstLine: string;
    secondLine: string;
    thirdLine: string;
    accent: string;
  };
  introduction: string;
  paragraphs: readonly string[];
  quote: {
    firstLine: string;
    secondLine: string;
  };
  detailsLabel: string;
  details: readonly AboutDetail[];
  closingNote: {
    firstLine: string;
    secondLine: string;
  };
};

export const aboutContent = {
  eyebrow: "About",

  heading: {
    firstLine: "Building products",
    secondLine: "that feel simple,",
    thirdLine: "even when the work behind them",
    accent: "isn’t.",
  },

  introduction:
    "Every meaningful product begins long before the first line of code. It begins with understanding the people who will use it, the problems they are trying to solve and the experience they should walk away with.",

  paragraphs: [
    "I don’t begin with frameworks or libraries. I begin by asking better questions, understanding the product and defining what success should look like before deciding how it should be built.",
    "For me, design and engineering are parts of the same conversation. The strongest digital products emerge when usability, performance and maintainability are considered together rather than treated as separate goals.",
    "Every interface I build is intended to feel clear, responsive and dependable—improving the experience people have today while making the product easier to evolve tomorrow.",
  ],

  quote: {
    firstLine:
      "People don’t value software because of the complexity behind it.",
    secondLine: "They remember how effortless it felt.",
  },

  detailsLabel: "At a glance",

  details: [
    {
      label: "Location",
      value: "Sri Lanka",
    },
    {
      label: "Discipline",
      value: "Frontend Engineering",
    },
    {
      label: "Focus",
      value: "Product Experiences",
    },
    {
      label: "Working with",
      value: "Selected Projects",
    },
  ],

  closingNote: {
    firstLine: "Technology changes.",
    secondLine: "Clear thinking doesn’t.",
  },
} as const satisfies AboutContent;
