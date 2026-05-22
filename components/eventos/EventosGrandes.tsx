"use client";

import { ChevronLeft, ChevronRight, Maximize2, Users } from "lucide-react";
import { useState } from "react";

const rooms = [
  {
    name: "Pacífico",
    area: "700 m²",
    auditorio: "500",
    cena: "500",
    cocktail: "600",
    images: [
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
    ],
  },
  {
    name: "Cobremar",
    area: "400 m²",
    auditorio: "250",
    cena: "300",
    cocktail: "350",
    images: [
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
    ],
  },
  {
    name: "Baquedano",
    area: "250 m²",
    auditorio: "180",
    cena: "200",
    cocktail: "220",
    images: [
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
    ],
  },
  {
    name: "Antofagasta",
    area: "180 m²",
    auditorio: "120",
    cena: "140",
    cocktail: "160",
    images: [
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
    ],
  },
  {
    name: "Cerro Moreno",
    area: "150 m²",
    auditorio: "100",
    cena: "120",
    cocktail: "140",
    images: [
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
    ],
  },
];

function ImageSlider({ images, area }: { images: string[]; area: string }) {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="group relative h-[280px] overflow-hidden bg-black sm:h-[330px] lg:h-[360px]">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      <div className="absolute left-5 top-5 hidden bg-white/90 px-4 py-3 text-black shadow-lg backdrop-blur-md transition-all duration-300 group-hover:-translate-y-3 group-hover:opacity-0 sm:left-6 sm:top-6 sm:block sm:px-5">
        <p className="mb-1 text-[9px] uppercase tracking-[0.28em] text-black/40 sm:text-[10px]">
          Área
        </p>

        <div className="flex items-center gap-2">
          <Maximize2 size={13} strokeWidth={1.7} />
          <span className="text-sm font-light">{area}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={prevImage}
        className="absolute left-4 top-[44%] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-100 transition hover:bg-black hover:text-white sm:h-10 sm:w-10 lg:opacity-0 lg:group-hover:opacity-100"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        type="button"
        onClick={nextImage}
        className="absolute right-4 top-[44%] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-100 transition hover:bg-black hover:text-white sm:h-10 sm:w-10 lg:opacity-0 lg:group-hover:opacity-100"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3 sm:bottom-18 sm:gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(index)}
            className={`h-2 w-2 rounded-full transition sm:h-3 sm:w-3 ${
              activeImage === index
                ? "scale-125 bg-white ring-2 ring-white/80 ring-offset-3 ring-offset-black/25 sm:ring-offset-4"
                : "bg-white/55 hover:bg-white"
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function EventCard({ room }: { room: (typeof rooms)[number] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="flex h-[500px] animate-[fadeUp_500ms_ease] flex-col overflow-hidden bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:h-[530px] lg:h-[540px]">
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "h-0 opacity-0" : "h-[280px] opacity-100 sm:h-[330px]"
        }`}
      >
        <ImageSlider images={room.images} area={room.area} />
      </div>

      <div className="flex flex-1 flex-col px-7 pb-8 pt-7 sm:px-10 sm:pb-10 sm:pt-8">
        <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-black/35 sm:text-[11px]">
          Salón
        </p>

        <h3
          className={`font-light leading-[1.05] tracking-[-0.05em] text-black transition-all duration-500 ${
            isOpen
              ? "mb-5 text-[1.9rem] sm:text-[2.15rem]"
              : "mb-8 text-[2.15rem] sm:mb-10 sm:text-[2.45rem]"
          }`}
        >
          {room.name}
        </h3>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "mb-5 max-h-[230px] opacity-100" : "mb-0 max-h-0 opacity-0"
          }`}
        >
          <div className="border-y border-black/10 py-5">
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-black/35 sm:text-[11px]">
              Tamaño del salón
            </p>

            <div className="mb-5 flex items-center gap-3 text-sm text-black/60">
              <Maximize2 size={15} className="text-black/45" />
              Área: {room.area}
            </div>

            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-black/35 sm:text-[11px]">
              Capacidad
            </p>

            <div className="grid gap-3 text-sm text-black/60">
              <div className="flex items-center gap-3">
                <Users size={15} className="text-black/45" />
                Auditorio: {room.auditorio} personas
              </div>

              <div className="flex items-center gap-3">
                <Users size={15} className="text-black/45" />
                Cena: {room.cena} personas
              </div>

              <div className="flex items-center gap-3">
                <Users size={15} className="text-black/45" />
                Cocktail: {room.cocktail} personas
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex min-h-[56px] items-center justify-center border border-black/15 px-3 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white sm:text-xs sm:tracking-[0.26em]"
          >
            {isOpen ? "Ver menos" : "Ver más"}
          </button>

          <a
            href="#"
            className="flex min-h-[56px] items-center justify-center bg-black px-3 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#afafac] hover:text-black sm:text-xs sm:tracking-[0.26em]"
          >
            Contactar
          </a>
        </div>
      </div>
    </article>
  );
}

export function EventosGrandes() {
  const [showAll, setShowAll] = useState(false);

  const visibleRooms = showAll ? rooms : rooms.slice(0, 3);

  return (
    <section
      id="eventos-grandes"
      className="bg-[#f2f2ee] px-6 pb-20 text-black sm:pb-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-black/35 sm:text-[11px] sm:tracking-[0.45em]">
            Más de 100 m²
          </p>

          <h2 className="max-w-[320px] text-4xl font-light leading-[1] tracking-[-0.05em] sm:max-w-none sm:text-5xl md:text-6xl">
            Salones principales
          </h2>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleRooms.map((room) => (
            <EventCard key={room.name} room={room} />
          ))}
        </div>

        {rooms.length > 3 && (
          <div className="mt-12 flex justify-center sm:mt-14">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="border border-black/15 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-black transition-all duration-300 hover:bg-black hover:text-white sm:px-10 sm:text-xs sm:tracking-[0.26em]"
            >
              {showAll ? "Mostrar menos" : "Mostrar más salones"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
