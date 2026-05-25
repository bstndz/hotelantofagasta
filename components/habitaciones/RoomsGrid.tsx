"use client";

import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Check,
  Maximize2,
  Users,
} from "lucide-react";
import { useState } from "react";

const rooms = [
  {
    name: "Vista Ciudad",
    images: [
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
    ],
    description:
      "Una habitación cómoda y funcional, ideal para quienes buscan descanso y conexión con la ciudad.",
    bed: "Cama King",
    size: "32 m²",
    capacity: "2 personas",
    services: [
      "WiFi gratuito",
      "Aire acondicionado",
      "Smart TV",
      "Escritorio",
      "Caja fuerte",
      "Baño privado",
    ],
  },
  {
    name: "Vista Mar",
    images: [
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
    ],
    description:
      "Espacio luminoso con vista al Pacífico, pensado para disfrutar una estadía tranquila frente al mar.",
    bed: "Cama King",
    size: "35 m²",
    capacity: "2 personas",
    services: [
      "Vista al mar",
      "WiFi gratuito",
      "Aire acondicionado",
      "Smart TV",
      "Escritorio",
      "Secador de pelo",
    ],
  },
  {
    name: "Suite",
    images: [
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
    ],
    description:
      "Mayor amplitud y comodidad para quienes buscan una experiencia superior durante su estadía.",
    bed: "Cama King",
    size: "40 m²",
    capacity: "2 personas",
    services: [
      "Sala de estar",
      "WiFi gratuito",
      "Aire acondicionado",
      "Smart TV",
      "Caja fuerte",
      "Baño privado",
    ],
  },
  {
    name: "Suite Superior",
    images: [
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
    ],
    description:
      "Diseñada para estadías memorables, con espacios amplios y detalles pensados para el descanso.",
    bed: "Cama King",
    size: "45 m²",
    capacity: "2 personas",
    services: [
      "Vista privilegiada",
      "Sala de estar",
      "WiFi gratuito",
      "Smart TV",
      "Aire acondicionado",
      "Toallas",
    ],
  },
  {
    name: "Master Suite",
    images: [
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
    ],
    description:
      "Una experiencia más exclusiva, ideal para quienes buscan comodidad, amplitud y elegancia.",
    bed: "Cama King",
    size: "55 m²",
    capacity: "2 personas",
    services: [
      "Ambiente separado",
      "Vista al mar",
      "WiFi gratuito",
      "Smart TV",
      "Caja fuerte",
      "Baño amplio",
    ],
  },
  {
    name: "Presidencial",
    images: [
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
      "/hotel/story/story-2.png",
    ],
    description:
      "La habitación más exclusiva del hotel, pensada para una estadía sofisticada e inolvidable.",
    bed: "Cama King",
    size: "70 m²",
    capacity: "4 personas",
    services: [
      "Vista al Pacífico",
      "Sala privada",
      "WiFi gratuito",
      "Smart TV",
      "Aire acondicionado",
      "Atención personalizada",
    ],
  },
];

function RoomCard({ room }: { room: (typeof rooms)[number] }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  return (
    <article className="group flex h-[500px] flex-col overflow-hidden bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:h-[520px]">
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

      <div className="flex h-full flex-1 flex-col px-7 pb-8 pt-7 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
          <p className="text-[10px] uppercase tracking-[0.35em] text-black/35 sm:text-[11px]">
            Habitación
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

        <div className="mb-4 grid grid-cols-3 border-y border-black/10 py-4 text-black/60 sm:py-5">
          <div className="flex flex-col items-center justify-center gap-1 text-center sm:flex-row sm:gap-2">
            <BedDouble size={14} />
            <span className="text-[11px] leading-tight sm:whitespace-nowrap sm:text-[13px]">
              {room.bed}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 border-x border-black/10 px-2 text-center sm:flex-row sm:gap-2 sm:px-4">
            <Maximize2 size={14} />
            <span className="text-[11px] leading-tight sm:whitespace-nowrap sm:text-[13px]">
              {room.size}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 text-center sm:flex-row sm:gap-2">
            <Users size={14} />
            <span className="text-[11px] leading-tight sm:whitespace-nowrap sm:text-[13px]">
              {room.capacity}
            </span>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "mb-5 max-h-[260px] opacity-100" : "mb-0 max-h-0 opacity-0"
          }`}
        >
          <div className="mb-5 grid gap-x-5 gap-y-3 border-b border-black/10 pb-6 sm:grid-cols-2">
            {room.services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 text-[13px] text-black/60"
              >
                <Check size={15} />
                {service}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex min-h-[56px] items-center justify-center border border-black/15 bg-transparent px-3 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white sm:text-xs sm:tracking-[0.26em]"
          >
            {isOpen ? "Ver menos" : "Ver más"}
          </button>

          <a
            href="https://reservations.travelclick.com/97268"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[56px] items-center justify-center bg-black px-3 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#afafac] hover:text-black sm:gap-3 sm:text-xs sm:tracking-[0.26em]"
          >
            Reservar
          </a>
        </div>
      </div>
    </article>
  );
}

export function RoomsGrid() {
  return (
    <section className="bg-[#f2f2ee] px-6 pb-20 text-black sm:pb-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex items-center justify-center border-b border-black/10 py-10 text-center sm:py-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-black/35 sm:mb-6 sm:text-[11px] sm:tracking-[0.45em]">
              Hotel Antofagasta
            </p>

            <h2 className="text-4xl font-light leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Conoce nuestras habitaciones
            </h2>
          </div>
        </div>

        <div className="grid items-start gap-8 pt-12 sm:pt-16 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
