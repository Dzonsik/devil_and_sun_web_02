// app/page.tsx
import { HeroSection } from "@/components/sections/hero-section";
import { FlashesSection } from "@/components/sections/flashes-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <FlashesSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <footer className="border-t border-zinc-800 py-4 text-xs text-center text-zinc-500">
        © {new Date().getFullYear()} Devil & Sun tattoo – All rights reserved
      </footer>
    </>
  );
}