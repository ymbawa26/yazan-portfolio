"use client";

import { skillGroups } from "@/content/skills";
import { Reveal } from "@/components/reveal";

export function SkillsArchitecture() {
  return (
    <Reveal className="skill-map" aria-label="Capability map">
      {skillGroups.map((group) => (
        <div key={group.root} className="skill-root">
          <div className="root-node">{group.root}</div>
          <div className="skill-branches">
            {group.nodes.map((node) => (
              <article key={node.name} className="skill-node">
                <span>{node.name}</span>
                <small>{node.snapshot}</small>
              </article>
            ))}
          </div>
        </div>
      ))}
    </Reveal>
  );
}
