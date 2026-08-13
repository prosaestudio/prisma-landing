import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";

import ball from "@/assets/prisma-ball.png.asset.json";
import ballIcon from "@/assets/prisma-ball-6.png.asset.json";

type Msg = { role: "bot" | "user"; text: string };

const faqs: { q: string; a: string }[] = [
  {
    q: "¿Cómo funciona Prisma?",
    a: "Conectas tu sitio WordPress a Prisma y le hablas por chat: \"cambia el logo del header\", \"repara el error de la página Quiénes somos\", \"instala y configura este plugin\". Prisma entiende la instrucción, la ejecuta en tu sitio y te muestra el resultado en tiempo real.",
  },
  {
    q: "¿Necesito saber programar?",
    a: "No. Prisma escribe el PHP, CSS y HTML por ti. Si sabes programar, igual puedes revisar y ajustar cada cambio antes de publicarlo.",
  },
  {
    q: "¿Funciona con cualquier WordPress?",
    a: "Sí, funciona con instalaciones self-hosted de WordPress (5.6+), con cualquier tema y con la mayoría de plugins populares. También gestiona multisitio.",
  },
  {
    q: "¿Es seguro? ¿Puede romper mi sitio?",
    a: "Cada cambio queda versionado: puedes revertir con un clic. Prisma trabaja sobre respaldos y valida los cambios antes de aplicarlos en producción.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Estamos en fase de acceso temprano. Deja tus datos en el formulario \"Get a demo\" y te enviamos los planes y una demo personalizada sin costo.",
  },
  {
    q: "¿Cuánto tiempo toma implementarlo?",
    a: "Menos de 5 minutos: instalas el conector, autorizas el acceso y empiezas a pedirle cambios a Prisma.",
  },
  {
    q: "¿Qué tareas puede hacer por mí?",
    a: "Gestión universal de plugins y temas, reemplazo y gestión de assets, edición de diseño, corrección de errores, optimización de velocidad, configuración y vinculación de dominios.",
  },
  {
    q: "¿Puedo pedir una demo?",
    a: "Claro. Baja hasta la sección \"Get a demo\" y completa el formulario: te contactamos el mismo día.",
  },
];

export function FaqBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "¡Hola! Soy el asistente de Prisma 👋 Elige una pregunta y te respondo al instante.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const ask = (item: { q: string; a: string }) => {
    setMsgs((prev) => [...prev, { role: "user", text: item.q }]);
    window.setTimeout(() => {
      setMsgs((prev) => [...prev, { role: "bot", text: item.a }]);
    }, 450);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3">
      {open && (
        <div className="animate-scale-in w-[min(92vw,380px)] overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <img src={ball.url} alt="" className="h-9 w-9 rounded-full" />
            <div className="min-w-0">
              <p className="text-sm font-medium leading-tight">Asistente Prisma</p>
              <p className="text-xs text-muted-foreground">Preguntas frecuentes</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="ml-auto rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X size={16} />
            </button>
          </div>

          <div ref={scrollRef} className="max-h-[46vh] space-y-3 overflow-y-auto px-4 py-4">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-md bg-foreground px-3.5 py-2 text-sm text-background"
                      : "max-w-[90%] text-sm leading-relaxed text-foreground"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border bg-muted/40 px-4 py-3">
            <p className="mb-2 text-[11px] uppercase tracking-wider text-muted-foreground">
              Preguntas frecuentes
            </p>
            <div className="flex max-h-[26vh] flex-wrap gap-2 overflow-y-auto">
              {faqs.map((f) => (
                <button
                  key={f.q}
                  type="button"
                  onClick={() => ask(f)}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs transition-colors hover:bg-foreground hover:text-background"
                >
                  {f.q}
                </button>
              ))}
            </div>
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm text-background transition-opacity hover:opacity-90"
            >
              <Send size={14} /> Hablar con el equipo
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente de preguntas frecuentes"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-xl transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}