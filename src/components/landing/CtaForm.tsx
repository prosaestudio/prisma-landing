import bgPrisma from "@/assets/bg-prisma.png.asset.json";
import cieloForm from "@/assets/cielo-form.png.asset.json";

const fields = [
  { label: "Nombre", name: "nombre", type: "text" },
  { label: "Apellido", name: "apellido", type: "text" },
  { label: "Empresa", name: "empresa", type: "text" },
  { label: "Cargo", name: "cargo", type: "text" },
];

export function CtaForm() {
  return (
    <section
      id="demo"
      className="relative isolate mt-28 overflow-hidden rounded-t-[181px] bg-sand px-6 pb-16 pt-24 lg:px-12"
    >
      <img
        src={bgPrisma.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mx-auto max-w-[700px] text-center font-serif text-[9vw] font-light leading-[0.95] tracking-[-0.04em] lg:text-[58px]">
          Dejános tus datos y sé el primero en entrar al prisma
        </h2>

        <div className="mx-auto mt-14 grid max-w-[1040px] gap-6 lg:grid-cols-[220px_1fr] lg:items-start">
          <img
            src={cieloForm.url}
            alt="Equipo trabajando al aire libre con Prisma"
            loading="lazy"
            className="h-[220px] w-full rounded-[14px] object-cover"
          />
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            {fields.map((f) => (
              <label key={f.name} className="block">
                <span className="sr-only">{f.label}</span>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.label}
                  className="h-[74px] w-full rounded-[12px] border border-foreground bg-transparent px-6 font-display text-[26px] font-light tracking-[-0.04em] placeholder:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="sr-only">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-[74px] w-full rounded-[12px] border border-foreground bg-transparent px-6 font-display text-[26px] font-light tracking-[-0.04em] placeholder:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <div className="mt-2 sm:col-span-2 sm:justify-self-end">
              <button
                type="submit"
                className="h-[58px] w-[152px] rounded-full bg-primary font-aleo text-[28px] font-extralight tracking-[-0.04em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}