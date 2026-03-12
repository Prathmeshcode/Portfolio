"use client";

import { useEffect, useMemo, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(Boolean(mq.matches));
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return reduced;
}

export function TypewriterText({
  text,
  startDelayMs = 45000,
  charIntervalMs = 34000,
  className,
}: {
  text: string;
  startDelayMs?: number;
  charIntervalMs?: number;
  className?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [shown, setShown] = useState(reducedMotion ? text : "");

  const safeText = useMemo(() => text ?? "", [text]);

  useEffect(() => {
    if (reducedMotion) {
      setShown(safeText);
      return;
    }

    setShown("");
    let idx = 0;
    let timer: number | undefined;
    let interval: number | undefined;

    timer = window.setTimeout(() => {
      interval = window.setInterval(() => {
        idx += 1;
        setShown(safeText.slice(0, idx));
        if (idx >= safeText.length && interval) {
          window.clearInterval(interval);
        }
      }, charIntervalMs);
    }, startDelayMs);

    return () => {
      if (timer) window.clearTimeout(timer);
      if (interval) window.clearInterval(interval);
    };
  }, [safeText, startDelayMs, charIntervalMs, reducedMotion]);

  const done = shown.length >= safeText.length;

  return (
    <span className={className}>
      <span>{shown}</span>
      <span
        aria-hidden="true"
        className={[
          "type-caret ml-[0.08em] inline-block w-[0.65ch]",
          done ? "opacity-60" : "opacity-90",
        ].join(" ")}
      >
        |
      </span>
    </span>
  );
}

