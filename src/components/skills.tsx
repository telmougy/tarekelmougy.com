import { skills } from "@/data/cv";
import { SectionReveal } from "./section-reveal";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-5xl px-6 py-20 sm:py-28"
    >
      <SectionReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Skills
        </p>
        <h2
          id="skills-heading"
          className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          The <span className="gradient-text">toolkit</span>.
        </h2>
      </SectionReveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skills.map((group, i) => (
          <SectionReveal key={group.label} delay={i * 0.04}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-from)]">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-sm text-foreground transition-transform hover:-translate-y-0.5 hover:border-[var(--accent-from)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
