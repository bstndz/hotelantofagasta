import Link from "next/link";

const panels = [
  {
    title: "Habitaciones",
    subtitle: "Descanso frente al Pacífico",
    href: "/habitaciones",
    image: "/hotel/columna1.png",
  },
  {
    title: "Restaurante",
    subtitle: "Mar Eterno",
    href: "/restaurante",
    image: "/hotel/columna2.png",
  },
  {
    title: "Eventos",
    subtitle: "Encuentros memorables",
    href: "/eventos",
    image: "/hotel/columna3.png",
  },
];

export function ExperiencePanels() {
  return (
    <section className="bg-[#f2f2ee] text-black">
      <div className="px-6 pb-10 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#afafac]">
          Pensado para ti
        </p>

        <h2 className="font-display text-4xl font-light text-black md:text-6xl">
          Conoce nuestros servicios
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl gap-[1px] px-6 md:grid-cols-3">
        {panels.map((panel) => (
          <Link
            key={panel.title}
            href={panel.href}
            className="group relative flex h-[500px] items-center justify-center overflow-hidden border-b border-black/10 px-8 py-20 text-center md:border-b-0 md:border-r last:md:border-r-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100 transition duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${panel.image}')` }}
            />

            <div className="absolute inset-0 bg-black/50 transition duration-700 group-hover:bg-black/30" />

            <div className="relative z-10 flex max-w-sm flex-col items-center">
              <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/60">
                {panel.subtitle}
              </p>

              <h2 className="font-breathing mb-6 text-5xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] transition duration-500 md:text-6xl">
                {panel.title}
              </h2>

              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/55 text-xl text-white backdrop-blur-md transition duration-500 group-hover:scale-105 group-hover:bg-white group-hover:text-black">
                ↓
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
