"use client";

import {
  creative,
  goals,
  internships,
  learningNow,
  profile,
  projects,
  services,
  skills,
  strengths,
  summary,
} from "@/lib/portfolio";
import { Chip } from "@/components/ui/Chip";
import { TypewriterText } from "@/components/ui/TypewriterText";

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-white/80">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ChipGrid({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((t) => (
        <Chip key={t}>{t}</Chip>
      ))}
    </div>
  );
}

export function StationsOverlay() {
  return (
    <div className="pointer-events-none relative z-10">
      <div className="pointer-events-auto">
        <JourneySection
          id="hero"
          eyebrow={profile.location}
          title={
            <TypewriterText
              text={profile.hero.headline}
              className="inline-block"
              startDelayMs={520}
              charIntervalMs={32}
            />
          }
        >
          <p className="text-lg text-white/90 sm:text-xl">{profile.hero.title}</p>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-white/75 sm:text-lg">
            {profile.hero.subtext}
          </p>
          <div className="mt-8 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                  Tech firm / startup
                </div>
                <div className="mt-2 text-base font-semibold text-white">
                  {profile.techFirm.name}
                </div>
                <div className="mt-1 text-sm text-white/70">{profile.techFirm.blurb}</div>
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
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {profile.personalities.map((p) => (
              <div key={p.title} className="border-l border-white/15 pl-5">
                <div className="text-sm font-semibold text-white">{p.title}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                  {p.subtitle}
                </div>
                <div className="mt-4 text-sm leading-7 text-white/70">{p.blurb}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
              href="/contact"
            >
              Contact
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white"
              href={profile.links.resume}
            >
              Download Resume
            </a>
          </div>
        </JourneySection>

        <JourneySection id="about" eyebrow="About" title="An engineer who ships — and a creative who cares.">
          <p className="max-w-4xl text-pretty text-base leading-8 text-white/75 sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <InfoRow k="Profession" v={profile.profession} />
            <InfoRow k="Education" v={profile.education} />
            <InfoRow k="Working" v={profile.working} />
            <InfoRow k="Location" v={profile.location} />
          </div>
          <div className="mt-10 border-t border-white/10 pt-8">
            <List items={summary} />
          </div>
        </JourneySection>

        <JourneySection id="skills" eyebrow="Skills" title="Stack, systems, and craft">
          <div className="mt-10 grid gap-10">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="grid gap-4 md:grid-cols-[260px_1fr]">
                <div className="text-sm font-semibold text-white/85">{group}</div>
                <div>
                  <ChipGrid items={items} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-[260px_1fr] border-t border-white/10 pt-10">
            <div className="text-sm font-semibold text-white/85">Currently learning</div>
            <ChipGrid items={learningNow} />
          </div>
        </JourneySection>

        <JourneySection id="projects" eyebrow="Projects" title="Selected work">
          <div className="mt-10 grid gap-10">
            {projects.map((p) => (
              <div key={p.title} className="grid gap-3 border-t border-white/10 pt-8">
                <div className="text-xl font-semibold tracking-tight text-white">{p.title}</div>
                <div className="max-w-4xl text-sm leading-7 text-white/75">{p.description}</div>
                {p.tech?.length ? (
                  <div className="pt-2">
                    <ChipGrid items={p.tech} />
                  </div>
                ) : null}
                {p.features?.length ? (
                  <div className="pt-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                      Highlights
                    </div>
                    <List items={p.features} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </JourneySection>

        <JourneySection id="experience" eyebrow="Experience" title="Work exposure that shaped my engineering">
          <div className="mt-10 grid gap-10">
            {internships.map((e) => (
              <div key={e.company} className="grid gap-4 border-t border-white/10 pt-8">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div className="text-xl font-semibold tracking-tight text-white">{e.company}</div>
                  <div className="text-sm font-semibold text-white/65">{e.role}</div>
                </div>
                <div className="max-w-4xl text-sm leading-7 text-white/75">{e.summary}</div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                    Key learning
                  </div>
                  <List items={e.highlights} />
                </div>
              </div>
            ))}
          </div>
        </JourneySection>

        <JourneySection id="creative" eyebrow="Creative" title="Creativity that upgrades my engineering">
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {Object.values(creative).map((c) => (
              <div key={c.title} className="border-l border-white/15 pl-5">
                <div className="text-base font-semibold text-white">{c.title}</div>
                <List items={c.points} />
              </div>
            ))}
          </div>
        </JourneySection>

        <JourneySection id="services" eyebrow="Services" title="What I can deliver">
          <p className="max-w-4xl text-pretty text-base leading-8 text-white/75 sm:text-lg">
            I help teams build dependable software — fast iterations, clean APIs, strong database foundations, and polished UI/UX.
          </p>
          <div className="mt-10">
            <List items={services} />
          </div>
          <div className="mt-10 border-t border-white/10 pt-8">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              Also building
            </div>
            <div className="mt-2 text-base font-semibold text-white">{profile.techFirm.name}</div>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-white/75">
              {profile.techFirm.headline} If your team wants premium engineering and design-led execution, KalaGoon is our studio.
            </p>
            <a
              className="mt-5 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
              href={profile.links.techFirm}
              target="_blank"
              rel="noreferrer"
            >
              Explore KalaGoon
            </a>
          </div>
        </JourneySection>

        <JourneySection id="achievements" eyebrow="Direction" title="Strengths & goals">
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Personal strengths
              </div>
              <List items={strengths} />
            </div>
            <div className="border-t border-white/10 pt-8 md:border-t-0 md:border-l md:border-white/10 md:pl-8 md:pt-0">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Career goals
              </div>
              <div className="mt-5 text-sm font-semibold text-white/85">Short term</div>
              <List items={goals.shortTerm} />
              <div className="mt-8 text-sm font-semibold text-white/85">Long term</div>
              <List items={goals.longTerm} />
            </div>
          </div>
        </JourneySection>

        <JourneySection id="contact" eyebrow="Contact" title="Open to internships / full-time roles">
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <ContactLink label="Email" href={profile.links.email} />
            <ContactLink label="LinkedIn" href={profile.links.linkedin} />
            <ContactLink label="GitHub" href={profile.links.github} />
            <ContactLink label="YouTube" href={profile.links.youtube} />
          </div>
          {/* <div className="mt-10 border-t border-white/10 pt-8 text-sm text-white/70">
            Replace placeholder links in <code className="text-white/85">src/lib/portfolio.ts</code>.
          </div> */}
        </JourneySection>
      </div>

      <Footer />
    </div>
  );
}

function JourneySection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 py-24 sm:px-10"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-6xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function InfoRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-l border-white/15 pl-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
        {k}
      </div>
      <div className="mt-3 text-sm leading-7 text-white/80">{v}</div>
    </div>
  );
}

function ContactLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      className="group border border-white/10 bg-white/0 p-5 transition hover:border-white/20 hover:bg-white/5"
      href={href}
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

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="pointer-events-auto pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="border-t border-white/10 pt-10 text-sm text-white/70">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {year} {profile.name}. Built with Next.js + Three.js.
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="underline underline-offset-4 hover:text-white" href="/projects">
                Projects
              </a>
              <a className="underline underline-offset-4 hover:text-white" href="/contact">
                Contact
              </a>
              <a
                className="underline underline-offset-4 hover:text-white"
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

