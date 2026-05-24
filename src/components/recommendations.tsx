import Image from "next/image";
import { Quote } from "lucide-react";
import { recommendations, type Recommendation } from "@/data/cv";
import { SectionReveal } from "./section-reveal";

export function Recommendations() {
  return (
    <section
      id="recommendations"
      aria-labelledby="recommendations-heading"
      className="mx-auto max-w-5xl px-6 py-20 sm:py-28"
    >
      <SectionReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Recommendations
        </p>
        <h2
          id="recommendations-heading"
          className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          What people I&apos;ve worked with <span className="gradient-text">say</span>.
        </h2>
      </SectionReveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {recommendations.map((r, i) => (
          <SectionReveal key={r.name} delay={i * 0.05} className="h-full">
            <Card rec={r} />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

function Card({ rec }: { rec: Recommendation }) {
  return (
    <article className="relative h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7">
      <Quote
        aria-hidden="true"
        className="absolute right-5 top-5 h-8 w-8 text-[var(--accent-from)] opacity-25"
      />

      <header className="flex items-center gap-4">
        <Avatar name={rec.name} src={rec.avatar} />
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-bold leading-tight">
            {rec.linkedin ? (
              <a
                href={rec.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 decoration-[var(--accent-from)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)] rounded"
              >
                {rec.name}
              </a>
            ) : (
              rec.name
            )}
          </h3>
          <p className="mt-1 text-xs text-[var(--muted)] leading-snug">{rec.title}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[var(--accent-from)]">
            {rec.relationship}
          </p>
        </div>
      </header>

      <blockquote className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-[15px]">
        {rec.quote.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </blockquote>
    </article>
  );
}

function Avatar({ name, src }: { name: string; src?: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (src) {
    return (
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[var(--border)]">
        <Image src={src} alt={`${name} profile photo`} fill sizes="56px" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="gradient-bg flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
    >
      {initials}
    </div>
  );
}
