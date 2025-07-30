'use client'

import { ButtonHTMLAttributes, FC, useEffect, useRef, useState } from "react";
import styles from "./Searchbar.module.css";
import Image from "next/image";
import Modal from "../Modal/Modal";
import CstmInput from "../CstmInput/CstmInput";
import Fuse from 'fuse.js'
import { fetchComponents } from "@/API/componentsAPI";
import Link from "next/link";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Searchbar: FC<props> = () => {
    const input = useRef<HTMLInputElement>(null)
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

    const handleInputRef = (el: HTMLInputElement | null) => {
        input.current = el
        if (el) {
            el.focus()
        }
    }

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

            <Modal isOpen={isOpen} onClose={() => {
                setIsOpen(false)
                setQuery("")
            }}>
                <CstmInput
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.currentTarget.value)}
                    value={query}
                    ref={handleInputRef}
                />
                <div className={styles.results}>
                    Results:
                    {
                        result.length ?
                            result.map((component) => {
                                return (

                                        <Link 
                                            key={component.item.id} 
                                            className={styles.result}
                                            href={`/components/${component.item.name}/${component.item.id}`}
                                            onClick={() => {
                                                setIsOpen(false)
                                                setQuery("")
                                            }}
                                        >
                                            {component.item.name}
                                        </Link>
                                )
                            }) :
                        <div className={styles.noResults}>No results found 😥</div>
                    }
                </div>
            </Modal>
        </>
    )
}

export default Searchbar