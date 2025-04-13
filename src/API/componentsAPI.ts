import axios from "axios"
import { createHighlighter } from 'shiki'

export const fetchComponents = async () => {
    const result = await axios.get("http://localhost:5000/components")
    return result.data
}

export const fetchComponentByID = async (id: string) => {
    const result = await axios.get(`http://localhost:5000/components/${id}`)
    return result.data
}

export async function getCodeHtml(code: string, lang: string, langs: string[]) {
  const highlighter = await createHighlighter({
    themes: ['vesper'],
    langs,
  })

  return highlighter.codeToHtml(code, {
    lang,
    theme: 'vesper',
    colorReplacements: {
      '#101010': '#151515',
    },
  })
}