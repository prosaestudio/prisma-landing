const links = ["Solución", "Features", "Integración", "Pricing"];

export function Nav() {
  return (
    <header className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-8 gap-y-4 px-6 py-6 lg:px-12">
      <a href="/" className="flex items-center gap-3">
        <span className="bg-prisma h-5 w-20 rounded-md" aria-hidden />
        <span className="font-display text-3xl font-medium tracking-[-0.06em]">Prisma</span>
        <span className="flex size-3 items-center justify-center rounded-full border border-foreground text-[7px] font-bold">
          R
        </span>
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