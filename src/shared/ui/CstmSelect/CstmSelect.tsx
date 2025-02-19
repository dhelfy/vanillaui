import { FC, useState } from "react";
import styles from "./CstmSelect.module.css"
import ArrowIcon from "../../../assets/icons/arrow_down.svg"

interface CstmSelectProps {
    options: string[];
    onChange: (option: string) => void;
    value: string;
    placeholder?: string;
}

export const CstmSelect: FC<CstmSelectProps> = ({ options, onChange, value, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.selectWrapper}>
            <div className={styles.cstmSelect} onClick={() => setIsOpen(!isOpen)}>
                {value || (placeholder || "Select option")}
                <img 
                    src={ArrowIcon} 
                    style={{transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"}}
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
