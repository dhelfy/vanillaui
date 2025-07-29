'use client'

import { FC, ReactNode } from "react"
import styles from "./Modal.module.css"
import { createPortal } from "react-dom";

interface props {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: FC<props> = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;
    return createPortal(

        <div className={styles.modal}>
            <div className={styles.modalContent}>
                {children}
            </div>
            <div className={styles.modalOverlay} onClick={() => onClose()}>
            </div>
        </div>,
        document.body
    )
}

export default Modal