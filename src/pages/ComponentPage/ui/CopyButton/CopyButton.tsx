import { FC, useRef, useState } from "react";
import copyIcon from "../../../../assets/icons/copy_icon.svg"
import checkMark from "../../../../assets/icons/check_mark.svg"
import styles from "./CopyButton.module.css"

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
        <img 
            src={isClicked ? checkMark : copyIcon} 
            className={styles.copyBtn}
            onClick={onCopy}
            aria-label={isClicked ? "Copied!" : "Copy to clipboard"}
        />
    )
}