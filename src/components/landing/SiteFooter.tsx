import logoFooter from "@/assets/logo-footer.png.asset.json";

const top = ["Instagram", "Linkedin", "Whatsapp", "Prensa"];
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
        <nav className="flex flex-wrap items-center justify-end gap-8 lg:gap-14">
          {top.map((l) => (
            <a
              key={l}
              href="#"
              className="font-aleo text-lg font-light tracking-[-0.05em] transition-opacity hover:opacity-70"
            >
              {l}
            </a>
          ))}
          <a
            href="#demo"
            className="rounded-full border border-primary-foreground px-8 py-1.5 font-aleo text-lg font-light tracking-[-0.05em] transition-opacity hover:opacity-70"
          >
            Email
          </a>
        </nav>

        <div className="mt-24 flex flex-wrap items-end justify-between gap-8">
          <img
            src={logoFooter.url}
            alt=""
            aria-hidden
            loading="lazy"
            className="mb-3 h-[110px] w-[472px] max-w-full rounded-[34px] object-cover"
          />
          <div className="flex items-start gap-3">
            <span className="font-display text-[16vw] font-medium leading-[0.78] tracking-[-0.06em] lg:text-[200px]">
              Prisma
            </span>
            <span className="mt-2 flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-primary-foreground font-display text-3xl">
              R
            </span>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/40 pt-8">
          <nav className="flex flex-wrap items-center gap-x-12 gap-y-4 lg:justify-between">
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