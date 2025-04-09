'use client'

import { FC, useState } from "react";
import styles from "./CstmSelect.module.css"
import Image from "next/image";

interface CstmSelectProps {
    options: string[];
    onChange: (option: string) => void;
    value: string;
    placeholder?: string;
}

const CstmSelect: FC<CstmSelectProps> = ({ options, onChange, value, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.selectWrapper}>
            <div className={styles.cstmSelect} onClick={() => setIsOpen(!isOpen)}>
                {value || (placeholder || "Select option")}
                <Image
                    src="/arrow_down.svg"
                    alt="arrow"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    width={16}
                    height={16}
                />
            </div>

            {isOpen && (
                <div className={styles.optionsContainer}>
                    {options.map((option) => (
                        <div
                            className={styles.cstmSelectOption}
                            onClick={() => {
                                onChange(option)
                                setIsOpen(false)
                            }}
                            key={option}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CstmSelect