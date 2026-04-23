import { ArrowRight, BriefcaseBusiness, Compass, FolderKanban, GraduationCap, Network, Target } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";

const portals = [
  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
    text: "See the apps one by one: geography, civic tech, job-market transparency, wildlife, outreach, and Arabic spices.",
  },
  {
    title: "Experience",
    href: "/experience",
    icon: BriefcaseBusiness,
    text: "Follow the verified work across retail operations, nonprofit analytics, legal data, data product work, and IT.",
  },
  {
    title: "Education",
    href: "/education",
    icon: GraduationCap,
    text: "See the Colby majors, AI concentration, GPA, and coursework behind the technical foundation.",
  },
  {
    title: "Skills",
    href: "/skills",
    icon: Network,
    text: "Open the capability map: SQL, Python, BI, stakeholder operations, AI/ML, and research.",
  },
  {
    title: "Goals",
    href: "/goals",
    icon: Target,
    text: "Read the professional direction behind the work: expertise, speed, conservation, communities, and adaptability.",
  },
  {
    title: "Perspective",
    href: "/perspective",
    icon: Compass,
    text: "The part that gives the technical work texture: countries, field curiosity, hiking, wildlife, policy, and institutions.",
  },
] as const;

export function HomePortals() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="section-heading">
          <p className="eyebrow">Choose a thread</p>
          <h2>A few ways into the work.</h2>
          <p className="section-intro">{profile.character}</p>
        </Reveal>
        <Reveal className="portal-grid">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <Link key={portal.title} href={portal.href} className="portal-card">
                <Icon size={24} />
                <h3>{portal.title}</h3>
                <p>{portal.text}</p>
                <span>
                  Open <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
