import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { goals } from "@/content/goals";

export function GoalsSection() {
  return (
    <section className="section-shell goals-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="goals-grid">
          {goals.map((goal, index) => (
            <article key={goal.title} className="goal-card">
              <span className="goal-number">{String(index + 1).padStart(2, "0")}</span>
              <ArrowUpRight size={22} />
              <h3>{goal.title}</h3>
              <p>{goal.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
