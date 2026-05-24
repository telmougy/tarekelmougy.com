"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/cv";
import { LampContainer } from "@/components/ui/lamp";

export function Hero() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    const onReplay = () => {
      setReplayKey((k) => k + 1);
      setRoleIndex(0);
    };
    window.addEventListener("replay-hero", onReplay);
    return () => window.removeEventListener("replay-hero", onReplay);
  }, []);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate"
    >
      <LampContainer key={replayKey}>
        <motion.h1
          id="hero-heading"
          initial={reduce ? false : { opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="gradient-text mt-6 text-center font-display text-4xl font-bold tracking-tight md:text-7xl"
        >
          Let&apos;s build quality
          <br /> systems together
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
          className="gradient-text mt-8 text-center font-display text-3xl font-bold tracking-tight sm:text-5xl"
        >
          {profile.name}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, ease: "easeOut" }}
          className="mt-3 h-8 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={reduce ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="block text-center font-display text-lg font-medium text-slate-300 sm:text-xl"
            >
              {profile.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <p className="mt-6 max-w-2xl text-center text-sm leading-7 text-slate-400 sm:text-base">
          {profile.pitch}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="gradient-bg group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-from)] focus-visible:ring-offset-slate-950"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.cvPath}
            download
            className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-6 text-sm font-medium text-slate-100 transition-colors hover:border-[var(--accent-from)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </LampContainer>
    </section>
  );
}
