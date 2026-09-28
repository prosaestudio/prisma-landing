import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import bg from "@/assets/bg-prisma-02.jpg.asset.json";
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
  "h-[60px] w-full rounded-[12px] border border-foreground bg-transparent px-5 font-display text-[20px] font-light tracking-[-0.04em] placeholder:text-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring";

function Page() {
  const s = Route.useSearch();
  const [plan, setPlan] = useState<PlanId>(s.plan ?? "intermedio");
  const [billing, setBilling] = useState<Billing>(s.billing ?? "mensual");
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <section className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[24px] px-8 py-20 lg:px-20 lg:py-28">
          <img src={bg.url} alt="" aria-hidden className="hero-drift absolute inset-0 -z-10 h-full w-full object-cover" />
          <Reveal as="p" className="label-mono">Prisma · MCP para WordPress</Reveal>
          <Reveal as="h1" delay={100} className="mt-4 max-w-[800px] font-serif text-[11vw] font-light leading-[0.95] tracking-[-0.04em] lg:text-[80px]">
            Administra tus sitios WordPress con la IA
          </Reveal>
          <Reveal as="p" delay={200} className="mt-6 max-w-[620px] font-display text-lg font-light lg:text-xl">
            Prisma expone tareas concretas de WordPress como herramientas MCP, con permisos, alcance por token y auditoría. Tu IA crea, corrige y publica contenido sin que le entregues acceso general al sitio.
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-x-12 gap-y-10 px-6 py-20 md:grid-cols-2 lg:px-12">
        {points.map(([t, d], i) => (
          <Reveal key={t} delay={(i % 2) * 90} className="border-t border-foreground pt-6">
            <p className="label-mono opacity-60">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 font-serif text-3xl font-light tracking-[-0.03em]">{t}</h3>
            <p className="mt-3 font-display text-base font-light opacity-80">{d}</p>
          </Reveal>
        ))}
      </section>

      <section id="demo" className="relative z-10 rounded-t-[100px] bg-form-sand px-6 pb-16 pt-16 lg:rounded-t-[150px] lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <Reveal as="h2" className="text-center font-serif text-[8vw] font-light leading-[0.95] tracking-[-0.04em] lg:text-[54px]">
            Pedir acceso
          </Reveal>
          <Reveal as="p" delay={80} className="mx-auto mt-4 max-w-[600px] text-center font-display text-base font-light opacity-80">
            Revisamos cada solicitud y te llega tu licencia con el instalador y las instrucciones. Requiere WordPress 6.9+ y PHP 8.1+.
          </Reveal>

          {sent ? (
            <div className="mt-10 rounded-[20px] border border-foreground p-10 text-center">
              <p className="font-serif text-4xl font-light">✓ Solicitud recibida</p>
              <p className="mt-3 font-display font-light">Si entras, te llega tu licencia a tu correo.</p>
            </div>
          ) : (
            <form
              className="mt-10 flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <BillingToggle value={billing} onChange={setBilling} />
                <div className="grid w-full gap-3 sm:grid-cols-3">
                  {plans.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlan(p.id)}
                      className={`rounded-[14px] border border-foreground p-5 text-left transition-colors ${
                        plan === p.id ? "bg-ink text-primary-foreground" : "bg-background/50"
                      }`}
                    >
                      <p className="label-mono">{p.name}</p>
                      <p className="mt-2 font-serif text-3xl font-light">
                        US${billing === "mensual" ? p.monthly : p.yearly}
                        <span className="font-display text-sm opacity-70">/{billing === "mensual" ? "mes" : "año"}</span>
                      </p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required type="email" name="email" placeholder="Tu email" className={inputCls} />
                <input type="text" name="nombre" placeholder="Tu nombre (opcional)" className={inputCls} />
              </div>
              <input type="url" name="sitio" placeholder="Tu sitio WordPress (opcional)" className={inputCls} />
              <fieldset>
                <legend className="font-display text-lg font-light">¿Con qué IA vas a usarlo?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ais.map((a) => (
                    <label key={a} className="cursor-pointer">
                      <input type="checkbox" name="ia" value={a} className="peer sr-only" />
                      <span className="block rounded-full border border-foreground px-4 py-1.5 font-display text-sm font-light peer-checked:bg-ink peer-checked:text-primary-foreground">
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
                className="h-[54px] self-end rounded-full bg-primary px-8 font-aleo text-[22px] font-extralight tracking-[-0.04em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Obtener MCP
              </button>
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
