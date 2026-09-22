"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/site"
import { Reveal } from "./reveal"

const faqs = [
  {
    q: "Quais equipamentos estão disponíveis para locação?",
    a: "Trabalhamos com equipamentos estéticos de alta performance, como Ultraformer III, Hipro, Criodermis, Lavieen e outras tecnologias. Para conhecer todas as opções disponíveis no momento, fale com a nossa equipe pelo WhatsApp.",
  },
  {
    q: "Como faço para consultar a disponibilidade?",
    a: "É simples: entre em contato com a AZ Locações pelo WhatsApp e informe qual equipamento você procura. Verificamos as datas e condições para você.",
  },
  {
    q: "Como funciona a locação?",
    a: "Você escolhe o equipamento desejado, fala com a nossa equipe, consulta a disponibilidade e utiliza a tecnologia nos seus atendimentos. Um processo pensado para ser simples e sem burocracia.",
  },
  {
    q: "Quais são as condições para alugar?",
    a: "As condições podem variar de acordo com o equipamento e o período de locação. Fale com a nossa equipe pelo WhatsApp para receber todas as informações.",
  },
  {
    q: "Posso solicitar um equipamento específico?",
    a: "Sim. Se você procura uma tecnologia específica, entre em contato conosco pelo WhatsApp para verificarmos a disponibilidade.",
  },
  {
    q: "Como entro em contato com a AZ Locações?",
    a: "Você pode falar diretamente com a nossa equipe pelo WhatsApp ou pelo nosso Instagram @az.locacoes.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Perguntas frequentes</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
            Tire suas dúvidas
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i * 50}>
                <div className="overflow-hidden rounded-2xl border border-border bg-white">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-brand-dark">{faq.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Ainda com dúvidas?{" "}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline-offset-4 hover:underline"
            >
              Fale com a nossa equipe no WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
