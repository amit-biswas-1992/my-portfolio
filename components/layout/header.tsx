'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function Header(){
  const { theme, setTheme } = useTheme()
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="font-semibold">Amit Biswas</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/projects">Projects</Link>
          <Link href="/system-design">System Design</Link>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
          </Button>
          <a href="/Amit_Biswas_CV.pdf" className="hidden md:block"><Button size="sm">Download CV</Button></a>
        </div>
      </div>
    </header>
  )
}
