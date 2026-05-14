export function LocationSection() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.45fr_0.55fr]">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#afafac]">
            Ubicación
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            ¿Donde encontrarnos?
          </h2>

          <div className="space-y-5 text-white/65">
            <p>
              Hotel Antofagasta se encuentra en una de las zonas más
              privilegiadas de la ciudad, conectado con el borde costero,
              restaurantes y principales puntos urbanos.
            </p>

            <div className="pt-4">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                Dirección
              </p>

              <p className="mt-2 text-lg text-white">
                Av. Balmaceda 2575
                <br />
                Antofagasta, Chile
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=Hotel+Antofagasta+Balmaceda+2575+Antofagasta&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
