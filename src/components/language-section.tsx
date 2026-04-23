import { Languages } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { spokenLanguages } from "@/content/skills";

export function LanguageSection() {
  return (
    <Reveal className="language-panel">
      <div>
        <Languages size={28} />
        <p className="eyebrow">Languages</p>
        <h3>How I communicate across contexts.</h3>
      </div>
      <div className="language-grid">
        {spokenLanguages.map((language) => (
          <article key={language.language} className="language-card">
            <h4>{language.language}</h4>
            <p>{language.level}</p>
            <small>{language.context}</small>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
