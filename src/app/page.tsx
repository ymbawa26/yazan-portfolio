import { CharacterNotes } from "@/components/character-notes";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HomePortals } from "@/components/home-portals";
import { StickyNav } from "@/components/sticky-nav";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main>
        <Hero />
        <HomePortals />
        <CharacterNotes />
        <FinalCta />
      </main>
    </>
  );
}
