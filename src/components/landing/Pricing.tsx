import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import bg from "@/assets/bg-prisma-02.jpg.asset.json";
import { Reveal } from "@/components/landing/Reveal";
import { plans, type Billing } from "@/lib/plans";

export function BillingToggle({ value, onChange }: { value: Billing; onChange: (b: Billing) => void }) {
  return (
    <div className="inline-flex rounded-full border border-foreground p-1">
      {(["mensual", "anual"] as const).map((b) => (
        <button
          key={b}
          type="button"
          onClick={() => onChange(b)}
          className={`rounded-full px-6 py-2 font-aleo text-lg font-light capitalize tracking-[-0.04em] transition-colors ${
            value === b ? "bg-primary text-primary-foreground" : ""
          }`}
        >
          {b}
          {b === "anual" && <span className="ml-2 text-sm opacity-70">2 meses gratis</span>}
        </button>
      ))}
    </div>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("mensual");
  return (
    <section
      id="demo"
      className="relative z-10 overflow-hidden rounded-t-[100px] bg-form-sand px-6 pb-16 pt-16 lg:rounded-t-[150px] lg:px-20"
    >
      <div className="mx-auto max-w-[1100px]">
        <Reveal as="h2" className="mx-auto max-w-[700px] text-center font-serif text-[8vw] font-light leading-[0.95] tracking-[-0.04em] lg:text-[54px]">
          Elige tu plan y entra al prisma
        </Reveal>
        <Reveal delay={100} className="mt-8 flex justify-center">
          <BillingToggle value={billing} onChange={setBilling} />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((p, i) => {
            const featured = "featured" in p && p.featured;
            return (
              <Reveal
                key={p.id}
                delay={140 + i * 90}
                className={`relative flex flex-col overflow-hidden rounded-[20px] border border-foreground p-7 ${
                  featured ? "bg-ink text-primary-foreground" : "bg-background/60"
                }`}
              >
                {featured && (
                  <img src={bg.url} alt="" aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full object-cover opacity-80" />
                )}
                <div className="relative">
                  <p className="label-mono">{p.name}</p>
                  <p className="mt-2 font-display text-base font-light opacity-80">{p.desc}</p>
                  <p className="mt-6 font-serif text-[54px] font-light leading-none tracking-[-0.04em]">
                    US${billing === "mensual" ? p.monthly : p.yearly}
                    <span className="ml-1 font-display text-lg opacity-70">/{billing === "mensual" ? "mes" : "año"}</span>
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-display text-base font-light">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/obtener-mcp"
                  search={{ plan: p.id, billing }}
                  className={`relative mt-8 rounded-full border px-7 py-3 text-center font-aleo text-lg font-light tracking-[-0.05em] transition-transform hover:translate-y-[2px] ${
                    featured
                      ? "border-primary-foreground bg-primary-foreground text-foreground"
                      : "border-foreground shadow-[0_3px_0_0_var(--color-foreground)] hover:shadow-none"
                  }`}
                >
                  Seleccionar
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
