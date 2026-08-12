import logoFooter from "@/assets/logo-footer-pill.png.asset.json";

const top = ["Instagram", "Linkedin", "Whatsapp", "Prensa"];
const bottomLeft = ["Terminos y condiciones", "Asistencia", "Políticas de uso"];
const bottomRight = ["Linkedin", "Instagram", "Whatsapp"];

export function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto -mt-4 max-w-[1180px] px-6 pb-24 lg:px-12">
      <div className="overflow-hidden rounded-[20px] bg-primary px-8 pb-0 pt-8 text-primary-foreground">
        <nav className="flex flex-wrap items-center justify-center gap-6 lg:justify-end lg:gap-12">
          {top.map((l) => (
            <a
              key={l}
              href="#"
              className="font-aleo text-[15px] font-light tracking-[-0.03em] transition-opacity hover:opacity-70"
            >
              {l}
            </a>
          ))}
          <a
            href="#demo"
            className="rounded-full border border-primary-foreground px-8 py-1 font-aleo text-[15px] font-light tracking-[-0.03em] transition-opacity hover:opacity-70"
          >
            Email
          </a>
        </nav>

        <div className="mt-24 flex flex-wrap items-end justify-between gap-6">
          <img
            src={logoFooter.url}
            alt=""
            aria-hidden
            loading="lazy"
            className="mb-4 h-[62px] w-[300px] max-w-full rounded-[10px] object-fill"
          />
          <div className="flex items-start gap-2">
            <span className="font-display text-[16vw] font-medium leading-[0.72] tracking-[-0.05em] lg:text-[152px]">
              Prisma
            </span>
            <span className="mt-1 flex size-[46px] shrink-0 items-center justify-center rounded-full border-2 border-primary-foreground font-display text-2xl">
              R
            </span>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/40 py-5">
          <nav className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
              {bottomLeft.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="font-aleo text-[13px] font-light tracking-[-0.03em] transition-opacity hover:opacity-70"
                >
                  {l}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
              {bottomRight.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="font-aleo text-[13px] font-light tracking-[-0.03em] transition-opacity hover:opacity-70"
                >
                  {l}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}