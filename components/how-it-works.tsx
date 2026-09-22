import { ArrowRight } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/site"
import { Reveal } from "./reveal"

const steps = [
  {
    number: "01",
    title: "Escolha o equipamento",
    text: "Conheça as tecnologias disponíveis para locação.",
  },
  {
    number: "02",
    title: "Entre em contato",
    text: "Fale com a equipe da AZ Locações pelo WhatsApp.",
  },
  {
    number: "03",
    title: "Consulte disponibilidade",
    text: "Verifique datas, condições e detalhes da locação.",
  },
  {
    number: "04",
    title: "Utilize a tecnologia",
    text: "Tenha o equipamento para realizar seus atendimentos.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-brand-dark py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-soft">Como funciona</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Um processo simples do início ao fim
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 90}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-white/25"
            >
              <span className="font-display text-4xl font-bold text-brand-soft/40">{step.number}</span>
              <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-brand-foreground shadow-[0_12px_30px_rgba(37,99,235,0.4)] transition-transform hover:-translate-y-0.5"
          >
            Consultar disponibilidade
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
