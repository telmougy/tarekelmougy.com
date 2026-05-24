import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/cv";
import { SectionReveal } from "./section-reveal";

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="mx-auto max-w-5xl px-6 py-20 sm:py-28"
    >
      <SectionReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Certifications & Education
        </p>
        <h2
          id="certifications-heading"
          className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          <span className="gradient-text">Always learning</span>.
        </h2>
      </SectionReveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <SectionReveal key={`${cert.title}-${cert.date}`} delay={i * 0.03}>
            <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent-from)]"
                >
                  <Award className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-bold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {cert.issuer} · <span className="font-mono text-xs">{cert.date}</span>
                  </p>
                  {cert.credentialId ? (
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] break-all">
                      ID: {cert.credentialId}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          </SectionReveal>
        ))}

        {education.map((ed, i) => (
          <SectionReveal key={ed.title} delay={(certifications.length + i) * 0.03}>
            <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent-from)]"
                >
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-bold leading-snug">
                    {ed.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {ed.issuer} · <span className="font-mono text-xs">{ed.date}</span>
                  </p>
                </div>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
