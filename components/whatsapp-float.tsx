import { WHATSAPP_LINK } from "@/lib/site"
import { WhatsappIcon } from "./whatsapp-icon"

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a AZ Locações no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform hover:-translate-y-0.5 md:bottom-7 md:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <WhatsappIcon className="h-7 w-7" />
      <span className="sr-only">Falar no WhatsApp</span>
    </a>
  )
}
