import { PageShell } from "@/components/site/PageShell";
import { profile } from "@/lib/portfolio";

function LinkCard({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="group border border-white/10 bg-white/0 p-6 transition hover:border-white/20 hover:bg-white/5"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <div className="text-sm font-semibold text-white">{label}</div>
      <div className="mt-2 break-all text-sm text-white/70 group-hover:text-white/85">
        {href.replace("mailto:", "")}
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
          Contact
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Let’s talk about roles, projects, and product ideas
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-white/75">
          I’m actively looking for opportunities as a Full Stack Developer / Software Engineer.
          I work best with teams that care about quality, clarity, and real-world outcomes.
        </p>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                My startup
              </div>
              <div className="mt-2 text-base font-semibold text-white">{profile.techFirm.name}</div>
              <div className="mt-1 text-sm text-white/70">{profile.techFirm.headline}</div>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
              href={profile.links.techFirm}
              target="_blank"
              rel="noreferrer"
            >
              Visit KalaGoon
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
          <LinkCard label="Email" href={profile.links.email} />
          <LinkCard label="WhatsApp" href={profile.links.whatsapp} />
          <LinkCard label="LinkedIn" href={profile.links.linkedin} />
          <LinkCard label="GitHub" href={profile.links.github} />
          <LinkCard label="YouTube" href={profile.links.youtube} />
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <a
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
            href={profile.links.resume}
          >
            Download resume
          </a>
          {/* <p className="mt-4 text-sm text-white/70">
            Update your links in <code className="text-white/85">src/lib/portfolio.ts</code>.
          </p> */}
        </div>
      </section>
    </PageShell>
  );
}

