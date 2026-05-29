"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const eventTypes = [
  {
    title: "Eventos corporativos",
    text: "Reuniones y encuentros empresariales.",
    image: "/hotel/piscina.jpg",
  },
  {
    title: "Capacitaciones",
    text: "Talleres, cursos y jornadas de formación.",
    image: "/hotel/piscina.jpg",
  },
  {
    title: "Matrimonios",
    text: "Celebraciones especiales en espacios versátiles.",
    image: "/hotel/piscina.jpg",
  },
  {
    title: "Celebraciones",
    text: "Cumpleaños, aniversarios y encuentros sociales.",
    image: "/hotel/piscina.jpg",
  },
  {
    title: "Cocktails",
    text: "Recepciones, networking y eventos sociales.",
    image: "/hotel/piscina.jpg",
  },
  {
    title: "Conferencias",
    text: "Audiencias, exposiciones y presentaciones.",
    image: "/hotel/piscina.jpg",
  },
];

export function EventosTipos() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const currentProgress = maxScroll > 0 ? slider.scrollLeft / maxScroll : 0;

    setProgress(currentProgress);
  };

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector("article");
    const cardWidth = card?.clientWidth ?? 360;
    const gap = 20;

    slider.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f2f2ee] px-6 py-12 text-black sm:py-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-black/35 sm:text-[11px] sm:tracking-[0.45em]">
              Tipos de eventos
            </p>

            <h2 className="max-w-2xl text-4xl font-light leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Espacios para cada ocasión
            </h2>
          </div>

          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black hover:text-white"
              aria-label="Anterior"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black hover:text-white"
              aria-label="Siguiente"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          onScroll={updateProgress}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {eventTypes.map((item) => (
            <article
              key={item.title}
              className="group relative h-[330px] min-w-full snap-start overflow-hidden bg-black text-white shadow-none sm:min-w-[calc((100%-40px)/3)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105 md:group-hover:blur-[2px]"
                style={{ backgroundImage: `url('${item.image}')` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition duration-500 md:from-black/85 md:via-black/25 md:to-transparent md:group-hover:via-black/55 md:group-hover:to-black/25" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
                <div className="mb-4 h-px w-14 bg-white/40" />

                <h3 className="text-2xl font-light leading-[1] tracking-[-0.05em] sm:text-3xl">
                  {item.title}
                </h3>

                <div className="mt-5 grid max-h-[180px] overflow-hidden opacity-100 transition-all duration-500 ease-in-out md:mt-0 md:max-h-0 md:opacity-0 md:group-hover:mt-5 md:group-hover:max-h-[180px] md:group-hover:opacity-100">
                  <p className="text-sm leading-7 text-white/80">{item.text}</p>

                  <a
                    href="#contacto"
                    className="mt-5 inline-flex w-fit items-center justify-center border border-white/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-black"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-5">
          <div className="h-px flex-1 bg-black/15">
            <div
              className="h-px bg-black transition-all duration-300"
              style={{ width: `${Math.max(progress * 100, 12)}%` }}
            />
          </div>

          <div className="flex gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black"
              aria-label="Anterior"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black"
              aria-label="Siguiente"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
