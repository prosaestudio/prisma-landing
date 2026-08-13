import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoHeader from "@/assets/logo-header.png.asset.json";
import logoWhite from "@/assets/logo-prisma-white.png.asset.json";
import logoWhiteMobile from "@/assets/logo-white-mobile.png.asset.json";
import bgMobile from "@/assets/bg-mobile.png.asset.json";

const links = [
  { label: "Solución", href: "#solucion" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Features", href: "#features" },
  { label: "Experiencias", href: "#experiencias" },
];

export function Nav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const light = variant === "light";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`relative z-50 mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-8 gap-y-4 px-6 py-6 transition-colors duration-500 lg:px-12 ${
        light ? "text-white" : ""
      }`}
    >
      <a
        href="/"
        className={`relative z-50 flex items-center transition-opacity duration-200 ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <img src={light ? logoWhite.url : logoHeader.url} alt="Prisma" className="h-8 w-auto" />
      </a>
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={`ml-auto md:hidden ${open ? "opacity-0" : "opacity-100"}`}
      >
        <Menu className="h-8 w-8" strokeWidth={1.25} />
      </button>
      <nav className="hidden flex-1 flex-wrap items-center gap-6 md:flex lg:justify-center lg:gap-12">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-aleo text-lg font-light tracking-[-0.05em] transition-opacity hover:opacity-60"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#demo"
        className={`hidden rounded-full border px-7 py-2 font-aleo text-lg font-light tracking-[-0.05em] transition-transform hover:translate-y-[2px] hover:shadow-none md:block ${
          light
            ? "border-foreground bg-white text-foreground shadow-[0_3px_0_0_oklch(0_0_0/0.9)]"
            : "border-foreground shadow-[0_3px_0_0_var(--color-foreground)]"
        }`}
      >
        Get a demo
      </a>
    </header>

      {open && (
        <div className="fixed inset-0 z-[100] overflow-hidden bg-black text-white animate-fade-in md:hidden">
          <img
            src={bgMobile.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 w-[130%] max-w-none translate-y-[12%] opacity-90"
          />
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 z-10 text-white"
          >
            <X className="h-9 w-9" strokeWidth={1.25} />
          </button>

          <nav className="relative z-10 flex h-full flex-col items-start gap-6 px-7 pt-24">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-aleo text-[2.5rem] font-light leading-none tracking-[-0.04em]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full border border-white bg-white px-7 py-2 font-aleo text-xl font-light tracking-[-0.05em] text-foreground shadow-[0_3px_0_0_oklch(0_0_0/0.9)]"
            >
              Get a demo
            </a>
          </nav>

          <img
            src={logoWhiteMobile.url}
            alt="Prisma"
            className="pointer-events-none absolute bottom-0 left-0 z-10 w-[92%] translate-y-[18%]"
          />
        </div>
      )}
    </>
  );
}