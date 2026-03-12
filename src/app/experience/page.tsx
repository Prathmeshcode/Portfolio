import { PageShell } from "@/components/site/PageShell";
import { internships, profile } from "@/lib/portfolio";

export default function ExperiencePage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
          Experience
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Practical engineering in real teams
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-white/75">
          From internships to current work, I’ve focused on backend thinking, database-first
          clarity, and shipping features with reliability.
        </p>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
          <div className="space-y-4 text-sm leading-7 text-white/75">
            <div className="text-sm font-semibold text-white">Current</div>
            <p>
              {profile.working}. I enjoy building software that feels clean for users and
              predictable for teams.
            </p>
          </div>
          <div className="border-l border-white/10 pl-6 text-sm text-white/75">
            <div className="text-sm font-semibold text-white">Focus areas</div>
            <ul className="mt-4 space-y-2">
              <li>APIs that are consistent and documented</li>
              <li>Database design that supports real reporting</li>
              <li>UI that communicates state clearly</li>
              <li>Debugging and performance thinking</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-10">
          {internships.map((e) => (
            <article key={e.company} className="border-t border-white/10 pt-10">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {e.company}
                </h2>
                <div className="text-sm font-semibold text-white/65">{e.role}</div>
              </div>
              <p className="mt-5 max-w-4xl text-sm leading-7 text-white/75">{e.summary}</p>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {e.highlights.map((h) => (
                  <div key={h} className="flex gap-3 text-sm text-white/75">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/55" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

