'use client'

import { FC } from "react"
import { ComponentCard } from "../ComponentCard/ComponentCard"
import styles from "./ComponentsList.module.css"
import { IComponent } from "@/app/types"

interface ComponentsListProps {
    components: IComponent[]
}

const ComponentsList: FC<ComponentsListProps> = ({ components }) => {

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