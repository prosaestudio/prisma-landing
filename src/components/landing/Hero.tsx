import { useEffect, useState } from "react";

import heroGradient from "@/assets/hero-gradient.png.asset.json";
import wordpressBlack from "@/assets/wordpress-black.png.asset.json";
import { Nav } from "@/components/landing/Nav";

const slides = [
  {
    lead: "Administra tu wordpress completo",
    accent: "solo con IA",
    prompt: "Quiero cambiar el logo del header...",
  },
  {
    lead: "Arregla errores de tu sitio",
    accent: "sin tocar código",
    prompt: "¿Puedes reparar el error de la página de quienes somos?",
  },
  {
    lead: "Configura dominios y plugins",
    accent: "conversando",
    prompt: "Necesito vincular mi dominio.cl",
  },
];

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

export function Hero() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");

  const prompt = slides[index].prompt;

  useEffect(() => {
    setTyped("");
    let i = 0;
    const typer = window.setInterval(() => {
      i += 1;
      setTyped(prompt.slice(0, i));
      if (i >= prompt.length) window.clearInterval(typer);
    }, 45);
    const next = window.setTimeout(() => {
      setIndex((v) => (v + 1) % slides.length);
    }, 6500);
    return () => {
      window.clearInterval(typer);
      window.clearTimeout(next);
    };
  }, [index, prompt]);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 pt-4 lg:px-6">
        <div className="relative isolate overflow-hidden rounded-[20px] bg-panel">
          <img
            src={heroGradient.url}
            alt=""
            aria-hidden
            className="hero-drift pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <Nav />
          <div className="relative px-6 pb-14 pt-16 lg:px-10 lg:pb-20 lg:pt-28">
            <div className="grid gap-12 lg:grid-cols-[1fr_535px] lg:items-start">
              <h1
                key={index}
                className="animate-fade-in max-w-[820px] font-serif text-[12vw] font-light leading-[0.88] tracking-[-0.06em] sm:text-[64px] lg:text-[86px]"
              >
                {slides[index].lead} <span className="font-medium">{slides[index].accent}</span>
              </h1>
              <div className="w-full">
                <img
                  src={wordpressBlack.url}
                  alt="WordPress"
                  className="mb-6 h-6 w-auto lg:ml-auto"
                />
                <div className="prompt-bar flex h-[61px] items-center px-6">
                  <p className="font-mono text-sm font-light tracking-[-0.06em] text-muted-foreground">
                    {typed}
                    <span className="ml-0.5 inline-block h-4 w-[1px] animate-pulse bg-foreground align-middle" />
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-0" role="tablist" aria-label="Ejemplos">
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
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <dl className="mt-24 grid gap-y-12 border-border sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-0">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`px-0 lg:px-8 ${i > 0 ? "lg:border-l lg:border-border" : ""}`}
            >
              <dt className="font-serif text-[87px] font-light leading-none tracking-[-0.06em]">
                {s.value}
              </dt>
              <dd className="mt-6 max-w-[240px] font-display text-[15px] leading-[1.1]">
                {s.copy}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}