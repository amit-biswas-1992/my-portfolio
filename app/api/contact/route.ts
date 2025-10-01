import { NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimit } from '@/lib/ratelimit'

const Body = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(10) })

export async function POST(req: Request){
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
  const ok = rateLimit(ip, 5, 60)
  if(!ok) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })

  const json = await req.json().catch(()=>null)
  const parsed = Body.safeParse(json)
  if(!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  // TODO: send email via Resend/SMTP here

  return NextResponse.json({ ok: true })
}
