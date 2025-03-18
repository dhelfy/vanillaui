import { FC } from "react"
import { FiltersBlock } from "./ui/FiltersBlock/FiltersBlock"
import { ComponentsList } from "./ui/ComponentsList/ComponentsList"
import styles from "./ComponentsPage.module.css"

export const ComponentsPage: FC = () => {
    return (
        <div className={styles.componentsPage}>
            <FiltersBlock />
            <ComponentsList />
        </div>
    )
}