import { RoomShowcase } from "@/components/habitaciones/RoomShowcase";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function HabitacionesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black pt-24">
        <RoomShowcase />
      </main>

      <Footer />
    </>
  );
}
