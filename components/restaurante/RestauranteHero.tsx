import { ChevronDown } from "lucide-react";

export function RestaurantHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hotel/historia2.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/70" />

      <div className="relative z-10 px-6 text-center">
        <h1 className="font-serif text-6xl font-light leading-none tracking-[-0.04em] text-white md:text-8xl lg:text-9xl">
          Restaurante
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-8 text-white/80 md:text-xl">
          Sabores pensados para acompañar tu experiencia frente al Pacífico.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md">
          <ChevronDown size={24} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
