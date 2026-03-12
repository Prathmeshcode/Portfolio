import { PageShell } from "@/components/site/PageShell";
import { profile, projects } from "@/lib/portfolio";
import { Chip } from "@/components/ui/Chip";

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
          Projects
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Case-study style work
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-white/75">
          I build projects with a product mindset: crisp user flows, stable data models, and
          maintainable systems. I care about clean architecture, consistent APIs, and UI that
          communicates clearly.
        </p>

        <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2">
          <div className="border-l border-white/15 pl-5">
            <div className="text-sm font-semibold text-white">How I work</div>
            <p className="mt-3 text-sm leading-7 text-white/75">
              I start by clarifying requirements, map the data model, design APIs, then build UI
              with strong state handling. I ship in small increments and iterate based on feedback.
            </p>
          </div>
          <div className="border-l border-white/15 pl-5">
            <div className="text-sm font-semibold text-white">Also building</div>
            <p className="mt-3 text-sm leading-7 text-white/75">
              {profile.techFirm.name} — {profile.techFirm.headline} We craft premium software
              solutions end-to-end.
            </p>
            <a
              className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
              href={profile.links.techFirm}
              target="_blank"
              rel="noreferrer"
            >
              Visit KalaGoon
            </a>
          </div>
        </div>

        <div className="mt-12 space-y-12">
          {projects.map((p) => (
            <article key={p.title} className="border-t border-white/10 pt-10">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {p.title}
                </h2>
                {p.tech?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                ) : null}
              </div>

              <p className="mt-5 max-w-4xl text-sm leading-7 text-white/75">
                {p.description}
              </p>

              {p.features?.length ? (
                <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <div key={f} className="flex gap-3 text-sm text-white/75">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/55" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

