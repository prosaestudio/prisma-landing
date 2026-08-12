import { useEffect, useRef } from "react";

const quotes = [
  {
    quote:
      "“Antes perdíamos mañanas enteras buscando qué plugin hacía conflicto tras una actualización. Ahora solo le escribo a PRISMA: 'Ajusta la tienda y soluciona el checkout' y lo resuelve en segundos. Es literalmente tener un dev senior en el chat.”",
    name: "Carolina Méndez,",
    role: "Directora de Agencia Digital en PixelStudio",
  },
  {
    quote:
      "“Pensé que para cambiar el layout de mis plantillas o reemplazar recursos tendría que contratar un maquetador. Le pido los cambios a PRISMA por texto y edita todo sin romper el CSS. Cambió por completo cómo gestionamos nuestros clientes.”",
    name: "Tomás Arancibia,",
    role: "Fundador de E-comLabs",
  },
  {
    quote:
      "“Lo que más me da paz es la seguridad. El agente corrige bugs complejos en producción y si algo no me gusta, lo vuelvo atrás en un clic. Pasamos de demorarnos días en arreglos técnicos a solucionarlo en 2 minutos.”",
    name: "Valeria Delgado,",
    role: "Product Manager en ScaleMedia",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const interacting = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (interacting.current) return;
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      const step = card.offsetWidth + 24;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: "smooth" });
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

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
    <section className="mt-28" aria-roledescription="carrusel">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto scroll-smooth px-6 cursor-grab select-none lg:px-12"
        style={{ scrollbarWidth: "none" }}
      >
        {quotes.map((q) => (
          <blockquote
            key={q.name}
            className="flex w-[86vw] shrink-0 snap-start flex-col justify-between rounded-[27px] border border-foreground bg-background px-10 py-12 font-sans text-[24px] font-light leading-[1.05] sm:w-[440px] lg:text-[26px]"
          >
            <p>{q.quote}</p>
            <footer className="mt-10 font-sans text-[13px] leading-[1.3] not-italic">
              <span className="font-medium">— {q.name}</span>
              <br />
              <span className="text-muted-foreground">{q.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}