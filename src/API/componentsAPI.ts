import axios from "axios"
import { createHighlighter } from 'shiki'

export const fetchComponents = async () => {
  try {
    const result = await axios.get("http://localhost:5000/components")
    return result.data 
  } catch (error) {
    throw new Error("Failed to load components")
  }
}

export const fetchComponentByID = async (id: string) => {
  try {
    const result = await axios.get(`http://localhost:5000/components/${id}`)
    return result.data 
  } catch (error) {
    throw new Error("Failed to load information")
  }
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