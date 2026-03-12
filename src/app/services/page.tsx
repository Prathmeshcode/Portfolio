import { PageShell } from "@/components/site/PageShell";
import { services } from "@/lib/portfolio";

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
          Services
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          How I can contribute to your team
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-white/75">
          I enjoy ownership: understanding a problem, designing a clean solution, and shipping
          with quality. These are the areas I can help with immediately.
        </p>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s} className="border-l border-white/15 pl-5">
              <div className="text-base font-semibold text-white">{s}</div>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Clear communication, clean implementation, and scalable decisions — built for
                real business needs.
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

