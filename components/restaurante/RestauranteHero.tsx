export function RestaurantHero() {
  return (
    <section className="relative flex h-[52vh] min-h-[420px] items-end overflow-hidden bg-black text-white sm:h-[58vh] sm:min-h-[520px] lg:h-[55vh] lg:min-h-[480px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hotel/historia2.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/70" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-32 sm:pb-14 sm:pt-40 lg:pt-36">
        <div className="max-w-3xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-white/60 sm:text-[11px] sm:tracking-[0.42em]">
            Sabores · experiencia · Pacífico
          </p>

          <h1 className="font-serif text-5xl font-light leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
            Restaurante
          </h1>

          <p className="mt-4 max-w-[340px] text-base font-light leading-7 text-white/75 sm:max-w-2xl sm:text-lg sm:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
