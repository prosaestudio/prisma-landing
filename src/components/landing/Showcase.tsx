import { useEffect, useRef } from "react";

import c1 from "@/assets/carrousel-01.png.asset.json";
import c2 from "@/assets/carrousel-02.png.asset.json";
import c3 from "@/assets/carrousel-03.png.asset.json";

const slides = [
  { src: c1.url, alt: "Funciona con tus plugins y componentes favoritos", w: 1376, h: 1000 },
  { src: c2.url, alt: "Guarda y continúa las conversaciones", w: 1510, h: 991 },
  { src: c3.url, alt: "Controla tus cambios y ajustes", w: 1510, h: 991 },
];

export function Showcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  // Scroll-linked horizontal travel: while the section is pinned, vertical
  // scroll translates the track to the left until the last slide is fully
  // visible. The travel finishes before the pin ends, so the next (blue)
  // section starts sliding in behind the cards before the carousel is over.
  useEffect(() => {
    const track = trackRef.current;
    const pin = pinRef.current;
    if (!track || !pin) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = pin.getBoundingClientRect();
      const total = pin.offsetHeight - window.innerHeight;
      if (total <= 0) {
        track.style.transform = "none";
        return;
      }
      const raw = Math.min(1, Math.max(0, -rect.top / total));
      // complete the horizontal move at 80% of the pinned scroll
      const progress = Math.min(1, raw / 0.8);
      const max = Math.max(0, track.scrollWidth - track.parentElement!.clientWidth);
      track.style.transform = `translate3d(${-max * progress}px,0,0)`;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative z-10 mt-12 lg:mt-16" aria-roledescription="carrusel">
      <div ref={pinRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max items-stretch gap-6 will-change-transform select-none"
          >
            {slides.map((s, i) => (
              <figure
                key={s.src}
                className="shrink-0 overflow-hidden rounded-[30px] shadow-[0_18px_60px_-30px_oklch(0_0_0/0.35)]"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  width={s.w}
                  height={s.h}
                  draggable={false}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-[420px] w-auto max-w-none object-cover lg:h-[500px]"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
