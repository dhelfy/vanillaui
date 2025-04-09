'use client'

import { FC } from "react"
import { ComponentCard } from "../ComponentCard/ComponentCard"
import styles from "./ComponentsList.module.css"
import { useQuery } from "@tanstack/react-query"
import { fetchComponents } from "@/API/componentsAPI"
import { IComponent } from "@/app/types"

const ComponentsList: FC = () => {
    const { isPending, isError, data, error } = useQuery({ queryKey: ['components'], queryFn: fetchComponents })

    const components: IComponent[] = data

    if (isError) {
        return <div>{error.message}</div>
    }

    if (isPending) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.componentsList}>
            {components.map((component) => (
                <ComponentCard 
                    key={component.id} 
                    title={component.name} 
                    image={component.link} 
                    id={component.id} 
                />
            ))}
        </div>
    )
}

export default ComponentsList