import { FC } from "react"
import styles from "./Loader.module.css"

const Loader: FC = () => {
    return (
        <div className={styles.loaderWrapper}>
           <h1>Loading...</h1>
        </div>
    )
}

export default Loader