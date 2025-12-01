// components/sections/flashes-section.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const MOCK_FLASHES = [
  { id: 1, src: "/flashes/flash-1.jpg", title: "Flash 1" },
  { id: 2, src: "/flashes/flash-2.jpg", title: "Flash 2" },
  { id: 3, src: "/flashes/flash-3.jpg", title: "Flash 3" },
  { id: 4, src: "/flashes/flash-4.jpg", title: "Flash 4" },
];

export function FlashesSection() {
  return (
    <section id="flashes" className="py-16 border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Volné flashe
        </h2>
        <p className="text-sm text-zinc-400 mb-8 max-w-2xl">
          Hotové návrhy připravené k tetování. Vyber si motiv, který tě nejvíc
          bere, a domluvíme termín.
        </p>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {MOCK_FLASHES.map((flash) => (
            <Card key={flash.id} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-2">
                <div className="relative w-full aspect-3/4 overflow-hidden rounded-lg">
                  <Image
                    src={flash.src}
                    alt={flash.title}
                    fill
                    className="object-cover"
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