'use client'

import CstmButton from "@/shared/CstmButton/CstmButton"
import { redirect } from "next/navigation"
import { FC } from "react"

const BackButton: FC = () => {
    const onClick = () => { redirect(`/components`) }

    return (
        <CstmButton onClick={onClick}>
            Back
        </CstmButton>
    )
}

export default BackButton