import logoHeader from "@/assets/logo-header.png.asset.json";
import logoWhite from "@/assets/logo-prisma-white.png.asset.json";

const links = ["Solución", "Features", "Integración", "Pricing"];

export function Nav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const light = variant === "light";
  return (
    <header
      className={`relative z-50 mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-8 gap-y-4 px-6 py-6 transition-colors duration-500 lg:px-12 ${
        light ? "text-white" : ""
      }`}
    >
      <a href="/" className="relative z-50 flex items-center">
        <img src={light ? logoWhite.url : logoHeader.url} alt="Prisma" className="h-8 w-auto" />
      </a>
      <nav className="flex flex-1 flex-wrap items-center gap-6 lg:justify-center lg:gap-12">
        {links.map((l) => (
          <a
            key={l}
            href="#"
            className="font-aleo text-lg font-light tracking-[-0.05em] transition-opacity hover:opacity-60"
          >
            {l}
          </a>
        ))}
      </nav>
      <a
        href="#demo"
        className={`rounded-full border px-7 py-2 font-aleo text-lg font-light tracking-[-0.05em] transition-transform hover:translate-y-[2px] hover:shadow-none ${
          light
            ? "border-foreground bg-white text-foreground shadow-[0_3px_0_0_oklch(0_0_0/0.9)]"
            : "border-foreground shadow-[0_3px_0_0_var(--color-foreground)]"
        }`}
      >
        Get a demo
      </a>
    </header>
  );
}