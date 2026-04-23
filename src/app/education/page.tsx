import { EducationSection } from "@/components/education-section";
import { PageHero } from "@/components/page-hero";

export default function EducationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Education"
        title="Computer science, AI, government, and the math behind them."
        intro="My academic path gives me both the technical foundation to build and the institutional lens to ask better questions about what technology is doing."
      />
      <EducationSection />
    </main>
  );
}
