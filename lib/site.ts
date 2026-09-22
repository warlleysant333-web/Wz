export const WHATSAPP_LINK = "https://wa.link/d25x8s"
export const WHATSAPP_NUMBER = "5511949829602"
export const WHATSAPP_DISPLAY = "+55 11 94982-9602"
export const INSTAGRAM_HANDLE = "@az.locacoes"
export const INSTAGRAM_LINK = "https://www.instagram.com/az.locacoes/"
export const LOCATION = "São Paulo, SP — Brasil"

export function whatsappMessage(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function equipmentInterestLink(name: string) {
  return whatsappMessage(
    `Olá, AZ Locações! Tenho interesse em alugar o equipamento ${name}. Gostaria de saber disponibilidade e condições.`,
  )
}

export type Equipment = {
  name: string
  image: string
  text: string
  highlight?: string
}

export const equipments: Equipment[] = [
  {
    name: "ULTRAFORMER III",
    image: "/images/eq-ultraformer.jpg",
    text: "Tecnologia de alta performance para tratamentos estéticos. Disponível para locação.",
    highlight: "Resultados reais para suas clientes sem investimento alto na compra.",
  },
  {
    name: "HIPRO",
    image: "/images/eq-hipro.jpg",
    text: "O poder do ultrassom micro e macrofocado agora disponível para locação.",
    highlight: "Tecnologia para protocolos de lifting e tratamentos estéticos.",
  },
  {
    name: "CRIODERMIS 2.0",
    image: "/images/eq-criodermis.jpg",
    text: "Tecnologia, desempenho e praticidade para o seu negócio de estética.",
  },
  {
    name: "SOPRANO ICE PLATINUM",
    image: "/images/eq-soprano-ice-platinum.jpg",
    text: "Tecnologia premium disponível para locação, pensada para elevar o nível dos seus atendimentos.",
    highlight: "Alta performance para protocolos estéticos profissionais.",
  },
  {
    name: "SOPRANO ICE",
    image: "/images/eq-soprano-ice.jpg",
    text: "Tecnologia estética de alta performance disponível para locação.",
  },
  {
    name: "SOPRANO XL",
    image: "/images/eq-soprano-xl.jpg",
    text: "Tecnologia profissional para atendimentos estéticos, disponível para locação.",
  },
  {
    name: "LIGHTSHEER DUET LUMEN",
    image: "/images/eq-lightsheer-duet.jpg",
    text: "Equipamento profissional de alta tecnologia disponível para locação.",
    highlight: "Tecnologia premium para ampliar o seu portfólio de serviços.",
  },
  {
    name: "LIGHTSHEER ET",
    image: "/images/eq-lightsheer-et.jpg",
    text: "Tecnologia profissional disponível para locação, com praticidade e segurança.",
  },
  {
    name: "LAVIEEN",
    image: "/images/eq-lavieen.jpg",
    text: "Tecnologia estética de alta performance disponível para locação.",
  },
  {
    name: "HEGON",
    image: "/images/eq-hegon.jpg",
    text: "Tecnologia, desempenho e praticidade para o seu negócio de estética.",
  },
  {
    name: "INKIE",
    image: "/images/eq-inkie.jpg",
    text: "Equipamento estético de alta tecnologia disponível para locação.",
  },
]

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]
