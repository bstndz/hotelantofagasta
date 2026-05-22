"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
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
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
    ],
  },
  {
    name: "José Santos Ossa",
    area: "85 m²",
    auditorio: "50",
    cena: "60",
    cocktail: "80",
    images: [
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
    ],
  },
  {
    name: "Diego de Almeyda",
    area: "44 m²",
    auditorio: "20",
    cena: "20",
    cocktail: "25",
    images: [
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
    ],
  },
  {
    name: "Arturo Prat",
    area: "44 m²",
    auditorio: "20",
    cena: "20",
    cocktail: "25",
    images: [
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
    ],
  },
  {
    name: "Caliche",
    area: "12 m²",
    auditorio: "12",
    cena: "-",
    cocktail: "—",
    images: [
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
      "/hotel/historia3.png",
    ],
  },
  {
    name: "Caliche II",
    area: "25 m²",
    auditorio: "12",
    cena: "—",
    cocktail: "—",
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
    <div className="group relative h-[360px] overflow-hidden bg-black">
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

      <div className="absolute left-6 top-6 bg-white/90 px-5 py-3 text-black shadow-lg backdrop-blur-md transition-all duration-300 group-hover:-translate-y-3 group-hover:opacity-0">
        <p className="mb-1 text-[10px] uppercase tracking-[0.28em] text-black/40">
          Área
        </p>

        <div className="flex items-center gap-2">
          <Maximize2 size={14} strokeWidth={1.7} />
          <span className="text-sm font-light">{area}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={prevImage}
        className="absolute left-4 top-[44%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition hover:bg-black hover:text-white group-hover:opacity-100"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        type="button"
        onClick={nextImage}
        className="absolute right-4 top-[44%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition hover:bg-black hover:text-white group-hover:opacity-100"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-18 left-0 right-0 z-20 flex justify-center gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(index)}
            className={`h-3 w-3 rounded-full transition ${
              activeImage === index
                ? "scale-125 bg-white ring-2 ring-white/80 ring-offset-4 ring-offset-black/25"
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
    <article className="flex h-[540px] animate-[fadeUp_500ms_ease] flex-col overflow-hidden bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "h-0 opacity-0" : "h-[340px] opacity-100"
        }`}
      >
        <ImageSlider images={room.images} area={room.area} />
      </div>

      <div className="flex flex-1 flex-col px-10 pb-10 pt-8">
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-black/35">
          Salón
        </p>

        <h3
          className={`font-light leading-[1.05] tracking-[-0.05em] text-black transition-all duration-500 ${
            isOpen ? "mb-6 text-[2.15rem]" : "mb-10 text-[2.45rem]"
          }`}
        >
          {room.name}
        </h3>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "mb-6 max-h-[230px] opacity-100" : "mb-0 max-h-0 opacity-0"
          }`}
        >
          <div className="border-y border-black/10 py-5">
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-black/35">
              Tamaño del salón
            </p>

            <div className="mb-6 flex items-center gap-3 text-sm text-black/60">
              <Maximize2 size={15} className="text-black/45" />
              Área: {room.area}
            </div>

            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-black/35">
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

        <div className="mt-auto grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center border border-black/15 px-5 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-black transition hover:bg-black hover:text-white"
          >
            {isOpen ? "Ver menos" : "Ver más"}
          </button>

          <a
            href="#"
            className="flex items-center justify-center bg-black px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-[#afafac] hover:text-black"
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
    <section id="eventos-chicos" className="bg-[#f2f2ee] px-6 pb-32 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-black/35">
            Menos de 100 m²
          </p>

          <h2 className="text-5xl font-light tracking-[-0.05em] md:text-6xl">
            Salones privados
          </h2>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleRooms.map((room) => (
            <EventCard key={room.name} room={room} />
          ))}
        </div>

        {rooms.length > 3 && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="border border-black/15 px-10 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              {showAll ? "Mostrar menos" : "Mostrar más salones"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
