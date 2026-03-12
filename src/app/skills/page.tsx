import { PageShell } from "@/components/site/PageShell";
import { learningNow, skills } from "@/lib/portfolio";
import { Chip } from "@/components/ui/Chip";

function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <Chip key={t}>{t}</Chip>
      ))}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
          Skills
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Stack depth + product craft
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-white/75">
          I focus on scalable backend foundations, clean frontend experiences, and pragmatic
          engineering that ships.
        </p>

        <div className="mt-12 grid gap-10">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="grid gap-4 border-t border-white/10 pt-8 md:grid-cols-[260px_1fr]"
            >
              <div className="text-sm font-semibold text-white/85">{group}</div>
              <ChipRow items={items} />
            </div>
          ))}

          <div className="grid gap-4 border-t border-white/10 pt-8 md:grid-cols-[260px_1fr]">
            <div className="text-sm font-semibold text-white/85">Currently learning</div>
            <ChipRow items={learningNow} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

