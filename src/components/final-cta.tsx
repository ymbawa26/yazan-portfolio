import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section id="contact" className="final-cta scroll-mt-28">
      <Reveal className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="eyebrow">Contact</p>
        <h2>For teams that need range, judgment, and useful evidence.</h2>
        <p>
          I am looking for work where analysis has to become product thinking, stakeholder clarity, and
          systems-level understanding.
        </p>
        <div className="contact-grid">
          <a href={`mailto:${profile.email}?subject=Portfolio%20conversation%20with%20Yazan`}>
            <Mail size={18} />
            Email me
          </a>
          <a href={`tel:${profile.phone.replaceAll("-", "")}`}>
            <Phone size={18} />
            Call me
          </a>
          <Link href="/contact">
            <Mail size={18} />
            Contact page
          </Link>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <span>
            <MapPin size={18} />
            {profile.location}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
