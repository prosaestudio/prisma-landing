import field from "@/assets/field.jpg";

export function SpeedBand() {
  return (
    <section className="relative mt-28 overflow-hidden">
      <img
        src={field}
        alt="Persona trabajando con su laptop en un campo abierto"
        width={1440}
        height={912}
        loading="lazy"
        className="h-[900px] w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0_0_0/0.3)_0%,oklch(0_0_0/0.05)_45%,oklch(0_0_0/0.55)_100%)]"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 mx-auto max-w-[1300px] px-6 pt-16 text-center lg:px-12">
        <h2 className="font-serif text-[8vw] font-light leading-[0.88] tracking-[-0.06em] text-[oklch(1_0_0)] lg:text-[99px]">
          Más que un plugin es editar tus sitios en{" "}
          <span className="font-normal">alta velocidad</span>
        </h2>
      </div>
      <div className="absolute inset-x-0 bottom-16 mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <p className="max-w-[480px] font-mono text-[17px] font-light uppercase leading-[1.5] tracking-[-0.06em] text-[oklch(1_0_0)]">
            Deja de luchar con el código, los errores de plugins y la maquetación. PRISMA es el
            agente de IA que arregla, diseña y optimiza tu sitio WordPress en tiempo real a través
            de conversación.
          </p>
          <div className="lg:justify-self-start">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full border border-[oklch(1_0_0)] px-10 py-3 font-serif text-[29px] font-light tracking-[-0.06em] text-[oklch(1_0_0)] transition-colors hover:bg-[oklch(1_0_0)] hover:text-foreground"
            >
              Descargalo ya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}