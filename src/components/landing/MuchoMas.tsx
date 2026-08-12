import { Clock, GitCompareArrows, ShieldPlus } from "lucide-react";
import { Reveal, ScrollType } from "@/components/landing/Reveal";

const cards = [
  { title: ["Seguridad", "absoluta"], Icon: ShieldPlus },
  { title: ["Soporte", "24/7"], Icon: Clock },
  { title: ["Control de cambios"], Icon: GitCompareArrows },
];

export function MuchoMas() {
  return (
    <section className="mt-24 overflow-hidden">
      <Reveal as="h2" className="whitespace-nowrap px-6 font-serif text-[18vw] font-light leading-[0.88] tracking-[-0.06em] lg:px-12">
        Y mucho más
      </Reveal>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <ScrollType
          text="con todo el respaldo y la seguridad que tus sitios necesitan"
          className="mt-10 max-w-[720px] label-mono font-medium"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map(({ title, Icon }, i) => (
            <Reveal
              as="article"
              key={title.join(" ")}
              delay={i * 120}
              className="flex h-[243px] items-start justify-between rounded-[24px] bg-sand p-8"
            >
              <h3 className="font-aleo text-[37px] font-light leading-[1.14] tracking-[-0.06em]">
                {title.map((t) => (
                  <span key={t} className="block">
                    {t}
                  </span>
                ))}
              </h3>
              <Icon strokeWidth={1} className="size-14 shrink-0" aria-hidden />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}