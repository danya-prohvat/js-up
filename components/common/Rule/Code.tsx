'use client'

import React, { FC } from "react";
import styles from './rule.module.css'

interface CodeProps {
    styles: any
    styleGroup: string
    property: string
    value: string
}

export const Code: FC<CodeProps> = ({property, value: valueMain, styles: stylesValue, styleGroup}) => {

    return (
        <span className={styles.codeComponent}>
            {`.${styleGroup} {`} <br />
            {stylesValue.map(({style, value, main}: any, idx: number) => 
                <div key={idx}>
                    {!main ? 
                        <>&nbsp; {style}: {value}; <br /></>
                    : 
                     <>&nbsp; <span className={styles.spanMain}>{property}: {valueMain}; <br /></span></>
                    }
                </div>
            )} 
            {' }'} <br />
        </span>
    );
};