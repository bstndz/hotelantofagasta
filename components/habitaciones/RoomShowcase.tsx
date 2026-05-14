"use client";

import { useState } from "react";

const rooms = [
  {
    title: "Vista Ciudad",
    subtitle: "Descanso frente al Pacífico",
    image: "/hotel/vista-ciudad.png",
  },
  {
    title: "Vista Mar",
    subtitle: "Comodidad para compartir",
    image: "/hotel/vista-ciudad.png",
  },
  {
    title: "Suite",
    subtitle: "Espacios amplios y luminosos",
    image: "/hotel/vista-ciudad.png",
  },
  {
    title: "Suite Superior",
    subtitle: "Una experiencia más exclusiva",
    image: "/hotel/vista-ciudad.png",
  },
  {
    title: "Master Suite",
    subtitle: "Ideal para estadías en grupo",
    image: "/hotel/vista-ciudad.png",
  },
  {
    title: "Presidencial",
    subtitle: "Ideal para estadías en grupo",
    image: "/hotel/vista-ciudad.png",
  },
];

export function RoomShowcase() {
  const [active, setActive] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  const handleSelect = (index: number) => {
    if (index === active) return;

    setTextVisible(false);

    setTimeout(() => {
      setActive(index);

      setTimeout(() => {
        setTextVisible(true);
      }, 180);
    }, 120);
  };

  return (
    <section className="bg-black px-6 pb-28 pt-16 text-white md:px-10">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-[#afafac]">
            Habitaciones
          </p>

          <h1 className="text-5xl font-light md:text-7xl">
            Elige tu próxima estadía
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Explora nuestras habitaciones y descubre espacios diseñados para el
            descanso, la comodidad y una experiencia única frente al mar.
          </p>
        </div>

        <div className="flex h-[540px] gap-4 overflow-hidden">
          {rooms.map((room, index) => {
            const isActive = active === index;

            return (
              <button
                key={room.title}
                onClick={() => handleSelect(index)}
                className={`group relative h-full overflow-hidden border border-white/10 transition-all duration-700 ease-in-out ${
                  isActive ? "flex-1" : "w-[72px] flex-none"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${room.image}')` }}
                />

                <div className="absolute inset-0 bg-black/45 transition duration-700 group-hover:bg-black/25" />

                {isActive ? (
                  <div className="absolute inset-x-0 bottom-0 z-10 p-8 text-left">
                    <div
                      className={`transition-opacity duration-200 ${
                        textVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/60">
                        {room.subtitle}
                      </p>

                      <h2 className="font-breathing text-5xl text-white">
                        {room.title}
                      </h2>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <span className="writing-vertical text-xs uppercase tracking-[0.3em] text-white/75">
                      {room.title}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
