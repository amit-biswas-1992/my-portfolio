import { Button } from '@/components/ui/button'
import { SkillsGrid } from '@/components/shared/skills-grid'

export default function HomePage(){
  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Full‑Stack Engineer & System Architect</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">10+ yrs building scalable SaaS/EdTech/Finance platforms with Node.js/NestJS, Next.js, Golang, PostgreSQL, Redis, AWS. RAG/LLM integrations (OpenAI, Gemini, Pinecone/pgvector).</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/projects"><Button>View Projects</Button></a>
          <a href="#contact"><Button variant="outline">Get in touch</Button></a>
        </div>
      </section>

      <section id="skills">
        <h2 className="text-2xl font-semibold mb-6">Core Skills</h2>
        <SkillsGrid />
      </section>
    </div>
  )
}
