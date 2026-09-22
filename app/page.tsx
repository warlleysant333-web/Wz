import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Equipment } from "@/components/equipment"
import { WhyRent } from "@/components/why-rent"
import { HowItWorks } from "@/components/how-it-works"
import { ForWhom } from "@/components/for-whom"
import { Differentials } from "@/components/differentials"
import { InstagramSection } from "@/components/instagram-section"
import { Contact } from "@/components/contact"
import { Faq } from "@/components/faq"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Equipment />
        <WhyRent />
        <HowItWorks />
        <ForWhom />
        <Differentials />
        <InstagramSection />
        <Contact />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
