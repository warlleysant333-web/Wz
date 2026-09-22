import { Building2, UserRound, Sparkles, Smile, Activity, LayoutGrid, FlaskConical } from "lucide-react"
import { Reveal } from "./reveal"

const audiences = [
  { icon: Building2, label: "Clínicas de estética" },
  { icon: UserRound, label: "Profissionais de estética" },
  { icon: Sparkles, label: "Esteticistas" },
  { icon: Smile, label: "Tratamentos faciais" },
  { icon: Activity, label: "Tratamentos corporais" },
  { icon: LayoutGrid, label: "Negócios que querem ampliar o portfólio" },
  { icon: FlaskConical, label: "Quem quer testar antes de comprar" },
]

export function ForWhom() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Para quem é?</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
            Tecnologia para profissionais que querem ir além.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Se você busca oferecer novas tecnologias aos seus clientes sem precisar investir imediatamente na compra de
            um equipamento, a locação pode ser uma alternativa prática para o seu negócio.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, i) => (
            <Reveal
              key={audience.label}
              delay={i * 60}
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand/30"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <audience.icon className="h-5 w-5" />
              </span>
              <span className="font-medium text-brand-dark">{audience.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
