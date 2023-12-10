import type { Metadata } from 'next'
import { Atkinson_Hyperlegible } from 'next/font/google'
import './globals.css'

const a_h = Atkinson_Hyperlegible({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'gather here.',
  description: 'A social network for forming local friendship groups based on mutual interests',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={a_h.className}>{children}</body>
    </html>
  )
}
