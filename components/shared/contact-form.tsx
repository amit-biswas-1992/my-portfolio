'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(10) })
type FormData = z.infer<typeof Schema>

export function ContactForm(){
  const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm<FormData>({ resolver: zodResolver(Schema) })

  async function onSubmit(data: FormData){
    const r = await fetch('/api/contact', { method:'POST', body: JSON.stringify(data) })
    if(r.ok){ alert('Thanks!'); reset() } else { alert('Failed, please try later') }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" id="contact">
      <div className="grid md:grid-cols-2 gap-3">
        <Input placeholder="Your name" {...register('name')} />
        <Input placeholder="Your email" {...register('email')} />
      </div>
      <Textarea rows={5} placeholder="Your message" {...register('message')} />
      <Button disabled={isSubmitting}>Send</Button>
      <div className="text-xs text-muted-foreground">{errors.name?.message || errors.email?.message || errors.message?.message}</div>
    </form>
  )
}
