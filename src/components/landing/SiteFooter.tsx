import bgPrisma from "@/assets/bg-prisma.png.asset.json";
import logoFooter from "@/assets/logo-footer-5.png.asset.json";

const top = ["Instagram", "Linkedin", "Whatsapp", "Prensa"];
const bottomLeft = [
  { label: "powered by Alvarocofre.dev", href: "https://alvarocofre.dev/" },
  { label: "Prosa Studio", href: "https://prosaestudio.com/" },
];

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

          <img
            src={logoFooter.url}
            alt="Prisma"
            loading="lazy"
            className="mt-20 h-auto w-full object-contain object-left"
          />

          <div className="mt-8 border-t border-primary-foreground/40 py-4">
            <nav className="flex flex-wrap items-center gap-x-10 gap-y-3">
              {bottomLeft.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="font-aleo text-[13px] font-light tracking-[-0.03em] transition-opacity hover:opacity-70"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}