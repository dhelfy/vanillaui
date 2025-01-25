import { FC } from "react";
import { NavLink } from "react-router-dom"
import styles from "./CstmLink.module.css"

interface CstmLinkProps {
    to: string;
    text: string;
}

export const CstmLink: FC<CstmLinkProps> = ({to, text}) => {
    const active = ({isActive}: {isActive: boolean}) => isActive ? `${styles.active} ${styles.link}` : styles.link

    return (
        <NavLink 
            to={to}
            className={active}
        >
            {text}
        </NavLink>
    )
}