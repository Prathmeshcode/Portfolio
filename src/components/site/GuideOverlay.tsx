"use client";

import { usePathname } from "next/navigation";
import { profile } from "@/lib/portfolio";

const copyByRoute: Record<string, { title: string; body: string }> = {
  "/": {
    title: "Journey guide",
    body: "Scroll to travel through my work. The traveler is your guide through my portfolio stations.",
  },
  "/about": {
    title: "About me",
    body: "A quick snapshot of who I am, how I think, and what I’m optimizing for as an engineer.",
  },
  "/skills": {
    title: "Skill map",
    body: "My stack across frontend, backend, databases, and tools — with a strong focus on scalable systems.",
  },
  "/projects": {
    title: "Selected work",
    body: "Projects built with product thinking: clear flows, stable data models, and maintainable architecture.",
  },
  "/experience": {
    title: "Experience",
    body: "Internships + current work — learning in real teams, shipping real features, improving reliability.",
  },
  "/creative": {
    title: "Creative edge",
    body: "Music, theatre, and storytelling — a perspective that upgrades UX, narrative, and polish.",
  },
  "/services": {
    title: "How I help",
    body: "From MVPs to production systems: full-stack development, APIs, databases, and UI/UX execution.",
  },
  "/contact": {
    title: "Let’s connect",
    body: "Open to roles and collaborations. Also check out my startup KalaGoon for premium software delivery.",
  },
};

export function GuideOverlay() {
  const pathname = usePathname();
  const copy = copyByRoute[pathname] ?? copyByRoute["/"];

  return (
    <div className="pointer-events-none fixed bottom-5 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="pointer-events-auto inline-flex max-w-[46rem] flex-col gap-2 border border-white/10 bg-black/45 p-4 backdrop-blur-xl sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              {copy.title}
            </div>
            <div className="mt-2 text-sm leading-6 text-white/80">{copy.body}</div>
          </div>

          <a
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
            href={profile.links.techFirm}
            target="_blank"
            rel="noreferrer"
          >
            KalaGoon
          </a>
        </div>
      </div>
    </div>
  );
}

