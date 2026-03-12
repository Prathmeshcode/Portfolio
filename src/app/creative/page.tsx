import { PageShell } from "@/components/site/PageShell";
import { creative, profile } from "@/lib/portfolio";

export default function CreativePage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
          Creative
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          The creative side that makes my software better
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-white/75">
          Music, theatre, and storytelling help me think in rhythm, emotion, and audience —
          which directly improves UX, narrative clarity, and product polish.
        </p>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
          {Object.values(creative).map((c) => (
            <div key={c.title} className="border-l border-white/15 pl-5">
              <div className="text-base font-semibold text-white">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-white/75">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/55" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="text-sm font-semibold text-white">Find my work</div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white"
              href={profile.links.youtube}
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
            <a
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

