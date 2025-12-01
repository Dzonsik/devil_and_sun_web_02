// components/sections/portfolio-section.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const MOCK_WORKS = [
  { id: 1, src: "/portfolio/work-1.jpg", alt: "Tetování 1" },
  { id: 2, src: "/portfolio/work-2.jpg", alt: "Tetování 2" },
  { id: 3, src: "/portfolio/work-3.jpg", alt: "Tetování 3" },
  { id: 4, src: "/portfolio/work-4.jpg", alt: "Tetování 4" },
  { id: 5, src: "/portfolio/work-5.jpg", alt: "Tetování 5" },
  { id: 6, src: "/portfolio/work-6.jpg", alt: "Tetování 6" },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="border-t border-zinc-800 bg-black/40 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Mé práce
        </p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
          Čerstvá i zahojená tetování
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-zinc-300">
          Výběr z tetování, která jsem v poslední době dělal – mix motivů,
          velikostí i stylů, ať máš lepší představu, jak moje práce vypadá na
          kůži.
        </p>

        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {MOCK_WORKS.map((work) => (
            <Card
              key={work.id}
              className="group overflow-hidden border-zinc-800 bg-zinc-950/70"
            >
              <CardContent className="p-2">
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}