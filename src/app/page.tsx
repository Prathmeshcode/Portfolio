import { Journey } from "@/components/journey/Journey";
import { StationsOverlay } from "@/components/journey/StationsOverlay";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Home() {
  return (
    <div className="relative min-h-[100svh] bg-black text-white">
      <Journey />

      {/* Keep it cinematic, but don't hide the 3D motion */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-80 mix-blend-screen bg-[radial-gradient(900px_circle_at_20%_0%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(900px_circle_at_80%_10%,rgba(244,114,182,0.10),transparent_45%),radial-gradient(700px_circle_at_50%_90%,rgba(34,197,94,0.08),transparent_45%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black/70 to-transparent" />

      <SiteHeader />
      <StationsOverlay />
    </div>
  );
}
