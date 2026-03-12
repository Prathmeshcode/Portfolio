import { PageShell } from "@/components/site/PageShell";
import { profile, summary, strengths } from "@/lib/portfolio";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
          About
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {profile.tagline}
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-8 text-white/75">
            {summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <aside className="border-l border-white/10 pl-6">
            <div className="text-sm font-semibold text-white">Snapshot</div>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-white/55">Name</dt>
                <dd className="mt-1 text-white/85">{profile.name}</dd>
              </div>
              <div>
                <dt className="text-white/55">Role</dt>
                <dd className="mt-1 text-white/85">{profile.profession}</dd>
              </div>
              <div>
                <dt className="text-white/55">Education</dt>
                <dd className="mt-1 text-white/85">{profile.education}</dd>
              </div>
              <div>
                <dt className="text-white/55">Currently</dt>
                <dd className="mt-1 text-white/85">{profile.working}</dd>
              </div>
              <div>
                <dt className="text-white/55">Location</dt>
                <dd className="mt-1 text-white/85">{profile.location}</dd>
              </div>
            </dl>

            <div className="mt-10 text-sm font-semibold text-white">Strengths</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {strengths.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/55" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

