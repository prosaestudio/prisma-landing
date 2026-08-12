const quotes = [
  "“Antes perdíamos mañanas enteras buscando qué plugin hacía conflicto tras una actualización. Ahora solo le escribo a PRISMA: 'Ajusta la tienda y soluciona el checkout' y lo resuelve en segundos. Es literalmente tener un dev senior en el chat.”",
  "“Pensé que para cambiar el layout de mis plantillas o reemplazar recursos tendría que contratar un maquetador. Le pido los cambios a PRISMA por texto y edita todo sin romper el CSS. Cambió por completo cómo gestionamos nuestros clientes.”",
  "“Lo que más me da paz es la seguridad. El agente corrige bugs complejos en producción y si algo no me gusta, lo vuelvo atrás en un clic. Pasamos de demorarnos días en arreglos técnicos a solucionarlo en 2 minutos.”",
];

export function Testimonials() {
  return (
    <section className="mx-auto mt-28 grid max-w-[1440px] gap-6 px-6 md:grid-cols-3 lg:px-12">
      {quotes.map((q) => (
        <blockquote
          key={q.slice(0, 24)}
          className="rounded-[27px] border border-foreground bg-background px-12 py-14 font-sans text-[26px] font-light leading-[1.05]"
        >
          {q}
        </blockquote>
      ))}
    </section>
  );
}