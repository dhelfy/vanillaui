import { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css"

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Navbar />
        </header>
    )
}