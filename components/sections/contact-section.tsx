// components/sections/contact-section.tsx
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="border-t border-zinc-800 bg-zinc-950/60 py-16"
    >
      <div className="mx-auto max-w-4xl px-4 space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Kontakt
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Ozvi se a domluvíme sezení
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-300">
            Ideálně napiš, jaký motiv zvažuješ, kam ho chceš umístit a jak
            zhruba velký by měl být. Můžeš připojit i referenční fotky – čím víc
            informací, tím lépe vše naplánujeme.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
          <Card className="border-zinc-800 bg-black">
            <CardContent className="space-y-4 p-5 text-sm text-zinc-200">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  WhatsApp / telefon
                </p>
                <a
                  href="tel:+420724813613"
                  className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-zinc-50 hover:text-zinc-200"
                >
                  <Phone className="h-4 w-4" />
                  +420 724 813 613
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Email
                </p>
                <a
                  href="mailto:devilandsun.tattoo@gmail.com"
                  className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-zinc-50 hover:text-zinc-200"
                >
                  <Mail className="h-4 w-4" />
                  devilandsun.tattoo@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Studio
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  Hranice a okolí – přesnou adresu dostaneš po domluvení
                  termínu.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="border-zinc-800 bg-black">
              <CardContent className="p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  Sociální sítě
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <a
                      href="https://www.instagram.com/devilandsun.tattoo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Button asChild className="w-full md:w-auto">
              <a href="/rezervace">Přejít na online rezervaci</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}