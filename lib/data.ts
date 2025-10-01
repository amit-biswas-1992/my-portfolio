export type Project = { slug: string; title: string; summary: string; tags: string[] }

export const projects: Project[] = [
  {
    slug: 'testiphy-exam-platform',
    title: 'Testiphy – National‑scale Exam Platform',
    summary: 'MCQ/CQ engine, randomization, leaderboards, proctoring, analytics; Node/NestJS + Postgres + Redis; Next.js frontends; AWS & DO deploys.',
    tags: ['EdTech','Node.js','NestJS','Next.js','PostgreSQL','Redis','AWS']
  },
  {
    slug: 'rag-trust-scoring',
    title: 'RAG‑based Trust Scoring',
    summary: 'RAG pipelines with OpenAI/Gemini + pgvector/Pinecone; explainable scoring & risk signals; audit logs.',
    tags: ['AI/LLM','RAG','LangChain','Pinecone','pgvector']
  },
  {
    slug: 'cicd-digitalocean',
    title: 'CI/CD on DigitalOcean',
    summary: 'GitHub Actions → App Platform/Droplets; Dockerized services; blue‑green deploys; SSL & observability.',
    tags: ['DevOps','DigitalOcean','Docker','GitHub Actions','Nginx']
  }
]
