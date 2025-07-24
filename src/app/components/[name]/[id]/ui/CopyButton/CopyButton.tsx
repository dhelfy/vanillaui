'use client'

import { FC, useRef, useState } from "react";
import styles from "./CopyButton.module.css"
import Image from "next/image";

interface CopyButtonProps {
    text: string;
}

export const CopyButton: FC<CopyButtonProps> = ({text}) => {
    const [isClicked, setIsClicked] = useState(false)
    const timeoutRef = useRef<number | null>(null)

    const onCopy = () => {
        if (!text) return
    
        setIsClicked(true)
        navigator.clipboard.writeText(text)
    
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
    
        timeoutRef.current = window.setTimeout(() => {
            setIsClicked(false)
            timeoutRef.current = null
        }, 1500);
    }

    return (
        <Image 
            src={isClicked ? "/check_mark.svg" : "/copy_icon.svg"} 
            className={styles.copyBtn}
            width={16}
            alt="Copy"
            height={16}
            onClick={onCopy}
            aria-label={isClicked ? "Copied!" : "Copy to clipboard"}
        />
    )
}