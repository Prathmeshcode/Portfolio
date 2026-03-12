"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { profile } from "@/lib/portfolio";

const nav = [
  { href: "/", label: "Journey" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/creative", label: "Creative" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const items = useMemo(() => nav, []);

  return (
    <header className="pointer-events-auto fixed left-0 right-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-10">
        <Link
          href="/"
          className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm font-semibold tracking-tight text-white backdrop-blur"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/35 p-1 backdrop-blur lg:flex">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition",
                  active ? "bg-white text-black" : "text-white/75 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.techFirm}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 sm:inline-flex"
          >
            KalaGoon
          </a>
          <a
            href={profile.links.resume}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/35 px-3 py-2 text-sm font-semibold text-white backdrop-blur lg:hidden"
            aria-expanded={open}
            aria-label="Open navigation menu"
          >
            Menu
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {open ? (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-0 right-0 top-0 z-40 mx-auto mt-20 max-w-6xl px-5 sm:px-10">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl">
              <div className="grid gap-1 p-2">
                {items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "rounded-xl px-4 py-3 text-sm font-semibold transition",
                        active ? "bg-white text-black" : "text-white/85 hover:bg-white/10",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  href={profile.links.techFirm}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  {profile.techFirm.name}
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                    {profile.techFirm.headline}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

