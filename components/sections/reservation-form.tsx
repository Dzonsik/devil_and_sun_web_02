// components/sections/reservation-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ReservationForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setOk(false);
    try {
      const res = await fetch("/api/rezervace", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Error");
      setOk(true);
    } catch (err) {
      console.error(err);
      alert("Něco se pokazilo, zkus to prosím znovu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="space-y-4"
      action={onSubmit}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <Input required name="name" placeholder="Jméno" />
        <Input required name="email" type="email" placeholder="E-mail" />
      </div>
      <Input name="phone" placeholder="Telefon / WhatsApp" />
      <Input
        name="preferredDate"
        type="date"
        className="bg-zinc-950 border-zinc-800"
      />
      <Textarea
        required
        name="idea"
        placeholder="Popiš svou představu – motiv, styl, barevnost, umístění, velikost..."
        className="min-h-[120px]"
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Odesílám..." : "Odeslat rezervaci"}
      </Button>

      {ok && (
        <p className="text-sm text-emerald-400">
          Díky! Rezervace byla odeslána, ozvu se ti co nejdřív.
        </p>
      )}
    </form>
  );
}