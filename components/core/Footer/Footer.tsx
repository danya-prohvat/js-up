import styles from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <h2 className={styles.footerH2}>Designed By Daniil Prokhvatilov</h2>
            </div>
        </footer>
    );
};