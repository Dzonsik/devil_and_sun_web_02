// app/admin/layout.tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/"); // nebo /login
  }

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-8">
        <aside className="w-56 border-r border-zinc-800 pr-4 text-sm space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
            Admin
          </p>
          <a href="/admin" className="block hover:text-white">
            Přehled
          </a>
          <a href="/admin/rezervace" className="block hover:text-white">
            Rezervace
          </a>
          <a href="/admin/flashe" className="block hover:text-white">
            Flashe
          </a>
          <a href="/admin/portfolio" className="block hover:text-white">
            Mé práce
          </a>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}