"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const restaurantImages = [
  "/hotel/historia2.png",
  "/hotel/historia2.png",
  "/hotel/historia2.png",
];

const barImages = [
  "/hotel/historia2.png",
  "/hotel/historia2.png",
  "/hotel/historia2.png",
];

function ImageSlider({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % images.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="group relative h-[520px] overflow-hidden bg-black shadow-[0_35px_100px_rgba(0,0,0,0.16)]">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/10" />

      <button
        type="button"
        onClick={prev}
        className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition hover:bg-black hover:text-white group-hover:opacity-100"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition hover:bg-black hover:text-white group-hover:opacity-100"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-6 left-6 right-6 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            className="h-4 flex-1 py-1"
          >
            <span
              className={`block h-[3px] rounded-full transition ${
                active === index ? "bg-white" : "bg-white/35"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function GastronomySection() {
  return (
    <section className="bg-[#f2f2ee] px-6 py-32 text-black">
      <div className="mx-auto max-w-7xl space-y-36">
        {/* Restaurante */}
        <div className="relative grid items-center lg:grid-cols-[1fr_0.95fr]">
          <div className="relative z-10 lg:mr-[-80px]">
            <ImageSlider images={restaurantImages} />
          </div>

          <div className="bg-white px-12 py-14 shadow-2xl lg:min-h-[430px] lg:pl-28">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-black/40">
              Restaurante
            </p>

            <h2 className="mb-7 text-4xl font-light leading-[1] tracking-[-0.05em] md:text-6xl">
              Cocina frente al Pacífico
            </h2>

            <p className="mb-10 max-w-xl text-base leading-8 text-black/60">
              Una propuesta gastronómica pensada para disfrutar sabores,
              encuentros y momentos especiales junto al mar.
            </p>

            <a
              href="https://drive.google.com/file/d/1LnecnySduozMcMVe87jz76kC_Dxe8TpY/view"
              className="inline-flex items-center gap-4 bg-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-[#afafac] hover:text-black"
            >
              Ver carta
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Bar */}
        <div className="relative grid items-center lg:grid-cols-[0.95fr_1fr]">
          <div className="bg-white px-12 py-14 shadow-2xl lg:min-h-[430px] lg:pr-28">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-black/40">
              Lobby Bar
            </p>

            <h2 className="mb-7 text-4xl font-light leading-[1] tracking-[-0.05em] md:text-6xl">
              Coctelería & encuentros
            </h2>

            <p className="mb-10 max-w-xl text-base leading-8 text-black/60">
              Un espacio ideal para compartir cocktails, vinos y pausas en una
              atmósfera relajada, cálida y elegante.
            </p>

            <a
              href="https://drive.google.com/file/d/16Av9RJVfhiDo542_GbT9ujoCJ_IQcPzD/view"
              className="inline-flex items-center gap-4 bg-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-[#afafac] hover:text-black"
            >
              Ver carta
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative z-10 lg:ml-[-80px]">
            <ImageSlider images={barImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
