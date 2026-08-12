const top = ["Instagram", "Linkedin", "Whatsapp", "Prensa", "Email"];
const bottom = [
  "Terminos y condiciones",
  "Asistencia",
  "Políticas de uso",
  "Linkedin",
  "Instagram",
  "Whatsapp",
];

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-12">
      <div className="overflow-hidden rounded-[28px] bg-primary px-10 py-12 text-primary-foreground">
        <nav className="flex flex-wrap items-center justify-end gap-8">
          {top.map((l) => (
            <a
              key={l}
              href="#"
              className="font-aleo text-lg font-light tracking-[-0.05em] transition-opacity hover:opacity-70"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-8">
          <span className="bg-prisma h-[110px] w-[472px] max-w-full rounded-[34px]" aria-hidden />
          <div className="flex items-end gap-4">
            <span className="font-display text-[16vw] font-medium leading-[0.88] tracking-[-0.06em] lg:text-[200px]">
              Prisma
            </span>
            <span className="mb-8 flex size-14 shrink-0 items-center justify-center rounded-full border border-primary-foreground text-3xl font-bold">
              R
            </span>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-foreground/40 pt-8">
          <nav className="flex flex-wrap gap-x-12 gap-y-4">
            {bottom.map((l) => (
              <a
                key={l}
                href="#"
                className="font-aleo text-lg font-light tracking-[-0.05em] transition-opacity hover:opacity-70"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}