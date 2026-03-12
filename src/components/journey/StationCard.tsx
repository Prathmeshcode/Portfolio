"use client";

import type { ReactNode } from "react";

export function StationCard({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 py-24 sm:px-10"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_0%,rgba(56,189,248,0.20),transparent_45%),radial-gradient(700px_circle_at_80%_10%,rgba(244,114,182,0.18),transparent_45%),radial-gradient(600px_circle_at_40%_100%,rgba(34,197,94,0.12),transparent_45%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <div className="mt-6 text-pretty text-sm leading-7 text-white/80 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

