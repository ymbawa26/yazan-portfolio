export type Project = {
  title: string;
  repoName: string;
  description: string;
  whyItMatters: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
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
    title: "Predicting World Cup Success",
    repoName: "world-cup-success-analysis",
    description:
      "A SQL and Python analytics project that investigates which measurable factors are most associated with deep FIFA World Cup runs.",
    whyItMatters:
      "It shows how I handle a real analytical question end to end: public data, cleaning, SQL feature engineering, leakage-safe modeling, testing, visualization, and careful conclusions.",
    image:
      "https://world-cup-success-analysis.vercel.app/charts/03_avg_goal_difference_by_stage.png",
    imageAlt: "Average World Cup goal difference by tournament stage reached.",
    imageFit: "contain",
    stack: ["Python", "DuckDB SQL", "pandas", "pytest", "Plotly", "Streamlit", "Vercel"],
    github: "https://github.com/ymbawa26/world-cup-success-analysis",
    live: "https://world-cup-success-analysis.vercel.app",
    primaryAction: { label: "Open Vercel", href: "https://world-cup-success-analysis.vercel.app" },
    secondaryAction: { label: "View GitHub", href: "https://github.com/ymbawa26/world-cup-success-analysis" },
    accent: "steel",
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
