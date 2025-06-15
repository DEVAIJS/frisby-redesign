//src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frisby - Más que pollo, somos familia | 50+ años creando momentos',
  description: 'Descubre la historia de resistencia de Frisby, el restaurante que sobrevivió crisis y se convirtió en el corazón de las familias colombianas durante más de 50 años.',
  keywords: 'Frisby, pollo, familia, restaurante, Colombia, tradición, momentos, generaciones',
  authors: [{ name: 'Frisby Colombia' }],
  creator: 'Frisby',
  publisher: 'Frisby',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Frisby - Más que pollo, somos familia',
    description: 'La historia de resistencia que convirtió a Frisby en el corazón de las familias colombianas',
    url: 'https://frisby.com.co',
    siteName: 'Frisby',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Frisby - Historia de familia y tradición',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frisby - Más que pollo, somos familia',
    description: 'La historia de resistencia que convirtió a Frisby en el corazón de las familias colombianas',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/frisbyfav.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/frisbyfav.png" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="msapplication-TileColor" content="#ef4444" />
      </head>
      <body className={`${inter.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}