// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { MainNavbar } from "@/components/layout/main-navbar";


export const metadata: Metadata = {
  title: "Devil & Sun tattoo",
  description: "Tattoo studio v Hranicích – Devil & Sun tattoo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="bg-black text-zinc-100 antialiased">
        <div className="min-h-screen flex flex-col bg-linear-to-b from-black via-zinc-950 to-black">
          <MainNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}