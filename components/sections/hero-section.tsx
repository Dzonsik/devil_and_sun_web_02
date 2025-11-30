// components/sections/hero-section.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center"
      id="top"
    >
      <div className="absolute inset-0 bg-[url('/hero-tattoo.jpg')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center space-y-6">
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-400">
          Devil & Sun tattoo – Hranice
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Neotraditional, flashe i tetování na míru
        </h1>
        <p className="text-zinc-300 text-sm md:text-base">
          Mým cílem je nejen perfektní tetování, ale hlavně příjemný zážitek z
          našeho společného sezení.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/rezervace">Online rezervace</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#portfolio">Prohlédni si portfolio</a>
          </Button>
        </div>
      </div>
    </section>
  );
}