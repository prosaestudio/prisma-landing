import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Nav } from "@/components/landing/Nav";
import { Reveal } from "@/components/landing/Reveal";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { BillingToggle } from "@/components/landing/Pricing";
import { plans, type Billing, type PlanId } from "@/lib/plans";

const search = z.object({
  plan: z.enum(["basico", "intermedio", "full"]).optional(),
  billing: z.enum(["mensual", "anual"]).optional(),
});

const title = "Obtener Prisma MCP para WordPress";
const description =
  "Administra tus sitios WordPress con IA: herramientas MCP con permisos, OAuth y auditoría. Elige tu plan y pide acceso.";

export const Route = createFileRoute("/obtener-mcp")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const points = [
  ["39 herramientas, ningún acceso abierto", "No existe una herramienta para ejecutar PHP, consultar SQL ni tocar archivos. Cada acción tiene su esquema, su capacidad y su registro."],
  ["Autorizas en el navegador", "OAuth 2.1 con PKCE: el único dato que copias es la dirección de tu sitio. Cada cliente se autoriza y se revoca por separado."],
  ["Entiende Elementor, Divi y WPBakery", "Corrige textos dentro de páginas hechas con constructores visuales, con respaldo antes de cada escritura. Reconoce Bricks, Oxygen, Beaver o Avada para no romperlos."],
  ["WooCommerce, SEO y campos personalizados", "Productos simples y variables con precios, stock e imágenes. Interopera con Yoast, Rank Math, All in One SEO y SEOPress, y lee y escribe campos de ACF."],
  ["Lo que se crea nace como borrador", "Publicar exige habilitarlo a propósito. Las acciones destructivas vienen apagadas y al escribir se purga la caché."],
  ["Se actualiza solo", "Las versiones nuevas aparecen en tu pantalla de Plugins con su historial de cambios, y se instalan solas si tienes actualizaciones automáticas."],
  ["Funciona con lo que ya usas", "Claude Code, Claude Desktop, Cursor, VS Code, Windsurf, Gemini CLI y Antigravity. Cualquier cliente MCP sobre HTTP."],
];

const ais = ["Claude Code", "Claude Desktop", "Cursor", "Codex", "VS Code", "Windsurf", "Gemini CLI", "Antigravity", "Otra"];

const inputCls =
  "h-[52px] w-full rounded-[12px] border border-foreground bg-background/60 px-4 font-display text-[17px] font-light tracking-[-0.04em] placeholder:text-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring";

function Page() {
  const s = Route.useSearch();
  const [plan, setPlan] = useState<PlanId>(s.plan ?? "intermedio");
  const [billing, setBilling] = useState<Billing>(s.billing ?? "mensual");
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto grid max-w-[1180px] gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-12">
        <div>
          <Reveal as="h1" className="font-serif text-[11vw] font-light leading-[0.95] tracking-[-0.04em] lg:text-[68px]">
            Administra tus sitios WordPress con la IA
          </Reveal>
          <Reveal as="p" delay={100} className="mt-6 font-display text-lg font-light opacity-80">
            Prisma expone tareas concretas de WordPress como herramientas MCP, con permisos, alcance por token y auditoría. Tu IA crea, corrige y publica contenido sin que le entregues acceso general al sitio.
          </Reveal>
          <ol className="mt-10 border-b border-foreground/30">
            {points.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 60} className="grid grid-cols-[56px_1fr] border-t border-foreground/30 py-6">
                <span className="label-mono !text-sm opacity-60">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-2xl font-light tracking-[-0.03em]">{t}</h3>
                  <p className="mt-2 font-display text-base font-light opacity-75">{d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <Reveal className="relative overflow-hidden rounded-[24px] border border-foreground bg-form-sand p-7 lg:p-9">
            <div className="relative">
              <h2 className="font-serif text-4xl font-light tracking-[-0.04em]">Obtener MCP</h2>
              <p className="mt-3 font-display text-base font-light opacity-80">
                Revisamos cada solicitud y te llega tu licencia con el instalador y las instrucciones.
              </p>
              <p className="mt-4 rounded-[12px] bg-background/60 px-4 py-3 font-display text-sm font-light">
                <strong className="font-medium">Antes de anotarte:</strong> necesita WordPress 6.9 o superior y PHP 8.1 o superior.
              </p>

              {sent ? (
                <div className="mt-8 rounded-[16px] border border-foreground bg-background/60 p-8 text-center">
                  <p className="font-serif text-3xl font-light">✓ Solicitud recibida</p>
                  <p className="mt-2 font-display font-light">Si entras, te llega tu licencia a tu correo.</p>
                </div>
              ) : (
                <form
                  className="mt-7 flex flex-col gap-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="flex flex-col gap-3">
                    <span className="font-display text-base">Tu plan</span>
                    <BillingToggle value={billing} onChange={setBilling} />
                    <div className="grid grid-cols-3 gap-2">
                      {plans.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setPlan(p.id)}
                          className={`rounded-[12px] border border-foreground p-3 text-left transition-colors ${
                            plan === p.id ? "bg-ink text-primary-foreground" : "bg-background/60"
                          }`}
                        >
                          <p className="label-mono !text-xs">{p.name}</p>
                          <p className="mt-1 font-serif text-xl font-light">
                            US${billing === "mensual" ? p.monthly : p.yearly}
                            <span className="font-display text-xs opacity-70">/{billing === "mensual" ? "mes" : "año"}</span>
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                  <label className="flex flex-col gap-2 font-display text-base">
                    Tu email
                    <input required type="email" name="email" placeholder="tu@correo.cl" className={inputCls} />
                  </label>
                  <label className="flex flex-col gap-2 font-display text-base">
                    <span>Tu nombre <span className="opacity-60">(opcional)</span></span>
                    <input type="text" name="nombre" placeholder="Cómo te llamas" className={inputCls} />
                  </label>
                  <label className="flex flex-col gap-2 font-display text-base">
                    <span>Tu sitio WordPress <span className="opacity-60">(opcional)</span></span>
                    <input type="text" name="sitio" placeholder="misitio.cl" className={inputCls} />
                  </label>
                  <fieldset>
                    <legend className="font-display text-base">
                      ¿Con qué IA vas a usarlo? <span className="opacity-60">Marca las que uses</span>
                    </legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ais.map((a) => (
                        <label key={a} className="cursor-pointer">
                          <input type="checkbox" name="ia" value={a} className="peer sr-only" />
                          <span className="block rounded-full border border-foreground px-3 py-1 font-display text-sm font-light peer-checked:bg-ink peer-checked:text-primary-foreground">
                            {a}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <label className="flex items-start gap-3 font-display text-sm font-light">
                    <input required type="checkbox" className="mt-1" />
                    Acepto que guarden estos datos para gestionar mi acceso.
                  </label>
                  <button
                    type="submit"
                    className="h-[54px] w-full rounded-full bg-ink font-aleo text-[22px] font-extralight tracking-[-0.04em] text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Obtener MCP
                  </button>
                  <p className="font-display text-xs font-light opacity-70">
                    Usamos tu correo sólo para mandarte tu licencia y avisarte de versiones nuevas. Sin spam.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
