import appPreview from "@/assets/app-preview.jpg";
import chatPreview from "@/assets/chat-preview.jpg";

export function Showcase() {
  return (
    <section className="mx-auto mt-28 grid max-w-[1440px] gap-8 px-6 lg:grid-cols-[688px_1fr] lg:px-12">
      <article className="relative overflow-hidden rounded-[30px] bg-panel">
        <img
          src={appPreview}
          alt="Panel de administración de WordPress editado por Prisma"
          width={1376}
          height={1008}
          loading="lazy"
          className="h-[500px] w-full object-cover"
        />
        <div className="absolute inset-x-10 bottom-24 rounded-[11px] bg-background/70 p-6 backdrop-blur-md">
          <h3 className="font-serif text-[34px] font-light leading-[0.9] tracking-[-0.06em]">
            Funciona con tus plugins y componentes favoritos
          </h3>
        </div>
        <div className="prompt-bar absolute inset-x-10 bottom-6 flex h-[61px] items-center px-5">
          <p className="font-serif text-lg font-light tracking-[-0.06em]">
            Modifica el logo del header....
          </p>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(218deg,oklch(0.968_0_0)_37%,oklch(0.875_0_0)_91%)] p-10">
        <h3 className="max-w-[360px] font-serif text-[51px] font-light leading-[0.88] tracking-[-0.06em]">
          Guarda y continua las conversaciones
        </h3>
        <img
          src={chatPreview}
          alt="Historial de conversaciones del agente Prisma"
          width={1376}
          height={544}
          loading="lazy"
          className="mt-10 w-full rounded-xl object-cover shadow-[0_8px_24px_0_oklch(0_0_0/0.12)]"
        />
      </article>
    </section>
  );
}