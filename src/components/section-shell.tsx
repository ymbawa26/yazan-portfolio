import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, title, intro, children }: SectionShellProps) {
  return (
    <section id={id} className="section-shell scroll-mt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
