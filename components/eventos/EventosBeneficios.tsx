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
  },
  {
    icon: Car,
    title: "Estacionamiento gratuito",
  },
  {
    icon: Accessibility,
    title: "Accesibilidad",
  },
  {
    icon: MonitorPlay,
    title: "Equipamiento audiovisual",
  },
  {
    icon: Coffee,
    title: "Coffee break y catering",
  },
  {
    icon: ShieldCheck,
    title: "Atención personalizada",
  },
];

export function EventosBeneficios() {
  return (
    <section className="bg-[#f2f2ee] px-6 py-10 text-black sm:py-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-black/35 sm:text-[11px] sm:tracking-[0.45em]">
            Beneficios
          </p>

          <h2 className="text-4xl font-light leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Montajes y servicios
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title} className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <Icon size={20} strokeWidth={1.8} className="text-black/70" />
                </div>

                <h3 className="text-[0.95rem] font-medium uppercase tracking-[0.16em] text-black/75">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
