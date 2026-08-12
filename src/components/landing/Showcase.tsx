import { useCallback, useEffect, useState } from "react";

import c1 from "@/assets/carrousel-01.png.asset.json";
import c2 from "@/assets/carrousel-02.png.asset.json";
import c3 from "@/assets/carrousel-03.png.asset.json";

const slides = [
  { src: c1.url, alt: "Funciona con tus plugins y componentes favoritos", w: 688, h: 500 },
  { src: c2.url, alt: "Guarda y continúa las conversaciones", w: 755, h: 496 },
  { src: c3.url, alt: "Controla tus cambios y ajustes", w: 755, h: 496 },
];

export function Showcase() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = window.setInterval(next, 6000);
    return () => window.clearInterval(id);
  }, [next]);

  return (
    <section className="mt-28 overflow-hidden" aria-roledescription="carrusel">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="overflow-hidden">
          <div
            className="flex items-stretch gap-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(calc(${-index} * (688px + 1.5rem)))` }}
          >
            {slides.map((s, i) => (
              <figure
                key={s.src}
                aria-hidden={i !== index}
                className="shrink-0 overflow-hidden rounded-[30px] shadow-[0_18px_60px_-30px_oklch(0_0_0/0.35)] transition-opacity duration-500"
                style={{ opacity: i === index ? 1 : 0.75 }}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  width={s.w}
                  height={s.h}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-[500px] w-auto max-w-none object-cover"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir al slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-10 bg-prisma" : "w-6 bg-foreground/15"
                }`}
              />
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Anterior"
              className="flex size-10 items-center justify-center rounded-full border border-foreground/15 text-foreground/70 transition-colors hover:bg-foreground/5"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente"
              className="flex size-10 items-center justify-center rounded-full border border-foreground/15 text-foreground/70 transition-colors hover:bg-foreground/5"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
