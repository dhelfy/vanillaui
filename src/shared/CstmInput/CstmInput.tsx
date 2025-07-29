'use client'

import { FC, InputHTMLAttributes } from "react";
import styles from "./CstmInput.module.css";

interface props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    ref?: React.Ref<HTMLInputElement>;
}

const CstmInput: FC<props> = ({ label, error, ref, ...props }) => {
    return (
        <>
            {label && <label className={styles.label}>{label}</label>}
            <input
                className={`${styles.input} ${error ? styles.error : ""}`}
                ref={ref}
                {...props}
            />
        </>
    );
};

export default CstmInput