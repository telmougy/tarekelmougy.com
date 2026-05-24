"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects, type Project } from "@/data/cv";
import { SectionReveal } from "./section-reveal";

const VISIBLE_COUNT = 4;

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, VISIBLE_COUNT);
  const hiddenCount = projects.length - VISIBLE_COUNT;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-5xl px-6 py-20 sm:py-28"
    >
      <SectionReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Projects
        </p>
        <h2
          id="projects-heading"
          className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Selected <span className="gradient-text">projects</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
          Automation frameworks, CI/CD quality gates, SDK validation, fintech workflows, Web3 staking, and automotive validation systems.
        </p>
      </SectionReveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((project, i) => (
          <SectionReveal key={project.title} delay={i * 0.04} className="h-full">
            <ProjectCard project={project} />
          </SectionReveal>
        ))}
      </div>

      {hiddenCount > 0 ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-[var(--accent-from)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]"
          >
            {expanded ? "Show fewer projects" : `Show ${hiddenCount} more project${hiddenCount === 1 ? "" : "s"}`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      ) : null}
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7">
      <header>
        <h3 className="font-display text-lg font-bold sm:text-xl">{project.title}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[var(--accent-from)]">
          {project.company}
        </p>
      </header>

      <p className="mt-4 text-sm leading-6 text-[var(--muted)] sm:text-[15px] sm:leading-7">
        {project.summary}
      </p>

      <div className="mt-5 space-y-3">
        <TagRow label="Stack" items={project.stack} variant="accent" />
        <TagRow label="Focus" items={project.focus} variant="muted" />
      </div>
    </article>
  );
}

function TagRow({
  label,
  items,
  variant,
}: {
  label: string;
  items: string[];
  variant: "accent" | "muted";
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className={
              variant === "accent"
                ? "inline-flex items-center rounded-full border border-[var(--accent-from)]/40 px-2.5 py-0.5 text-xs text-foreground"
                : "inline-flex items-center rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
