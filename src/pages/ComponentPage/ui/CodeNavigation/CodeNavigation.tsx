import { FC } from "react";
import styles from "./CodeNavigation.module.css"

interface CodeNavigationProps {
    values: string[];
    setActive: (value: string) => void;
    active: string;
}

export const CodeNavigation: FC<CodeNavigationProps> = ({values, setActive, active}) => {

    return (
        <div className={styles.navigationBlock}>
            {values.map((value) => {
                return (
                <p 
                    key={value}
                    onClick={() => setActive(value)}
                    className={active === value ? styles.active : undefined}
                >
                    {value.toUpperCase()}
                </p>
            )
            })}
        </div>
    )
}