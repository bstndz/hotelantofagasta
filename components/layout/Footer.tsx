import { Home, Mail, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <Home size={22} className="text-[#afafac]" />
            <h3 className="text-sm uppercase tracking-[0.25em]">Dirección</h3>
          </div>

          <p className="text-sm leading-7 text-white/60">
            Av. Balmaceda 2575
            <br />
            Antofagasta, Chile
          </p>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-4">
            <Mail size={22} className="text-[#afafac]" />
            <h3 className="text-sm uppercase tracking-[0.25em]">Correo</h3>
          </div>

          <p className="text-sm leading-7 text-white/60">
            ventas@hotelantofagasta.cl
            <br />
            reservas@hotelantofagasta.cl
          </p>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-4">
            <Phone size={22} className="text-[#afafac]" />
            <h3 className="text-sm uppercase tracking-[0.25em]">Teléfono</h3>
          </div>

          <p className="text-sm leading-7 text-white/60">
            Central +56 55 2659000
            <br />
            Ventas +56 55 2659014
            <br />
            Reservas +56 55 2659001
          </p>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-4">
            <MessageCircle size={22} className="text-[#afafac]" />
            <h3 className="text-sm uppercase tracking-[0.25em]">WhatsApp</h3>
          </div>

          <p className="text-sm leading-7 text-white/60">+56 9 74988905</p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.25em] text-white/40">
        © 2026 Hotel Antofagasta
      </div>
    </footer>
  );
}
