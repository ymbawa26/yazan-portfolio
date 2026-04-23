export type Capability = {
  title: string;
  short: string;
  evidence: string[];
  tools: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Full Data Analysis Skill Set",
    short: "I can move from raw records to clean analysis, dashboards, and decision-ready stories.",
    tools: ["SQL", "Python", "Pandas", "NumPy", "Excel", "Tableau", "Power BI", "Seaborn", "Matplotlib"],
    evidence: [
      "I used Excel and SQL for trend analysis across eight AlHobishi retail locations.",
      "I designed Pandas and SQL datasets for 10,000+ Waterville Creates records.",
      "I ran Snowflake cohort and funnel analysis at VGANG.",
      "I have worked across KPI dashboards, segmentation, survey analysis, visual storytelling, and forecasting support.",
    ],
  },
  {
    title: "Direct Stakeholder Experience",
    short: "I care about analysis that survives contact with real operators, staff, teams, and institutions.",
    tools: ["Training", "Dashboard delivery", "Operations reports", "Workflow standardization", "Stakeholder visuals"],
    evidence: [
      "I trained AlHobishi staff on Salesforce CRM data-entry protocols.",
      "I built dashboards that informed Waterville Creates planning and budget reallocation.",
      "I translated Google Analytics metrics into operations reports at VGANG.",
      "I delivered Seaborn and Matplotlib visualizations to MIDC stakeholders.",
    ],
  },
  {
    title: "AI / ML",
    short: "My AI/ML exposure spans model training, predictive analytics, and AI governance research.",
    tools: ["TensorFlow", "PyTorch", "scikit-learn", "R", "Predictive modeling", "AI governance"],
    evidence: [
      "I supported TensorFlow and PyTorch model-training workflows at VGANG.",
      "I used scikit-learn for plea hearing pattern analysis at MIDC.",
      "I built WildWhere as a predictive analytics web app for wildlife sighting probabilities.",
      "I conducted Colombia/Panama field research on public trust in AI governance using R.",
    ],
  },
  {
    title: "Adaptability",
    short: "I can move between business, nonprofit, legal, civic, AI, IT, and field research contexts.",
    tools: ["Retail analytics", "Nonprofit data", "Legal data", "Product prototypes", "IT support", "Field research"],
    evidence: [
      "I have worked in business operations at AlHobishi, nonprofit analytics at Waterville Creates, and public-interest legal data at MIDC.",
      "I have AI/product exposure through VGANG, WildWhere, ReachAI, and Ghosted.",
      "I have done campus IT support that required people skills, technical troubleshooting, and mentorship.",
      "My Government major and global research experience widen the frame beyond code.",
    ],
  },
];

export type SkillGroup = {
  root: string;
  nodes: { name: string; snapshot: string }[];
};

export type SpokenLanguage = {
  language: string;
  level: string;
  context: string;
};

export const spokenLanguages: SpokenLanguage[] = [
  {
    language: "English",
    level: "Native fluency",
    context: "Coursework, stakeholder presentations, technical writing, dashboards, and project documentation.",
  },
  {
    language: "Arabic",
    level: "Native / bilingual fluency",
    context: "Cultural fluency, mentoring Palestinian students, and Arabic food/culture product work.",
  },
  {
    language: "Spanish",
    level: "B2 proficiency",
    context: "Professional working proficiency for conversation, travel, field research, and cross-cultural settings.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    root: "Python",
    nodes: [
      { name: "Pandas", snapshot: "10,000+ survey and engagement records at Waterville Creates." },
      { name: "NumPy", snapshot: "Numerical workflow support for analysis and model-oriented projects." },
      { name: "scikit-learn", snapshot: "Plea hearing pattern analysis at MIDC and WildWhere prediction work." },
      { name: "Matplotlib", snapshot: "Stakeholder-facing court and caseload visualizations." },
      { name: "Seaborn", snapshot: "Readable trend visuals for legal/public-interest datasets." },
    ],
  },
  {
    root: "Data Systems",
    nodes: [
      { name: "SQL", snapshot: "Retail, nonprofit, and product datasets across several roles." },
      { name: "Snowflake", snapshot: "Large-scale user data extraction at VGANG." },
      { name: "Azure", snapshot: "Hosted data systems behind AlHobishi store dashboards." },
      { name: "Salesforce", snapshot: "CRM workflow standardization and staff training." },
      { name: "Oracle", snapshot: "Listed technical skill from resume." },
    ],
  },
  {
    root: "BI / Visualization",
    nodes: [
      { name: "Tableau", snapshot: "Store-level and program KPI dashboards." },
      { name: "Power BI", snapshot: "Operations reporting at VGANG." },
      { name: "Excel", snapshot: "Analysis, dashboarding, and reporting across multiple roles." },
      { name: "Looker", snapshot: "Listed analytics skill from resume." },
      { name: "Google Analytics", snapshot: "Metrics translated into operational reports at VGANG." },
    ],
  },
  {
    root: "Research + Communication",
    nodes: [
      { name: "Survey analysis", snapshot: "Waterville Creates and AI governance field research." },
      { name: "Policy context", snapshot: "Government major and public trust in AI governance work." },
      { name: "Training", snapshot: "Staff data-entry training and IT technician mentorship." },
      { name: "Stakeholder translation", snapshot: "Turning technical findings into operational decisions." },
      { name: "Fieldwork", snapshot: "Colombia/Panama research and U.S. national parks wildlife project." },
    ],
  },
];
