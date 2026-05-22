export function EventRoomsSection() {
  return (
    <section className="bg-[#f2f2ee] px-6 pb-12 pt-12 text-black sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-10 bg-black/30 sm:w-12" />
            <p className="text-[10px] uppercase tracking-[0.32em] text-black/40 sm:text-[11px] sm:tracking-[0.45em]">
              Eventos inolvidables
            </p>
          </div>

          <h2 className="mb-5 max-w-2xl text-2xl font-light leading-[1] tracking-[-0.055em] sm:text-5xl md:text-6xl">
            Escenarios pensados para momentos especiales
          </h2>

          <p className="max-w-xl text-base leading-5 text-black/60 sm:text-lg sm:leading-8">
            Contamos con salones versátiles para reuniones, celebraciones,
            matrimonios, capacitaciones y encuentros corporativos, con espacios
            adaptables y una ubicación privilegiada frente al Pacífico.
          </p>
        </div>

        <div
          className="h-[230px] bg-cover bg-center shadow-[0_24px_70px_rgba(0,0,0,0.10)] sm:h-[360px] lg:h-[520px]"
          style={{
            backgroundImage: "url('/hotel/columna3.png')",
          }}
        />
      </div>
    </section>
  );
}
