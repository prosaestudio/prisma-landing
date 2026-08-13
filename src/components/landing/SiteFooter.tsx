import bgPrisma from "@/assets/bg-prisma.png.asset.json";
import logoFooter from "@/assets/logo-footer-pill.png.asset.json";

const top = ["Instagram", "Linkedin", "Whatsapp", "Prensa"];
const bottomLeft = ["Terminos y condiciones", "Asistencia", "Políticas de uso"];
const bottomRight = ["Linkedin", "Instagram", "Whatsapp"];

export function SiteFooter() {
  return (
    <footer className="relative z-10 overflow-hidden bg-form-sand pt-10 pb-10">
      <img
        src={bgPrisma.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
        <div className="overflow-hidden rounded-[20px] bg-ink px-8 pb-0 pt-8 text-primary-foreground">
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

          <div className="mt-20 flex items-end justify-between gap-6">
            <img
              src={logoFooter.url}
              alt=""
              aria-hidden
              loading="lazy"
              className="mb-3 h-[62px] w-auto max-w-full shrink-0 object-contain object-left"
            />
            <div className="relative pr-[46px]">
              <span className="block font-display text-[17vw] font-medium leading-[0.7] tracking-[-0.045em] lg:text-[172px]">
                Prisma
              </span>
              <span className="absolute right-0 top-[6px] font-display text-[34px] leading-none">
                ®
              </span>
            </div>
          </div>

          <div className="mt-8 border-t border-primary-foreground/40 py-4">
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
      </div>
    </footer>
  );
}