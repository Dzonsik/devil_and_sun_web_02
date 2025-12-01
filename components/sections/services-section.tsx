// components/sections/services-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section
      id="proces"
      className="border-t border-zinc-800 bg-zinc-950/40 py-16"
    >
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Jak to probíhá
        </p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
          Styl, vlastní motiv i konzultace
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-zinc-300">
          Ať už chceš hotový flash, úpravu staršího tetování nebo motiv na míru,
          projdeme spolu celý proces – od prvního nápadu až po zahojené tattoo.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card className="border-zinc-800 bg-zinc-950/70">
            <CardHeader>
              <CardTitle className="text-base">
                Neotraditional flashe
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-300">
              <p>
                Neotraditional vychází z klasických „old school“ základů, ale
                přidává výraznější barvy a širší škálu motivů.
              </p>
              <p>
                Flashe jsou hotové návrhy připravené k tetování, ze kterých si
                můžeš rovnou vybrat motiv, co ti sedne.
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-950/70">
            <CardHeader>
              <CardTitle className="text-base">
                Tetování podle tvé představy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-300">
              <p>
                Máš konkrétní nápad nebo jen pár prvků, které v tetování chceš
                mít? Podle tvého popisu ti připravím návrh na míru.
              </p>
              <p>
                Před samotným tetováním návrh ještě doupravíme, vychytáme
                detaily a přizpůsobíme přesně na zvolené místo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-950/70">
            <CardHeader>
              <CardTitle className="text-base">Konzultace</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-300">
              <p>
                Nemáš ještě úplně jasno? Můžeme se nejdřív potkat na
                konzultaci, probrat motiv, styl, barevnost i velikost.
              </p>
              <p>
                Společně vymyslíme, co pro tebe bude nejvhodnější – a pak na tom
                začneme stavět konkrétní návrh.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}