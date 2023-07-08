import Link from "next/link";
import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1 className={styles.headerH1}>JS UP</h1>
                <nav className={styles.headerNav}>
                    <Link className={styles.headerNavLink} href="/flex">Flex</Link>
                    <Link className={styles.headerNavLink} href="/grid">Grid</Link>
                    <div className={styles.headerNavLang}></div>
                </nav>
            </div>
        </header>
    );
};