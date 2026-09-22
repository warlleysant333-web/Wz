import Image from "next/image"
import { INSTAGRAM_LINK, INSTAGRAM_HANDLE } from "@/lib/site"
import { Reveal } from "./reveal"
import { InstagramIcon } from "./instagram-icon"

const feed = [
  "/images/feed-1.png",
  "/images/feed-2.png",
  "/images/feed-3.png",
  "/images/feed-4.png",
]

export function InstagramSection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            <InstagramIcon className="h-4 w-4" />
            {INSTAGRAM_HANDLE}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
            Acompanhe a AZ Locações
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Veja nossos equipamentos, novidades, tecnologias disponíveis e conteúdos para profissionais da estética.
          </p>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-7 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.3)] transition-transform hover:-translate-y-0.5"
          >
            <InstagramIcon className="h-5 w-5" />
            Conhecer nosso Instagram
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {feed.map((src, i) => (
              <a
                key={src}
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border"
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Publicação ${i + 1} do Instagram da AZ Locações`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-brand-dark/0 text-white opacity-0 transition-all duration-300 group-hover:bg-brand-dark/40 group-hover:opacity-100">
                  <InstagramIcon className="h-7 w-7" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
