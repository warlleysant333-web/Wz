import Image from "next/image"
import { Check } from "lucide-react"
import { Reveal } from "./reveal"

const highlights = ["Tecnologia premium", "Atendimento próximo", "Locação sem burocracia"]

export function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_rgba(11,42,92,0.35)]">
              <Image
                src="/images/about-equipment.png"
                alt="Ambiente com equipamentos estéticos de alta tecnologia da AZ Locações"
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-3xl bg-brand-soft"
            />
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={100}>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Sobre a AZ Locações</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
            Tecnologia que chega até o seu negócio.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A AZ Locações nasceu para aproximar profissionais da estética de tecnologias de alta performance. Sabemos
            que investir em equipamentos profissionais pode representar um grande investimento, por isso trabalhamos com
            locação de tecnologias premium, oferecendo mais praticidade para quem deseja ampliar seus serviços e
            proporcionar novas experiências aos seus clientes.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Nosso objetivo é tornar o acesso à tecnologia estética mais simples, profissional e sem burocracia.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium text-brand-dark">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
