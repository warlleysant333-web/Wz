import { Wallet, Layers, Cpu, Zap, Shuffle } from "lucide-react"
import { Reveal } from "./reveal"

const reasons = [
  {
    icon: Wallet,
    title: "Menor investimento inicial",
    text: "Evite o alto custo de comprar equipamentos profissionais.",
  },
  {
    icon: Layers,
    title: "Mais possibilidades para seus atendimentos",
    text: "Amplie os tratamentos e tecnologias que você pode oferecer aos seus clientes.",
  },
  {
    icon: Cpu,
    title: "Tecnologia profissional",
    text: "Tenha acesso a equipamentos de alta tecnologia através da locação.",
  },
  {
    icon: Zap,
    title: "Mais praticidade",
    text: "Um processo simples, direto e sem burocracia.",
  },
  {
    icon: Shuffle,
    title: "Mais flexibilidade",
    text: "Escolha a tecnologia de acordo com a necessidade do seu negócio.",
  },
]

export function WhyRent() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Por que alugar?</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
            Tenha acesso à tecnologia sem precisar comprar o equipamento.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={i * 70}
              className="group rounded-3xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_25px_50px_-30px_rgba(11,42,92,0.5)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <reason.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-brand-dark">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
