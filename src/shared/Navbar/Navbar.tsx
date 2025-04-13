import { FC } from "react";
import styles from "./Navbar.module.css"
import Searchbar from "../Searchbar/Searchbar";
import Link from "next/link";

const Navbar: FC = () => {
    
    return (
        <nav className={styles.navbar}>
            <Searchbar />

            <Link 
                href="/faq"
                className={styles.link}
            >
                FAQ
            </Link>

            <Link 
                href="/components"                
                className={styles.link}
            >
                Components
            </Link>
        </nav>
    )
}

export default Navbar