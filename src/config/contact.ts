export type ContactPrinciple = {
  label: string;
  value: string;
};

export type ContactContent = {
  eyebrow: string;
  heading: {
    firstLine: string;
    accent: string;
    finalLine: string;
  };
  introduction: string;
  emailSupportingCopy: string;
  availability: {
    label: string;
    message: string;
  };
  actionLabel: string;
  principlesLabel: string;
  principles: readonly ContactPrinciple[];
  closingNote: string;
};

export const contactContent = {
  eyebrow: "Contact",

  heading: {
    firstLine: "Let’s build something",
    accent: "meaningful",
    finalLine: "together.",
  },

  introduction:
    "I’m interested in thoughtful products where clear design, strong engineering and long-term product value matter equally.",

  emailSupportingCopy:
    "Whether you’re starting something new, refining an existing product or solving a complex challenge, I’d be glad to hear about it.",

  availability: {
    label: "Current availability",
    message:
      "Open to selected product collaborations and frontend engineering opportunities.",
  },

  actionLabel: "Start a conversation",

  principlesLabel: "Working best with",

  principles: [
    {
      label: "01",
      value: "Meaningful Products",
    },
    {
      label: "02",
      value: "Thoughtful Teams",
    },
    {
      label: "03",
      value: "Long-Term Thinking",
    },
  ],

  closingNote: "Every great product begins with a conversation.",
} as const satisfies ContactContent;
