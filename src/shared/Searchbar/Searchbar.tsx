import { FC } from "react";
import styles from "./Searchbar.module.css";
import Image from "next/image";

const Searchbar: FC = () => {
    return (
        <button className={styles.searchBar}>
            <Image
                src="/search_icon.svg"
                width={16}
                height={16}
                alt="Picture of the author"
            />

            Search...
        </button>
    )
}

export default Searchbar