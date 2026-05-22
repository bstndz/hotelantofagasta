import { RestaurantHero } from "@/components/restaurante/RestauranteHero";
import { GastronomySection } from "@/components/restaurante/GastronomySection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function RestaurantePage() {
  return (
    <>
      <Navbar />
      <main>
        <RestaurantHero />
        <GastronomySection />
      </main>

      <Footer />
    </>
  );
}
