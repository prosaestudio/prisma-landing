import { useEffect, useRef, useState } from "react";

import heroGradient from "@/assets/hero-gradient.png.asset.json";
import imgSlider02 from "@/assets/img-slider-02-2.png.asset.json";
import desk from "@/assets/desk.png.asset.json";
import ball01 from "@/assets/ball-01.png.asset.json";
import ball02 from "@/assets/ball-02.png.asset.json";
import ball03 from "@/assets/ball-03.png.asset.json";
import site01 from "@/assets/site-01.png.asset.json";
import site02 from "@/assets/site-02.png.asset.json";
import site03 from "@/assets/site-03.png.asset.json";
import wordpressBlack from "@/assets/wordpress-black.png.asset.json";
import { Nav } from "@/components/landing/Nav";

const slides = [
  {
    lead: "Administra tu",
    lead2: "wordpress completo",
    accent: "solo con IA",
    prompt: "Quiero cambiar el logo del header...",
  },
  {
    lead: "Arregla errores de tu sitio",
    accent: "sin tocar código",
    prompt: "¿Puedes reparar el error de la página de quienes somos?",
  },
  {
    lead: "Diseña y programa",
    accent: "en wordpress",
    tail: "sin tocar ningún editor",
    prompt: "Necesito vincular mi dominio.cl",
  },
];

const balls = [ball01, ball02, ball03];

const stats = [
  {
    value: "10x",
    copy: "Más rápido en resolver errores críticos y caídas de WordPress en comparación con soporte tradicional.",
  },
  {
    value: "0",
    copy: "Líneas de código tocadas manualmente para modificar plantillas, estilos o funciones de plugins.",
  },
  {
    value: "92%",
    copy: "Reducción en tiempo de mantenimiento mensual por sitio web administrado.",
  },
  {
    value: "15 hrs",
    copy: "Ahorradas a la semana por desarrollador al delegar la corrección de bugs al agente conversacional.",
  },
  {
    value: "100%",
    copy: "De cambios respaldados con puntos de restauración automáticos antes de cada ejecución.",
  },
];

function useInView<T extends HTMLElement>(ref: React.RefObject<T | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry!.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function AnimatedStat({
  value,
  copy,
  index,
}: {
  value: string;
  copy: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const numericMatch = value.match(/^([0-9]+)(.*)$/);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible || !numericMatch) return;
    const target = Number(numericMatch[1]);
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  const renderedValue = numericMatch
    ? `${display}${numericMatch[2]}`
    : value;

  return (
    <div
      ref={ref}
      className={`px-0 lg:px-8 transition-all duration-700 ease-out ${
        index > 0 ? "lg:border-l lg:border-border" : ""
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <dt className="font-serif text-[87px] font-light leading-none tracking-[-0.06em]">
        {renderedValue}
      </dt>
      <dd className="mt-6 max-w-[240px] font-display text-[15px] leading-[1.1]">
        {copy}
      </dd>
    </div>
  );
}

const firstSlidePrompts = [
  "Quiero cambiar el logo del header...",
  "Conecta mi dominio...",
  "Vincula las redes sociales...",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [activeBall, setActiveBall] = useState(0);

  const slide = slides[index] ?? slides[0]!;
  const prompt = slide.prompt;
  const isBlue = index === 1;
  const isDesk = index === 2;

  useEffect(() => {
    if (!isDesk) return;
    const id = window.setInterval(() => {
      setActiveBall((v) => (v + 1) % balls.length);
    }, 1400);
    return () => window.clearInterval(id);
  }, [isDesk]);

  useEffect(() => {
    const timers: number[] = [];
    const clearAll = () => timers.forEach(window.clearTimeout);

    if (index !== 0) {
      setTyped("");
      let i = 0;
      const typer = window.setInterval(() => {
        i += 1;
        setTyped(prompt.slice(0, i));
        if (i >= prompt.length) window.clearInterval(typer);
      }, 45);
      timers.push(window.setTimeout(() => {
        window.clearInterval(typer);
      }, 6500));
      const next = window.setTimeout(() => {
        setIndex((v) => (v + 1) % slides.length);
      }, 6500);
      return () => {
        clearAll();
        window.clearInterval(typer);
        window.clearTimeout(next);
      };
    }

    // First slide: rotate three prompts with type / pause / erase
    let promptIdx = 0;
    let phase: "typing" | "pause" | "erasing" = "typing";
    let charIdx = 0;

    const step = () => {
      const current = firstSlidePrompts[promptIdx]!;
      if (phase === "typing") {
        charIdx += 1;
        setTyped(current.slice(0, charIdx));
        if (charIdx >= current.length) {
          phase = "pause";
          timers.push(window.setTimeout(() => {
            phase = "erasing";
            step();
          }, 1400));
        } else {
          timers.push(window.setTimeout(step, 42));
        }
      } else if (phase === "erasing") {
        charIdx -= 1;
        setTyped(current.slice(0, charIdx));
        if (charIdx <= 0) {
          phase = "typing";
          promptIdx = (promptIdx + 1) % firstSlidePrompts.length;
          timers.push(window.setTimeout(step, 250));
        } else {
          timers.push(window.setTimeout(step, 26));
        }
      }
    };

    step();

    const next = window.setTimeout(() => {
      setIndex((v) => (v + 1) % slides.length);
    }, 11500);

    return () => {
      clearAll();
      window.clearTimeout(next);
    };
  }, [index, prompt]);

  return (
    <section id="solucion" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 pt-4 lg:px-6">
        <div
          className={`relative isolate overflow-hidden rounded-[20px] transition-colors duration-500 ${
            isBlue ? "bg-[#0a5b87] text-white" : "bg-panel"
          }`}
        >
          <Nav variant={isBlue ? "light" : "dark"} />
          {isBlue ? (
            <img
              src={imgSlider02.url}
              alt=""
              aria-hidden
              className="animate-fade-in pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
            />
          ) : isDesk ? (
            <div aria-hidden className="absolute inset-0 -z-10 bg-white" />
          ) : (
            <>
          <img
            src={heroGradient.url}
            alt=""
            aria-hidden
            className="hero-drift pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div aria-hidden className="hero-orb hero-orb--1" />
          <div aria-hidden className="hero-orb hero-orb--2" />
          <div aria-hidden className="hero-orb hero-orb--3" />
          <div aria-hidden className="hero-orb hero-orb--4" />
            </>
          )}
          <div className="relative flex min-h-[280px] flex-col px-6 pb-5 pt-14 lg:min-h-[520px] lg:px-10 lg:pb-12 lg:pt-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_535px] lg:items-start">
              <h1
                key={index}
                className={`animate-fade-in font-serif text-[12vw] font-light leading-[0.88] tracking-[-0.06em] sm:text-[64px] lg:text-[86px] ${
                  isBlue ? "max-w-[520px]" : "max-w-[820px]"
                }`}
              >
                {slide.lead}
                {"lead2" in slide && slide.lead2 ? (
                  <span className="lg:block"> {slide.lead2}</span>
                ) : null}
                <span
                  className={`font-medium ${
                    "lead2" in slide && slide.lead2
                      ? "block"
                      : "max-md:block"
                  }`}
                >
                  {slide.accent}
                </span>
                {"tail" in slide && slide.tail ? <> {slide.tail}</> : null}
              </h1>
              <div className="animate-fade-in relative h-[220px] w-full lg:h-[380px]">
                {isDesk ? (
                  <>
                    {balls.map((b, i) => {
                      const pos = [
                        "left-[-14%] top-[6%] w-[190px] lg:w-[230px]",
                        "left-1/2 top-[-4%] w-[190px] -translate-x-1/2 lg:w-[240px]",
                        "right-[0%] top-[6%] w-[190px] lg:w-[230px]",
                      ][i];
                      const active = i === activeBall;
                      return (
                        <img
                          key={b.url}
                          src={b.url}
                          alt=""
                          aria-hidden
                          className={`absolute rounded-full transition-all duration-700 ease-out ${pos} ${
                            active
                              ? "scale-110 opacity-100 blur-0"
                              : "scale-95 opacity-50 blur-[1px]"
                          }`}
                        />
                      );
                    })}
                    <img
                      src={desk.url}
                      alt="Escritorio con Prisma"
                      className="absolute bottom-0 left-1/2 w-[162%] -translate-x-1/2 translate-y-[15%]"
                    />
                  </>
                ) : isBlue ? (
                  <>
                    <img
                      src={site01.url}
                      alt="Cliente 01"
                      className="card-float absolute left-[6%] top-0 w-[210px] lg:w-[300px] drop-shadow-[0_18px_40px_oklch(0_0_0/0.18)]"
                      style={{ animationDelay: "0s" }}
                    />
                    <img
                      src={site02.url}
                      alt="Cliente 02"
                      className="card-float absolute right-[-8%] top-[96px] w-[224px] lg:w-[320px] drop-shadow-[0_18px_40px_oklch(0_0_0/0.18)]"
                      style={{ animationDelay: "1.4s" }}
                    />
                    <img
                      src={site03.url}
                      alt="Cliente 03"
                      className="card-float absolute left-[0%] top-[188px] w-[210px] lg:w-[300px] drop-shadow-[0_18px_40px_oklch(0_0_0/0.18)]"
                      style={{ animationDelay: "2.6s" }}
                    />
                  </>
                ) : (
                  <div className="flex h-full flex-col justify-start pt-2 lg:pt-4 lg:-translate-x-[15%]">
                    <img
                      src={wordpressBlack.url}
                      alt="WordPress"
                      className="mb-6 block h-[34px] w-auto max-w-full object-contain self-start sm:h-[44px]"
                    />
                    <div className="prompt-bar flex h-[61px] items-center px-6">
                      <p className="font-mono text-sm font-light tracking-[-0.06em] text-muted-foreground">
                        {typed}
                        <span className="ml-0.5 inline-block h-4 w-[1px] animate-pulse bg-foreground align-middle" />
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-2 hidden items-center gap-0 pt-2 lg:flex" role="tablist" aria-label="Ejemplos">
              {slides.map((s, i) => (
                <button
                  key={s.prompt}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={s.prompt}
                  onClick={() => setIndex(i)}
                  className={`h-[14px] w-[50px] border transition-colors ${
                    isBlue ? "border-white" : "border-foreground"
                  } ${
                    i === index ? (isBlue ? "bg-white" : "bg-foreground") : "bg-transparent"
                  } ${i === 0 ? "rounded-l-full" : ""} ${
                    i === slides.length - 1 ? "rounded-r-full" : "border-r-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-0 py-6 lg:hidden" role="tablist" aria-label="Ejemplos">
          {slides.map((s, i) => (
            <button
              key={s.prompt}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={s.prompt}
              onClick={() => setIndex(i)}
              className={`h-[14px] w-[50px] border border-foreground transition-colors ${
                i === index ? "bg-foreground" : "bg-transparent"
              } ${i === 0 ? "rounded-l-full" : ""} ${
                i === slides.length - 1 ? "rounded-r-full" : "border-r-0"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <dl className="mt-24 grid gap-y-12 border-border sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-0">
          {stats.map((s, i) => (
            <AnimatedStat key={s.value} value={s.value} copy={s.copy} index={i} />
          ))}
        </dl>
      </div>
    </section>
  );
}