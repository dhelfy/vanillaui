import { NextRequest } from 'next/server'
import { getCodeHtml } from '@/API/componentsAPI'

export async function POST(req: NextRequest) {
  const { code, lang, langs } = await req.json()

  const html = await getCodeHtml(code, lang, langs)
  
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  })
}