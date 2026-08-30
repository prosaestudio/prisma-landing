import imgForm from "@/assets/img-form.png.asset.json";
import { Reveal } from "@/components/landing/Reveal";

const fields = [
  { label: "Nombre", name: "nombre", type: "text" },
  { label: "E-mail", name: "email", type: "email" },
];

export function CtaForm() {
  return (
    <section
      id="demo"
      className="relative z-10 overflow-hidden rounded-t-[100px] bg-form-sand px-6 pb-16 pt-24 lg:rounded-t-[150px] lg:px-12"
    >
      <div className="mx-auto max-w-[1040px]">
        <Reveal as="h2" className="mx-auto max-w-[700px] text-center font-serif text-[9vw] font-light leading-[0.95] tracking-[-0.04em] lg:text-[58px]">
          Déjanos tus datos y sé el primero en entrar al prisma
        </Reveal>

        <Reveal delay={140} className="mx-auto mt-14 flex max-w-[1040px] flex-col gap-6">
          <img
            src={imgForm.url}
            alt="Paisaje de colinas verdes"
            loading="lazy"
            className="h-[180px] w-full rounded-[14px] object-cover sm:h-[220px] lg:h-[280px]"
          />
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
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
            </div>
            <div className="mt-2 self-end">
              <button
                type="submit"
                className="h-[58px] w-[152px] rounded-full bg-primary font-aleo text-[28px] font-extralight tracking-[-0.04em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}