import { FC } from "react";
import styles from './layout.module.css'

export const Layout: FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <main>
            <div className={styles.layoutContainer}>
                {children}
            </div>
        </main>
    );
};