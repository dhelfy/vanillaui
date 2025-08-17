'use client'

import { FC } from "react"
import styles from "./Footer.module.css"
import Image from "next/image"

let Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.text}>
                VANILLAUI <span className={styles.gray}>Made by</span> dhelfy
            </p>
            <a href="http://github.com/dhelfy" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/git_icon.svg"
                    width={24}
                    height={24}
                    alt="git"
                    className={styles.icon}
                    draggable={false}
                />
            </a>
        </div>
    )
}

export default Footer