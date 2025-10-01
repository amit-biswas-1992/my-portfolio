import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import type { Project } from '@/lib/data'

export function ProjectCard({ project }: { project: Project }){
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg"><Link href={`/projects/${project.slug}`}>{project.title}</Link></CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{project.summary}</p>
        <div className="flex flex-wrap gap-2">{project.tags.map(t=> <Badge key={t} variant="outline">{t}</Badge>)}</div>
      </CardContent>
    </Card>
  )
}
