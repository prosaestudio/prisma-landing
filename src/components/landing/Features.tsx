import type { CSSProperties } from "react";
import prismaBall from "@/assets/prisma-ball.png.asset.json";
import prismaBall2 from "@/assets/prisma-ball-2.png.asset.json";
import php from "@/assets/php.png.asset.json";
import mysql from "@/assets/mysql.png.asset.json";
import css3 from "@/assets/css3.png.asset.json";
import html5 from "@/assets/html5.png.asset.json";
import element02 from "@/assets/element-02.png.asset.json";
import element2 from "@/assets/element-2.png.asset.json";
import prismaBall3 from "@/assets/prisma-ball-3.png.asset.json";
import { Reveal, ScrollType } from "@/components/landing/Reveal";

const orbitPills = [
  { label: "Plugins", radius: 200, angle: -150, duration: 34 },
  { label: "Themes", radius: 168, angle: -35, duration: 28 },
  { label: "Config", radius: 210, angle: 20, duration: 38 },
  { label: "Dominio", radius: 160, angle: 95, duration: 31 },
  { label: "Recursos", radius: 215, angle: 175, duration: 42 },
];

const features = [
  {
    label: "Resolución Autónoma de Bugs",
    copy: "Detecta y corrige errores PHP, conflictos de CSS y caídas del sitio mediante comandos de texto.",
    visual: "logos" as const,
  },
  {
    label: "Gestor Universal de Plugins",
    copy: "Instala, configura, audita o edita funciones de cualquier plugin instalado sin tocar el panel de control.",
    visual: "pills" as const,
  },
  {
    label: "Diseño y Plantillas on-demand",
    copy: "Reemplaza recursos, cambia maquetaciones, modifica estilos CSS y ajusta el layout conversando.",
    visual: "blocks" as const,
  },
  {
    label: "Reemplazo y Gestión de Assets",
    copy: "Sube, optimiza o sustituye imágenes, fuentes y archivos indicándoselo en el chat.",
    visual: "assets" as const,
    ballAfterCopy: true,
  },
];

function Visual({ kind }: { kind: (typeof features)[number]["visual"] }) {
  if (kind === "pills") {
    return (
      <div className="relative mx-auto aspect-square w-full max-w-[560px]">
        {[0.42, 0.62, 0.82, 1].map((s) => (
          <span
            key={s}
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70"
            style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
          />
        ))}

        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src={prismaBall2.url}
            alt="Prisma"
            loading="lazy"
            className="prisma-pulse h-[120px] w-[120px] rounded-full sm:h-[140px] sm:w-[140px]"
          />
        </span>

        {orbitPills.map((p) => (
          <div
            key={p.label}
            className="orbit-rotator"
            style={
              {
                "--orbit-duration": `${p.duration}s`,
                "--orbit-delay": `${(-p.duration * ((p.angle + 360) % 360)) / 360}s`,
              } as CSSProperties
            }
          >
            <div
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(-50%, -50%) translateX(${p.radius}px)` }}
            >
              <span
                className="orbit-counter block rounded-full bg-panel px-7 py-2 label-mono shadow-[0_4px_10px_0_oklch(0_0_0/0.12)] sm:px-9"
                style={
                  {
                    "--orbit-duration": `${p.duration}s`,
                    "--orbit-delay": `${(-p.duration * ((p.angle + 360) % 360)) / 360}s`,
                  } as CSSProperties
                }
              >
                {p.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "logos") {
    return (
      <div className="flex items-center justify-around gap-6 rounded-full border border-foreground px-8 py-8 sm:px-12">
        <img
          src={prismaBall.url}
          alt="Prisma"
          loading="lazy"
          className="h-[70px] w-[70px] shrink-0 rounded-full sm:h-[86px] sm:w-[86px]"
        />
        <img src={php.url} alt="PHP" loading="lazy" className="h-[53px] w-auto shrink-0 sm:h-[65px]" />
        <img src={mysql.url} alt="MySQL" loading="lazy" className="h-[53px] w-auto shrink-0 sm:h-[65px]" />
        <img src={css3.url} alt="CSS3" loading="lazy" className="h-[54px] w-auto shrink-0 sm:h-[70px]" />
        <img src={html5.url} alt="HTML5" loading="lazy" className="h-[54px] w-auto shrink-0 sm:h-[70px]" />
      </div>
    );
  }

  if (kind === "blocks") {
    return (
      <img
        src={element2.url}
        alt="Prompt para cambiar el logo del header sobre un mosaico de colores Prisma"
        loading="lazy"
        className="mx-auto w-full max-w-[700px]"
      />
    );
  }

  return (
    <img
      src={element02.url}
      alt="Barra de herramientas de assets sobre un degradado Prisma"
      loading="lazy"
      className="mx-auto w-full max-w-[560px]"
    />
  );
}

export function Features() {
  return (
    <section id="features" className="mx-auto mt-28 max-w-[1440px] px-6 lg:px-12">
      {features.map((f, i) => (
        <article
          key={f.label}
          className="grid gap-10 border-t border-border py-20 lg:grid-cols-2 lg:items-center"
        >
          <div className={i % 2 === 1 ? "lg:order-2" : ""}>
            <Reveal as="p" className="label-mono text-muted-foreground">
              {f.label}
            </Reveal>
            <ScrollType
              text={f.copy}
              className="mt-6 max-w-[620px] font-sans text-[36px] font-light leading-[1.05] lg:text-[45px]"
            >
              {"ballAfterCopy" in f && f.ballAfterCopy ? (
                <img
                  src={prismaBall3.url}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="ml-2 inline-block h-[0.78em] w-[0.78em] rounded-full align-baseline"
                />
              ) : null}
            </ScrollType>
          </div>
          <Reveal className={i % 2 === 1 ? "lg:order-1" : ""}>
            <Visual kind={f.visual} />
          </Reveal>
        </article>
      ))}
    </section>
  );
}