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
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-prisma pointer-events-none absolute -top-56 right-[-10%] h-[620px] w-[75%] rounded-full opacity-70 blur-[90px]"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 pt-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
          <h1 className="max-w-[820px] font-serif text-[13vw] font-light leading-[0.88] tracking-[-0.06em] sm:text-[64px] lg:text-[95px]">
            Administra tu wordpress completo{" "}
            <span className="font-medium">solo con IA</span>
          </h1>
          <div className="w-full lg:w-[535px]">
            <div className="prompt-bar flex h-[61px] items-center px-6">
              <p className="font-mono text-sm font-light tracking-[-0.06em] text-muted-foreground">
                Cambia el logo del header por el siguiente....
              </p>
            </div>
          </div>
        </div>

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