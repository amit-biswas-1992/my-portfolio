const hits = new Map<string, number[]>()
export function rateLimit(key: string, max: number, windowSec: number){
  const now = Date.now()
  const arr = (hits.get(key) ?? []).filter(t => now - t < windowSec * 1000)
  if (arr.length >= max) { hits.set(key, arr); return false }
  arr.push(now); hits.set(key, arr); return true
}
