import { BookOpen, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";

export function EducationSection() {
  return (
    <section className="section-shell education-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="education-layout">
          <article className="education-card education-card--primary">
            <GraduationCap size={28} />
            <p className="eyebrow">Colby College</p>
            <h2>{profile.education.degree}</h2>
            <p>
              Graduation: {profile.education.graduation}. GPA: {profile.education.gpa}.
            </p>
            <div className="tool-chips">
              {profile.education.majors.map((major) => (
                <span key={major}>{major}</span>
              ))}
            </div>
          </article>
          <article className="education-card">
            <BookOpen size={28} />
            <p className="eyebrow">Coursework</p>
            <h3>Classes that support the portfolio.</h3>
            <div className="course-grid">
              {profile.education.coursework.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
