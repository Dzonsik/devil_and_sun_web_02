// app/api/rezervace/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const phone = String(formData.get("phone") || "");
  const idea = String(formData.get("idea") || "");
  const preferredDate = formData.get("preferredDate")
    ? new Date(String(formData.get("preferredDate")))
    : null;

  if (!name || !email || !idea) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const booking = await prisma.booking.create({
    data: {
      name,
      email,
      phone,
      idea,
      preferredDate,
      status: "PENDING",
    },
  });

  return NextResponse.json({ ok: true, bookingId: booking.id });
}