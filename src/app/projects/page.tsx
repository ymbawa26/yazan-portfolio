import { PageHero } from "@/components/page-hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { SectionShell } from "@/components/section-shell";

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Selected Projects"
        title="I build small products around real questions."
        intro="The through-line is range: sports analytics, geography, hiring transparency, civic coordination, wildlife, communication, and food culture. Different subjects, same habit of turning curiosity into something usable."
      />
      <SectionShell
        id="projects"
        eyebrow="One by one"
        title="Seven builds, each with a different world."
        intro="Some are public live demos. Some are honest local MVPs. All of them show how I think through a problem and make the first version concrete."
      >
        <ProjectShowcase />
      </SectionShell>
    </main>
  );
}
