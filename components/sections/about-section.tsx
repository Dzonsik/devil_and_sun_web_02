// components/sections/about-section.tsx
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-zinc-800 bg-black/40 py-16"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-start">
        <div className="flex-1 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            O studiu
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Co je Devil &amp; Sun tattoo?
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            Devil &amp; Sun tattoo je moje osobní značka a tetovací studio v
            Hranicích, které jsem otevřel v roce 2024. Je to místo, kde se
            potkává moje ilustrátorská tvorba s tetováním.
          </p>
          <p className="text-sm leading-relaxed text-zinc-300">
            Nejblíž mám ke stylu{" "}
            <span className="font-medium text-zinc-50">neotraditional</span>,
            ale nenechávám se tím svazovat – rád pracuju i v jiných stylech a
            motiv vždy přizpůsobím tomu, co hledáš zrovna ty.
          </p>
          <p className="text-sm leading-relaxed text-zinc-300">
            Nejde mi jen o finální tetování, ale i o to, aby ses během sezení
            cítil/a dobře a celý proces byl co nejpříjemnější.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild size="sm">
              <a href="#portfolio">Prohlédni si mé práce</a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href="/rezervace">Domluvit termín</a>
            </Button>
          </div>
        </div>

        {/* případně později fotka studia / autora */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-sm rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
              Studio v Hranicích
            </p>
            <p className="text-sm text-zinc-300">
              Klidné místo, kde je prostor na kafe, konzultaci, skici i samotné
              tetování. Soukromé studio, žádný velký open space – vše je víc v
              klidu a osobně.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}