import Image from "next/image"
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/site"
import { WhatsappIcon } from "./whatsapp-icon"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-28 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-soft blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            Locação de tecnologias premium | Sem burocracia
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Tecnologia de alta performance para transformar seus{" "}
            <span className="text-brand">atendimentos.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Na AZ Locações você encontra equipamentos estéticos de alta tecnologia para locação, com praticidade,
            segurança e atendimento próximo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#equipamentos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[0_12px_30px_rgba(37,99,235,0.3)] transition-transform hover:-translate-y-0.5"
            >
              Consultar equipamentos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-base font-semibold text-brand-dark transition-colors hover:border-brand hover:text-brand"
            >
              <WhatsappIcon className="h-5 w-5 text-[#25D366]" />
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" />
              Atendimento próximo
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand" />
              Tecnologias premium
            </span>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-brand-soft to-white p-3 shadow-[0_30px_60px_-25px_rgba(11,42,92,0.4)]">
            <Image
              src="/images/hero-equipment.png"
              alt="Equipamento estético de alta tecnologia disponível para locação na AZ Locações"
              width={720}
              height={720}
              priority
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:block">
            <p className="font-display text-2xl font-bold text-brand">Premium</p>
            <p className="text-xs font-medium text-muted-foreground">Tecnologia estética de alto nível</p>
          </div>
        </div>
      </div>
    </section>
  )
}
