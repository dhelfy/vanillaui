import { ButtonHTMLAttributes, FC } from "react";
import styles from "./CstmButton.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const CstmButton: FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button className={`${styles.button} ${className}`} {...props}>
            {children}
        </button>
    );
};