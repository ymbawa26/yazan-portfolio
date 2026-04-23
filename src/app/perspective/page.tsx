import { PageHero } from "@/components/page-hero";
import { PerspectiveSections } from "@/components/perspective-sections";
import { SectionShell } from "@/components/section-shell";

export default function PerspectivePage() {
  return (
    <main>
      <PageHero
        eyebrow="Perspective"
        title="The technical part matters more when it has a wider frame."
        intro="Data and AI are not neutral scenery to me. They shape how people, institutions, and environments get understood, trusted, challenged, or ignored."
      />
      <SectionShell
        id="perspective"
        eyebrow="Global, Natural, Institutional"
        title="The personal texture behind the work."
        intro="Countries, trails, wildlife, government, books, public trust, and field research all feed the same habit: paying attention before reaching for a conclusion."
      >
        <PerspectiveSections />
      </SectionShell>
    </main>
  );
}
