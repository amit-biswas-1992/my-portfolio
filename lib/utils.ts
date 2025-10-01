export function toTitle(s: string){ return s.replace(/[-_]/g,' ').replace(/\b\w/g, c=>c.toUpperCase()) }
