import { FC } from "react";
import styles from "./Logo.module.css";
import { useNavigate } from "react-router-dom";

export const Logo: FC = () => {
    const navigate = useNavigate();

    return (
        <h2 
            onClick={() => navigate("/")}
            className={styles.logo}>
            VANILLAUI
        </h2>
    )
}