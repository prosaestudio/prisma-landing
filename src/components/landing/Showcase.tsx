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
  const interacting = useRef(false);

  // Scroll-linked: vertical page scroll through the pinned section drives the
  // horizontal position, so all three slides are seen on the way down.
  useEffect(() => {
    const track = trackRef.current;
    const pin = pinRef.current;
    if (!track || !pin) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      if (interacting.current) return;
      const rect = pin.getBoundingClientRect();
      const total = pin.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      const max = track.scrollWidth - track.clientWidth;
      track.scrollLeft = max * progress;
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

  // Click-and-drag with the mouse (touch scrolling is native).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0;
    let startScroll = 0;
    let dragging = false;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      interacting.current = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
      el.style.scrollSnapType = "none";
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
    };
    const up = () => {
      if (!dragging) return;
      dragging = false;
      el.style.cursor = "";
      el.style.scrollSnapType = "";
      window.setTimeout(() => {
        interacting.current = false;
      }, 2500);
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("touchstart", () => (interacting.current = true), { passive: true });
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <section className="relative z-10 mt-28" aria-roledescription="carrusel">
      <div ref={pinRef} className="relative h-[260vh]">
        <div className="sticky top-0 flex h-screen items-center">
      <div
        ref={trackRef}
        className="no-scrollbar flex w-full snap-x items-stretch gap-6 overflow-x-auto cursor-grab select-none"
        style={{ scrollbarWidth: "none" }}
      >
        {slides.map((s, i) => (
          <figure
            key={s.src}
            className="shrink-0 snap-start overflow-hidden rounded-[30px] shadow-[0_18px_60px_-30px_oklch(0_0_0/0.35)] first:ml-0 last:mr-0"
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
