import field from "@/assets/field.jpg";

const fields = [
  { label: "Nombre", name: "nombre", type: "text" },
  { label: "Apellido", name: "apellido", type: "text" },
  { label: "Empresa", name: "empresa", type: "text" },
  { label: "Cargo", name: "cargo", type: "text" },
];

export function CtaForm() {
  return (
    <section id="demo" className="mt-28 rounded-t-[181px] bg-sand px-6 pb-28 pt-28 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mx-auto max-w-[880px] text-center font-serif text-[10vw] font-light leading-[0.88] tracking-[-0.06em] lg:text-[87px]">
          Dejános tus datos y sé el primero en entrar al prisma
        </h2>

        <div className="mt-20 grid gap-10 lg:grid-cols-[260px_1fr] lg:items-start">
          <img
            src={field}
            alt="Equipo trabajando al aire libre con Prisma"
            width={1440}
            height={912}
            loading="lazy"
            className="h-[414px] w-full rounded-[22px] object-cover"
          />
          <form className="grid gap-6 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            {fields.map((f) => (
              <label key={f.name} className="block">
                <span className="sr-only">{f.label}</span>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.label}
                  className="h-[122px] w-full rounded-[14px] border-2 border-foreground bg-transparent px-8 font-display text-[42px] font-light tracking-[-0.06em] placeholder:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="sr-only">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-[122px] w-full rounded-[14px] border-2 border-foreground bg-transparent px-8 font-display text-[42px] font-light tracking-[-0.06em] placeholder:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <div className="sm:col-span-2 sm:justify-self-end">
              <button
                type="submit"
                className="h-[81px] w-[222px] rounded-full bg-primary font-aleo text-[44px] font-extralight tracking-[-0.06em] text-primary-foreground transition-opacity hover:opacity-90"
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