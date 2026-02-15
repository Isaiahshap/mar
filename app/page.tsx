import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { MusicMainSection } from "@/components/music-main-section";
import { Navbar } from "@/components/navbar";
import { ShowsSection } from "@/components/shows-section";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <MusicMainSection />
        <AboutSection />
        <ShowsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
