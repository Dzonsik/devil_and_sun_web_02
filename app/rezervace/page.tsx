// app/rezervace/page.tsx
import { ReservationForm } from "@/components/sections/reservation-form";

export default function RezervacePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold mb-2">Rezervace termínu</h1>
        <p className="text-sm text-zinc-400 mb-8">
          Vyplň prosím formulář co nejpodrobněji – motiv, velikost, umístění a
          preferovaný termín. Ozvu se ti zpátky s potvrzením.
        </p>
        <ReservationForm />
      </div>
    </div>
  );
}