export function HotelStory() {
  return (
    <section className="bg-black px-6 pb-20 pt-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative grid items-center lg:grid-cols-[0.95fr_1.05fr]">
          {/* Imagen izquierda */}
          <div className="relative h-[620px] overflow-hidden border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/hotel/story/story.png')",
              }}
            />

            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Caja texto superpuesta */}
          <div className="relative z-10 -ml-20 bg-[#f2f2ee] px-14 py-16 text-black shadow-2xl lg:min-h-[500px]">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-black/50">
              Hotel Antofagasta
            </p>

            <h2 className="mb-10 max-w-xl text-5xl font-light leading-[1.05] tracking-[-0.03em] md:text-7xl">
              Bienvenido(a)
            </h2>

            <div className="space-y-8 text-lg leading-relaxed text-black/65">
              <p>
                Frente al Pacífico y conectado con la ciudad, Hotel Antofagasta
                combina comodidad, ubicación y atención personalizada en un
                entorno diseñado para descansar y disfrutar.
              </p>

              <p>
                Sus espacios reúnen gastronomía, encuentros y estadías
                memorables, manteniendo una identidad moderna y cercana en el
                norte de Chile.
              </p>
            </div>

            <div className="mt-14 flex items-center gap-6">
              <div className="h-px w-20 bg-black/30" />

              <p className="font-breathing text-4xl text-black">
                Frente al mar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
