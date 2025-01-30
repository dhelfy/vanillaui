import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./ui/Header/Header"
import styles from "./Layout.module.css"

export const Layout: FC = () => {
    return (
        <>
            <main className={styles.mainContainer}>
                <Header />
                <Outlet />
            </main>
        </>
    )
}