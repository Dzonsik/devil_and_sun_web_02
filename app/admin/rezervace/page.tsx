// app/admin/rezervace/page.tsx
import { prisma } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function AdminRezervacePage() {
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Rezervace</h1>
      <div className="space-y-3">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="border border-zinc-800 rounded-xl p-4 flex flex-col gap-2 bg-zinc-950"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="font-medium">{b.name}</p>
                <p className="text-xs text-zinc-400">
                  {b.email} {b.phone && `• ${b.phone}`}
                </p>
              </div>
              <Badge variant="outline">{b.status}</Badge>
            </div>
            <p className="text-sm text-zinc-200 whitespace-pre-line">
              {b.idea}
            </p>
            {b.preferredDate && (
              <p className="text-xs text-zinc-400">
                Preferovaný termín:{" "}
                {new Date(b.preferredDate).toLocaleDateString("cs-CZ")}
              </p>
            )}
            <div className="flex gap-2 mt-2">
              <form action={`/api/rezervace/${b.id}/confirm`} method="post">
                <Button size="sm" variant="outline">
                  Potvrdit
                </Button>
              </form>
              <form action={`/api/rezervace/${b.id}/cancel`} method="post">
                <Button size="sm" variant="outline">
                  Zrušit
                </Button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}