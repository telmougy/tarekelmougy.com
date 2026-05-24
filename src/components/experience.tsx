import { experience } from "@/data/cv";
import { ExternalLink } from "lucide-react";
import { SectionReveal } from "./section-reveal";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-5xl px-6 py-20 sm:py-28"
    >
      <SectionReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Experience
        </p>
        <h2
          id="experience-heading"
          className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          A timeline across <span className="gradient-text">six industries</span>.
        </h2>
      </SectionReveal>

      <ol className="relative mt-12 space-y-8 border-l border-[var(--border)] pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <SectionReveal key={job.company} delay={i * 0.04}>
            <li className="relative">
              <span
                aria-hidden="true"
                className="gradient-bg absolute -left-[31px] sm:-left-[45px] top-2 h-3 w-3 rounded-full ring-4 ring-[var(--background)]"
              />
              <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7">
                <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-bold sm:text-xl">
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline underline-offset-4 decoration-[var(--accent-from)]"
                      >
                        {job.company}
                        <ExternalLink className="h-3.5 w-3.5 text-[var(--muted)]" />
                      </a>
                    ) : (
                      job.company
                    )}
                    <span className="text-[var(--muted)] font-medium"> · {job.role}</span>
                  </h3>
                  <p className="font-mono text-xs text-[var(--muted)] whitespace-nowrap">
                    {job.dates}
                  </p>
                </header>

                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[var(--accent-from)]">
                  {job.industry}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)] sm:text-[15px] sm:leading-7">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 32)} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-from)]"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          </SectionReveal>
        ))}
      </ol>
    </section>
  );
}
