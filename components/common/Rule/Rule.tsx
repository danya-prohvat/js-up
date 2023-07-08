'use client'

import { IRule } from "@types/types";
import { FC, useState } from "react";
import styles from './rule.module.css'

export const Rule: FC<IRule> = ({property, values}) => {
    const [currentRule, setCurrentRule] = useState(0);

    return (
        <div className={styles.rule}>
            <h2 className={styles.ruleH2}>{property}</h2>
            <ul className={styles.ruleUl}>
                {values.map((value, idx) => 
                    <li onClick={() => setCurrentRule(idx)} className={styles.ruleLi} key={idx}>
                        <h6 className={styles.ruleH6}>{value.toUpperCase()}</h6>
                    </li>
                )}
            </ul>
            <div className={styles.code}>
                <div style={{display: values[currentRule]}} className={styles.codePlayground}>
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