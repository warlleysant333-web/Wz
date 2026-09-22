import { Phone, MapPin } from "lucide-react"
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, LOCATION, INSTAGRAM_HANDLE, INSTAGRAM_LINK } from "@/lib/site"
import { WhatsappIcon } from "./whatsapp-icon"
import { InstagramIcon } from "./instagram-icon"
import { Reveal } from "./reveal"

export function Contact() {
  return (
    <section id="contato" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="overflow-hidden rounded-4xl border border-border bg-gradient-to-br from-brand-soft via-white to-white p-8 shadow-[0_30px_70px_-40px_rgba(11,42,92,0.5)] sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
              Quer saber qual equipamento está disponível?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Fale com nossa equipe e consulte disponibilidade, condições e informações sobre a locação.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-5 text-base font-semibold text-white shadow-[0_14px_34px_rgba(37,211,102,0.35)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <WhatsappIcon className="h-6 w-6" />
              Falar com a AZ Locações no WhatsApp
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 border-t border-border/70 pt-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Phone className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-brand-dark">{WHATSAPP_DISPLAY}</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-brand-dark">{LOCATION}</span>
            </div>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-center transition-colors hover:text-brand"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <InstagramIcon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-brand-dark">{INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
