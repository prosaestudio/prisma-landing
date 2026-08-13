import bgChica from "@/assets/bg-chica.png.asset.json";
import videoPrisma from "@/assets/video-prisma-mvp.mp4.asset.json";
import wordpress from "@/assets/wordpress-white.png.asset.json";
import { Reveal } from "@/components/landing/Reveal";

export function SpeedBand() {
  return (
    <section id="como-funciona" className="relative z-0 -mt-[28vh]">
      <div className="relative overflow-hidden">
        <img
          src={bgChica.url}
          alt="Persona editando su sitio WordPress con su laptop en un campo abierto"
          width={1657}
          height={1280}
          loading="lazy"
          className="h-[735px] w-full object-cover object-[20%_26%] lg:h-[980px] lg:object-[center_26%]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.45_0.06_235/0.3)_0%,oklch(0.45_0.06_235/0)_45%)]"
          aria-hidden
        />

        <div className="absolute inset-x-0 top-0 mx-auto max-w-[1440px] px-6 pt-[150px] lg:px-12">
          <img
            src={wordpress.url}
            alt="WordPress"
            width={420}
            height={100}
            loading="lazy"
            className="mx-auto mb-6 h-[49px] w-auto object-contain lg:hidden"
          />

          <Reveal as="h2" className="text-center font-serif text-[7.5vw] font-light leading-[0.92] tracking-[-0.06em] text-[oklch(1_0_0)] lg:text-[86px]">
            Más que un plugin
            <br />
            es editar tus sitios en <span className="font-normal">alta velocidad</span>
          </Reveal>

          <Reveal delay={150} className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[470px]">
              <p className="text-center font-mono text-[12px] font-light uppercase leading-[1.6] tracking-[-0.02em] text-[oklch(1_0_0)] lg:text-left lg:text-[15px]">
                Deja de luchar con el código, los errores de plugins y la maquetación. PRISMA es el
                agente de IA que arregla, diseña y optimiza tu sitio WordPress en tiempo real a
                través de conversación.
              </p>
              <a
                href="#demo"
                className="mx-auto mt-8 flex items-center justify-center rounded-full border border-[oklch(1_0_0)] px-9 py-2.5 font-serif text-[26px] font-light tracking-[-0.06em] text-[oklch(1_0_0)] transition-colors hover:bg-[oklch(1_0_0)] hover:text-foreground lg:mx-0 lg:inline-flex"
              >
                Descárgalo ya
              </a>
            </div>

            <img
              src={wordpress.url}
              alt="WordPress"
              width={420}
              height={100}
              loading="lazy"
              className="hidden h-[70px] w-auto object-contain lg:mt-4 lg:block lg:-translate-x-[15%]"
            />
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-[100px] max-w-[1440px] px-6 lg:-mt-[140px] lg:px-12">
        <div className="overflow-hidden rounded-[30px] bg-panel shadow-[0_30px_80px_-40px_oklch(0_0_0/0.5)]">
          <video
            src={videoPrisma.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
