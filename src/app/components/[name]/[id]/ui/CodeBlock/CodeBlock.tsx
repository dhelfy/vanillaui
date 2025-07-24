'use client'

import { FC, useState } from "react"
import styles from "../../styles.module.css"
import { CopyButton } from "../CopyButton/CopyButton"
import { CodeNavigation } from "@/app/components/[name]/[id]/ui/CodeNavigation/CodeNavigation";
import Code from "../Code/Code";

interface CodeBlockProps {
    component: {
        name: string;
        files: {
            jsx: string;
            tsx: string;
            css: string;
        }
    };
}

const CodeBlock: FC<CodeBlockProps> = ({ component }) => {
    const [active, setActive] = useState("tsx")

    return (
        <div className={styles.codeBlock}>
            <div className={styles.toolPanel}>
                <CodeNavigation
                    values={Object.keys(component.files)}
                    setActive={(value) => { setActive(value) }}
                    active={active}
                />

                <CopyButton text={component.files[active as 'jsx' | 'tsx' | 'css']} />
            </div>

            <hr className={styles.divider} />

            <Code
                lang={active}
                langs={Object.keys(component.files)}
                codeFromProps={component.files[active as 'jsx' | 'tsx' | 'css']}
            />
        </div>
    )
}

export default CodeBlock