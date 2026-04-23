"use client";

import { ArrowDown, FileText, Mail, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { CSSProperties } from "react";
import { profile } from "@/content/profile";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero-section">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-grid mx-auto max-w-7xl px-5 sm:px-8">
        <div className="hero-copy">
          <motion.div
            className="hero-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles size={16} />
            <span>Data, AI, research, and the human systems around them</span>
          </motion.div>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
          >
            {profile.name}
          </motion.h1>
          <motion.p
            className="hero-role"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
          >
            {profile.role}
          </motion.p>
          <motion.p
            className="hero-summary"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24 }}
          >
            {profile.hero}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32 }}
          >
            <Link className="button button-primary" href="/projects">
              View Projects <ArrowDown size={17} />
            </Link>
            <a className="button button-secondary" href={profile.resume}>
              Resume <FileText size={17} />
            </a>
            <Link className="button button-ghost" href="/contact">
              Contact <Mail size={17} />
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="hero-instrument"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.22 }}
          aria-label="My capability summary"
        >
          <div className="instrument-glass">
            <p className="instrument-label">Operating range</p>
            <div className="descriptor-orbit">
              {profile.descriptors.map((descriptor, index) => (
                <span key={descriptor} style={{ "--i": index } as CSSProperties}>
                  {descriptor}
                </span>
              ))}
            </div>
            <div className="signal-stack" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p className="instrument-note">
              Built from my verified work across retail operations, nonprofit analytics, civic tech, legal
              data, AI research, and wildlife prediction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
