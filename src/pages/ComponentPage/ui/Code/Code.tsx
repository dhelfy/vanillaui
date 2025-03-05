import { FC, useEffect, useState } from "react";
import { createHighlighter } from "shiki";

interface CodeProps {
  lang: string;
  langs: string[]
  codeFromProps: string;
}

export const Code: FC<CodeProps> = ({lang, langs, codeFromProps}) => {
  const [code, setCode] = useState('')

  useEffect(() => {
    const setUpHighlighter = async () => {
      const highlighter = await createHighlighter({
        themes: ['vesper'],
        langs: langs,
      })

      setCode(
        highlighter.codeToHtml(codeFromProps, {
          lang: lang,
          theme: 'vesper',
          colorReplacements: {
            '#101010': '#151515'
          }
        })
      ) 
    }

    setUpHighlighter()
  }, [lang, codeFromProps])

  return (
    <div dangerouslySetInnerHTML={{__html: code}}></div>
  )
};
