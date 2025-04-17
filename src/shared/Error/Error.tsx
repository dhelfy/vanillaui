import { FC } from "react"
import styles from "./Error.module.css"

interface ErrorProps {
    err: string;
}

const Error: FC<ErrorProps> = ({ err }) => {
    return (
        <div className={styles.errorWrapper}>
            <h1>{err} :(</h1>
        </div>
    )
}

export default Error