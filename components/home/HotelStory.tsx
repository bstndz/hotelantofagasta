import {
  BedDouble,
  Building2,
  DoorOpen,
  Hotel,
  PanelsTopLeft,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Hotel,
    number: "160",
    label: "Habitaciones",
  },
  {
    icon: BedDouble,
    number: "87",
    label: "Single",
  },
  {
    icon: BedDouble,
    number: "127",
    label: "Dobles",
  },
  {
    icon: BedDouble,
    number: "5",
    label: "Familiares",
  },
  {
    icon: Building2,
    number: "5",
    label: "Pisos",
  },
  {
    icon: PanelsTopLeft,
    number: "12",
    label: "Salones",
  },
];

export function HotelStory() {
  return (
    <section className="bg-[#f2f2ee] px-6 pb-20 pt-28 text-black">
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

            <div className="absolute bottom-10 left-10 flex items-center gap-5">
              <div className="h-px w-14 bg-white/70" />

              <p className="font-breathing text-4xl text-white">
                Hotel Antofagasta
              </p>
            </div>
          </div>

          {/* Caja superpuesta */}
          <div className="relative z-10 -ml-20 bg-white px-12 py-12 text-black shadow-2xl lg:min-h-[460px]">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-black/45">
              Sobre nosotros
            </p>

            <h2 className="mb-6 max-w-2xl text-4xl font-light leading-[1.08] tracking-[-0.04em] md:text-5xl">
              Un hotel frente al Pacífico, conectado con la ciudad.
            </h2>

            <p className="mb-8 max-w-2xl text-base leading-8 text-black/60">
              Nuestro hotel cuenta con habitaciones, salones y espacios pensados
              para descansar, reunirse y disfrutar una estadía cómoda en
              Antofagasta.
            </p>

            <div className="grid border-y border-black/10 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.label}
                    className={`flex items-center gap-4 px-4 py-4 transition hover:bg-[#f2f2ee] ${
                      index % 3 !== 2 ? "sm:border-r sm:border-black/10" : ""
                    } ${index < 3 ? "border-b border-black/10" : ""}`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-2xl font-light leading-none">
                        {item.number}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-black/45">
                        {item.label}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
