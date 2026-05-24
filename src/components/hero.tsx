"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/cv";

export function Hero() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      <GradientBlob />

      <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          {profile.location}
        </p>

        <h1
          id="hero-heading"
          className="font-display mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
        >
          <span className="gradient-text">{profile.name}</span>
        </h1>

        <div className="mt-4 h-10 sm:h-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={reduce ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="font-display text-xl font-medium text-foreground sm:text-2xl"
            >
              {profile.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
          {profile.pitch}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="gradient-bg group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-from)] focus-visible:ring-offset-[var(--background)]"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.cvPath}
            download
            className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 text-sm font-medium text-foreground transition-colors hover:border-[var(--accent-from)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

function GradientBlob() {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        initial={false}
        animate={
          reduce
            ? undefined
            : { x: [0, 40, -20, 0], y: [0, -30, 20, 0] }
        }
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-3xl gradient-bg"
      />
    </div>
  );
}
