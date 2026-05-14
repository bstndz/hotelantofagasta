import { ExperiencePanels } from "@/components/home/ExperiencePanels";
import { HotelStory } from "@/components/home/HotelStory";
import { LocationSection } from "@/components/home/LocationSection";
import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HotelStory />
        <ExperiencePanels />
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}
