export type Experience = {
  company: string;
  role: string;
  location: string;
  date: string;
  problem: string;
  impact: string;
  tools: string[];
  proof: string[];
};

export const experiences: Experience[] = [
  {
    company: "AlHobishi LLC",
    role: "Business Operations Analyst",
    location: "Raleigh, NC",
    date: "May 2025 - Feb 2026",
    problem:
      "I worked on eight retail locations that needed cleaner cross-location visibility into product movement, restocking patterns, and workflow consistency.",
    impact:
      "I built store-level dashboards and standardized Salesforce CRM data entry, reducing stock-out incidents by 20% and improving data completeness by 35%.",
    tools: ["Excel", "SQL", "Tableau", "Azure-hosted data systems", "Salesforce"],
    proof: [
      "I segmented product sales and turnover by category, store, and week.",
      "I trained staff on data-entry protocols across locations.",
      "I used trend analysis to support more accurate restocking forecasts.",
    ],
  },
  {
    company: "Waterville Creates",
    role: "Data Analyst Intern",
    location: "Waterville, ME",
    date: "May 2024 - Sep 2024",
    problem:
      "I helped turn scattered program and engagement data into reliable planning evidence.",
    impact:
      "I analyzed more than 10,000 survey and engagement records, improving data completeness by about 35% and informing quarterly planning and budget decisions.",
    tools: ["Pandas", "SQL", "Tableau", "Excel"],
    proof: [
      "I designed a clean analytical dataset with CTEs and aggregations.",
      "I built KPI dashboards tracking attendance across demographics.",
      "I translated engagement patterns into planning context.",
    ],
  },
  {
    company: "VGANG",
    role: "Data Product Intern",
    location: "Remote",
    date: "May 2023 - Aug 2023",
    problem:
      "I supported product and operations teams that needed user behavior analysis for reporting and model-training workflows.",
    impact:
      "I queried large user datasets for cohort and funnel analysis, supporting TensorFlow and PyTorch model-training work that improved engagement by 20%.",
    tools: ["Snowflake", "SQL", "TensorFlow", "PyTorch", "Power BI", "Excel", "Google Analytics"],
    proof: [
      "I extracted large-scale datasets through Snowflake SQL.",
      "I translated Google Analytics metrics into operations reports.",
      "I connected analytics output with product-facing AI work.",
    ],
  },
  {
    company: "Maine Indigent Defense Center",
    role: "Data Analyst Intern",
    location: "Portland, ME",
    date: "Dec 2023 - Feb 2024",
    problem:
      "I worked with public-interest legal data that needed structured analysis to reveal patterns in hearings, caseload distribution, and judicial efficiency.",
    impact:
      "I analyzed 500+ plea hearings across Maine courts and delivered stakeholder-facing visualizations tied to equitable defense access.",
    tools: ["scikit-learn", "Seaborn", "Matplotlib", "Python"],
    proof: [
      "I identified patterns across court hearing records.",
      "I built visualizations for stakeholders rather than only technical readers.",
      "I connected data work to institutional fairness and access questions.",
    ],
  },
  {
    company: "Colby IT Support Center",
    role: "Student Technician II",
    location: "Waterville, ME",
    date: "Aug 2022 - Present",
    problem:
      "I work in a campus support environment that needs reliable front-line troubleshooting, student technician mentorship, and calm service under pressure.",
    impact:
      "I was promoted to Level II, supervised and mentored student technicians, and supported 100+ faculty, staff, and students weekly while maintaining 95% satisfaction.",
    tools: ["Troubleshooting", "Mentorship", "Service operations", "Technical support"],
    proof: [
      "I coordinated front-line support across recurring campus needs.",
      "I mentored student technicians in a live support environment.",
      "I built the people-facing habits behind technical credibility.",
    ],
  },
];
