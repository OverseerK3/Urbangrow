import { Young_Serif as SansSerif, ADLaM_Display as Display } from 'next/font/google'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const sansSerif = SansSerif({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const display = Display({ 
  subsets: ['latin'],
  variable: '--font-display',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      sansSerif.variable,
      display.variable,
      'font-sans'
    )}>
      <body>{children}</body>
    </html>
  )
}

