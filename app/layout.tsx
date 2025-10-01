import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amit Biswas – Full‑Stack & System Architect',
  description: 'Node.js/NestJS, Next.js, Golang, PostgreSQL, AWS, RAG/LLM integrations',
  openGraph: { images: ['/og.png'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main className="container mx-auto px-4 py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
