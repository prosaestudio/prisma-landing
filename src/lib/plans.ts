export type Billing = "mensual" | "anual";

export const plans = [
  {
    id: "basico",
    name: "Básico",
    monthly: 9,
    yearly: 90,
    desc: "Para tu primer sitio WordPress.",
    features: ["1 sitio WordPress", "Edición de contenido por chat", "Corrección de textos y bugs simples", "Soporte por e-mail"],
  },
  {
    id: "intermedio",
    name: "Intermedio",
    monthly: 19,
    yearly: 190,
    desc: "Para freelancers y pymes.",
    featured: true,
    features: ["Hasta 5 sitios", "Gestión de plugins y temas", "Elementor, Divi y WPBakery", "WooCommerce y SEO", "Soporte prioritario"],
  },
  {
    id: "full",
    name: "Full",
    monthly: 39,
    yearly: 390,
    desc: "Para agencias sin límites.",
    features: ["Sitios ilimitados", "Todas las herramientas MCP", "Campos ACF y multi-cliente IA", "Auditoría y permisos por token", "Soporte dedicado"],
  },
] as const;

export type PlanId = (typeof plans)[number]["id"];
