import Image from "next/image";
import { about, stats, profile } from "@/data/cv";
import { SectionReveal } from "./section-reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-5xl px-6 py-20 sm:py-28"
    >
      <SectionReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          About
        </p>
        <h2
          id="about-heading"
          className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Engineer who ships <span className="gradient-text">trustworthy software</span>.
        </h2>
      </SectionReveal>

      <div className="mt-10 grid gap-10 md:grid-cols-5">
        <SectionReveal delay={0.05} className="md:col-span-2 flex md:block">
          <Portrait />
        </SectionReveal>

        <SectionReveal delay={0.1} className="md:col-span-3 space-y-5 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </SectionReveal>
      </div>

      <SectionReveal delay={0.15} className="mt-12">
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
            >
              <dt className="text-xs text-[var(--muted)]">{s.label}</dt>
              <dd className="font-display mt-2 text-2xl font-bold gradient-text">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </SectionReveal>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-44 sm:w-56 md:w-full md:max-w-[280px]">
      <div
        aria-hidden="true"
        className="gradient-bg absolute -inset-1 rounded-3xl opacity-70 blur-md"
      />
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]">
        <Image
          src="/myphoto2.png"
          alt={`Portrait of ${profile.name}`}
          fill
          priority
          sizes="(min-width: 768px) 280px, 224px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
