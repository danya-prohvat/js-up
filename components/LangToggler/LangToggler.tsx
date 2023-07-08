'use client'

import { useTranslation } from '@/app/i18n/client';
import styles from './langToggler.module.css'

export const LangToggler = () => {
    const { i18n } = useTranslation()

    const changeLanguageHandler1 = () => {
        console.log(1)
        i18n.changeLanguage('en')
    }

    const changeLanguageHandler2 = () => {
        console.log(2)
        i18n.changeLanguage('ru')
    }

    const changeLanguageHandler3 = () => {
        console.log(3)
        i18n.changeLanguage('ua')
    }

    return (
        <div>
            <li onClick={changeLanguageHandler1} className={styles.li}>en</li>
            <li onClick={changeLanguageHandler2} className={styles.li}>ua</li>
            <li onClick={changeLanguageHandler3} className={styles.li}>ru</li>
        </div>
    );
};