import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/landing/Reveal";

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
  {
    quote:
      "“Migrar mi dominio y configurar el SSL me tomaba horas con tutoriales. Con PRISMA solo escribí 'conecta mi dominio .cl' y en minutos todo estaba listo, incluyendo el certificado.”",
    name: "Andrés Fuentes,",
    role: "CEO en OrigenLab",
  },
  {
    quote:
      "“Mis editores no tocaban código por miedo a romper algo. Ahora hacen ajustes de diseño, cambian imágenes y corrigen textos directamente desde el chat. La productividad del equipo se disparó.”",
    name: "Daniela Rojas,",
    role: "Editora Jefe en Revista Nómada",
  },
  {
    quote:
      "“El soporte de mi hosting me decía que todo estaba bien, pero mi sitio seguía lento. PRISMA detectó el problema en el primer mensaje, optimizó los scripts y ahora carga en menos de un segundo.”",
    name: "Felipe Herrera,",
    role: "Growth Lead en FitClub Pro",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const prevTranslateRef = useRef(0);
  const dragThreshold = 60;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setIndex((prev) => (prev + 1) % quotes.length);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    startXRef.current = clientX;
    prevTranslateRef.current = -index * 100;
    currentTranslateRef.current = -index * 100;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = ((clientX - startXRef.current) / trackRef.current!.offsetWidth) * 100;
    currentTranslateRef.current = prevTranslateRef.current + diff;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const moved = currentTranslateRef.current - prevTranslateRef.current;
    if (moved < -dragThreshold) {
      setIndex((prev) => Math.min(prev + 1, quotes.length - 1));
    } else if (moved > dragThreshold) {
      setIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section id="experiencias" className="mt-28 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <h2 className="mb-10 text-center font-serif text-[32px] font-light leading-[1.1] tracking-[-0.04em] lg:text-[48px]">
            Lo que dicen quienes ya lo usan
          </h2>
        </Reveal>
      </div>
      <div
        className="relative mx-auto max-w-[1440px] cursor-grab px-6 active:cursor-grabbing lg:px-12"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0]!.clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0]!.clientX)}
        onTouchEnd={handleDragEnd}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
        >
          {quotes.map((q, i) => (
            <div
              key={q.name}
              className="w-full flex-shrink-0 px-2 md:w-1/2 lg:w-1/3"
            >
              <Reveal
                as="blockquote"
                delay={Math.min(i, 2) * 120}
                className="flex h-full flex-col justify-between rounded-[24px] border border-foreground bg-background px-6 py-7 font-sans text-[17px] font-light leading-[1.08] lg:px-8 lg:py-9 lg:text-[19px]"
              >
                <p>{q.quote}</p>
                <footer className="mt-6 font-sans text-[13px] leading-[1.3] not-italic lg:mt-8">
                  <span className="font-medium">— {q.name}</span>
                  <br />
                  <span className="text-muted-foreground">{q.role}</span>
                </footer>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "w-6 bg-foreground" : "bg-foreground/30"
            }`}
            aria-label={`Ver testimonio ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
