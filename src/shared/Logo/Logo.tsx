'use client'

import { FC } from "react"
import styles from "./Logo.module.css"
import Link from "next/link"

const Logo: FC = () => {
    return (
        <Link
            href="/"
            className={styles.logo}
        >
            VANILLAUI
        </Link>
    )
}

export default Logo