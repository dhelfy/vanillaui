'use client'

import { FC } from "react";
import styles from "./Code.module.css"
import { useSuspenseQuery } from "@tanstack/react-query";
import { JetBrains_Mono } from 'next/font/google'

interface CodeProps {
  lang: string;
  langs: string[]
  codeFromProps: string;
}

const jetbrains = JetBrains_Mono({ display: 'swap' })

const Code: FC<CodeProps> = ({ lang, langs, codeFromProps }) => {
  const { data } = useSuspenseQuery({
    queryKey: ['highlighted', lang, codeFromProps],
    queryFn: async () => {
      const res = await fetch('/api/highlight', {
        method: 'POST',
        body: JSON.stringify({ code: codeFromProps, lang, langs }),
        headers: { 'Content-Type': 'application/json' },
      })
      return res.text()
    }
  })

  return (
    <div
      dangerouslySetInnerHTML={{ __html: data }}
      className={styles.code + ' ' + jetbrains.className}
    >
    </div>
  )
};

export default Code