'use client'
import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '../components/layout/Nav'
import Footer from '@/components/layout/Footer'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: "PORSENIGAMA 2023",
//   description: "Porsenigama",
// };
import CustomFont from '@next/font/local'
import { usePathname } from 'next/navigation'

const rockwells = localFont({
  src: [
    {
      path: '../../public/fonts/Rockwell-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Rockwell-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-rockwell',
})

const masterofbreaks = localFont({
  src: [
    {
      path: '../../public/fonts/master_of_break.ttf',
      weight: '400',
    },
  ],
  variable: '--font-masterofbreak',
})

export async function generateMetadata({ params }) {
  return {
    title: 'PORSENIGAMA 2023',
  }
}

export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${rockwells.variable} ${masterofbreaks.variable}`}
    >
      <head>
        <link rel="icon" href="/2023/porsenigama/images/favicon.ico" />
      </head>
      <body>
        <div className="flex justify-center">{pathname !== '/landing/' ? <Nav /> : ''}</div>
        {children}
      </body>
    </html>
  )
}
