import { experiences } from "@/content/experience";
import { Reveal } from "@/components/reveal";

export function ExperienceTimeline() {
  return (
    <div className="experience-stack">
      {experiences.map((experience, index) => (
        <Reveal key={experience.company} className="experience-card" delay={index * 0.04}>
          <div className="experience-meta">
            <p>{experience.date}</p>
            <span>{experience.location}</span>
          </div>
          <div className="experience-body">
            <p className="eyebrow">{experience.company}</p>
            <h3>{experience.role}</h3>
            <p className="experience-problem">{experience.problem}</p>
            <p className="experience-impact">{experience.impact}</p>
            <div className="tool-chips">
              {experience.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
            <ul>
              {experience.proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
