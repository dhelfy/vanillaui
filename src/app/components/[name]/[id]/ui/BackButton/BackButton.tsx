'use client'

import { redirect } from "next/navigation"
import { FC } from "react"
import styles from "./BackButton.module.css"

const BackButton: FC = () => {
    const onClick = () => { redirect(`/components`) }

    return (
        <div onClick={onClick} className={styles.backButtonWrapper}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" 
                clipRule="evenodd" 
                d="M2.55227 5.83333L12.2761 
                5.83333V7.16666L2.55227 
                7.16666L6.74753 11.3619L5.80472 
                12.3047L-1.90735e-05 6.5L5.80472 
                0.695258L6.74753 1.63807L2.55227 5.83333Z" 
                fill="currentColor" 
                />
            </svg>

            <p>Back to catalog</p>
        </div>
    )
}

export default BackButton