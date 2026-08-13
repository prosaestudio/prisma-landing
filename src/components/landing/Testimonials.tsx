import { Reveal } from "@/components/landing/Reveal";

const quotes = [
  {
    quote:
      "“Antes perdíamos mañanas enteras buscando qué plugin hacía conflicto tras una actualización. Ahora solo le escribo a PRISMA: 'Ajusta la tienda y soluciona el checkout' y lo resuelve en segundos. Es literalmente tener un dev senior en el chat.”",
    name: "Carolina Méndez,",
    role: "Directora de Agencia Digital en PixelStudio",
  },
  {
    quote:
      "“Pensé que para cambiar el layout de mis plantillas o reemplazar recursos tendría que contratar un maquetador. Le pido los cambios a PRISMA por texto y edita todo sin romper el CSS. Cambió por completo cómo gestionamos nuestros clientes.”",
    name: "Tomás Arancibia,",
    role: "Fundador de E-comLabs",
  },
  {
    quote:
      "“Lo que más me da paz es la seguridad. El agente corrige bugs complejos en producción y si algo no me gusta, lo vuelvo atrás en un clic. Pasamos de demorarnos días en arreglos técnicos a solucionarlo en 2 minutos.”",
    name: "Valeria Delgado,",
    role: "Product Manager en ScaleMedia",
  },
  {
    quote:
      "“Migrar mi dominio y configurar el SSL me tomaba horas con tutoriales. Con PRISMA solo escribí 'conecta mi dominio .cl' y en minutos todo estaba listo, incluyendo el certificado.”",
    name: "Andrés Fuentes,",
    role: "CEO en OrigenLab",
  },
  {
    quote:
      "“Mis editores no tocaban código por miedo a romper algo. Ahora hacen ajustes de diseño, cambian imágenes y corrigen textos directamente desde el chat. La productividad del equipo se disparó.”",
    name: "Daniela Rojas,",
    role: "Editora Jefe en Revista Nómada",
  },
  {
    quote:
      "“El soporte de mi hosting me decía que todo estaba bien, pero mi sitio seguía lento. PRISMA detectó el problema en el primer mensaje, optimizó los scripts y ahora carga en menos de un segundo.”",
    name: "Felipe Herrera,",
    role: "Growth Lead en FitClub Pro",
  },
];

export function Testimonials() {
  return (
    <section id="experiencias" className="mt-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {quotes.map((q, i) => (
          <Reveal
            as="blockquote"
            key={q.name}
            delay={Math.min(i, 2) * 120}
            className="flex flex-col justify-between rounded-[24px] border border-foreground bg-background px-8 py-9 font-sans text-[18px] font-light leading-[1.08] lg:text-[20px]"
          >
            <p>{q.quote}</p>
            <footer className="mt-8 font-sans text-[13px] leading-[1.3] not-italic">
              <span className="font-medium">— {q.name}</span>
              <br />
              <span className="text-muted-foreground">{q.role}</span>
            </footer>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
