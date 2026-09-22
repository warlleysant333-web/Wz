import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://azlocacoes.com.br'),
  title: 'AZ Locações | Locação de Equipamentos Estéticos',
  description:
    'Locação de equipamentos estéticos e tecnologias premium em São Paulo. Consulte a AZ Locações e encontre a tecnologia ideal para seus atendimentos.',
  generator: 'v0.app',
  keywords: [
    'locação de equipamentos estéticos',
    'aluguel de aparelhos estéticos',
    'locação de equipamentos de estética',
    'aluguel de equipamentos estéticos em São Paulo',
    'locação de Ultraformer',
    'locação de equipamentos para clínica de estética',
    'AZ Locações',
  ],
  authors: [{ name: 'AZ Locações' }],
  openGraph: {
    title: 'AZ Locações | Locação de Equipamentos Estéticos',
    description:
      'Locação de equipamentos estéticos e tecnologias premium em São Paulo. Consulte a AZ Locações e encontre a tecnologia ideal para seus atendimentos.',
    url: 'https://azlocacoes.com.br',
    siteName: 'AZ Locações',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b2a5c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
