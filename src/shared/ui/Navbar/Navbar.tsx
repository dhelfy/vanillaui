import { FC } from "react";
import styles from "./Navbar.module.css"
import { Searchbar } from "../Searchbar/Searchbar";
import { CstmLink } from "../CstmLink/CstmLink";

export const Navbar: FC = () => {
    
    return (
        <nav className={styles.navbar}>
            <Searchbar />

            <CstmLink 
                to="/faq" 
                text="FAQ" 
            />

            <CstmLink 
                to="/components" 
                text="Components" 
            />
        </nav>
    )
}