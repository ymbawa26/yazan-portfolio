"use client";

import { Check, Copy, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { profile } from "@/content/profile";

export function ContactPanel() {
  const [copied, setCopied] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  async function copy(value: string, label: string) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const input = document.createElement("textarea");
        input.value = value;
        input.setAttribute("readonly", "true");
        input.style.position = "fixed";
        input.style.top = "-1000px";
        document.body.appendChild(input);
        input.focus();
        input.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(input);
        if (!ok) throw new Error("Copy command failed");
      }
      setCopied(label);
      setCopyError(null);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopyError(`This browser blocked one-click copy. The value is visible here: ${value}`);
      window.setTimeout(() => setCopyError(null), 3200);
    }
  }

  return (
    <section className="section-shell contact-page-section">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="contact-intro-card">
          <p className="eyebrow">Reach me directly</p>
          <h2>Make it easy to start the right conversation.</h2>
          <p>
            If you want to talk about data, product, AI, research, civic technology, wildlife analytics,
            or an internship/full-time role, email is best. Calling works too if it is time-sensitive.
          </p>
        </div>
        <div className="contact-action-panel">
          <a className="contact-action contact-action--primary" href={`mailto:${profile.email}?subject=Portfolio%20conversation%20with%20Yazan&body=Hi%20Yazan%2C%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20connect%20about%3A%0A`}>
            <Mail size={22} />
            <span>
              <strong>Send me an email</strong>
              <small>{profile.email}</small>
            </span>
          </a>
          <a className="contact-action" href={`tel:${profile.phone.replaceAll("-", "")}`}>
            <Phone size={22} />
            <span>
              <strong>Call me</strong>
              <small>{profile.phone}</small>
            </span>
          </a>
          <button type="button" className="contact-action" onClick={() => copy(profile.email, "email")}>
            {copied === "email" ? <Check size={22} /> : <Copy size={22} />}
            <span>
              <strong>{copied === "email" ? "Email copied" : "Copy email"}</strong>
              <small className="selectable-value">{profile.email}</small>
            </span>
          </button>
          <button type="button" className="contact-action" onClick={() => copy(profile.phone, "phone")}>
            {copied === "phone" ? <Check size={22} /> : <Copy size={22} />}
            <span>
              <strong>{copied === "phone" ? "Phone copied" : "Copy phone"}</strong>
              <small className="selectable-value">{profile.phone}</small>
            </span>
          </button>
          <a className="contact-action" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={22} />
            <span>
              <strong>LinkedIn</strong>
              <small>linkedin.com/in/yazan-bawaqna</small>
            </span>
          </a>
          <a className="contact-action" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={22} />
            <span>
              <strong>GitHub</strong>
              <small>github.com/ymbawa26</small>
            </span>
          </a>
        </div>
        <p className="copy-status" role="status" aria-live="polite">
          {copyError ?? (copied ? `${copied === "email" ? "Email" : "Phone"} copied.` : "")}
        </p>
      </div>
    </section>
  );
}
