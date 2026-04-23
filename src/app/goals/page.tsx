import { GoalsSection } from "@/components/goals-section";
import { PageHero } from "@/components/page-hero";

export default function GoalsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Goals"
        title="The direction I am building toward."
        intro="I want my work to compound: stronger technical depth, faster shipping, better judgment, and projects that matter beyond the screen."
      />
      <GoalsSection />
    </main>
  );
}
