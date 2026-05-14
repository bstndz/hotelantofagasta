import { Search } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden px-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hotel/hero.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

      <div className="container-custom relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-32 text-center">
        <Image
          src="/hotel/logo.jpg"
          alt="Hotel Antofagasta"
          width={420}
          height={180}
          className="mb-8 h-24 w-auto opacity-95 md:h-32"
        />

        <div className="mx-auto w-full max-w-3xl border border-white/20 bg-[#f2f2ee]/95 p-6 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr_160px] md:items-end">
            <div className="text-left">
              <label className="mb-3 block text-xs uppercase tracking-[0.35em] text-zinc-600">
                Llegada
              </label>

              <input
                type="date"
                className="w-full border-b border-black/25 bg-transparent py-3 text-zinc-900 outline-none"
              />
            </div>

            <div className="text-left">
              <label className="mb-3 block text-xs uppercase tracking-[0.35em] text-zinc-600">
                Salida
              </label>

              <input
                type="date"
                className="w-full border-b border-black/25 bg-transparent py-3 text-zinc-900 outline-none"
              />
            </div>

            <a
              href="https://reservations.travelclick.com/97268"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[64px] items-center justify-center gap-3 bg-black px-8 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#afafac] hover:text-black"
            >
              <span>Buscar</span>

              <Search size={22} strokeWidth={2.2} className="shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
