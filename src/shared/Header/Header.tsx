import { FC } from "react";
import styles from "./Header.module.css"
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header