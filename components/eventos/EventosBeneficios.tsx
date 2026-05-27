"use client";

import {
  Accessibility,
  Car,
  Coffee,
  MonitorPlay,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const benefits = [
  {
    icon: Wifi,
    title: "Internet de alta velocidad",
    text: "Conexión para reuniones y eventos.",
  },
  {
    icon: MonitorPlay,
    title: "Audiovisual",
    text: "Pantallas, sonido y soporte técnico.",
  },
  {
    icon: Coffee,
    title: "Coffee break",
    text: "Opciones gastronómicas para invitados.",
  },
  {
    icon: Car,
    title: "Estacionamiento gratuito",
    text: "Acceso cómodo para asistentes.",
  },
  {
    icon: Accessibility,
    title: "Accesibilidad",
    text: "Espacios preparados para todos.",
  },
  {
    icon: ShieldCheck,
    title: "Atención personalizada",
    text: "Apoyo durante todo tu evento.",
  },
];

export function EventosBeneficios() {
  return (
    <section className="bg-[#f2f2ee] px-6 py-16 text-black sm:py-20">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-black/35 sm:mb-5 sm:text-[11px] sm:tracking-[0.45em]">
            Beneficios
          </p>

          <h2 className="text-3xl font-light leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Montajes y servicios
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-black/50 sm:mt-5 sm:max-w-2xl sm:text-base">
            Todo lo necesario para desarrollar eventos cómodos, modernos y bien
            organizados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-12">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex items-center gap-4 border-b border-black/10 pb-4 sm:items-start sm:border-b-0 sm:pb-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:h-12 sm:w-12">
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    className="text-black/70 sm:size-[19px]"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-medium tracking-[-0.02em] text-black sm:text-[1rem]">
                    {benefit.title}
                  </h3>

                  <div className="my-2 hidden h-px w-16 bg-black/10 sm:block" />

                  <p className="mt-1 text-[13px] leading-6 text-black/45 sm:text-[14px] sm:leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
