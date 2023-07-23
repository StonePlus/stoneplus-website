import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StonePlus - Concrete Design',
  description: 'Indústria especializada em Cimentícios, Bordas de Piscina, Revestimentos e Pedras Naturais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
