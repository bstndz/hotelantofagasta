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
    <article className="group flex h-[520px] flex-col bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
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
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-lg transition hover:bg-black hover:text-white group-hover:opacity-100"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          onClick={nextImage}
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-lg transition hover:bg-black hover:text-white group-hover:opacity-100"
        >
          <ArrowRight size={18} />
        </button>

        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2">
          {room.images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(index)}
              className="h-4 flex-1 rounded-full py-1"
            >
              <span
                className={`block h-[3px] rounded-full transition ${
                  activeImage === index ? "bg-white" : "bg-white/35"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex h-full flex-1 flex-col p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-black/35">
            Habitación
          </p>

          <div className="h-px flex-1 bg-black/10" />
        </div>

        <h3
          className={`font-light leading-[1.05] tracking-[-0.04em] text-black transition-all duration-500 ${
            isOpen ? "mb-5 text-[1.75rem]" : "mb-4 text-[1.9rem]"
          }`}
        >
          {room.name}
        </h3>

        <div className="mb-4 grid grid-cols-3 border-y border-black/10 py-5 text-sm text-black/60">
          <div className="flex items-center justify-center gap-2">
            <BedDouble size={15} />
            <span className="whitespace-nowrap text-[13px]">{room.bed}</span>
          </div>

          <div className="flex items-center justify-center gap-2 border-x border-black/10 px-4">
            <Maximize2 size={15} />
            <span className="whitespace-nowrap text-[13px]">{room.size}</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Users size={15} />
            <span className="whitespace-nowrap text-[13px]">
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

        <div className="mt-auto grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center border border-black/15 bg-transparent px-5 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-black transition hover:bg-black hover:text-white"
          >
            {isOpen ? "Ver menos" : "Ver más"}
          </button>

          <a
            href="https://reservations.travelclick.com/97268"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-black px-5 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-[#afafac] hover:text-black"
          >
            Reservar
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}

export function RoomsGrid() {
  return (
    <section className="bg-[#f2f2ee] px-6 pb-28 text-black">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex items-center justify-center border-b border-black/10 py-10 text-center">
          <div className="max-w-4xl">
            <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-black/35">
              Hotel Antofagasta
            </p>

            <h2 className="text-4xl font-light leading-[1] tracking-[-0.05em] md:text-6xl">
              Conoce nuestras habitaciones
            </h2>
          </div>
        </div>

        <div className="grid items-start gap-8 pt-16 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
