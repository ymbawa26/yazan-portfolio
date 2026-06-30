export type Project = {
  title: string;
  repoName: string;
  description: string;
  whyItMatters: string;
  image: string;
  imageAlt: string;
  stack: string[];
  github: string;
  live?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  unresolved?: string;
  accent: "amber" | "moss" | "ice" | "clay" | "steel" | "sage";
};

export const projects: Project[] = [
  {
    title: "WorldCup Simulation",
    repoName: "WorldCup",
    description:
      "An interactive World Cup tournament simulator with country selection, live match control, team identities, tactical breaks, substitutions, knockout brackets, news, and post-match reports.",
    whyItMatters:
      "It turns a sports analytics model into a playable product: probabilities, match events, tactics, fatigue, injuries, and tournament storytelling all meet in one user-facing experience.",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=3840&q=85",
    imageAlt: "A football pitch under stadium lights before a major match.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Football Analytics",
      "Simulation",
      "Probability Modeling",
      "Playwright",
      "Vercel",
    ],
    github: "https://github.com/ymbawa26/WorldCup",
    live: "https://worldcup-simulation.vercel.app",
    primaryAction: {
      label: "Open Live App",
      href: "https://worldcup-simulation.vercel.app",
    },
    secondaryAction: {
      label: "View GitHub",
      href: "https://github.com/ymbawa26/WorldCup",
    },
    accent: "ice",
  },
  {
    title: "Character RNN Text Generation",
    repoName: "cs443-project-4-rnn",
    description:
      "A from-scratch CS 443 recurrent neural network project that preprocesses character-level text, implements a custom GRU layer, and trains GRU RNNs to generate text.",
    whyItMatters:
      "It shows the mechanics behind sequence models directly: custom gates, recurrent state, padding masks, temporal cross entropy, and notebook-validated text generation.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=3840&q=85",
    imageAlt: "Code on a monitor suggesting neural network implementation work.",
    stack: ["Python", "TensorFlow", "RNN", "GRU", "Jupyter", "NLP"],
    github: "https://github.com/ymbawa26/cs443-project-4-rnn",
    live: "https://ymbawa26.github.io/cs443-project-4-rnn/",
    primaryAction: { label: "Open Demo", href: "https://ymbawa26.github.io/cs443-project-4-rnn/" },
    secondaryAction: { label: "View GitHub", href: "https://github.com/ymbawa26/cs443-project-4-rnn" },
    accent: "steel",
  },
  {
    title: "Word Embeddings and SOMs",
    repoName: "cs443-project-3-word-embeddings-som",
    description:
      "A CS 443 machine learning project implementing Skip-gram word embeddings, text preprocessing, similarity search, word-cloud analysis, and self-organizing maps.",
    whyItMatters:
      "It connects representation learning with interpretable visualization, moving from raw text to embedding spaces and SOM-style structure.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=3840&q=85",
    imageAlt: "A network-like digital visualization representing learned structure.",
    stack: ["Python", "TensorFlow", "Skip-gram", "SOM", "Jupyter", "NLP"],
    github: "https://github.com/ymbawa26/cs443-project-3-word-embeddings-som",
    live: "https://ymbawa26.github.io/cs443-project-3-word-embeddings-som/",
    primaryAction: { label: "Open Demo", href: "https://ymbawa26.github.io/cs443-project-3-word-embeddings-som/" },
    secondaryAction: { label: "View GitHub", href: "https://github.com/ymbawa26/cs443-project-3-word-embeddings-som" },
    accent: "sage",
  },
  {
    title: "Profits and Layoffs",
    repoName: "profits-and-layoffs",
    description:
      "A portfolio-ready analytics engineering project that connects tech layoff events with SEC financial statement data to test whether cuts align with financial weakness or strategic cost control.",
    whyItMatters:
      "It turns a headline-heavy labor question into a reproducible SQL, Python, statistics, CI, and dashboard workflow with careful non-causal interpretation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=3840&q=85",
    imageAlt: "A laptop showing financial analytics charts in a clean workspace.",
    stack: ["Python", "DuckDB", "SQL", "SEC Data", "statsmodels", "pytest", "Streamlit", "Vercel"],
    github: "https://github.com/ymbawa26/profits-and-layoffs",
    live: "https://profits-and-layoffs.vercel.app",
    primaryAction: { label: "Open Vercel", href: "https://profits-and-layoffs.vercel.app" },
    secondaryAction: { label: "View GitHub", href: "https://github.com/ymbawa26/profits-and-layoffs" },
    accent: "ice",
  },
  {
    title: "WorldGuess",
    repoName: "worldguess",
    description:
      "A geography deduction game where the computer narrows countries or U.S. states through classification clues, atlas context, and post-match audits.",
    whyItMatters:
      "It lets me turn world knowledge into an interactive reasoning loop instead of a static trivia page.",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=3840&q=85",
    imageAlt: "A detailed world map photographed in warm low light.",
    stack: ["Next.js", "TypeScript", "React", "OpenAI SDK", "Lucide"],
    github: "https://github.com/ymbawa26/worldguess",
    live: "https://worldguess-navy.vercel.app",
    primaryAction: { label: "Open Vercel", href: "https://worldguess-navy.vercel.app" },
    secondaryAction: { label: "View GitHub", href: "https://github.com/ymbawa26/worldguess" },
    accent: "ice",
  },
  {
    title: "Ghosted",
    repoName: "ghosted",
    description:
      "A job-post quality evaluator that scores seriousness, transparency, requirement inflation, clarity, and applicant ROI from pasted posting details.",
    whyItMatters:
      "I wanted to treat the job search like an information-quality problem, not just an applicant confidence problem.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=3840&q=85",
    imageAlt: "A laptop workspace used for analyzing written information.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Vitest", "Playwright"],
    github: "https://github.com/ymbawa26/ghosted",
    live: "https://ghosted.vercel.app",
    primaryAction: { label: "Open Vercel", href: "https://ghosted.vercel.app" },
    secondaryAction: { label: "View GitHub", href: "https://github.com/ymbawa26/ghosted" },
    unresolved: "The Vercel deployment appears to be an older Ghosted prototype; GitHub reflects the current job-post scoring MVP.",
    accent: "steel",
  },
  {
    title: "Pulse",
    repoName: "pulse-civic-mvp",
    description:
      "A privacy-first civic issue matching MVP for reporting recurring local problems, detecting explainable patterns, and coordinating safe action rooms.",
    whyItMatters:
      "The product question is simple and hard: how can people know they are not alone without turning local problems into public spectacle?",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=3840&q=85",
    imageAlt: "A city street scene suggesting local civic life and public systems.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Vitest", "Playwright", "Supabase-ready"],
    github: "https://github.com/ymbawa26/pulse-civic-mvp",
    live: "https://pulse-civic-mvp.vercel.app",
    primaryAction: { label: "Open Vercel", href: "https://pulse-civic-mvp.vercel.app" },
    secondaryAction: { label: "View GitHub", href: "https://github.com/ymbawa26/pulse-civic-mvp" },
    accent: "moss",
  },
  {
    title: "WildWhere",
    repoName: "WildWhere",
    description:
      "A wildlife sighting probability app for exploring parks, seasons, and times of day through a public browser demo and full Flask model app.",
    whyItMatters:
      "This is the project where my field curiosity and data side meet most directly.",
    image:
      "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=3840&q=85",
    imageAlt: "A deer standing in a misty natural landscape.",
    stack: ["Flask", "Python", "pandas", "NumPy", "scikit-learn", "GitHub Pages"],
    github: "https://github.com/ymbawa26/WildWhere",
    live: "https://ymbawa26.github.io/WildWhere/",
    primaryAction: { label: "Try WildWhere", href: "https://ymbawa26.github.io/WildWhere/" },
    secondaryAction: { label: "View GitHub", href: "https://github.com/ymbawa26/WildWhere" },
    accent: "sage",
  },
  {
    title: "ReachAI",
    repoName: "OutreachAI",
    description:
      "A personalized outreach generator that converts CSV recipient data and a reusable base message into reviewable individual email drafts.",
    whyItMatters:
      "It is a small product exercise in making communication more personal while keeping the demo safe and reviewable.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=3840&q=85",
    imageAlt: "A clean laptop interface suggesting focused digital communication work.",
    stack: ["Python", "Streamlit", "CSV workflow", "Mock AI engine", "GitHub Pages"],
    github: "https://github.com/ymbawa26/OutreachAI",
    live: "https://outreachai.vercel.app",
    primaryAction: { label: "Open Vercel", href: "https://outreachai.vercel.app" },
    secondaryAction: { label: "View GitHub", href: "https://github.com/ymbawa26/OutreachAI" },
    accent: "clay",
  },
  {
    title: "Arabic Spice Pairing Coach",
    repoName: "arabic-spice-pairing-coach",
    description:
      "A culturally rooted recommendation app for Arabic-forward spice blends across ingredient mode, Palestinian dish mode, and pantry mode.",
    whyItMatters:
      "I wanted the machine-learning layer to feel specific to food culture, not like another generic recommendation demo.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=3840&q=85",
    imageAlt: "Colorful spices arranged in bowls and photographed from above.",
    stack: ["Flask", "Neon Postgres", "SQLAlchemy", "pandas", "scikit-learn", "pytest"],
    github: "https://github.com/ymbawa26/arabic-spice-pairing-coach",
    live: "https://arabic-spice-pairing-coach.vercel.app",
    primaryAction: { label: "Open Vercel", href: "https://arabic-spice-pairing-coach.vercel.app" },
    secondaryAction: { label: "View GitHub", href: "https://github.com/ymbawa26/arabic-spice-pairing-coach" },
    accent: "amber",
  },
];
