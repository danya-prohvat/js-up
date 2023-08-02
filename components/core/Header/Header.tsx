'use client'
import Link from "next/link";
import styles from './header.module.css'
import { LangToggler } from "@components/core/LangToggler";
import { usePathname } from 'next/navigation'

const hrefs = [
    { title: 'Flex', path: '/flex'},
    { title: 'Grid', path: '/grid'},
]

export const Header = () => {
    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1 className={styles.headerH1}>JS UP</h1>
                <nav className={styles.headerNav}>
                    {hrefs.map((href, idx) => {
                        const isActive = pathname === href.path

                        return (
                            <Link key={idx} className={`${styles.headerNavLink} ${isActive ? styles.headerNavLink_active : ''}`} href={href.path}>{href.title}</Link>
                        )
                    })}
                    {/* <LangToggler /> */}
                </nav>
            </div>
        </header>
    );
};