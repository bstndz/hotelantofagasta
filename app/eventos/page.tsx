import { EventsHero } from "@/components/eventos/EventosHero";
import { EventRoomsSection } from "@/components/eventos/EventsRoomsSection";
import { EventosGrandes } from "@/components/eventos/EventosGrandes";
import { EventosChicos } from "@/components/eventos/EventosChicos";
import { EventosBeneficios } from "@/components/eventos/EventosBeneficios";
import { EventosTipos } from "@/components/eventos/EventosTipos";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function EventosPage() {
  return (
    <>
      <Navbar />

      <main>
        <EventsHero />
        <EventRoomsSection />
        <EventosTipos />
        <EventosGrandes />
        <EventosChicos />
        <EventosBeneficios />
      </main>

      <Footer />
    </>
  );
}
