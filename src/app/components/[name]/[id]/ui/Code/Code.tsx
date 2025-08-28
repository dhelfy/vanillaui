'use client'

import { FC } from "react"
import styles from "./Code.module.css"
import { useSuspenseQuery } from "@tanstack/react-query"
import { JetBrains_Mono } from 'next/font/google'
import { getHighlighter } from "@/lib/highlighter"

interface CodeProps {
  lang: string;
  langs: string[];
  codeFromProps: string;
}

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: 'swap'
})

const Code: FC<CodeProps> = ({ lang, langs, codeFromProps }) => {
  const { data } = useSuspenseQuery({
    queryKey: ['highlighted', lang, codeFromProps],
    queryFn: async () => {
      const highlighter = await getHighlighter(langs)

      return highlighter.codeToHtml(codeFromProps, {
        lang,
        theme: 'vesper',
        colorReplacements: {
          '#101010': '#151515',
        },
      })
    }
  })

  return (
    <div
      dangerouslySetInnerHTML={{ __html: data }}
      className={styles.code + ' ' + jetbrains.className}
    />
  )
}

export default Code
