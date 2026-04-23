"use client";

import { BarChart3, Brain, Compass, Users } from "lucide-react";
import { useState } from "react";
import { capabilities } from "@/content/skills";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

const icons = [BarChart3, Users, Brain, Compass];

export function CapabilityPillars() {
  const [active, setActive] = useState(0);
  const activeCapability = capabilities[active];

  return (
    <Reveal className="pillar-layout">
      <div className="pillar-tabs" role="tablist" aria-label="Capability pillars">
        {capabilities.map((capability, index) => {
          const Icon = icons[index];
          return (
            <button
              key={capability.title}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="capability-panel"
              className={cn("pillar-tab", active === index && "pillar-tab--active")}
              onClick={() => setActive(index)}
            >
              <Icon size={22} />
              <span>{capability.title}</span>
            </button>
          );
        })}
      </div>
      <div id="capability-panel" className="proof-panel" role="tabpanel">
        <p className="proof-kicker">Where it shows up</p>
        <h3>{activeCapability.title}</h3>
        <p>{activeCapability.short}</p>
        <div className="tool-chips">
          {activeCapability.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <ul>
          {activeCapability.evidence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {activeCapability.title === "Direct Stakeholder Experience" ? (
          <blockquote>{profile.philosophy}</blockquote>
        ) : null}
      </div>
    </Reveal>
  );
}
