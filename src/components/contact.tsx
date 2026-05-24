import { Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/cv";
import { SectionReveal } from "./section-reveal";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 5.81 0c2.22-1.49 3.19-1.18 3.19-1.18.62 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-5xl px-6 py-20 sm:py-28"
    >
      <SectionReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-5xl"
        >
          Let&apos;s <span className="gradient-text">build something solid</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
          Available for Senior SDET, Senior QA Automation Engineer, QA Lead, and Test Architect roles — remote-first, anywhere in the world.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="gradient-bg group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-from)] focus-visible:ring-offset-[var(--background)]"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 text-sm font-medium text-foreground transition-colors hover:border-[var(--accent-from)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 text-sm font-medium text-foreground transition-colors hover:border-[var(--accent-from)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
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
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
          <MapPin className="h-4 w-4" />
          {profile.location}
        </p>
      </SectionReveal>

      <footer className="mt-20 border-t border-[var(--border)] pt-8 text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind, and a lot of test coverage.
      </footer>
    </section>
  );
}
