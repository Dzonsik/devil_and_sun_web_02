// components/layout/main-navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proces", href: "#proces" },
  { label: "O mně", href: "#about" },
  { label: "Další tvorba", href: "#flashes" },
];

export function MainNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-[0.2em] uppercase text-sm">
          Devil & Sun
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="#kontakt">Kontakt</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/rezervace">Rezervovat</Link>
          </Button>
        </div>

        {/* mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <div className="h-5 w-6 space-y-[3px]">
            <span className="block h-0.5 bg-zinc-100" />
            <span className="block h-0.5 bg-zinc-100" />
            <span className="block h-0.5 bg-zinc-100" />
          </div>
        </button>

        {open && (
          <div className="absolute inset-x-0 top-full border-b border-zinc-800 bg-black md:hidden">
            <div className="flex flex-col px-4 py-3 gap-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-zinc-200"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild size="sm" className="w-full">
                <Link href="/rezervace">Rezervovat</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}