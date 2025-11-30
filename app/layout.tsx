// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}