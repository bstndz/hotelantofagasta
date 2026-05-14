"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Habitaciones", href: "/habitaciones" },
  { label: "Restaurante", href: "/#restaurante" },
  { label: "Eventos", href: "/#eventos" },
  { label: "Galería", href: "/#galeria" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 40);

      if (currentScrollY <= 10) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    setScrolled(window.scrollY > 40);
    setHidden(window.scrollY > 80);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        !mounted
          ? "opacity-0 -translate-y-full"
          : hidden
            ? "-translate-y-full"
            : "translate-y-0"
      } ${scrolled ? "bg-black/80 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="relative flex h-20 items-center justify-between border-b border-white/15 md:h-20">
          <div className="group relative">
            <button className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-white/85 transition hover:text-[#afafac]">
              ES
              <ChevronDown size={15} strokeWidth={1.5} />
            </button>

            <div className="invisible absolute left-0 top-full mt-4 min-w-[90px] border border-white/10 bg-black/90 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <button className="block w-full px-5 py-3 text-left text-xs uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10 hover:text-[#afafac]">
                ES
              </button>
              <button className="block w-full px-5 py-3 text-left text-xs uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10 hover:text-[#afafac]">
                EN
              </button>
              <button className="block w-full px-5 py-3 text-left text-xs uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10 hover:text-[#afafac]">
                PT
              </button>
            </div>
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/hotel/logo-solo.png"
              alt="Hotel Antofagasta"
              className="h-12 w-auto object-contain md:h-14"
            />
          </Link>

          <a
            href="https://reservations.travelclick.com/97268"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-white bg-white px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-black transition hover:border-[#afafac] hover:bg-[#afafac] md:block"
          >
            Reservar
          </a>
        </div>

        <nav className="hidden h-12 items-center justify-center gap-10 text-xs font-medium uppercase tracking-[0.2em] text-white/85 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#afafac]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
