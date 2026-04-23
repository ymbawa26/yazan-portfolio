import { ExperienceTimeline } from "@/components/experience-timeline";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";

export default function ExperiencePage() {
  return (
    <main>
      <PageHero
        eyebrow="Experience"
        title="I have worked inside real operating environments, not just clean demos."
        intro="Retail operations, nonprofit programming, data product work, legal/public-interest analysis, and IT support all taught me the same thing: the best technical work respects the people who have to use it."
      />
      <SectionShell
        id="experience"
        eyebrow="Experience and Impact"
        title="Where the analysis had to matter."
        intro="Each role had a different surface area, but the work kept coming back to the same job: make messy information useful for real decisions."
      >
        <ExperienceTimeline />
      </SectionShell>
    </main>
  );
}
