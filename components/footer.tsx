import Image from "next/image"
import { Phone, MapPin } from "lucide-react"
import {
  WHATSAPP_LINK,
  WHATSAPP_DISPLAY,
  INSTAGRAM_LINK,
  INSTAGRAM_HANDLE,
  LOCATION,
  navLinks,
} from "@/lib/site"
import { WhatsappIcon } from "./whatsapp-icon"
import { InstagramIcon } from "./instagram-icon"

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white/10">
                <Image src="/images/az-logo.png" alt="Logo AZ Locações" width={44} height={44} className="object-cover" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">AZ Locações</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Locação de tecnologias premium | Sem burocracia
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-brand-soft" />
              {LOCATION}
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">Navegação</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">Contato</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
                  Falar no WhatsApp
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 text-brand-soft" />
                {WHATSAPP_DISPLAY}
              </li>
              <li>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4 text-brand-soft" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2026 AZ Locações. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
