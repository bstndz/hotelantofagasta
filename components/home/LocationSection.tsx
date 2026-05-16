export function LocationSection() {
  return (
    <section className="bg-[#f2f2ee] px-6 py-24 text-black">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.45fr_0.55fr]">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-black/45">
            Ubicación
          </p>

          <h2 className="mb-8 text-4xl font-light md:text-5xl">
            ¿Dónde encontrarnos?
          </h2>

          <div className="space-y-5 text-black/60">
            <p>
              Hotel Antofagasta se encuentra en una de las zonas más
              privilegiadas de la ciudad, conectado con el borde costero,
              restaurantes y principales puntos urbanos.
            </p>

            <div className="pt-4">
              <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                Dirección
              </p>

              <p className="mt-2 text-lg text-black">
                Av. Balmaceda 2575
                <br />
                Antofagasta, Chile
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border border-black/10">
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
