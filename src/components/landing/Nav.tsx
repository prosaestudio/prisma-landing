import logoHeader from "@/assets/logo-header.png.asset.json";

const links = ["Solución", "Features", "Integración", "Pricing"];

export function Nav() {
  return (
    <header className="relative z-50 mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-8 gap-y-4 px-6 py-6 lg:px-12">
      <a href="/" className="relative z-50 flex items-center">
        <img src={logoHeader.url} alt="Prisma" className="h-8 w-auto" />
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
        className="rounded-full border border-foreground px-7 py-2 font-aleo text-lg font-light tracking-[-0.05em] shadow-[0_3px_0_0_var(--color-foreground)] transition-transform hover:translate-y-[2px] hover:shadow-none"
      >
        Get a demo
      </a>
    </header>
  );
}