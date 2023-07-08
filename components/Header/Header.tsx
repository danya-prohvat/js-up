import Link from "next/link";
import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.headerH1}>JS UP</h1>
                <nav>
                    <Link href="/flex">Flex</Link>
                    <Link href="/grid">Grid</Link>
                    <div>lang</div>
                </nav>
            </div>
        </header>
    );
};