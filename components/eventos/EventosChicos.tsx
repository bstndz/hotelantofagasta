"use client";

import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Theater,
  Utensils,
  Users,
} from "lucide-react";
import { useState } from "react";

const rooms = [
  {
    name: "Andrés Bello",
    area: "70 m²",
    auditorio: "60",
    cena: "50",
    cocktail: "60",
    images: [
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
    ],
  },
  {
    name: "José Santos Ossa",
    area: "85 m²",
    auditorio: "50",
    cena: "60",
    cocktail: "80",
    images: [
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
    ],
  },
  {
    name: "Diego de Almeyda",
    area: "44 m²",
    auditorio: "20",
    cena: "20",
    cocktail: "25",
    images: [
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
    ],
  },
  {
    name: "Arturo Prat",
    area: "44 m²",
    auditorio: "20",
    cena: "20",
    cocktail: "25",
    images: [
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
    ],
  },
  {
    name: "Caliche",
    area: "12 m²",
    auditorio: "12",
    cena: "—",
    cocktail: "—",
    images: [
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
    ],
  },
  {
    name: "Caliche II",
    area: "25 m²",
    auditorio: "12",
    cena: "—",
    cocktail: "—",
    images: [
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
      "/hotel/columna4.png",
    ],
  },
];

function EventCard({ room }: { room: (typeof rooms)[number] }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  return (
    <article className="group flex h-[480px] flex-col overflow-hidden bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:h-[460px]">
      <div
        className={`relative overflow-hidden bg-black transition-all duration-500 ease-in-out ${
          isOpen ? "h-0 opacity-0" : "h-[250px] opacity-100"
        }`}
      >
        {room.images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <button
          type="button"
          onClick={prevImage}
          className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-100 shadow-lg transition hover:bg-black hover:text-white sm:h-10 sm:w-10 lg:opacity-0 lg:group-hover:opacity-100"
          aria-label="Imagen anterior"
        >
          <ArrowLeft size={17} />
        </button>

        <button
          type="button"
          onClick={nextImage}
          className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-100 shadow-lg transition hover:bg-black hover:text-white sm:h-10 sm:w-10 lg:opacity-0 lg:group-hover:opacity-100"
          aria-label="Siguiente imagen"
        >
          <ArrowRight size={17} />
        </button>

        <div className="absolute bottom-7 left-0 right-0 z-20 flex justify-center gap-3 sm:bottom-8 sm:gap-4">
          {room.images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`h-2 w-2 rounded-full transition sm:h-2.5 sm:w-2.5 ${
                activeImage === index
                  ? "scale-125 bg-white ring-2 ring-white/80 ring-offset-3 ring-offset-black/25"
                  : "bg-white/55 hover:bg-white"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-7 pb-8 pt-7 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
          <p className="text-[10px] uppercase tracking-[0.35em] text-black/35 sm:text-[11px]">
            Salón
          </p>

          <div className="h-px flex-1 bg-black/10" />
        </div>

        <h3
          className={`font-light leading-[1.05] tracking-[-0.04em] text-black transition-all duration-500 ${
            isOpen
              ? "mb-4 text-[1.55rem] sm:mb-5 sm:text-[1.75rem]"
              : "mb-4 text-[1.75rem] sm:text-[1.9rem]"
          }`}
        >
          {room.name}
        </h3>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen
              ? "mb-5 grid-rows-[1fr] opacity-100"
              : "mb-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-y border-black/10 py-5">
              <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-black/35 sm:text-[11px]">
                Detalles del salón
              </p>

              <div className="grid gap-4 text-[13px] text-black/60">
                <div className="flex items-center gap-3">
                  <Maximize2 size={15} />
                  <span>Área: {room.area}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Theater size={15} />
                  <span>Auditorio: {room.auditorio} personas</span>
                </div>

                <div className="flex items-center gap-3">
                  <Utensils size={15} />
                  <span>Cena: {room.cena} personas</span>
                </div>

                <div className="flex items-center gap-3">
                  <Users size={15} />
                  <span>Cocktail: {room.cocktail} personas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-5 sm:gap-4">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex min-h-[56px] items-center justify-center border border-black/15 bg-transparent px-3 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white sm:text-xs sm:tracking-[0.26em]"
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

export function EventosChicos() {
  const [showAll, setShowAll] = useState(false);

  const visibleRooms = showAll ? rooms : rooms.slice(0, 3);

  return (
    <section
      id="eventos-chicos"
      className="bg-[#f2f2ee] px-6 pb-24 text-black sm:pb-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10 border-b border-black/10 py-10 text-center sm:mb-12 sm:py-12">
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-black/35 sm:mb-6 sm:text-[11px] sm:tracking-[0.45em]">
            Hotel Antofagasta
          </p>

          <h2 className="text-4xl font-light leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Salones privados
          </h2>
        </div>

        <div className="grid items-start gap-8 pt-2 md:grid-cols-2 xl:grid-cols-3">
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
