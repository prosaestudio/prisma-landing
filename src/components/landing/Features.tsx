const pills = ["Plugins", "Themes", "Recursos", "Config", "Dominio"];

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
    visual: "prompt" as const,
  },
];

function Visual({ kind }: { kind: (typeof features)[number]["visual"] }) {
  if (kind === "pills") {
    return (
      <div className="flex flex-wrap gap-4">
        {pills.map((p, i) => (
          <span
            key={p}
            className="rounded-full bg-panel px-10 py-2 label-mono shadow-[0_4px_6px_0_oklch(0_0_0/0.11)]"
            style={{ marginLeft: i % 2 === 1 ? "3rem" : undefined }}
          >
            {p}
          </span>
        ))}
      </div>
    );
  }

  if (kind === "logos") {
    return (
      <div className="flex items-center gap-6 rounded-full border border-foreground px-10 py-8">
        {["PHP", "MySQL", "CSS", "JS"].map((t) => (
          <span key={t} className="font-display text-xl tracking-[-0.04em]">
            {t}
          </span>
        ))}
      </div>
    );
  }

  if (kind === "blocks") {
    return (
      <div className="grid grid-cols-4 gap-3">
        {[
          "h-14 col-span-2 bg-[linear-gradient(180deg,#f67e8c,#fea07a)]",
          "h-14 bg-[linear-gradient(180deg,#7f8bd5,#d9b466)]",
          "h-14 bg-[linear-gradient(180deg,#159390,#faa568)]",
          "h-32 bg-[linear-gradient(180deg,#f67e8c,#fea07a)]",
          "h-32 bg-[linear-gradient(180deg,#7f8bd5,#d9b466)]",
          "h-32 col-span-2 bg-[linear-gradient(180deg,#159390,#faa568)]",
          "h-20 col-span-2 bg-[linear-gradient(180deg,#f67e8c,#fea07a)]",
          "h-20 bg-[linear-gradient(180deg,#7f8bd5,#d9b466)]",
          "h-20 bg-[linear-gradient(180deg,#159390,#faa568)]",
        ].map((c, i) => (
          <span key={i} className={`rounded-[15px] ${c}`} />
        ))}
      </div>
    );
  }

  return (
    <div className="prompt-bar flex h-[61px] items-center px-6">
      <p className="font-mono text-sm font-light tracking-[-0.06em] text-muted-foreground">
        Cambia el logo del header por el siguiente....
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section className="mx-auto mt-28 max-w-[1440px] px-6 lg:px-12">
      {features.map((f, i) => (
        <article
          key={f.label}
          className="grid gap-10 border-t border-border py-20 lg:grid-cols-2 lg:items-center"
        >
          <div className={i % 2 === 1 ? "lg:order-2" : ""}>
            <p className="label-mono text-muted-foreground">{f.label}</p>
            <p className="mt-6 max-w-[620px] font-sans text-[36px] font-light leading-[1.05] lg:text-[45px]">
              {f.copy}
            </p>
          </div>
          <div className={i % 2 === 1 ? "lg:order-1" : ""}>
            <Visual kind={f.visual} />
          </div>
        </article>
      ))}
    </section>
  );
}