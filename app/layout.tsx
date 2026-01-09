import './global.css'
import Providers from './providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onboarding',
  description: 'Onboarding page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}