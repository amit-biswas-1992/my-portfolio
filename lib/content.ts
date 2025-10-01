import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

const SD_DIR = path.join(process.cwd(), 'content/system-design')

export async function listCaseStudies(){
  try{
    const files = await fs.readdir(SD_DIR)
    const mdx = files.filter(f=>f.endsWith('.mdx'))
    const entries = await Promise.all(mdx.map(async f=>{
      const raw = await fs.readFile(path.join(SD_DIR,f),'utf8')
      const { data } = matter(raw)
      return { slug: f.replace(/\.mdx$/,''), title: data.title ?? '', excerpt: data.excerpt ?? '' }
    }))
    return entries
  }catch(e){ return [] }
}
