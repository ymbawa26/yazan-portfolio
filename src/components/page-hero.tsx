import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { StickyNav } from "@/components/sticky-nav";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <>
      <StickyNav />
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="page-hero-card">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
            {children}
          </Reveal>
        </div>
      </section>
    </>
  );
}
