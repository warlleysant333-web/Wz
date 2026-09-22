import { ArrowRight } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/site"
import { Reveal } from "./reveal"

export function CtaFinal() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="relative overflow-hidden rounded-4xl bg-brand-dark px-6 py-16 text-center text-white sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Leve mais tecnologia para os seus atendimentos.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Tenha acesso a equipamentos estéticos de alta tecnologia sem precisar investir na compra. Consulte a AZ
              Locações e encontre a tecnologia ideal para o seu negócio.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-brand-foreground shadow-[0_14px_34px_rgba(37,99,235,0.45)] transition-transform hover:-translate-y-0.5"
            >
              Falar com a AZ Locações
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
