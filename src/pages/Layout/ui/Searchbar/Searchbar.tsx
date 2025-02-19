import { FC } from "react";
import styles from "./Searchbar.module.css";
import SearchIcon from "../../../../assets/icons/search_icon.svg"

export const Searchbar: FC = () => {
    return (
        <button className={styles.searchBar}>
            <img src={SearchIcon} />

            Search...
        </button>
    )
}