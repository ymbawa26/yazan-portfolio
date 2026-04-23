import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";

export function CharacterNotes() {
  return (
    <section className="section-shell character-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="section-heading">
          <p className="eyebrow">Character Notes</p>
          <h2>What I pay attention to.</h2>
          <p className="section-intro">
            The technical work is easier to understand when you know what pulls my attention outside of
            it: movement, place, trust, people, and the natural world.
          </p>
        </Reveal>
        <Reveal className="character-grid">
          {profile.fieldNotes.map((note) => (
            <article key={note.title} className="character-card">
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
