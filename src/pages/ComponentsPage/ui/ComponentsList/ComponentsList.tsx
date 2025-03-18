import { FC, useEffect } from "react"
import { ComponentCard } from "../ComponentCard/ComponentCard"
import styles from "./ComponentsList.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectAllComponents } from "../../../../state/components/componentsSelectors"
import { fetchComponents } from "../../../../state/components/componentsSlice"

export const ComponentsList: FC = () => {
    const dispatch = useDispatch()
    const components = useSelector(selectAllComponents);

    useEffect(() => {    
        dispatch(fetchComponents());
    }, [dispatch])

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