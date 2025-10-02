import { Badge } from '@/components/ui/badge'
const SKILLS: Record<string, string[]> = {
  Backend: ['Node.js', 'NestJS', 'Express', 'Golang', 'Python'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'NeonDB', 'pgvector'],
  Frontend: ['Next.js (App & Pages)', 'React', 'Tailwind', 'shadcn/ui'],
  Cloud_DevOps: ['AWS', 'DigitalOcean', 'Vercel', 'Docker', 'GitHub Actions', 'Nginx'],
  AI_ML: ['OpenAI', 'Gemini', 'LangChainJS', 'Pinecone', 'RAG'],
}
export function SkillsGrid(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {Object.entries(SKILLS).map(([k, arr]) => (
        <div key={k} className="rounded-xl border p-4">
          <h3 className="font-medium mb-3">{k.replace('_',' / ')}</h3>
          <div className="flex flex-wrap gap-2">
            {arr.map(s => <Badge key={s} variant="secondary">{s}</Badge>)}
          </div>
        </div>
      ))}
    </div>
  )
}
