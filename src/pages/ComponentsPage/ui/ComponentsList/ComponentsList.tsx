import { FC } from "react"
import { ComponentCard } from "../ComponentCard/ComponentCard"
import styles from "./ComponentsList.module.css"

export const ComponentsList: FC = () => {
    // TODO: Тащить компоненты из бд
    const components = [
        {
            id: 1,
            title: "Button",
            image: "https://vw6cxixi2a.ufs.sh/f/jUlU9MtrNjnEWfctxr1MH8jsOk7zZBPCvn5peD0frVt4KmQE"
        },
        {
            id: 2,
            title: "ButtonV2",
            image: "https://vw6cxixi2a.ufs.sh/f/jUlU9MtrNjnEWfctxr1MH8jsOk7zZBPCvn5peD0frVt4KmQE"
        }
    ]

    return (
        <div className={styles.componentsList}>
            {components.map((component) => (
                <ComponentCard 
                    key={component.id} 
                    title={component.title} 
                    image={component.image} 
                    id={component.id} 
                />
            ))}
        </div>
    )
}