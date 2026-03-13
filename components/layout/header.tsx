'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function Header(){
  const { theme, setTheme } = useTheme()
  return (
    <header className="sticky top-0 z-50 glass-effect border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-xl font-bold gradient-text hover:opacity-80 transition">Amit Biswas</Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/projects" className="hover:text-cyan-500 transition">Projects</Link>
          <Link href="/system-design" className="hover:text-cyan-500 transition">System Design</Link>
          <a href="#skills" className="hover:text-cyan-500 transition">Skills</a>
          <a href="#contact" className="hover:text-cyan-500 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" aria-label="toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
          </Button>
          <a href="/Amit_Biswas_CV.pdf" className="hidden md:block"><Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg transition-all" size="sm">Download CV</Button></a>
        </div>
      </div>
    </header>
  )
}
