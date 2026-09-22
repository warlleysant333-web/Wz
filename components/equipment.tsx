import Image from "next/image"
import { ArrowUpRight, Plus } from "lucide-react"
import { equipments, equipmentInterestLink, WHATSAPP_LINK } from "@/lib/site"
import { Reveal } from "./reveal"

export function Equipment() {
  return (
    <section id="equipamentos" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Nossos equipamentos</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
            Tecnologias disponíveis para locação
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conheça alguns dos equipamentos estéticos que você pode alugar com a AZ Locações.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {equipments.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 80}
              as="article"
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_45px_-30px_rgba(11,42,92,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_55px_-30px_rgba(11,42,92,0.5)] md:flex-row"
            >
              <div className="relative flex w-full shrink-0 items-center justify-center overflow-hidden bg-white p-4 md:w-52">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`Equipamento estético ${item.name} disponível para locação`}
                  width={320}
                  height={320}
                  className="h-56 w-full object-contain transition-transform duration-500 group-hover:scale-105 md:h-full"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold tracking-tight text-brand-dark">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                {item.highlight && (
                  <p className="mt-3 rounded-xl bg-brand-soft px-3 py-2 text-sm font-medium text-brand">
                    {item.highlight}
                  </p>
                )}
                <a
                  href={equipmentInterestLink(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-brand transition-colors group-hover:gap-3 hover:text-brand-dark"
                >
                  Tenho interesse
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={equipments.length * 80}
            as="article"
            className="flex flex-col items-start justify-center rounded-3xl border border-dashed border-brand/30 bg-white/60 p-8 sm:col-span-2"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <Plus className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-brand-dark">
              Outros equipamentos disponíveis
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Trabalhamos com outras tecnologias estéticas de alta performance. Fale com a nossa equipe para conhecer
              todas as opções disponíveis para locação.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Consultar equipamentos
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
