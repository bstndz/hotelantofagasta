import { RoomsBenefits } from "@/components/habitaciones/RoomsBenefits";
import { RoomsGrid } from "@/components/habitaciones/RoomsGrid";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function HabitacionesPage() {
  return (
    <>
      <Navbar />

      <main>
        <RoomsGrid />
        <RoomsBenefits />
      </main>

      <Footer />
    </>
  );
}
