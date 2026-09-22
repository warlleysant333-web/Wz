import { BadgeCheck, HeartHandshake, Gem, Rocket } from "lucide-react"
import { Reveal } from "./reveal"

const differentials = [
  {
    icon: BadgeCheck,
    title: "Sem burocracia",
    text: "Processo pensado para ser simples e direto.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento próximo",
    text: "Nossa equipe está disponível para orientar você durante o processo.",
  },
  {
    icon: Gem,
    title: "Tecnologias premium",
    text: "Equipamentos selecionados para profissionais da estética.",
  },
  {
    icon: Rocket,
    title: "Praticidade",
    text: "Mais facilidade para levar novas tecnologias para seus atendimentos.",
  },
]

export function Differentials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Nossos diferenciais</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
            O que faz a AZ Locações diferente
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-white to-secondary p-7 transition-all hover:-translate-y-1 hover:shadow-[0_25px_50px_-30px_rgba(11,42,92,0.5)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-[0_10px_24px_rgba(37,99,235,0.3)]">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-brand-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
