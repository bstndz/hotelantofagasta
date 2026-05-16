import {
  Wifi,
  Car,
  Coffee,
  Utensils,
  Accessibility,
  Bus,
  Waves,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Wifi,
    title: "WiFi gratuito",
    text: "Conexión estable para trabajar, descansar o mantenerte conectado durante tu estadía.",
  },
  {
    icon: Car,
    title: "Estacionamiento",
    text: "Mayor comodidad para huéspedes que llegan en vehículo al hotel.",
  },
  {
    icon: Coffee,
    title: "Lobby bar",
    text: "Un espacio ideal para disfrutar una pausa, una conversación o un momento de descanso.",
  },
  {
    icon: Utensils,
    title: "Restaurante",
    text: "Sabores locales e internacionales para complementar tu experiencia frente al mar.",
  },
  {
    icon: Accessibility,
    title: "Accesibilidad",
    text: "Espacios pensados para entregar una estadía cómoda y cercana para todos.",
  },
  {
    icon: Bus,
    title: "Buena conectividad",
    text: "Ubicación estratégica cerca del borde costero y puntos importantes de la ciudad.",
  },
  {
    icon: Waves,
    title: "Cerca del mar",
    text: "Disfruta la cercanía al Pacífico y el ambiente costero de Antofagasta.",
  },
  {
    icon: ShieldCheck,
    title: "Atención personalizada",
    text: "Un equipo preparado para acompañarte antes y durante tu estadía.",
  },
];

export function RoomsBenefits() {
  return (
    <section className="bg-[#f2f2ee] px-6 pb-28 pt-10 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-18 max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-black/40">
            Beneficios
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Todo lo necesario para una estadía cómoda
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group bg-white p-8 transition duration-500 hover:bg-black hover:text-white"
              >
                <Icon
                  size={26}
                  strokeWidth={1.5}
                  className="mb-8 text-black/45 transition duration-500 group-hover:text-[#afafac]"
                />

                <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.25em]">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-7 text-black/60 transition duration-500 group-hover:text-white/65">
                  {benefit.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
