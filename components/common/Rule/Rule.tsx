'use client'

import { FC, useEffect, useState } from "react";
import styles from './rule.module.css'

type IRule = {
    property: string
    values: string[]
    mark: 'flex' | 'grid'
}

export const Rule: FC<IRule> = ({property, values, mark}) => {
    const [currentRule, setCurrentRule] = useState(0);

    useEffect(() => {
        console.log(currentRule)
    }, [currentRule])

    return (
        <div className={styles.rule}>
            <h2 className={styles.ruleH2}>{property}</h2>
            <ul className={styles.ruleUl}>
                {values.map((value, idx) => 
                    <li onClick={() => setCurrentRule(idx)} className={`${styles.ruleLi} ${idx === currentRule && styles.ruleLi__active}`}  key={idx}>
                        <h6 className={styles.ruleH6}>{value.toUpperCase()}</h6>
                    </li>
                )}
            </ul>
            <div className={styles.code}>
                <div style={{display: mark, [property]: values[currentRule]}} className={styles.codePlayground}>
                    <div className={styles.codePlaygroundBlock}>1</div>
                    <div className={styles.codePlaygroundBlock}>2</div>
                    <div className={styles.codePlaygroundBlock}>3</div>
                    <div className={styles.codePlaygroundBlock}>4</div>
                </div>
                <div className={styles.codeExample}></div>
            </div>
        </div>
    );
};