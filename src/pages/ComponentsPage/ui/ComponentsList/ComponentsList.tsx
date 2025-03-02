import { FC, useEffect, useState } from "react"
import { ComponentCard } from "../ComponentCard/ComponentCard"
import styles from "./ComponentsList.module.css"
import { IComponent } from "../../../../types/types"
import axios from "axios"

export const ComponentsList: FC = () => {
    const [components, setComponents] = useState<IComponent[]>([])

    useEffect(() => {
        const fetchComponents = async () => {
            const response = await axios.get("http://localhost:3000/components")
            setComponents(response.data)
        }

        fetchComponents()
    }, [])

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