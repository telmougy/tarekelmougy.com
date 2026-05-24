"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          aria-label="Tarek Elmougy — Home"
          className="relative block h-10 w-10 overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]"
        >
          <Image
            src="/Logowithoutbackground.png"
            alt=""
            fill
            sizes="40px"
            priority
            className="object-contain"
          />
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden sm:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm text-[var(--muted)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
