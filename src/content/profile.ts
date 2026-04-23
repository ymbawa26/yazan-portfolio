export const profile = {
  name: "Yazan Bawaqna",
  role: "Data analyst, AI builder, and proficient programmer",
  email: "yazanbawaqna@gmail.com",
  phone: "207-343-4256",
  location: "Waterville, Maine / Raleigh, North Carolina",
  linkedin: "https://linkedin.com/in/yazan-bawaqna",
  github: "https://github.com/ymbawa26",
  resume: "/resume/Yazan_Bawaqna_CV13.pdf",
  education: {
    school: "Colby College",
    degree: "B.A. in Computer Science, AI Concentration, and Government",
    graduation: "May 2026",
    gpa: "3.55",
    majors: ["Computer Science, AI Concentration", "Government"],
    coursework: [
      "Data Analysis & Visualization",
      "Statistics",
      "Data Structures & Algorithms",
      "Neural Networks",
      "Machine Learning",
      "Research Methods",
      "Linear Algebra",
    ],
  },
  descriptors: [
    "Data Analyst",
    "AI Builder",
    "Global Researcher",
    "Stakeholder-Facing Problem Solver",
    "Nature and Policy Driven Thinker",
  ],
  hero:
    "I like work that makes the world less blurry: cleaning messy records, finding the pattern, building the tool, and explaining it plainly enough for someone to use.",
  philosophy:
    "Good analysis is not finished when the chart looks right. It is finished when the people making decisions can trust the method, understand the tradeoffs, and act without needing the analyst in the room to translate every step.",
  character:
    "I am drawn to work that feels alive: messy datasets, real people, unfamiliar places, policy questions, maps, trails, wildlife sightings, and products that make complicated things easier to understand.",
  fieldNotes: [
    {
      title: "How I think",
      text: "I like problems with texture. Numbers matter, but so do incentives, trust, culture, and the person who has to use the answer on a busy day.",
    },
    {
      title: "What I notice",
      text: "I notice movement: customers across stores, students across programs, users across funnels, court records across counties, animals across parks.",
    },
    {
      title: "What keeps me curious",
      text: "I like maps, long walks, field observation, government, food culture, and technology that becomes more useful when it understands the world outside the screen.",
    },
  ],
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Goals", href: "/goals" },
  { label: "Perspective", href: "/perspective" },
  { label: "Contact", href: "/contact" },
] as const;
