"use client";

import { ExternalLink, Github, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function ProjectShowcase() {
  const [expanded, setExpanded] = useState<string | null>(projects[0]?.title ?? null);

  return (
    <Reveal className="project-story-list">
      {projects.map((project) => {
        const isExpanded = expanded === project.title;
        return (
          <article key={project.title} className={cn("project-story", `project-card--${project.accent}`)}>
            <div className="project-image-frame">
              <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 980px) 100vw, 48vw" />
            </div>
            <div className="project-story-copy">
              <button
                type="button"
                className="project-expand"
                aria-expanded={isExpanded}
                onClick={() => setExpanded(isExpanded ? null : project.title)}
              >
                <span>{project.repoName}</span>
                <Plus size={16} />
              </button>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tool-chips">
                {project.stack.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              {isExpanded ? (
                <div className="project-detail">
                  <p>
                    <strong>Why it matters:</strong> {project.whyItMatters}
                  </p>
                  {project.unresolved ? <p className="placeholder-note">{project.unresolved}</p> : null}
                </div>
              ) : null}
              <div className="project-actions">
                <a
                  href={project.primaryAction?.href ?? project.live ?? project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.primaryAction?.label ?? "Open Project"} <ExternalLink size={15} />
                </a>
                <a href={project.secondaryAction?.href ?? project.github} target="_blank" rel="noreferrer">
                  {project.secondaryAction?.label ?? "GitHub"} <Github size={15} />
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </Reveal>
  );
}
