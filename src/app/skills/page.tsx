import { CapabilityPillars } from "@/components/capability-pillars";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { LanguageSection } from "@/components/language-section";
import { SkillsArchitecture } from "@/components/skills-architecture";

export default function SkillsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Skills"
        title="My skill set is organized around how I actually use it."
        intro="SQL, Python, BI, AI/ML, research, and stakeholder communication are not separate lanes for me. They are parts of the same loop: understand, model, explain, and help someone decide."
      />
      <SectionShell
        id="pillars"
        eyebrow="Capability Pillars"
        title="Four ways my range becomes useful."
        intro="Analysis depth, stakeholder fluency, applied AI exposure, and adaptability across environments."
      >
        <CapabilityPillars />
      </SectionShell>
      <SectionShell
        id="skills"
        eyebrow="Skills Architecture"
        title="A capability map, not a keyword pile."
        intro="Tools are organized around usage snapshots from real work."
      >
        <SkillsArchitecture />
      </SectionShell>
      <SectionShell
        id="languages"
        eyebrow="Languages"
        title="The communication layer matters too."
        intro="Technical skill travels further when I can explain the work clearly across people, cultures, and settings."
      >
        <LanguageSection />
      </SectionShell>
    </main>
  );
}
