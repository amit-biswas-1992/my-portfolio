import { Button } from '@/components/ui/button'
import { SkillsGrid } from '@/components/shared/skills-grid'
import { ArrowRight, Sparkles, Code2, Zap } from 'lucide-react'

export default function HomePage(){
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-effect border-cyan-500/20">
            <Sparkles size={16} className="text-cyan-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mt-8 animate-slide-up leading-tight">
            <span className="gradient-text">Scaling</span>
            <br />
            <span className="text-foreground">Systems That Matter</span>
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full-stack engineer & system architect. 10+ years crafting scalable SaaS, EdTech & Finance platforms. Node.js, Go, Next.js, PostgreSQL, AWS & modern AI/LLM integrations.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a href="/projects" className="group">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-2xl transition-all transform hover:scale-105 px-10 py-6 text-lg h-auto">
                View Work
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="px-10 py-6 text-lg h-auto hover:bg-cyan-50/50 dark:hover:bg-cyan-950/20 border-cyan-500/30">
                Let's Talk
              </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-cyan-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl backdrop-blur-xl border-cyan-500/10 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Code2 size={24} className="text-cyan-500" />
                </div>
                <div className="text-4xl font-bold gradient-text">100+</div>
              </div>
              <p className="text-muted-foreground">Systems Architected</p>
            </div>
            <div className="glass-effect p-8 rounded-2xl backdrop-blur-xl border-cyan-500/10 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Zap size={24} className="text-cyan-500" />
                </div>
                <div className="text-4xl font-bold gradient-text">10+</div>
              </div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="glass-effect p-8 rounded-2xl backdrop-blur-xl border-cyan-500/10 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Sparkles size={24} className="text-cyan-500" />
                </div>
                <div className="text-4xl font-bold gradient-text">∞</div>
              </div>
              <p className="text-muted-foreground">Continuous Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full glass-effect border-cyan-500/20">
              <Sparkles size={16} className="text-cyan-500" />
              <span className="text-sm font-semibold">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="gradient-text">Technologies I Master</span>
            </h2>
            <p className="text-lg text-muted-foreground">From backend architecture to modern frontend frameworks, AI integrations to cloud infrastructure.</p>
          </div>
          <SkillsGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="glass-effect rounded-2xl p-12 md:p-16 backdrop-blur-xl border-cyan-500/10 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-black mb-6 gradient-text">Ready to build something great?</h2>
            <p className="text-lg text-muted-foreground mb-8">Let's discuss how I can help scale your platform or solve your toughest technical challenges.</p>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-2xl transition-all transform hover:scale-105 px-10 py-6 text-lg h-auto">
              Get in touch
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
