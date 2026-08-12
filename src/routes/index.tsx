import { createFileRoute } from "@tanstack/react-router";

import { CtaForm } from "@/components/landing/CtaForm";
import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import { MuchoMas } from "@/components/landing/MuchoMas";
import { Showcase } from "@/components/landing/Showcase";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SpeedBand } from "@/components/landing/SpeedBand";
import { Testimonials } from "@/components/landing/Testimonials";

const title = "Prisma — Administra tu WordPress completo solo con IA";
const description =
  "Prisma es el agente de IA que arregla bugs, gestiona plugins y edita el diseño de tu sitio WordPress en tiempo real por chat.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Showcase />
      <SpeedBand />
      <Features />
      <MuchoMas />
      <Testimonials />
      <CtaForm />
      <SiteFooter />
    </main>
  );
}
