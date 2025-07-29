'use client'

import { ButtonHTMLAttributes, FC, useEffect, useState } from "react";
import styles from "./Searchbar.module.css";
import Image from "next/image";
import Modal from "../Modal/Modal";
import CstmInput from "../CstmInput/CstmInput";
import Fuse from 'fuse.js'
import { fetchComponents } from "@/API/componentsAPI";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Searchbar: FC<props> = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [data, setData] = useState<any[]>([])
    const fuse = new Fuse(data, { keys: ["name"] });
    const result = fuse.search(query)

    useEffect(() => {
        const load = async () => {
            try {
                const result = await fetchComponents()
                setData(result)
            } catch (e) {
                console.error("Ошибка при загрузке компонентов:", e)
            }
        }

        load()
    }, [])

    return (
        <>
            <button className={styles.searchBar} onClick={() => setIsOpen(true)}>
                <Image
                    src="/search_icon.svg"
                    width={16}
                    height={16}
                    alt=""
                />

                Search...
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <CstmInput
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.currentTarget.value)}
                    value={query}
                />
                <div>
                    {result.map((component) => {
                        return <div key={component.item.id}>{component.item.name}</div>
                    })}
                </div>
            </Modal>
        </>
    )
}

export default Searchbar