"use client";

import { BookOpen, ChevronDown, Globe2, Leaf } from "lucide-react";
import { useState } from "react";
import { globalPerspective, humanities, natureInterest } from "@/content/travel";
import { Reveal } from "@/components/reveal";

export function PerspectiveSections() {
  const [natureOpen, setNatureOpen] = useState(false);

  return (
    <div className="perspective-grid">
      <Reveal className="perspective-card perspective-card--wide">
        <Globe2 size={24} />
        <p className="eyebrow">Global Perspective</p>
        <h3>{globalPerspective.headline}</h3>
        <p>{globalPerspective.body}</p>
        <div className="country-count">
          <span>{globalPerspective.countriesVisited}</span>
          <small>countries lived, studied, or traveled across</small>
        </div>
        <ul>
          {globalPerspective.facets.map((facet) => (
            <li key={facet}>{facet}</li>
          ))}
        </ul>
      </Reveal>
      <Reveal className="perspective-card nature-card">
        <div className="nature-image" aria-hidden="true" style={{ backgroundImage: `url(${natureInterest.image})` }} />
        <div className="nature-copy">
          <Leaf size={24} />
          <p className="eyebrow">Wildlife / Nature</p>
          <h3>{natureInterest.headline}</h3>
          <p>{natureInterest.body}</p>
          <div className="tool-chips">
            {natureInterest.details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
          <button
            type="button"
            className="expand-button"
            aria-expanded={natureOpen}
            onClick={() => setNatureOpen((value) => !value)}
          >
            {natureOpen ? "Close field note" : "Open my field note"}
            <ChevronDown size={16} />
          </button>
          {natureOpen ? <p className="expanded-note">{natureInterest.expanded}</p> : null}
        </div>
      </Reveal>
      <Reveal className="perspective-card">
        <BookOpen size={24} />
        <p className="eyebrow">Humanities / Government</p>
        <h3>{humanities.headline}</h3>
        <p>{humanities.body}</p>
        <div className="tool-chips">
          {humanities.details.map((detail) => (
            <span key={detail}>{detail}</span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
