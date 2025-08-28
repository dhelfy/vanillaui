import { createHighlighter, Highlighter } from "shiki"

let highlighterPromise: Promise<Highlighter> | null = null

export function getHighlighter(langs: string[]) {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["vesper"],
      langs,
    })
  }
  return highlighterPromise
}
